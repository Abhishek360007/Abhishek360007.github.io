(() => {
  const P = PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---------- icons (inline SVG, no library) ----------
  const svg = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const I = {
    github: svg('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'),
    linkedin: svg('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
    mail: svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    phone: svg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>'),
    pin: svg('<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'),
    chat: svg('<path d="M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 21l2.2-5.4A8.5 8.5 0 1 1 21 11.5z"/>'),
    ext: svg('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/>'),
    folder: svg('<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'),
    award: svg('<circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/>'),
    sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    moon: svg('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'),
    menu: svg('<path d="M3 6h18M3 12h18M3 18h18"/>'),
    code: svg('<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>'),
  };

  // ---------- basics ----------
  document.title = `${P.name} | ${P.role}`;
  $("#logo").innerHTML = `${esc(P.initials)}<span>.</span>`;
  $("#heroName").textContent = P.name;
  $("#heroTagline").innerHTML = P.tagline;
  $("#resumeBtn").href = P.resume;
  if (!P.openToWork) $("#openBadge").remove();
  $("#workPrefs").innerHTML = P.workPrefs.map((w) => `<span class="chip">${esc(w)}</span>`).join("");
  $("#heroSocials").innerHTML = P.socials
    .map((s) => `<a class="icon-btn" href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.name)}">${I[s.icon] || I.ext}</a>`)
    .join("");
  $("#footerText").textContent = `© ${new Date().getFullYear()} ${P.name}. Built with passion.`;

  // typing effect for role
  (() => {
    const el = $("#heroRole");
    const words = [P.role, ...(P.typingExtra || ["Problem Solver", "Lifelong Learner"])];
    let w = 0, i = 0, del = false;
    const tick = () => {
      const word = words[w];
      el.textContent = word.slice(0, i);
      if (!del && i === word.length) { del = true; return setTimeout(tick, 1600); }
      if (del && i === 0) { del = false; w = (w + 1) % words.length; }
      i += del ? -1 : 1;
      setTimeout(tick, del ? 40 : 80);
    };
    tick();
  })();

  // ---------- about ----------
  $("#aboutText").innerHTML = P.about.map((p) => `<p>${p}</p>`).join("");
  const info = [
    [I.pin, P.location],
    [I.mail, `<a href="mailto:${esc(P.email)}">${esc(P.email)}</a>`],
    [I.phone, esc(P.phone)],
  ];
  $("#infoList").innerHTML = info.map(([ic, t]) => `<li>${ic}<span>${t}</span></li>`).join("");
  $("#stats").innerHTML = P.stats
    .map((s) => `<div class="card stat reveal"><div class="num" data-to="${s.value}" data-dec="${s.decimals || 0}" data-prefix="${esc(s.prefix || "")}" data-suffix="${esc(s.suffix || "")}">${esc(s.prefix || "")}0</div><div class="lbl">${esc(s.label)}</div></div>`)
    .join("");

  // ---------- experience ----------
  const tags = (arr) => `<div class="tags">${arr.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
  $("#timeline").innerHTML = P.experience
    .map(
      (e) => `<article class="card hover tl-item reveal">
        <div class="tl-head">
          <div><h3>${esc(e.role)}</h3><div class="company">${esc(e.company)}</div></div>
          <div class="period">${esc(e.period)}<br>${esc(e.location)}</div>
        </div>
        <p class="summary">${e.summary}</p>
        <ul>${e.points.map((p) => `<li>${p}</li>`).join("")}</ul>
        ${tags(e.tags)}
      </article>`
    )
    .join("");

  // ---------- skills ----------
  // Built-in glyphs for skills that have no brand logo
  const G = {
    db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    api: '<path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m13.5 5-3 14"/>',
    responsive: '<rect x="2" y="4" width="14" height="10" rx="1.5"/><path d="M6 18h6M9 14v4"/><rect x="17" y="8" width="5" height="12" rx="1"/>',
    test: '<path d="M9 3h6M10 3v6L4.5 18.5A2 2 0 0 0 6.2 21.5h11.6a2 2 0 0 0 1.7-3L14 9V3"/><path d="M7 15h10"/>',
    container: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
    oop: '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/><path d="M7 11v6h6M17 13V7h-6"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 12 10 5 10-5"/><path d="m2 17 10 5 10-5"/>',
    threads: '<path d="M4 6h10M4 12h16M4 18h12"/><circle cx="17" cy="6" r="2"/><circle cx="19" cy="18" r="2"/>',
    tree: '<circle cx="12" cy="4" r="2"/><circle cx="5" cy="13" r="2"/><circle cx="19" cy="13" r="2"/><circle cx="9" cy="20" r="2"/><path d="m10.5 5.5-4 6M13.5 5.5l4 6M6 15l2 3.3"/>',
    pattern: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><circle cx="17.5" cy="17.5" r="3.5"/>',
    system: '<rect x="2" y="3" width="20" height="6" rx="1.5"/><rect x="2" y="15" width="20" height="6" rx="1.5"/><path d="M6 6h.01M6 18h.01M12 9v6"/>',
  };
  const skillIcon = (ic) => {
    if (!ic) return "";
    if (ic.startsWith("svg:"))
      return `<span class="skill-ico glyph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${G[ic.slice(4)] || G.api}</svg></span>`;
    if (/^https?:/.test(ic)) return `<span class="skill-ico"><img src="${esc(ic)}" alt="" loading="lazy"></span>`;
    return `<img class="skill-ico-img" src="https://skillicons.dev/icons?i=${esc(ic)}" alt="" loading="lazy">`;
  };
  $("#skillsGrid").innerHTML = P.skills
    .map(
      (g) => `<div class="card hover reveal"><h3>${esc(g.group)}</h3><div class="skill-list">${g.items
        .map(([n, ic]) => `<span class="skill">${skillIcon(ic)}${esc(n)}</span>`)
        .join("")}</div></div>`
    )
    .join("");

  // ---------- projects ----------
  $("#filters").innerHTML = P.projectFilters
    .map((f, i) => `<button class="filter${i === 0 ? " active" : ""}" data-f="${esc(f)}">${esc(f)}</button>`)
    .join("");
  // "SeatVault: Event Ticket Booking" -> big name + small subtitle
  const projTitle = (t) => {
    const [name, sub] = t.split(/:\s+/);
    return `<h3 class="ptitle"><span class="pname">${esc(name)}</span>${sub ? `<span class="psub">${esc(sub)}</span>` : ""}</h3>`;
  };
  $("#projectsGrid").innerHTML = P.projects
    .map(
      (p, i) => {
        const num = String(i + 1).padStart(2, "0");
        const href = p.live || p.github || "#";
        const host = href.replace(/^https?:\/\//, "").split("/").slice(0, 3).join("/").replace(/\/$/, "");
        const visual = p.image
          ? `<img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" loading="lazy">`
          : `<div class="shot-art"><span>${I.code}</span><strong>${esc(p.title)}</strong></div>`;
        if (p.featured) {
          return `<article class="card project featured reveal" data-cat="${esc(p.category)}">
        <div class="feat-stage">
          <a class="shot" href="${esc(href)}" target="_blank" rel="noopener" aria-label="Open ${esc(p.title)}">
            <div class="chrome"><i></i><i></i><i></i><span>${esc(host)}</span></div>
            <div class="shot-view">${visual}</div>
            <span class="shot-cta">${p.live ? "View live demo" : "View code"} ${I.ext}</span>
          </a>
        </div>
        <div class="feat-body">
          <div class="feat-head">
            <span class="feat-badge">★ Featured</span>
            <span class="feat-cat">${esc(p.category)}</span>
            <em class="pnum">${num}</em>
          </div>
          ${projTitle(p.title)}
          ${p.tagline ? `<p class="feat-tagline">${esc(p.tagline)}</p>` : ""}
          ${p.highlights ? `<div class="feat-stats">${p.highlights.map(([v, l]) => `<div><strong>${esc(v)}</strong><span>${esc(l)}</span></div>`).join("")}</div>` : ""}
          <p class="feat-desc">${p.description}</p>
          ${tags(p.tags)}
          <div class="feat-actions">
            ${p.live ? `<a class="btn btn-primary btn-sm" href="${esc(p.live)}" target="_blank" rel="noopener">${I.ext} Live Demo</a>` : ""}
            ${p.github ? `<a class="btn btn-ghost btn-sm" href="${esc(p.github)}" target="_blank" rel="noopener">${I.github} Source Code</a>` : ""}
          </div>
        </div>
      </article>`;
        }
        return `<article class="card hover project reveal" data-cat="${esc(p.category)}">
        <a class="shot" href="${esc(href)}" target="_blank" rel="noopener" aria-label="Open ${esc(p.title)}">
          <div class="chrome"><i></i><i></i><i></i><span>${esc(host)}</span></div>
          <div class="shot-view">${visual}</div>
          <span class="shot-cat">${esc(p.category)}</span>
          <span class="shot-cta">${p.live ? "View live demo" : "View code"} ${I.ext}</span>
        </a>
        <div class="project-body">
          <div class="project-top"><em class="pnum">${num}</em>
            <div class="project-links">
              ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">${I.ext}<span>Live demo</span></a>` : ""}
              ${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener">${I.github}<span>Code</span></a>` : ""}
            </div>
          </div>
          ${p.featured ? `<span class="feat-badge">★ Featured</span>` : ""}
          ${projTitle(p.title)}
          <p class="pdesc">${p.description}</p>
          <button class="more-btn" type="button" aria-expanded="false" hidden>Read more</button>
          ${tags(p.tags)}
        </div>
      </article>`;
      }
    )
    .join("");
  // Filters, plus "Show all": under "All", only the first P.projectsVisible cards show until expanded.
  const cards = [...document.querySelectorAll("#projectsGrid .project")];
  const limit = P.projectsVisible || cards.length;
  let filter = "All", showAll = cards.length <= limit;
  $("#projectsGrid").insertAdjacentHTML("afterend", `<div class="more-projects"><button class="btn btn-ghost" id="moreProjects" type="button">Show all ${cards.length} projects</button></div>`);
  const moreBtn = $("#moreProjects");
  const applyFilter = () => {
    let shown = 0;
    cards.forEach((c) => {
      const match = filter === "All" || c.dataset.cat === filter;
      const visible = match && (filter !== "All" || showAll || shown < limit);
      if (visible) shown++;
      c.classList.toggle("hide", !visible);
    });
    moreBtn.parentElement.hidden = showAll || filter !== "All";
  };
  applyFilter();
  moreBtn.addEventListener("click", () => {
    showAll = true;
    applyFilter();
    cards[limit]?.querySelector(".shot")?.focus({ preventScroll: true });
  });
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    document.querySelectorAll(".filter").forEach((x) => x.classList.toggle("active", x === b));
    filter = b.dataset.f;
    applyFilter();
    checkClamps();
  });

  // Long descriptions are clamped to a few lines; "Read more" appears only where text is cut off.
  const checkClamps = () =>
    document.querySelectorAll("#projectsGrid .pdesc").forEach((p) => {
      const btn = p.nextElementSibling;
      if (p.classList.contains("open") || !p.offsetParent) return;
      btn.hidden = p.scrollHeight <= p.clientHeight + 1;
    });
  $("#projectsGrid").addEventListener("click", (e) => {
    const btn = e.target.closest(".more-btn");
    if (!btn) return;
    const open = btn.previousElementSibling.classList.toggle("open");
    btn.textContent = open ? "Show less" : "Read more";
    btn.setAttribute("aria-expanded", open);
  });
  checkClamps();
  if (document.fonts) document.fonts.ready.then(checkClamps);
  addEventListener("resize", checkClamps);
  moreBtn.addEventListener("click", checkClamps);

  // ---------- certifications ----------
  $("#certGrid").innerHTML = P.certifications
    .map(
      (c) => {
        const inner = `<span class="cert-icon">${I.award}</span>
        <div><h3>${esc(c.title)}${c.badge ? `<span class="top">${esc(c.badge)}</span>` : ""}</h3><p>${esc(c.issuer)}</p><p class="cert-date">${esc(c.date)}</p></div>`;
        return c.url
          ? `<a class="card hover cert reveal" href="${esc(c.url)}" target="_blank" rel="noopener">${inner}</a>`
          : `<div class="card hover cert reveal">${inner}</div>`;
      }
    )
    .join("");

  // ---------- education ----------
  $("#eduList").innerHTML = P.education
    .map(
      (e) => `<article class="card hover tl-item reveal">
        <div class="tl-head"><div><h3>${esc(e.degree)}</h3><div class="company">${esc(e.school)}</div></div><div class="period">${esc(e.period)}</div></div>
        <p class="summary">${e.description}</p>${tags(e.tags)}
      </article>`
    )
    .join("");

  // ---------- contact ----------
  const items = [
    [I.mail, "Email", P.email, `mailto:${P.email}`],
    [I.phone, "Phone", P.phone, `tel:${P.phone.replace(/\s/g, "")}`],
    [I.pin, "Location", P.location, ""],
  ];
  if (P.whatsapp) items.push([I.chat, "WhatsApp", "Chat with me", `https://wa.me/${P.whatsapp}`]);
  $("#contactInfo").innerHTML =
    items
      .map(([ic, l, v, href]) => {
        const inner = `<span class="cert-icon">${ic}</span><div><small>${l}</small><span>${esc(v)}</span></div>`;
        return href ? `<a class="card hover contact-item" href="${esc(href)}" target="_blank" rel="noopener">${inner}</a>` : `<div class="card contact-item">${inner}</div>`;
      })
      .join("") + `<div class="socials">${$("#heroSocials").innerHTML}</div>`;

  // Opens the visitor's mail app with the message pre-filled (no backend needed).
  // To receive messages directly, swap this for a service like Formspree.
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    location.href = `mailto:${P.email}?subject=${encodeURIComponent(f.get("subject"))}&body=${encodeURIComponent(body)}`;
  });

  // ---------- theme ----------
  const root = document.documentElement;
  const themeBtn = $("#themeToggle");
  const setIcon = () => (themeBtn.innerHTML = root.dataset.theme === "light" ? I.moon : I.sun);
  setIcon();
  themeBtn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    setIcon();
  });

  // ---------- nav: scroll state, mobile menu, active link ----------
  const nav = $("#nav"), links = $("#navLinks");
  $("#menuBtn").innerHTML = I.menu;
  $("#menuBtn").addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", () => links.classList.remove("open"));
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const secObs = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting)
        links.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
    }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("section[id]").forEach((s) => secObs.observe(s));

  // ---------- visual extras ----------
  const fine = matchMedia("(pointer: fine)").matches;
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // numbered eyebrow above each section title: "01 — About"
  document.querySelectorAll("main .section").forEach((s, i) => {
    const t = s.querySelector(".section-title");
    const label = (links.querySelector(`a[href="#${s.id}"]`) || {}).textContent || s.id;
    t.insertAdjacentHTML("beforebegin", `<p class="eyebrow reveal"><span>${String(i + 1).padStart(2, "0")}</span>${esc(label)}</p>`);
  });


  // ---------- cartoon buddy ----------
  (() => {
    const buddy = $("#buddy"), bubble = $("#bubble");
    if (!buddy) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lines = [
      "Hi, I'm Abhishek! 👋",
      "I write Java & Spring Boot ☕",
      "…and React on the front end ⚛️",
      "450+ DSA problems solved 🧠",
      "Psst, my projects are just below ↓",
      "Open to full stack roles ✨",
    ];
    let line = 0, bubbleTimer;
    const say = (text, ms = 2600) => {
      bubble.textContent = text;
      bubble.classList.add("show");
      clearTimeout(bubbleTimer);
      bubbleTimer = setTimeout(() => bubble.classList.remove("show"), ms);
    };
    setTimeout(() => say("Hi! 👋 Click me or drag me around", 3800), 900);

    // eyes follow the cursor
    const pupils = buddy.querySelectorAll(".b-pupil, .b-shine");
    addEventListener("pointermove", (e) => {
      const r = buddy.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height * 0.36;
      const a = Math.atan2(e.clientY - cy, e.clientX - cx);
      const d = Math.min(1, Math.hypot(e.clientX - cx, e.clientY - cy) / 300);
      const x = Math.cos(a) * 4 * d, y = Math.sin(a) * 4 * d;
      pupils.forEach((p) => (p.style.transform = `translate(${x}px, ${y}px)`));
    }, { passive: true });

    // blink every few seconds
    const blink = () => {
      buddy.classList.add("blink");
      setTimeout(() => buddy.classList.remove("blink"), 160);
      setTimeout(blink, 2500 + Math.random() * 3000);
    };
    if (!reduce) setTimeout(blink, 2000);

    // wave on hover
    let waveTimer;
    const wave = () => {
      buddy.classList.add("wave");
      clearTimeout(waveTimer);
      waveTimer = setTimeout(() => buddy.classList.remove("wave"), 1600);
    };
    buddy.addEventListener("pointerenter", wave);

    // drag around, spring back on release; a plain click makes it jump and talk
    let start = null, moved = false;
    buddy.addEventListener("pointerdown", (e) => {
      start = { x: e.clientX, y: e.clientY };
      moved = false;
      buddy.setPointerCapture(e.pointerId);
      buddy.classList.add("held");
    });
    buddy.addEventListener("pointermove", (e) => {
      if (!start) return;
      const dx = e.clientX - start.x, dy = e.clientY - start.y;
      if (!moved && Math.hypot(dx, dy) > 6) { moved = true; buddy.classList.add("dragging"); say("Whoa, where are we going?! 😲", 1800); }
      if (moved) buddy.style.translate = `${dx}px ${dy}px`;
    });
    const release = () => {
      if (!start) return;
      start = null;
      buddy.classList.remove("held", "dragging");
      if (moved) {
        buddy.style.translate = "";
        setTimeout(() => say("Phew, home sweet home 😅", 1800), 350);
      } else {
        buddy.classList.remove("jump");
        void buddy.offsetWidth;
        buddy.classList.add("jump");
        wave();
        say(lines[line++ % lines.length]);
      }
    };
    buddy.addEventListener("pointerup", release);
    buddy.addEventListener("pointercancel", release);
    buddy.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); say(lines[line++ % lines.length]); wave(); } });
    buddy.tabIndex = 0;
  })();

  // orbiting tech icons around the photo ring
  const orbitIcons = ["java", "spring", "react", "docker", "postgres", "redis"];
  $("#orbit").innerHTML = orbitIcons
    .map((ic, i) => `<span class="orb" style="--a:${(360 / orbitIcons.length) * i}deg"><img src="https://skillicons.dev/icons?i=${ic}" alt="" loading="lazy"></span>`)
    .join("");

  // infinite tech marquee built from the skills list
  const seen = new Set();
  const mItems = [];
  P.skills.forEach((g) => g.items.forEach(([n, ic]) => {
    if (!ic || ic.startsWith("svg:") || seen.has(ic)) return;
    seen.add(ic);
    mItems.push(`<span class="m-item">${skillIcon(ic)}${esc(n)}</span>`);
  }));
  $("#marquee").innerHTML = mItems.join("") + mItems.join("").replace(/<span class="m-item"/g, '<span class="m-item" aria-hidden="true"');

  // scroll progress bar
  const prog = $("#progress");
  const onProg = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    prog.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
  };
  addEventListener("scroll", onProg, { passive: true });
  onProg();

  if (fine && !still) {
    // soft glow that follows the cursor
    const glow = $("#cursorGlow");
    addEventListener("pointermove", (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      glow.style.opacity = 1;
    }, { passive: true });

    // spotlight inside cards + subtle 3D tilt on project cards
    document.addEventListener("pointermove", (e) => {
      const c = e.target.closest(".card");
      if (!c) return;
      const r = c.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      c.style.setProperty("--mx", `${x}px`);
      c.style.setProperty("--my", `${y}px`);
      if (c.classList.contains("project") && !c.classList.contains("featured")) {
        const rx = ((y / r.height) - 0.5) * -6, ry = ((x / r.width) - 0.5) * 6;
        c.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
      }
    }, { passive: true });
    document.addEventListener("pointerout", (e) => {
      const c = e.target.closest(".project");
      if (c && !c.contains(e.relatedTarget)) c.style.transform = "";
    });
  }

  // ---------- constellation background ----------
  (() => {
    const cv = $("#net");
    if (still || !cv.getContext) return cv.remove();
    const ctx = cv.getContext("2d");
    let w, h, pts = [], raf = 0;
    const mouse = { x: -9999, y: -9999 };
    const LINK = 160;
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = innerWidth; h = innerHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.max(24, Math.min(80, Math.round((w * h) / 24000)));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.9,
      }));
    };
    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fillStyle = "rgba(139,156,245,0.95)";
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(102,126,234,${0.4 * (1 - d / LINK)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        // brighter links to the cursor
        const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (md < 190) {
          ctx.strokeStyle = `rgba(168,85,247,${0.5 * (1 - md / 190)})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      raf = requestAnimationFrame(frame);
    };
    addEventListener("resize", resize);
    addEventListener("pointermove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    document.addEventListener("visibilitychange", () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(frame);
    });
    resize();
    frame();
  })();

  // ---------- reveal + counters ----------
  const countUp = (el) => {
    const to = +el.dataset.to, dec = +el.dataset.dec, pre = el.dataset.prefix, suf = el.dataset.suffix, t0 = performance.now();
    const step = (t) => {
      const p = Math.min((t - t0) / 1200, 1);
      el.textContent = pre + (to * (1 - Math.pow(1 - p, 3))).toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const revObs = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      const n = en.target.querySelector(".num");
      if (n) countUp(n);
      revObs.unobserve(en.target);
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal, .reveal-x").forEach((el) => revObs.observe(el));
})();
