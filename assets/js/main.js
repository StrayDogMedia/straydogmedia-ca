/* Stray Dog Media — minimal interactions.
   Keep this light. Theme toggle + scroll-reveal only. */
(function () {
  "use strict";

  // ---- Theme toggle (persisted) ----
  var KEY = "sdm-theme";
  var root = document.documentElement;

  function setTheme(t) {
    root.setAttribute("data-theme", t);
    try { localStorage.setItem(KEY, t); } catch (e) {}
  }

  window.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = root.getAttribute("data-theme")
          || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        setTheme(current === "dark" ? "light" : "dark");
      });
    }

    // ---- Scroll reveal (progressive; no-op if reduced motion) ----
    var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var items = document.querySelectorAll("[data-reveal]");
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  });
})();
