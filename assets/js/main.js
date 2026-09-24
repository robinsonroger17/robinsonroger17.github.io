/* =========================================================
   Portfolio Robinson Roger : rendu et interactions
   Tout le contenu vient de data.js : ne pas éditer ce fichier
   pour ajouter un projet.
   ========================================================= */

(function () {
  "use strict";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* Échappe le texte injecté pour éviter toute casse du HTML */
  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const ICONS = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C21.6 8.65 23 10.8 23 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21h-4V9Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    megaphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-7v16l-18-7v-2Z"/><path d="M7 12v6a2 2 0 0 0 4 0v-4.5"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h3l1.5-2h9L18 7h3v13H3V7Z"/><circle cx="12" cy="13" r="3.5"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>'
  };

  /* ---------------------------------------------------------
     PROFIL
     --------------------------------------------------------- */
  function renderProfil() {
    const full = PROFIL.prenom + " " + PROFIL.nom;
    const set = (key, value) =>
      $$('[data-bind="' + key + '"]').forEach((el) => (el.textContent = value));

    set("prenom", PROFIL.prenom);
    set("nom", PROFIL.nom);
    set("signature", PROFIL.signature);
    set("titre", PROFIL.titre);
    set("sousTitre", PROFIL.sousTitre);
    set("accroche", PROFIL.accroche);
    set("dispo", PROFIL.disponibilite);
    set("dispo2", PROFIL.disponibilite);
    set("ville", PROFIL.ville);
    set("navName", full);
    set("footerName", full);

    /* Initiale du prénom : repli tant que la photo n'a pas chargé */
    const initiale = PROFIL.prenom[0] || "";
    $$(".nav__mark").forEach((el) => (el.textContent = initiale));
    $("#portrait").innerHTML = "<span>" + esc(initiale) + "</span>";

    /* Photo : on ne l'affiche que si le fichier existe vraiment */
    if (PROFIL.photo) {
      const img = new Image();
      img.onload = () => {
        $("#portrait").innerHTML = "";
        img.alt = "Photo de " + full;
        $("#portrait").appendChild(img);
        $("#portrait").classList.add("has-photo");
      };
      img.src = PROFIL.photo;
    }

    /* CV : masqué tant que le fichier n'a pas été déposé */
    const cvLink = $("#cvLink");
    if (PROFIL.cv) {
      cvLink.href = PROFIL.cv;
      fetch(PROFIL.cv, { method: "HEAD" })
        .then((r) => {
          if (!r.ok) cvLink.remove();
        })
        .catch(() => {
          /* protocole file:// : on laisse le lien en place */
        });
    } else {
      cvLink.remove();
    }

    /* Liens de contact du hero */
    $("#heroSocial").innerHTML = [
      link("mailto:" + PROFIL.email, ICONS.mail, PROFIL.email, false),
      PROFIL.linkedin ? link(PROFIL.linkedin, ICONS.linkedin, "LinkedIn", true) : "",
      PROFIL.telephone
        ? link("tel:" + PROFIL.telephone.replace(/\s/g, ""), ICONS.phone, PROFIL.telephone, false)
        : PROFIL.mentionTelephone
        ? "<span>" + ICONS.phone + esc(PROFIL.mentionTelephone) + "</span>"
        : "",
      '<span style="display:inline-flex;align-items:center;gap:.45rem;font-size:.92rem;color:var(--ink-mute)">' +
        ICONS.pin +
        esc(PROFIL.ville) +
        "</span>"
    ].join("");

    /* Boutons de la section contact */
    $("#contactLinks").innerHTML = [
      '<a class="btn btn--light" href="mailto:' + esc(PROFIL.email) + '">' + ICONS.mail + " Écrivez-moi</a>",
      PROFIL.linkedin
        ? '<a class="btn btn--outline-light" href="' +
          esc(PROFIL.linkedin) +
          '" target="_blank" rel="noopener">' +
          ICONS.linkedin +
          " LinkedIn</a>"
        : "",
      PROFIL.telephone
        ? '<a class="btn btn--outline-light" href="tel:' +
          esc(PROFIL.telephone.replace(/\s/g, "")) +
          '">' +
          ICONS.phone +
          " " +
          esc(PROFIL.telephone) +
          "</a>"
        : ""
    ].join("");

    if (!PROFIL.telephone && PROFIL.mentionTelephone) {
      const note = document.createElement("p");
      note.className = "contact__note";
      note.textContent = PROFIL.mentionTelephone;
      $("#contactLinks").insertAdjacentElement("afterend", note);
    }
  }

  function link(href, icon, label, blank) {
    return (
      '<a href="' +
      esc(href) +
      '"' +
      (blank ? ' target="_blank" rel="noopener"' : "") +
      ">" +
      icon +
      esc(label) +
      "</a>"
    );
  }

  /* ---------------------------------------------------------
     CHIFFRES CLÉS
     --------------------------------------------------------- */
  function renderChiffres() {
    $("#stats").innerHTML = CHIFFRES.map(
      (c) => "<li><b>" + esc(c.valeur) + "</b><span>" + esc(c.label) + "</span></li>"
    ).join("");
  }

  /* ---------------------------------------------------------
     À PROPOS
     --------------------------------------------------------- */
  function renderApropos() {
    $("#aboutText").innerHTML = APROPOS.map((p) => "<p>" + esc(p) + "</p>").join("");

    $("#langues").innerHTML = LANGUES.map(
      (l) =>
        '<div class="langue"><div class="langue__top"><b>' +
        esc(l.langue) +
        "</b><span>" +
        esc(l.niveau) +
        '</span></div><div class="langue__bar"><i class="langue__fill" data-pct="' +
        Number(l.pourcentage) +
        '"></i></div></div>'
    ).join("");

    $("#softskills").innerHTML = SOFTSKILLS.map(
      (s) => '<span class="chip">' + esc(s) + "</span>"
    ).join("");

    $("#interets").innerHTML = INTERETS.map(
      (s) => '<span class="chip">' + esc(s) + "</span>"
    ).join("");
  }

  /* ---------------------------------------------------------
     RÉALISATIONS + FILTRES
     --------------------------------------------------------- */
  function carte(p) {
    const publie = p.statut === "publie";
    const liens = Array.isArray(p.liens) ? p.liens.filter((l) => l && l.url) : [];

    /* Un logo ne se recadre pas comme une capture : il reste entier, centré */
    const media = p.image
      ? '<div class="projet__media' +
        (p.logo ? " projet__media--logo" : "") +
        '"><img src="' +
        esc(p.image) +
        '" alt="' +
        (p.logo ? "" : esc(p.titre)) +
        '" loading="lazy"></div>'
      : '<div class="projet__media"><span class="projet__initial">' +
        esc(p.titre.slice(0, 2).toUpperCase()) +
        "</span></div>";

    const details =
      p.details && p.details.length
        ? '<ul class="projet__details">' +
          p.details.map((d) => "<li>" + esc(d) + "</li>").join("") +
          "</ul>"
        : "";

    const tags =
      p.tags && p.tags.length
        ? '<div class="projet__tags">' +
          p.tags.map((t) => '<span class="tag">' + esc(t) + "</span>").join("") +
          "</div>"
        : "";

    let pied = "";
    if (liens.length) {
      pied =
        '<div class="projet__liens">' +
        liens
          .map(
            (l) =>
              '<a class="projet__lien" href="' +
              esc(l.url) +
              '" target="_blank" rel="noopener">' +
              esc(l.label || "Voir le projet") +
              " <span aria-hidden=\"true\">→</span></a>"
          )
          .join("") +
        "</div>";
    } else if (p.lienMention) {
      pied = '<p class="projet__soon">' + esc(p.lienMention) + "</p>";
    } else if (publie) {
      pied = '<p class="projet__soon">Lien à venir</p>';
    } else {
      pied = '<p class="projet__soon">Projet non publié, détails sur demande</p>';
    }

    const badge = publie
      ? '<span class="badge badge--live">En ligne</span>'
      : '<span class="badge badge--prive">Non publié</span>';

    return (
      '<article class="projet reveal" data-cat="' +
      esc(p.categorie) +
      '" data-statut="' +
      esc(p.statut) +
      '">' +
      media +
      '<div class="projet__body">' +
      '<div class="projet__top"><span class="projet__cat">' +
      esc(p.categorie) +
      "</span>" +
      badge +
      "</div>" +
      '<h3 class="projet__titre">' +
      esc(p.titre) +
      "</h3>" +
      '<p class="projet__periode">' +
      esc(p.periode) +
      "</p>" +
      '<p class="projet__resume">' +
      esc(p.resume) +
      "</p>" +
      details +
      tags +
      pied +
      "</div></article>"
    );
  }

  /* État partagé entre le sélecteur de poste et les filtres */
  let posteActif = null;
  let filtreActif = "all";

  /* Ordre des réalisations : les catégories du poste visé d'abord */
  function ordonner() {
    if (!posteActif) return REALISATIONS.slice();
    const poste = POSTES.filter((p) => p.id === posteActif)[0];
    if (!poste) return REALISATIONS.slice();
    const rang = (cat) => {
      const i = poste.prioritaires.indexOf(cat);
      return i === -1 ? 99 : i;
    };
    /* Array.prototype.sort est stable : à rang égal, l'ordre d'origine tient */
    return REALISATIONS.slice().sort((a, b) => rang(a.categorie) - rang(b.categorie));
  }

  function appliquerFiltre(f) {
    filtreActif = f;
    let visibles = 0;
    $$(".projet", $("#projets")).forEach((card) => {
      const ok =
        f === "all" ||
        (f === "publie" ? card.dataset.statut === "publie" : card.dataset.cat === f);
      card.hidden = !ok;
      if (ok) visibles++;
    });
    $("#empty").hidden = visibles !== 0;
    $$(".filter").forEach((b) => b.classList.toggle("is-on", b.dataset.f === f));
  }

  function dessinerGrille() {
    $("#projets").innerHTML = ordonner().map(carte).join("");
    appliquerFiltre(filtreActif);
  }

  function renderRealisations() {
    const cats = [];
    REALISATIONS.forEach((p) => {
      if (cats.indexOf(p.categorie) === -1) cats.push(p.categorie);
    });

    const boutons = [{ id: "all", label: "Tout", n: REALISATIONS.length }].concat(
      cats.map((c) => ({
        id: c,
        label: c,
        n: REALISATIONS.filter((p) => p.categorie === c).length
      })),
      [
        {
          id: "publie",
          label: "En ligne",
          n: REALISATIONS.filter((p) => p.statut === "publie").length
        }
      ]
    );

    $("#filters").innerHTML = boutons
      .map(
        (b, i) =>
          '<button class="filter' +
          (i === 0 ? " is-on" : "") +
          '" data-f="' +
          esc(b.id) +
          '">' +
          esc(b.label) +
          "<small>" +
          b.n +
          "</small></button>"
      )
      .join("");

    $("#filters").addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (btn) appliquerFiltre(btn.dataset.f);
    });

    dessinerGrille();
  }

  /* ---------------------------------------------------------
     LE SITE S'ADAPTE AU POSTE VISÉ
     --------------------------------------------------------- */
  const MEM = "poste-vise";

  function lireMemoire() {
    try {
      return localStorage.getItem(MEM);
    } catch (e) {
      return null;
    }
  }

  function ecrireMemoire(v) {
    try {
      if (v) localStorage.setItem(MEM, v);
      else localStorage.removeItem(MEM);
    } catch (e) {
      /* navigation privée : on continue sans mémoriser */
    }
  }

  function appliquerPoste(id, silencieux) {
    const poste = POSTES.filter((p) => p.id === id)[0] || null;
    posteActif = poste ? poste.id : null;

    /* Le pitch du hero se substitue en fondu */
    const pitch = $(".hero__pitch");
    const texte = poste ? poste.pitch : PROFIL.accroche;
    if (silencieux) {
      pitch.textContent = texte;
    } else {
      pitch.classList.add("is-swapping");
      setTimeout(() => {
        pitch.textContent = texte;
        pitch.classList.remove("is-swapping");
      }, 250);
    }

    $$(".poste__btn").forEach((b) => b.classList.toggle("is-on", b.dataset.p === posteActif));

    const tri = $("#tri");
    if (poste) {
      tri.innerHTML =
        "Réalisations classées pour un poste en <b>" +
        esc(poste.label.toLowerCase()) +
        '</b>.<button class="poste__reset" type="button" id="triReset">Revenir à l\'ordre normal</button>';
      tri.hidden = false;
    } else {
      tri.hidden = true;
      tri.innerHTML = "";
    }

    filtreActif = "all";
    dessinerGrille();
    ecrireMemoire(posteActif);
  }

  function renderPostes() {
    $("#posteOpts").innerHTML = POSTES.map(
      (p) =>
        '<button class="poste__btn" type="button" data-p="' +
        esc(p.id) +
        '">' +
        esc(p.label) +
        "</button>"
    ).join("");

    $("#posteOpts").addEventListener("click", (e) => {
      const btn = e.target.closest(".poste__btn");
      if (!btn) return;
      appliquerPoste(btn.dataset.p === posteActif ? null : btn.dataset.p);
    });

    $("#tri").addEventListener("click", (e) => {
      if (e.target.id === "triReset") appliquerPoste(null);
    });

    const memorise = lireMemoire();
    if (memorise) appliquerPoste(memorise, true);
  }

  /* ---------------------------------------------------------
     ÉTUDE DE CAS
     --------------------------------------------------------- */
  function renderEtude() {
    if (typeof ETUDE !== "object" || !ETUDE) {
      const s = $("#etude");
      if (s) s.remove();
      $$('.nav__links a[href="#etude"]').forEach((a) => a.remove());
      return;
    }

    const set = (key, value) =>
      $$('[data-bind="' + key + '"]').forEach((el) => (el.textContent = value));
    set("etudeKicker", ETUDE.kicker);
    set("etudeTitre", ETUDE.titre);
    set("etudeChapo", ETUDE.chapo);

    $("#etudeChiffres").innerHTML = (ETUDE.chiffres || [])
      .map((c) => "<li><b>" + esc(c.valeur) + "</b><span>" + esc(c.label) + "</span></li>")
      .join("");

    /* Les étapes sont numérotées : c'est un déroulé, l'ordre porte du sens */
    $("#etudeCorps").innerHTML = (ETUDE.blocs || [])
      .map(
        (b, i) =>
          '<article class="etape reveal"><p class="etape__num">' +
          ("0" + (i + 1)).slice(-2) +
          '</p><div class="etape__texte"><h3>' +
          esc(b.titre) +
          "</h3>" +
          b.texte.map((t) => "<p>" + esc(t) + "</p>").join("") +
          "</div></article>"
      )
      .join("");

    $("#etudeChute").innerHTML = ETUDE.chute
      ? '<h3 class="chute__titre">' +
        esc(ETUDE.chute.titre) +
        '</h3><p class="chute__texte">' +
        esc(ETUDE.chute.texte) +
        "</p>"
      : "";
  }

  /* ---------------------------------------------------------
     COMPÉTENCES
     --------------------------------------------------------- */
  function renderCompetences() {
    $("#skills").innerHTML = COMPETENCES.map(
      (c) =>
        '<div class="skill reveal"><div class="skill__icon">' +
        (ICONS[c.icone] || ICONS.spark) +
        "</div><h3>" +
        esc(c.famille) +
        "</h3><ul>" +
        c.items.map((i) => "<li>" + esc(i) + "</li>").join("") +
        "</ul></div>"
    ).join("");
  }

  /* ---------------------------------------------------------
     PARCOURS
     --------------------------------------------------------- */
  function renderParcours() {
    const bloc = (e) =>
      '<li class="reveal"><span class="tl__periode">' +
      esc(e.periode) +
      '</span><h4 class="tl__titre">' +
      esc(e.titre) +
      '</h4><p class="tl__lieu">' +
      esc(e.lieu) +
      "</p>" +
      (e.points && e.points.length
        ? '<ul class="tl__points">' +
          e.points.map((p) => "<li>" + esc(p) + "</li>").join("") +
          "</ul>"
        : "") +
      "</li>";

    $("#experiences").innerHTML = PARCOURS.filter((e) => e.type === "experience")
      .map(bloc)
      .join("");
    $("#formations").innerHTML = PARCOURS.filter((e) => e.type === "formation")
      .map(bloc)
      .join("");
  }

  /* ---------------------------------------------------------
     INTERACTIONS
     --------------------------------------------------------- */
  function initNav() {
    const nav = $("#nav");
    const burger = $("#burger");
    const links = $(".nav__links");

    const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    burger.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });

    links.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });

    /* Lien actif selon la section visible */
    const sections = $$("main section[id]");
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          $$(".nav__links a").forEach((a) =>
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id)
          );
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  function initReveal() {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add("is-in");
          obs.unobserve(en.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    /* On n'anime que ce qui est sous la ligne de flottaison :
       le haut de page reste visible immédiatement. */
    $$(".reveal, .section__head, .card, .stats li, .interets").forEach((el, i) => {
      el.classList.add("reveal");
      if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
        el.classList.add("is-armed");
        el.style.transitionDelay = Math.min(i % 6, 5) * 60 + "ms";
        io.observe(el);
      }
    });

    /* Barres de langues animées à l'entrée */
    const bars = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.style.width = en.target.dataset.pct + "%";
          obs.unobserve(en.target);
        });
      },
      { threshold: 0.4 }
    );
    $$(".langue__fill").forEach((b) => bars.observe(b));
  }

  /* ---------------------------------------------------------
     SHOWREEL : parcours vertical plein écran
     --------------------------------------------------------- */
  const FONDS = [
    "linear-gradient(160deg,#0a444e,#147886)",
    "linear-gradient(160deg,#10333f,#1a8e9e)",
    "linear-gradient(160deg,#123536,#2a8f7b)",
    "linear-gradient(160deg,#0d2b3a,#3a6f97)",
    "linear-gradient(160deg,#1a3a44,#16697a)",
    "linear-gradient(160deg,#0a3b45,#4aa3ad)"
  ];

  function slideProjet(p, i) {
    /* Une vidéo occupe tout l'écran ; un logo reste un filigrane centré */
    let fond = "";
    if (p.video) {
      fond =
        '<div class="reelSlide__bg"><video src="' +
        esc(p.video) +
        '" muted loop playsinline preload="metadata"' +
        (p.image && !p.logo ? ' poster="' + esc(p.image) + '"' : "") +
        "></video></div>";
    } else if (p.image && p.logo) {
      fond =
        '<div class="reelSlide__bg reelSlide__bg--logo"><img src="' +
        esc(p.image) +
        '" alt="" loading="lazy"></div>';
    } else if (p.image) {
      fond = '<div class="reelSlide__bg"><img src="' + esc(p.image) + '" alt="" loading="lazy"></div>';
    }

    const liens = (Array.isArray(p.liens) ? p.liens.filter((l) => l && l.url) : []).slice(0, 2);

    return (
      '<article class="reelSlide" style="background:' +
      FONDS[i % FONDS.length] +
      '">' +
      fond +
      '<div class="reelSlide__veil"></div>' +
      '<div class="reelSlide__in">' +
      '<p class="reelSlide__cat">' +
      esc(p.categorie) +
      "</p>" +
      (p.chiffre ? '<p class="reelSlide__chiffre">' + esc(p.chiffre) + "</p>" : "") +
      '<p class="reelSlide__punch">' +
      esc(p.punch || p.resume) +
      "</p>" +
      '<p class="reelSlide__titre">' +
      esc(p.titre) +
      "</p>" +
      '<p class="reelSlide__meta">' +
      esc(p.periode) +
      "</p>" +
      (liens.length
        ? '<div class="reelSlide__liens">' +
          liens
            .map(
              (l) =>
                '<a class="reelSlide__lien" href="' +
                esc(l.url) +
                '" target="_blank" rel="noopener">' +
                esc(l.label) +
                ' <span aria-hidden="true">→</span></a>'
            )
            .join("") +
          "</div>"
        : "") +
      "</div></article>"
    );
  }

  function initReel() {
    const reel = $("#reel");
    const track = $("#reelTrack");
    const bouton = $("#openReel");
    const projets = REALISATIONS.filter((p) => p.showreel === true);

    if (!projets.length) {
      bouton.remove();
      reel.remove();
      return;
    }

    /* Slide d'ouverture */
    const intro =
      '<article class="reelSlide reelSlide--intro" style="background:linear-gradient(165deg,#072d36,#0f5f6d)">' +
      '<div class="reelSlide__in">' +
      (PROFIL.photo
        ? '<img class="reelIntro__photo" src="' +
          esc(PROFIL.photo) +
          '" alt="Photo de ' +
          esc(PROFIL.prenom + " " + PROFIL.nom) +
          '">'
        : "") +
      '<p class="reelIntro__nom">' +
      esc(PROFIL.prenom) +
      "</p>" +
      '<p class="reelIntro__sig">' +
      esc(PROFIL.signature) +
      "</p>" +
      '<p class="reelIntro__txt">' +
      esc(PROFIL.titre) +
      "</p>" +
      '<p class="reelIntro__hint"><span aria-hidden="true">↓</span>Faites défiler</p>' +
      "</div></article>";

    /* Slide de clôture */
    const fin =
      '<article class="reelSlide reelSlide--fin" style="background:linear-gradient(165deg,#0a444e,#147886)">' +
      '<div class="reelSlide__in">' +
      '<p class="reelFin__titre">On en parle&nbsp;?</p>' +
      '<p class="reelFin__txt">' +
      esc(PROFIL.disponibilite) +
      "</p>" +
      '<div class="reelSlide__liens">' +
      '<a class="reelSlide__lien" href="mailto:' +
      esc(PROFIL.email) +
      '">M\'écrire <span aria-hidden="true">→</span></a>' +
      (PROFIL.linkedin
        ? '<a class="reelSlide__lien" href="' +
          esc(PROFIL.linkedin) +
          '" target="_blank" rel="noopener">LinkedIn <span aria-hidden="true">→</span></a>'
        : "") +
      "</div></div></article>";

    track.innerHTML = intro + projets.map(slideProjet).join("") + fin;

    const slides = $$(".reelSlide", track);
    const total = slides.length;

    $("#reelBars").innerHTML = slides
      .map(() => '<span class="reel__bar"><i></i></span>')
      .join("");
    const barres = $$(".reel__bar");

    let courant = 0; // slide réellement affichée
    let cible = 0; // destination visée : permet d'enchaîner les appuis rapides
    let verrou = 0; // pendant un défilement animé, on ignore les slides traversées
    let muet = true;

    const videos = $$("video", track);
    if (videos.length) $("#reelSound").hidden = false;

    function majPosition(i) {
      courant = i;
      if (Date.now() > verrou) cible = i;
      barres.forEach((b, n) => {
        b.classList.toggle("is-done", n < i);
        b.classList.toggle("is-on", n === i);
      });
      videos.forEach((v) => {
        if (slides[i].contains(v)) {
          const p = v.play();
          if (p && p.catch) p.catch(() => {});
        } else {
          v.pause();
        }
      });
      $("#reelNext").hidden = i >= total - 1;
    }

    const vue = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && en.intersectionRatio > 0.6) {
            majPosition(slides.indexOf(en.target));
          }
        });
      },
      { root: track, threshold: [0.6] }
    );
    slides.forEach((s) => vue.observe(s));

    function aller(i) {
      const n = Math.max(0, Math.min(total - 1, i));
      cible = n;
      verrou = Date.now() + 800;
      slides[n].scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion:reduce)").matches
          ? "auto"
          : "smooth",
        block: "start"
      });
    }

    function ouvrir() {
      reel.hidden = false;
      document.body.classList.add("reel-open");
      track.scrollTop = 0;
      /* Le navigateur peut restaurer une position de défilement après nous :
         on repasse au début à la frame suivante. */
      requestAnimationFrame(() => {
        track.scrollTop = 0;
        majPosition(0);
      });
      majPosition(0);
      track.focus();
    }

    function fermer() {
      videos.forEach((v) => v.pause());
      reel.hidden = true;
      document.body.classList.remove("reel-open");
      bouton.focus();
    }

    bouton.addEventListener("click", ouvrir);
    $("#reelClose").addEventListener("click", fermer);
    $("#reelNext").addEventListener("click", () => aller(cible + 1));

    $("#reelSound").addEventListener("click", (e) => {
      muet = !muet;
      videos.forEach((v) => (v.muted = muet));
      const b = e.currentTarget;
      b.innerHTML = '<span aria-hidden="true">' + (muet ? "🔇" : "🔊") + "</span>";
      b.setAttribute("aria-label", muet ? "Activer le son" : "Couper le son");
    });

    /* Un clic sur la slide, hors lien ou bouton, avance, comme des stories */
    track.addEventListener("click", (e) => {
      if (e.target.closest("a, button")) return;
      aller(cible + 1);
    });

    document.addEventListener("keydown", (e) => {
      if (reel.hidden) return;
      if (e.key === "Escape") fermer();
      else if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        aller(cible + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        aller(cible - 1);
      }
    });

    /* Le lien direct <adresse>#showreel ouvre le parcours */
    if (location.hash === "#showreel") ouvrir();
  }

  /* ---------------------------------------------------------
     DÉMARRAGE
     --------------------------------------------------------- */
  function init() {
    renderProfil();
    renderChiffres();
    renderApropos();
    renderRealisations();
    renderPostes();
    renderEtude();
    renderCompetences();
    renderParcours();
    $("#year").textContent = new Date().getFullYear();
    initNav();
    initReel();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
