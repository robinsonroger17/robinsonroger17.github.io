/* ===========================================================
   DONNÉES DU PORTFOLIO : SEUL FICHIER À MODIFIER
   Pour ajouter une réalisation : copier un bloc dans REALISATIONS
   =========================================================== */

const PROFIL = {
  prenom: "Robinson",
  nom: "Roger",
  signature: "Marketing & création de contenu",
  titre: "Recherche une alternance de 12 mois en marketing",
  sousTitre: "Futur étudiant en 3ᵉ année de Bachelor in Business à l'ESDES Lyon",
  accroche:
    "Profil hybride entre stratégie digitale et création de contenu. Je construis des audiences, je produis des formats qui tournent, et je pilote des projets de bout en bout.",
  disponibilite: "Disponible à partir de septembre 2026 · Alternance 12 mois",
  ville: "Saint-Cyr-au-Mont-d'Or / Lyon",
  email: "robinson.roger1706@gmail.com",
  telephone: "", // laissé vide volontairement : le numéro ne s'affiche pas sur un site public
  mentionTelephone: "Numéro disponible sur mon CV",
  linkedin: "https://www.linkedin.com/in/robinson-roger/",
  cv: "assets/files/CV-Robinson-Roger.pdf",
  photo: "assets/img/photo.jpg" // si le fichier n'existe pas, les initiales s'affichent
  // (remplacer ce fichier suffit à changer la photo partout)
};

/* Chiffres affichés sous le hero */
const CHIFFRES = [
  { valeur: "+25 M", label: "d'impressions cumulées sur X depuis 2022" },
  { valeur: "486 000", label: "« j'aime » reçus sur ces publications" },
  { valeur: "7 300", label: "abonnés gagnés en organique, pour 1 057 abonnements" },
  { valeur: "+1 M", label: "de vues cumulées sur mes vidéos avec des créateurs TikTok" },
  { valeur: "3", label: "marques nationales accompagnées en agence" }
];

/* ===========================================================
   POSTES : le site s'adapte à ce que le recruteur cherche.
   prioritaires : catégories remontées en haut des réalisations.
   =========================================================== */
const POSTES = [
  {
    id: "social",
    label: "Social media",
    pitch:
      "486 000 « j'aime » cumulés et 7 300 abonnés gagnés en organique sur mon compte X, plus du contenu diffusé sur les comptes officiels de Cristaline et Materne. Je sais ce que demande une ligne éditoriale tenue chaque jour, pendant quatre ans.",
    prioritaires: ["Social Media", "Création de contenu", "Marketing d'influence"]
  },
  {
    id: "contenu",
    label: "Contenu vidéo",
    pitch:
      "Je conçois, je tourne, je passe devant la caméra et je monte. Mes micro-trottoirs sont diffusés sur les comptes officiels de marques nationales, et j'assure la régie multicaméra en studio.",
    prioritaires: ["Création de contenu", "Social Media"]
  },
  {
    id: "influence",
    label: "Influence",
    pitch:
      "J'ai fait tourner des vidéos sur l'audience d'autres créateurs, jusqu'à dépasser le million de vues cumulées. Adapter un message à une communauté qui n'est pas la mienne, c'est exactement ce que je sais faire.",
    prioritaires: ["Marketing d'influence", "Social Media"]
  },
  {
    id: "digital",
    label: "Marketing digital & IA",
    pitch:
      "Je construis moi-même les outils dont j'ai besoin : sites, applications, assistants IA. Ce qui demande habituellement un devis et trois semaines, je le prototype dans la journée.",
    prioritaires: ["Web & IA", "Social Media"]
  }
];

const APROPOS = [
  "J'ai commencé par le numérique et l'entrepreneuriat à l'École LDLC, où j'ai touché autant au code et à l'IA qu'au business plan et au marketing. Je poursuis aujourd'hui à l'ESDES en Bachelor in Business pour consolider la partie stratégie et développement commercial.",
  "Entre les deux, j'ai fait ce que j'aime vraiment : créer. Un compte X tenu quotidiennement depuis 2022, qui cumule 486 000 « j'aime » et 7 300 abonnés, sans un euro de publicité. Des vidéos co-créées avec des créateurs TikTok de mon entourage, publiées sur leurs comptes, qui dépassent aujourd'hui le million de vues cumulées. Des micro-trottoirs que j'ai incarnés face caméra pour Cristaline et Materne pendant mon stage en agence social media. Et, plus récemment, des sites et des outils que je construis moi-même avec l'IA.",
  "Ce que je cherche en alternance : une équipe marketing où je peux tenir un compte, produire du contenu et suivre les chiffres. Pas seulement exécuter, mais comprendre pourquoi ça marche."
];

