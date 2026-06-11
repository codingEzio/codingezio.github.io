(() => {
  const doc = document;
  const root = doc.documentElement;
  const scrim = doc.querySelector("[data-page-scrim]");
  const appearanceLabels = new Map([
    ["rail", "轨道"],
    ["poster", "海报"],
    ["editorial", "杂志"],
    ["midnight", "夜游"],
  ]);
  const allowedAppearances = new Set(appearanceLabels.keys());
  const prefetchedUrls = new Set();

  const activeScheme = () => root.dataset.colorSchemeMode || "auto";
  const activeAppearance = () => root.dataset.appearance || "rail";
  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;",
    })[character]);

  const positionPopover = (trigger, panel) => {
    const margin = 12;
    const triggerBox = trigger.getBoundingClientRect();
    panel.dataset.open = "true";
    panel.dataset.popoverMode = window.matchMedia("(max-width: 720px)").matches ? "sheet" : "popover";
    panel.style.left = "";
    panel.style.top = "";
    panel.style.right = "";
    panel.style.bottom = "";
    if (panel.dataset.popoverMode === "sheet") return;

    const panelBox = panel.getBoundingClientRect();
    const left = Math.min(
      Math.max(margin, triggerBox.right - panelBox.width),
      window.innerWidth - panelBox.width - margin,
    );
    const roomBelow = window.innerHeight - triggerBox.bottom - margin;
    const top =
      roomBelow >= panelBox.height || triggerBox.top < panelBox.height + margin
        ? triggerBox.bottom + margin
        : triggerBox.top - panelBox.height - margin;
    panel.style.left = `${left}px`;
    panel.style.top = `${Math.max(margin, top)}px`;
  };

  const closePanels = () => {
    doc.querySelectorAll("[data-popover-panel]").forEach((panel) => {
      panel.hidden = true;
      panel.dataset.open = "false";
      panel.style.left = "";
      panel.style.top = "";
      panel.style.right = "";
      panel.style.bottom = "";
    });
    doc.querySelectorAll("[data-popover-trigger]").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });
    doc.body.dataset.overlayOpen = "false";
    if (scrim) scrim.hidden = true;
  };

  const syncThemeControls = () => {
    const appearance = activeAppearance();
    const scheme = activeScheme();
    doc.querySelectorAll("[data-theme-value]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.themeValue === appearance));
    });
    doc.querySelectorAll("[data-scheme-value]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.schemeValue === scheme));
    });
    doc.querySelectorAll("[data-active-theme-label]").forEach((label) => {
      label.textContent = appearanceLabels.get(appearance) || "轨道";
    });
  };

  const setAppearance = (value) => {
    if (!allowedAppearances.has(value)) return;
    root.dataset.appearance = value;
    window.localStorage.setItem("blog-appearance-mode", value);
    syncThemeControls();
  };

  const setScheme = (value) => {
    if (value === "light" || value === "dark") {
      root.dataset.colorScheme = value;
      root.dataset.colorSchemeMode = value;
      window.localStorage.setItem("blog-color-scheme", value);
    } else {
      root.dataset.colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.dataset.colorSchemeMode = "auto";
      window.localStorage.removeItem("blog-color-scheme");
    }
    syncThemeControls();
  };

  const shouldPrefetchUrl = (url) =>
    url.origin === window.location.origin &&
    url.pathname !== window.location.pathname &&
    !prefetchedUrls.has(url.href);

  const prefetchUrl = (href) => {
    let url;
    try {
      url = new URL(href, window.location.href);
    } catch {
      return;
    }
    if (!shouldPrefetchUrl(url)) return;
    prefetchedUrls.add(url.href);
    const link = doc.createElement("link");
    link.rel = "prefetch";
    link.as = "document";
    link.href = url.href;
    doc.head.append(link);
  };

  const prefetchLink = (target) => {
    const link = target instanceof Element ? target.closest("a[href]") : null;
    if (!link) return;
    prefetchUrl(link.getAttribute("href") || "");
  };

  const prefetchLikelyPages = () => {
    doc.querySelectorAll(".post-card-link[href], .site-home-link[href]").forEach((link) => {
      prefetchUrl(link.getAttribute("href") || "");
    });
  };

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (activeScheme() !== "auto") return;
    root.dataset.colorScheme = event.matches ? "dark" : "light";
  });

  doc.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const appearanceButton = target.closest("[data-theme-value]");
    if (appearanceButton) {
      setAppearance(appearanceButton.dataset.themeValue || "rail");
      return;
    }

    const schemeButton = target.closest("[data-scheme-value]");
    if (schemeButton) {
      setScheme(schemeButton.dataset.schemeValue || "auto");
      return;
    }

    const trigger = target.closest("[data-popover-trigger]");
    if (trigger) {
      const rootPanel = trigger.closest("[data-popover-root]");
      const panel = rootPanel?.querySelector("[data-popover-panel]");
      const willOpen = Boolean(panel?.hidden);
      closePanels();
      if (panel && willOpen) {
        panel.hidden = false;
        positionPopover(trigger, panel);
        trigger.setAttribute("aria-expanded", "true");
        doc.body.dataset.overlayOpen = "true";
        if (scrim) scrim.hidden = false;
      }
      return;
    }

    const imageTrigger = target.closest("[data-blog-image-lightbox-trigger]");
    if (imageTrigger) {
      const source = imageTrigger.dataset.blogImageSrc || imageTrigger.getAttribute("href") || "";
      const alt = imageTrigger.dataset.blogImageAlt || "";
      if (!source) return;
      event.preventDefault();
      openLightbox(source, alt);
      return;
    }

    if (!target.closest("[data-popover-panel]")) closePanels();
  });

  doc.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePanels();
  });

  doc.addEventListener("pointerenter", (event) => prefetchLink(event.target), true);
  doc.addEventListener("focusin", (event) => prefetchLink(event.target));
  doc.addEventListener("touchstart", (event) => prefetchLink(event.target), { passive: true });

  window.addEventListener("resize", closePanels);
  window.addEventListener("scroll", closePanels, { passive: true });

  const openLightbox = (source, alt) => {
    closePanels();
    const lightbox = doc.createElement("div");
    const safeSource = escapeHtml(source);
    const safeAlt = escapeHtml(alt);
    lightbox.className = "blog-image-lightbox";
    lightbox.innerHTML = `
      <button class="blog-image-lightbox__scrim" type="button" aria-label="Close image"></button>
      <figure class="blog-image-lightbox__panel">
        <div class="blog-image-lightbox__toolbar">
          <a class="markdown-media-action" href="${safeSource}" download>download</a>
          <a class="markdown-media-action" href="${safeSource}" target="_blank" rel="noreferrer">open</a>
          <button class="markdown-media-action" type="button" data-lightbox-close>close</button>
        </div>
        <img class="blog-image-lightbox__image" src="${safeSource}" alt="${safeAlt}">
        <figcaption class="blog-image-lightbox__caption">${safeAlt}</figcaption>
      </figure>`;
    lightbox.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest(".blog-image-lightbox__panel") && !target.closest("[data-lightbox-close]")) return;
      lightbox.remove();
      doc.body.dataset.overlayOpen = "false";
    });
    doc.body.dataset.overlayOpen = "true";
    doc.body.append(lightbox);
  };

  syncThemeControls();
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(prefetchLikelyPages, { timeout: 1800 });
  } else {
    window.setTimeout(prefetchLikelyPages, 900);
  }
})();
