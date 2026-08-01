#!/usr/bin/env python3
"""Rebuild assets/data/latest-videos.json from the channel's public RSS feed.

Runs in CI (see ../workflows/youtube-latest.yml) because YouTube's feed sends no
CORS header, so the browser can't read it. Stdlib only — no pip install in CI.

Safety: if the feed is unreachable or returns nothing parseable, exit non-zero
WITHOUT touching the JSON. A stale list is better than an empty one, and the
site's fallback only kicks in when the file is missing entirely.
"""

import json
import os
import pathlib
import sys
import urllib.request
import xml.etree.ElementTree as ET

FEED = "https://www.youtube.com/feeds/videos.xml?channel_id={}"
OUT = pathlib.Path(__file__).resolve().parents[2] / "assets" / "data" / "latest-videos.json"
MAX_VIDEOS = 8

NS = {
    "atom": "http://www.w3.org/2005/Atom",
    "yt": "http://www.youtube.com/xml/schemas/2015",
    "media": "http://search.yahoo.com/mrss/",
}


def fetch(channel_id):
    req = urllib.request.Request(
        FEED.format(channel_id),
        headers={"User-Agent": "straydogmedia.ca refresh bot"},
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read()


def parse(xml_bytes):
    root = ET.fromstring(xml_bytes)
    videos = []
    for entry in root.findall("atom:entry", NS):
        vid = entry.findtext("yt:videoId", namespaces=NS)
        title = entry.findtext("atom:title", namespaces=NS)
        published = entry.findtext("atom:published", namespaces=NS)
        if not vid or not title:
            continue
        group = entry.find("media:group", NS)
        desc = group.findtext("media:description", namespaces=NS) if group is not None else ""
        videos.append({
            "id": vid,
            "title": title.strip(),
            "published": (published or "")[:10],   # YYYY-MM-DD
            # hq720 is true 16:9; hqdefault is 4:3 (letterboxed) but always
            # exists, so the page falls back to it if hq720 404s.
            "thumb": f"https://i.ytimg.com/vi/{vid}/hq720.jpg",
            "thumbFallback": f"https://i.ytimg.com/vi/{vid}/hqdefault.jpg",
            "blurb": " ".join((desc or "").split())[:140],
        })
    return videos[:MAX_VIDEOS]


def main():
    channel_id = os.environ.get("CHANNEL_ID")
    if not channel_id:
        sys.exit("CHANNEL_ID env var is required")

    try:
        videos = parse(fetch(channel_id))
    except Exception as err:                       # noqa: BLE001 — any failure is fatal here
        sys.exit(f"Could not refresh feed, leaving existing JSON untouched: {err}")

    if not videos:
        sys.exit("Feed parsed but contained no videos — refusing to write an empty list.")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    payload = {"channel": f"https://www.youtube.com/@StrayDogMedia_ca", "videos": videos}
    OUT.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {len(videos)} videos to {OUT}")


if __name__ == "__main__":
    main()