/* ===========================================================
   RÉALISATIONS
   statut    : "publie" -> visible en ligne, les liens s'affichent
               "prive"  -> projet interne / non publié, pas de lien
   categorie : "Social Media" | "Création de contenu" | "Marketing d'influence"
               | "Web & IA" | "Gestion de projet"
   liens     : [{ label: "Texte du lien", url: "https://…" }, …]  (liste vide = pas de lien)
   =========================================================== */
const REALISATIONS = [
  {
    titre: "Micro-trottoirs pour Cristaline et Materne",
    categorie: "Création de contenu",
    statut: "publie",
    periode: "Septembre à décembre 2025 · Supernatifs",
    resume:
      "Formats vidéo micro-trottoirs pour les réseaux sociaux de marques nationales, que j'incarnais face caméra, du tournage en rue à la régie en studio. Sur l'un d'eux, j'ai également co-créé le concept.",
    details: [
      "Co-création du concept sur l'un des formats Cristaline, de l'angle éditorial à la question posée dans la rue",
      "Rôle face caméra sur les micro-trottoirs, diffusés sur les comptes officiels des marques",
      "Production exécutive et régie technique multicaméra en studio",
      "Aisance à l'oral et capacité à relancer un inconnu en quelques secondes",
      "Autres marques accompagnées pendant le stage : PomPotes, SEB"
    ],
    tags: ["Vidéo", "Face caméra", "Concept", "Studio", "Marques nationales"],
    liens: [
      { label: "Reel Cristaline (concept co-créé)", url: "https://www.instagram.com/reel/DT2l_g-CNm0/" },
      { label: "Reel Cristaline 1", url: "https://www.instagram.com/cristalineofficiel/reel/DbGPNpdokb7/" },
      { label: "Reel Cristaline 2", url: "https://www.instagram.com/cristalineofficiel/reel/Db-YZ26IZXv/" },
      { label: "Reel Cristaline 3", url: "https://www.instagram.com/cristalineofficiel/reel/DdJXB6AowsB/" },
      { label: "Reel Materne 1", url: "https://www.instagram.com/reel/DSFJr3xD8Ut/" },
      { label: "Reel Materne 2", url: "https://www.instagram.com/reel/DTIGVDrjPW6/" }
    ],
    image: "assets/img/logo-instagram.png",
    logo: true,
    showreel: true,
    video: "assets/video/microtrottoir-cocree.mp4",
    punch: "Le concept, la question, et le gars à l'écran.",
    chiffre: "6 reels"
  },
  {
    titre: "Compte X / Twitter personnel",
    categorie: "Social Media",
    statut: "publie",
    periode: "Depuis janvier 2022 · 4 ans et demi",
    resume:
      "Compte personnel construit de zéro, sans un euro de publicité : 7 300 abonnés et 486 000 « j'aime » cumulés en quatre ans et demi de publication quotidienne.",
    details: [
      "486 000 « j'aime » et 18 200 partages reçus sur l'ensemble de mes publications",
      "Mon post le plus vu a dépassé 5,8 millions d'impressions, trois autres ont passé le million",
      "Plus de 25 millions d'impressions cumulées depuis 2022, estimé à partir de mon analytics X",
      "8 publications au-delà de 10 000 « j'aime », dont une à 35 500 et 1 400 partages",
      "7 300 abonnés pour 1 057 abonnements : une audience gagnée, pas échangée",
      "Une présence quotidienne tenue pendant quatre ans et demi, sans interruption",
      "Chiffres issus de l'export officiel de mes données, vérifiables sur demande"
    ],
    tags: ["X / Twitter", "Ligne éditoriale", "Community building", "Analyse d'audience"],
    liens: [],            // ← ajouter { label: "Voir le compte", url: "https://…" }
    image: "assets/img/logo-x.png",
    logo: true,
    showreel: true,
    video: "",
    punch: "Une communauté construite de zéro, sans un euro de publicité.",
    chiffre: "486 000 j'aime"
  },
  {
    titre: "Vidéos TikTok co-créées avec des créateurs",
    categorie: "Marketing d'influence",
    statut: "publie",
    periode: "De 2024 à 2025",
    resume:
      "Vidéos imaginées et tournées avec des créateurs TikTok de mon entourage, publiées sur leurs comptes. Cumulées, elles ont dépassé le million de vues.",
    details: [
      "Concepts construits avec chaque créateur, à partir de ce qui fonctionne sur son audience",
      "Je joue devant la caméra dans plusieurs d'entre elles",
      "Diffusion sur les comptes des créateurs, pas sur le mien",
      "Une série de vidéos sur plusieurs collaborations, plus d'un million de vues cumulées"
    ],
    tags: ["TikTok", "Influence", "Création de concept", "Acteur"],
    liens: [],
    image: "assets/img/logo-tiktok.png",
    logo: true,
    showreel: true,
    video: "assets/video/tiktok-noel.mp4",
    punch: "Faire tourner une vidéo sur l'audience de quelqu'un d'autre.",
    chiffre: "+1 M de vues"
  },
  {
    titre: "Tripiz, générateur de voyage par IA",
    categorie: "Web & IA",
    statut: "publie",
    periode: "2026",
    resume:
      "Application web qui construit un voyage sur mesure en dix secondes : on donne son point de départ, sa destination (ou « surprends-moi »), sa durée, le nombre de voyageurs et un budget, l'IA propose le reste.",
    details: [
      "Conception du parcours utilisateur et de l'interface, du premier écran au résultat",
      "Formulaire pensé pour aller au bout en quelques secondes plutôt qu'en dix champs",
      "Développé avec Lovable, sans écrire le code à la main"
    ],
    tags: ["Lovable", "IA", "Produit", "UX"],
    liens: [{ label: "Ouvrir Tripiz", url: "https://lovable.dev/preview/dU8EyivPXjfR9LJVmqQ3H3UpLoiRUDVD" }],
    image: "assets/img/tripiz.jpg",
    showreel: true,
    video: "",
    punch: "L'outil que je n'ai pas attendu que quelqu'un me construise.",
    chiffre: "Une appli IA"
  },
  {
    titre: "Pepperoni, site d'un restaurant italien",
    categorie: "Web & IA",
    statut: "publie",
    periode: "2026",
    resume:
      "Site vitrine complet pour une trattoria : identité, carte, avis clients et réservation en ligne.",
    details: [
      "Direction artistique et écriture des textes du site",
      "Parcours orienté vers un objectif unique : la réservation",
      "Développé avec Lovable, du brief à la mise en ligne"
    ],
    tags: ["Lovable", "Site vitrine", "Direction artistique", "Copywriting"],
    liens: [{ label: "Ouvrir Pepperoni", url: "https://lovable.dev/preview/JvilO7nMEnPxXNmXDkSAx1jk2C19QabU" }],
    image: "assets/img/pepperoni.webp",
    showreel: false,
    video: "",
    punch: "Un site vitrine entier, du brief à la mise en ligne.",
    chiffre: "Site complet"
  },
  {
    titre: "Solitariius, hackathon NIIS",
    categorie: "Gestion de projet",
    statut: "publie",
    periode: "Février 2026 · IRIIG / Dynergie",
    resume:
      "Projet lauréat du prix de la faisabilité à la Nuit de l'Innovation à Impact Solidaire, sur le thème de l'isolement, pour la Fédération Française pour les liens sociaux.",
    details: [
      "Idéation et cadrage du projet en équipe, en temps contraint",
      "Construction du modèle et démonstration de la faisabilité",
      "Pitch devant le jury, prix de la faisabilité remporté"
    ],
    tags: ["Hackathon", "Innovation sociale", "Pitch", "Prix"],
    liens: [
      { label: "Le post LinkedIn de la NIIS", url: "https://www.linkedin.com/feed/update/urn:li:activity:7434621770122317824/" }
    ],
    image: "assets/img/niis.jpg",
    showreel: true,
    video: "assets/video/niis.mp4",
    punch: "Une nuit pour imaginer un projet. On a gagné.",
    chiffre: "1ᵉʳ prix"
  },
  {
    titre: "Formats longs : lives Twitch et vidéos YouTube",
    categorie: "Création de contenu",
    statut: "publie",
    periode: "En cours",
    resume:
      "Production de formats longs, du cadrage éditorial à la diffusion, avec l'animation en direct et le montage.",
    details: [
      "Préparation et animation de lives",
      "Montage et habillage des vidéos",
      "Gestion de la communauté en direct"
    ],
    tags: ["Twitch", "YouTube", "Montage", "Animation"],
    liens: [], // chaînes volontairement non liées : elles sont sous un pseudo personnel
    lienMention: "Chaînes communiquées sur demande",
    image: "assets/img/twitch-youtube.png",
    logo: true,
    showreel: false,
    video: "",
    punch: "Tenir l'attention pendant deux heures, en direct.",
    chiffre: "Format long"
  }
];

