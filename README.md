# Portfolio de Robinson Roger

Site portfolio statique en HTML, CSS et JS, sans installation requise, pour une recherche
d'alternance en marketing.

## Ouvrir le site en local

Double-cliquer sur `index.html`. C'est tout.

## Modifier le contenu

**Un seul fichier à toucher : `assets/js/data.js`.**
Tout le site (textes, chiffres, projets, compétences, parcours) est généré à partir de ce fichier.

### Ajouter une réalisation

Copier un bloc existant dans le tableau `REALISATIONS` :

```js
{
  titre: "Nom du projet",
  categorie: "Social Media",        // Social Media | Création de contenu |
                                    // Marketing d'influence | Web & IA |
                                    // Gestion de projet
  statut: "publie",                 // "publie" = en ligne | "prive" = non publié
  periode: "2025",
  resume: "Une ou deux phrases qui résument le projet et son résultat.",
  details: ["Ce que j'ai fait", "Un résultat chiffré", "Un outil utilisé"],
  tags: ["TikTok", "Montage"],
  liens: [                          // autant de liens que voulu, [] si aucun
    { label: "Voir la vidéo", url: "https://…" }
  ],
  image: ""                         // ex. "assets/img/mon-projet.jpg"
}
```

Une catégorie inédite crée son propre filtre : il suffit de l'écrire dans `categorie`.

Les filtres en haut de la section se construisent automatiquement à partir des catégories,
et les compteurs se mettent à jour seuls.

## Fichiers à déposer

| Fichier | Emplacement | Effet |
|---|---|---|
| Photo de profil | `assets/img/photo.jpg` | Remplace les initiales dans le hero |
| CV à jour | `assets/files/CV-Robinson-Roger.pdf` | Bouton « Télécharger mon CV » |
| Visuels de projets | `assets/img/` | À référencer dans le champ `image` |

Si la photo ou le CV n'existe pas, le site s'adapte automatiquement (initiales affichées,
bouton CV masqué) et rien ne casse.

## Mise en ligne sur GitHub Pages

1. Créer un dépôt public sur GitHub, par exemple `portfolio`.
2. Y déposer **le contenu** de ce dossier (pas le dossier lui-même) : `index.html` doit être
   à la racine du dépôt.
3. Dans le dépôt : **Settings → Pages → Source : Deploy from a branch → Branch : `main` / `root`**.
4. Le site est en ligne au bout d'une minute à l'adresse
   `https://<pseudo-github>.github.io/portfolio/`.

Le fichier `.nojekyll` est déjà présent : il évite que GitHub ignore certains fichiers.

Pour utiliser l'adresse courte `https://<pseudo-github>.github.io/`, nommer le dépôt
`<pseudo-github>.github.io`.

## Structure

```
index.html              structure des sections
assets/css/style.css    toute la mise en forme
assets/js/data.js       ← LE CONTENU (à modifier)
assets/js/main.js       rendu et interactions (ne pas toucher)
assets/img/             photo et visuels
assets/files/           CV en PDF
```
