voici comment utiliser le module estimation :

pour l'appeler : $jq('votre container').estimation(options);

Voici la liste des options disponible :
{
    server: url du server qui heberge les ws
    preEstim: lien vers le ws de faisabilite estimation,
    sauvegardeAppart: lien vers le ws d'estimation appartement,
    sauvegardeMaison: lien vers le ws d'estimation maison,,
    estimAppart: lien vers le ws de sauvegarde appartement,,
    estimMaison: lien vers le ws de sauvegarde maison,,
    charger:  lien vers le ws de chargement des données
    autocomplete: lien vers le ws d'autocomplete des localite,
    type: type de site ( "SL", "LCI" ou "poliris"),
    color: couleur du site dans lequel s'affiche le formulaire (marche avec les couleur hexadecimal : #333333 ou  nomme : blue),
    selectType: preselection du formulaire (1 pour appartement ou 2 pour maison),
    text:{
        step0: {
            title: titre sur la page d'arrive,*
            intro: paragraphe d'introduction sur la page d'arriver (ecran0)*
        },
        contact: {
            par1: premier paragraphe sur la page de contact (ecran10),*
            par2: deuxieme paragraphe sur la page de contact (ecran10),*
            CTA: text du bouton d'action (ecran10)*
        },
        noestim: {
            par1: premier paragraphe sur la page de contact sans estimation (ecran13),*
            par2: deuxieme paragraphe sur la page de contact sans estimation (ecran13)*
        }
    },
     champsObligatoire: les champs SituationInternaute et DelaiVenteInternaute sont il obligatoire ? (true\false),
     ABtest: le site utilise kameleoon pour l'AB test (true | false)
}

* pour mettre le texte a la couleur du site il suffit de mettre le texte desiré a l'interieur d'un <span class="brandColor"></span>