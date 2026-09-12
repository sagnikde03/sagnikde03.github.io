/* =========================================================================
   custom-enhancements.js
   Vanilla JS, no dependencies. Progressive enhancement only — every feature
   fails silently if its target element isn't on the page.
   ========================================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 0. Fallback inline styling (belt-and-suspenders) ------------
     The <head> <style> block should already handle all of this. This just
     re-applies the critical visual pieces directly via inline styles so the
     look never depends on a single CSS pathway. Harmless if the <style>
     block is already doing its job — inline styles just confirm the same
     values. */
  function applyFallbackStyling() {
    var fontBody = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    var fontHeading = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';

    document.body.style.fontFamily = fontBody;
    document.body.style.fontSize = "15px";
    document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, .page__title, .archive__item-title, .author__name"
    ).forEach(function (el) {
      el.style.fontFamily = fontHeading;
    });

    document.querySelectorAll(".archive__item").forEach(function (el) {
      el.style.border = "1px solid var(--global-border-color, #e3e5e6)";
      el.style.borderRadius = "10px";
      el.style.padding = "20px 22px";
      el.style.marginBottom = "18px";
      el.style.transition = "transform 0.25s ease, box-shadow 0.25s ease";
      el.addEventListener("mouseenter", function () {
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow = "0 10px 24px -12px rgba(0,0,0,0.25)";
      });
      el.addEventListener("mouseleave", function () {
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      });
    });

    document.querySelectorAll(".page__content p").forEach(function (el) {
      el.style.textAlign = "justify";
    });

    // Fix avatar ring clipping: theme's .sidebar overflow-y:auto implicitly
    // clips overflow-x too, cutting off the box-shadow ring on the left.
    // Also switch to a real border (can't be clipped by ancestor overflow).
    document.querySelectorAll(".sidebar").forEach(function (el) {
      el.style.overflowX = "visible";
    });
    document.querySelectorAll(".author__avatar img").forEach(function (el) {
      el.style.border = "4px solid var(--global-base-color)";
      el.style.borderRadius = "50%";
      el.style.padding = "2px";
    });

    // Smaller nav links and page headings, hierarchy preserved
    document.querySelectorAll(".masthead__menu-item a").forEach(function (el) {
      el.style.fontSize = "0.88rem";
    });
    document.querySelectorAll(".page__title").forEach(function (el) {
      el.style.fontSize = "1.3rem";
    });
    document.querySelectorAll(".page__content h2").forEach(function (el) {
      el.style.fontSize = "1.1rem";
    });
    document.querySelectorAll(".page__content h3").forEach(function (el) {
      el.style.fontSize = "1rem";
    });

    // Background tint: set directly as the <body> element's own background,
    // not a separate pseudo-element or overlay div. A background is always
    // painted behind an element's own content by definition, so this cannot
    // be hidden by any z-index/stacking-context issue, and it does not
    // depend on the <style> block in <head> working at all.
    document.body.style.backgroundImage =
      "radial-gradient(circle at 15% 20%, rgba(59,130,196,0.22) 0%, transparent 45%)," +
      "radial-gradient(circle at 85% 15%, rgba(59,130,196,0.17) 0%, transparent 40%)," +
      "radial-gradient(circle at 50% 90%, rgba(59,130,196,0.13) 0%, transparent 50%)";
    document.body.style.backgroundAttachment = "fixed, fixed, fixed";
    document.body.style.backgroundRepeat = "no-repeat, no-repeat, no-repeat";
  }

  /* ---------- 1. Particle network background canvas --------------------- */
  function initBackgroundCanvas() {
    if (reduceMotion) return;

    var canvas = document.createElement("canvas");
    canvas.id = "site-bg-canvas";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none";
    canvas.style.display = "block";
    if (document.body.firstChild) {
      document.body.insertBefore(canvas, document.body.firstChild);
    } else {
      document.body.appendChild(canvas);
    }
    var ctx = canvas.getContext("2d");

    var w, h, particles, dpr;

    function getAccentColor() {
      var v = getComputedStyle(document.documentElement).getPropertyValue("--global-base-color").trim();
      return v || "#2f7f93";
    }

    function resize() {
      dpr = window.devicePixelRatio || 1;
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      var count = Math.max(30, Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 22000)));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25 * dpr,
          vy: (Math.random() - 0.5) * 0.25 * dpr,
          r: (Math.random() * 1.4 + 0.6) * dpr
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      var color = getAccentColor();
      var linkDist = 130 * dpr;

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.55;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx = particles[a].x - particles[b].x;
          var dy = particles[a].y - particles[b].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = color;
            ctx.globalAlpha = (1 - dist / linkDist) * 0.35;
            ctx.lineWidth = 1 * dpr;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(step);
    }

    window.addEventListener("resize", resize);
    resize();
    requestAnimationFrame(step);
  }

  /* ---------- 2. Scroll progress bar -------------------------------------- */
  function initScrollProgress() {
    var bar = document.createElement("div");
    bar.id = "scroll-progress";
    document.body.appendChild(bar);
    function update() {
      var doc = document.documentElement;
      var scrollTop = doc.scrollTop || document.body.scrollTop;
      var height = doc.scrollHeight - doc.clientHeight;
      var pct = height > 0 ? (scrollTop / height) * 100 : 0;
      bar.style.width = pct + "%";
    }
    document.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---------- 3. Back-to-top button ---------------------------------------- */
  function initBackToTop() {
    var btn = document.createElement("button");
    btn.id = "back-to-top";
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
    document.body.appendChild(btn);

    function toggle() {
      if (window.scrollY > 400) btn.classList.add("is-visible");
      else btn.classList.remove("is-visible");
    }
    window.addEventListener("scroll", toggle, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
    toggle();
  }

  /* ---------- 4. Reveal-on-scroll for cards -------------------------------- */
  function initRevealOnScroll() {
    var targets = document.querySelectorAll(
      ".archive__item, .list__item, .page__content > h2, .page__content > h3, .feature__wrapper .feature__item"
    );
    if (!targets.length) return;

    targets.forEach(function (el, i) {
      el.classList.add("reveal-on-scroll");
      el.style.transitionDelay = (Math.min(i, 8) * 60) + "ms";
    });

    if (!("IntersectionObserver" in window) || reduceMotion) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- 5. Rotating tagline under the author's bio -------------------- */
  function initTagline() {
    var bio = document.querySelector(".author__bio");
    if (!bio) return;

    var phrases = (bio.getAttribute("data-taglines") || "").split("|").filter(Boolean);
    if (!phrases.length) return;

    var el = document.createElement("p");
    el.className = "author__tagline";
    el.style.color = "var(--global-text-color)";
    el.style.margin = "4px 0 24px";
    el.style.display = "block";
    el.style.fontSize = "0.72rem";
    el.style.lineHeight = "1.5";
    var bioEl = document.querySelector(".author__bio");
    if (bioEl) bioEl.style.fontSize = "0.72rem";
    document.querySelectorAll(".author__urls-wrapper li, .author__urls-wrapper a").forEach(function (el2) {
      el2.style.fontSize = "0.72rem";
    });
    var textSpan = document.createElement("span");
    var cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.textContent = "|";
    el.appendChild(textSpan);
    el.appendChild(cursor);
    bio.insertAdjacentElement("afterend", el);

    if (reduceMotion) {
      textSpan.textContent = phrases[0];
      return;
    }

    var phraseIdx = 0, charIdx = 0, deleting = false;

    function tick() {
      var current = phrases[phraseIdx];
      if (!deleting) {
        charIdx++;
        textSpan.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        charIdx--;
        textSpan.textContent = current.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }
      setTimeout(tick, deleting ? 35 : 65);
    }
    tick();
  }

  /* ---------- 6. Copy-to-clipboard on code blocks ---------------------------- */
  function initCodeCopy() {
    var blocks = document.querySelectorAll("div.highlighter-rouge, figure.highlight");
    blocks.forEach(function (block) {
      if (block.querySelector(".copy-code-btn")) return;
      var codeEl = block.querySelector("pre code") || block.querySelector("pre");
      if (!codeEl) return;

      var btn = document.createElement("button");
      btn.className = "copy-code-btn";
      btn.type = "button";
      btn.textContent = "Copy";
      block.appendChild(btn);

      btn.addEventListener("click", function () {
        var text = codeEl.innerText;
        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = "Copied!";
          setTimeout(function () { btn.textContent = "Copy"; }, 1500);
        });
      });
    });
  }

  /* ---------- 7. Publications page: category badges + copy-citation
     buttons. Only activates if it detects the Journal Articles /
     Conference Papers / Patents headings on the page. --------- */
  function enhancePublicationsPage() {
    var content = document.querySelector(".page__content");
    if (!content) return;

    var allH2 = content.querySelectorAll("h2");
    var headings = [];
    allH2.forEach(function (h) {
      if (/journal articles|conference papers|patents/i.test(h.textContent)) {
        headings.push(h);
      }
    });
    if (!headings.length) return; // not the publications page

    // Group each section's .archive__item cards (everything between this
    // heading and the next one)
    var sections = headings.map(function (h, i) {
      var end = headings[i + 1] || null;
      var items = [];
      var el = h.nextElementSibling;
      while (el && el !== end) {
        if (el.classList && el.classList.contains("archive__item")) items.push(el);
        el = el.nextElementSibling;
      }
      return { heading: h, items: items };
    });

    var badgeColors = {
      "journal articles": "#2f7f93",
      "conference papers": "#3b7dc4",
      "patents": "#8a5cb8"
    };

    // Category badges + copy-citation buttons on each card
    sections.forEach(function (sec) {
      var label = sec.heading.textContent.trim();
      var color = badgeColors[label.toLowerCase()] || "var(--global-base-color)";
      var singular = label.replace(/s$/, "");

      sec.items.forEach(function (item) {
        item.style.position = "relative";

        var badge = document.createElement("span");
        badge.textContent = singular;
        badge.style.cssText =
          "position:absolute;top:16px;right:18px;font-size:0.66rem;font-weight:700;" +
          "padding:3px 10px;border-radius:12px;color:#fff;background:" + color + ";" +
          "letter-spacing:0.03em;text-transform:uppercase;";
        item.appendChild(badge);

        var citeP = null;
        var ps = item.querySelectorAll("p");
        for (var i = 0; i < ps.length; i++) {
          if (/Recommended citation:/i.test(ps[i].textContent)) {
            citeP = ps[i];
            break;
          }
        }
        if (citeP) {
          var copyBtn = document.createElement("button");
          copyBtn.type = "button";
          copyBtn.textContent = "Copy citation";
          copyBtn.style.cssText =
            "margin-top:8px;font-size:0.78rem;padding:4px 12px;border-radius:6px;" +
            "border:1px solid var(--global-border-color);background:transparent;" +
            "color:var(--global-text-color-light);cursor:pointer;";
          copyBtn.addEventListener("click", function () {
            var text = citeP.textContent.replace(/^\s*Recommended citation:\s*/i, "").trim();
            navigator.clipboard.writeText(text).then(function () {
              copyBtn.textContent = "Copied!";
              setTimeout(function () { copyBtn.textContent = "Copy citation"; }, 1500);
            });
          });
          citeP.insertAdjacentElement("afterend", copyBtn);
        }
      });
    });
  }

  /* ---------- Init on DOM ready -------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyFallbackStyling();
    initBackgroundCanvas();
    initScrollProgress();
    initBackToTop();
    initRevealOnScroll();
    initTagline();
    initCodeCopy();
    enhancePublicationsPage();
  });
})();