/* ===========================================================
   ÉTUDE DE CAS : le projet raconté en profondeur
   =========================================================== */
const ETUDE = {
  kicker: "Étude de cas · X / Twitter",
  titre: "Le post que j'ai publié deux fois",
  chapo:
    "En quatre ans, j'ai publié 3 333 posts, qui totalisent plus de 25 millions d'impressions. Sur ces 25 millions, 5,8 viennent d'un seul d'entre eux. Voici ce que cet écart m'a appris, et pourquoi mon meilleur coup n'est pas celui qu'on croit.",
  chiffres: [
    { valeur: "5,8 M", label: "d'impressions pour le post d'origine" },
    { valeur: "2,2 M", label: "de vues pour sa republication, un an plus tard" },
    { valeur: "35 574", label: "« j'aime » la seconde fois" }
  ],
  blocs: [
    {
      titre: "Viser les gros comptes avant de viser le public",
      texte: [
        "Avant 2022, je publiais pour le plaisir des choses qui n'intéressaient personne. J'ai changé de méthode : des montages photo humoristiques, et surtout une cible précise.",
        "Ma première audience n'était pas le grand public, c'étaient les créateurs déjà installés, comme Yassencore. Un « j'aime » ou un partage de leur part faisait plus pour ma portée que n'importe quelle optimisation d'horaire. Je construisais mes posts pour eux ; l'audience est venue ensuite."
      ]
    },
    {
      titre: "Greffer l'humour sur un moment précis",
      texte: [
        "Le foot, l'actualité, le gaming. Ce qui marche chez moi, c'est de greffer un mème sur un moment que tout le monde vit au même instant : une action de match, une info du jour.",
        "L'autre moitié du travail est dans la langue. Le choix des mots fait la différence entre un post qui amuse et un post qu'on partage, et ça se travaille."
      ]
    },
    {
      titre: "Le même post, deux fois, à un an d'intervalle",
      texte: [
        "En photographiant simplement l'emploi du temps d'un ami, j'ai publié mon plus gros post : 5,8 millions d'impressions. Il a tourné partout, sur tous les réseaux, en story sur des pages humour suivies par des millions d'abonnés, avec des streamers qui réagissaient dessus en direct.",
        "Un an jour pour jour après sa publication, je l'ai republié en le citant, avec une information que personne n'avait : la principale de mon lycée avait passé trois mois à chercher qui l'avait écrit, sans jamais le découvrir.",
        "La date n'était pas un hasard. L'anniversaire du post lui donnait une raison d'exister une seconde fois, et l'anecdote lui donnait une fin. Résultat : 2,2 millions de vues, 35 574 « j'aime » et 1 392 partages. Le même contenu, une histoire en plus, et le bon jour."
      ]
    },
    {
      titre: "Ce que 3 333 posts m'ont appris",
      texte: [
        "Un contenu qui a marché n'est pas mort. Le republier avec un angle inédit, à une date qui lui donne une raison de revenir, coûte dix minutes et peut refaire le score du premier coup.",
        "Le temps passé ne prédit rien. J'ai des montages à deux heures de travail qui n'ont rien fait, et des posts lâchés en trente secondes qui ont explosé.",
        "Le volume ne sert pas à faire du bruit, il sert à trouver. L'essentiel de ma portée vient d'une poignée de contenus ; le reste, c'est ce qu'il a fallu publier pour les dénicher. Il ne faut pas se brider : les meilleures idées sont souvent celles qu'on aurait jetées."
      ]
    }
  ],
  chute: {
    titre: "Ce que j'en fais pour une marque",
    texte:
      "Quand je travaille pour une marque, je ne cherche pas à être drôle : je cherche à être le reflet de ce qu'elle veut être. Si elle veut faire rire, je fais rire. Si elle doit rester sérieuse, je reste sérieux. Le ton lui appartient. Ce que j'apporte, c'est de savoir ce qui fait réagir une audience."
  }
};

/* ===========================================================
   COMPÉTENCES
   =========================================================== */
const COMPETENCES = [
  {
    famille: "Social Media & Marketing",
    icone: "megaphone",
    items: [
      "Création et stratégie de contenu",
      "Marketing d'influence",
      "Community management",
      "Formats longs (Twitch, YouTube)",
      "Analyse des performances"
    ]
  },
  {
    famille: "Création de contenu",
    icone: "camera",
    items: ["Photoshop", "Premiere Pro", "CapCut", "Canva", "Régie multicaméra"]
  },
  {
    famille: "Gestion de projet",
    icone: "target",
    items: ["Planification", "Prévisions budgétaires", "GANTT", "RACI", "Pitch"]
  },
  {
    famille: "IA & création de sites web",
    icone: "spark",
    items: [
      "Création de sites et d'applis web avec Lovable",
      "Prompt engineering",
      "Création d'assistants IA",
      "WordPress et site e-commerce",
      "Méthode de rédaction avec l'IA"
    ]
  }
];

/* ===========================================================
   PARCOURS : type : "formation" ou "experience"
   =========================================================== */
const PARCOURS = [
  {
    type: "experience",
    periode: "Février 2026",
    titre: "Nuit de l'Innovation à Impact Solidaire (NIIS)",
    lieu: "IRIIG / Dynergie, Lyon",
    points: [
      "Vainqueur du prix de la faisabilité avec le projet Solitariius",
      "Hackathon sur le thème de l'isolement pour la Fédération Française pour les liens sociaux"
    ]
  },
  {
    type: "experience",
    periode: "Septembre à décembre 2025",
    titre: "Régisseur studio (stage)",
    lieu: "Supernatifs, agence social media a Lyon",
    points: [
      "Cocréation stratégique et incarnation de formats vidéo micro-trottoirs (Cristaline, PomPotes, SEB…)",
      "Production exécutive et régie technique multicaméra",
      "Optimisation des processus de gestion de la TVA et des flux logistiques"
    ]
  },
  {
    type: "experience",
    periode: "Janvier à juillet 2025",
    titre: "Équipier polyvalent",
    lieu: "McDonald's, Écully",
    points: ["Encaissement et gestion de la caisse", "Gestion de la clientèle"]
  },
  {
    type: "formation",
    periode: "2026 à 2027",
    titre: "Bachelor in Business, 3ᵉ année",
    lieu: "ESDES, Lyon 2",
    points: [
      "Stratégie et développement commercial : business plan, veille stratégique, doing business abroad",
      "Digital et relation client : transformation digitale, expérience client 360",
      "Management et responsabilité : business éthique, RSE, sustainable future"
    ]
  },
  {
    type: "formation",
    periode: "2024 à 2026",
    titre: "Bachelor numérique, entrepreneuriat et management de projets",
    lieu: "L'École LDLC, Limonest",
    points: [
      "Entrepreneuriat et gestion : business plan, finance, marketing, droit des affaires, WordPress, e-commerce",
      "Technologies numériques : programmation, objets connectés, intelligence artificielle, bases de données",
      "Humanités : gestion de projet, méthodologie, études quantitatives et qualitatives"
    ]
  },
  {
    type: "formation",
    periode: "2024",
    titre: "Baccalauréat général, spécialités mathématiques et sciences de l'ingénieur",
    lieu: "Lycée Jean Perrin, Lyon",
    points: []
  }
];

const LANGUES = [
  { langue: "Français", niveau: "Langue maternelle", pourcentage: 100 },
  { langue: "Anglais", niveau: "B2", pourcentage: 70 },
  { langue: "Espagnol", niveau: "A2", pourcentage: 35 }
];

const SOFTSKILLS = [
  "Adaptabilité",
  "Créativité",
  "Convivialité",
  "Empathie",
  "Organisation",
  "Autonomie"
];

const INTERETS = ["Réseaux sociaux", "Création audiovisuelle", "Football", "Gaming", "Musique"];
