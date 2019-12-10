[
    {
        "macro": "A",
        "left": "INDEXATION_LANGUE",
        "right": "0",
        "start": 10,
        "end": 35
    },
    {
        "macro": "A",
        "left": "NOM_SITE_REF",
        "right": "",
        "start": 47,
        "end": 66
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "FR",
            "LANGUE"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TITLE_INDEX",
                "right": "@@AGENCE_NOM@@ vente et location de maisons et appartements sur Pau, @@AGENCE_VILLE@@, Sauvagnon, Serres Castet...",
                "start": 96,
                "end": 228
            }
        ],
        "start": 76,
        "end": 237
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "FR",
            "LANGUE"
        ],
        "content": [
            {
                "macro": "A",
                "left": "DESCRIPTION_INDEX",
                "right": "L'immobilier &agrave; Pau avec l'agence immobili&egrave;re @@AGENCE_NOM@@ &agrave; @@AGENCE_VILLE@@ : Annonces immobilieres de vente et location de maisons, appartements sur @@AGENCE_VILLE@@, Pau, Sauvagnon, Serres Castet et leurs environs",
                "start": 265,
                "end": 528
            }
        ],
        "start": 245,
        "end": 537
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "FR",
            "LANGUE"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SLOGAN_INDEX",
                "right": "<span class=\"text-shadow-1 h2-like\">Achat, vente, location, financement</span>",
                "start": 563,
                "end": 660
            }
        ],
        "start": 543,
        "end": 669
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "FR",
            "LANGUE"
        ],
        "content": [
            {
                "macro": "A",
                "left": "PHRASEROTATION1",
                "right": "",
                "start": 695,
                "end": 717
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION2",
                "right": "",
                "start": 720,
                "end": 742
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION3",
                "right": "",
                "start": 745,
                "end": 767
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION4",
                "right": "",
                "start": 770,
                "end": 792
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION5",
                "right": "",
                "start": 795,
                "end": 817
            }
        ],
        "start": 675,
        "end": 826
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "FR",
            "LANGUE"
        ],
        "content": [
            {
                "macro": "A",
                "left": "H1_INDEX",
                "right": "<span class=\"text-shadow-1 bigger\">1er réseau indépendant du bearn</span>",
                "start": 854,
                "end": 942
            }
        ],
        "start": 834,
        "end": 951
    },
    {
        "macro": "A",
        "left": "H2_INDEX_MODULE",
        "right": "@@LG:NOSEXCLUSIVITES pcase@@",
        "start": 957,
        "end": 1007
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "0",
            "MULTIAGENCES"
        ],
        "content": [
            {
                "macro": "A",
                "left": "H2_INDEX_AGENCE",
                "right": "@@LG:BIENVENUESUR pcase@@ @@AGENCE_NOM@@",
                "start": 1042,
                "end": 1104
            }
        ],
        "start": 1017,
        "end": 1113
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "1",
            "MULTIAGENCES"
        ],
        "content": [
            {
                "macro": "IF",
                "test": [
                    "=",
                    "FR",
                    "LANGUE"
                ],
                "content": [
                    {
                        "macro": "A",
                        "left": "H2_INDEX_AGENCE",
                        "right": "Notre expérience immobilière à votre service",
                        "start": 1163,
                        "end": 1229
                    }
                ],
                "start": 1142,
                "end": 1239
            }
        ],
        "start": 1117,
        "end": 1248
    },
    {
        "macro": "A",
        "left": "BLOC_AGENCE_INDEX",
        "right": "0",
        "start": 1254,
        "end": 1279
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "FR",
            "LANGUE"
        ],
        "content": [
            {
                "macro": "A",
                "left": "PHRASE_BLOCAGENCE_INDEX",
                "right": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in mauris non tellus rhoncus placerat. Vestibulum pharetra erat eu metus sollicitudin aliquet. Aliquam sit amet justo diam, nec rutrum ligula. Ut facilisis, velit ac ornare venenatis, risus tortor sollicitudin dui, et dictum lacus orci eget nisi. Praesent semper consequat mauris quis ultrices. Sed pulvinar tincidunt volutpat. Proin lacus magna, gravida non tempor a, sodales ut diam. Ut lobortis vehicula nibh et tempor. Morbi vel risus dui, vel placerat quam. Aliquam erat volutpat. Aliquam odio nisl, posuere a aliquet ut, tincidunt quis justo. Nullam sed nunc nec tortor vestibulum blandit in a nulla. Nulla facilisi. Nulla vel est urna. Nam viverra, arcu ac euismod sagittis, urna velit semper nulla, vel porta arcu ipsum ac neque. Nulla tempor commodo euismod.",
                "start": 1301,
                "end": 2164
            }
        ],
        "start": 1281,
        "end": 2173
    },
    {
        "macro": "A",
        "left": "ENCART_TXT_HOME",
        "right": "1",
        "start": 2181,
        "end": 2204
    },
    {
        "macro": "A",
        "left": "POSITION_ENCART_TXT_HOME",
        "right": "1",
        "start": 2208,
        "end": 2240
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "FR",
            "LANGUE"
        ],
        "content": [
            {
                "macro": "A",
                "left": "ENCART_TXT_HOME_CONTENU",
                "right": "<div class=\"row-fluid\">\r\n\t\t<div class=\"span4 padding-top-20\">\r\n\t\t\t<img src=\"images/immo64.jpg\" />\r\n\t\t</div>\r\n\t\t<div class=\"span8\">\r\n\t\t\t<h2 class=\"margin-top-30\">GROUPE IMMO 64, 7 agences immobilières sur Pau et sa région.</h2>\r\n\t\t\t<p>Premier réseau immobilier indépendant du Béarn, GROUPE IMMO 64 dispose de 7 agences immobilières situées à Pau(3), Gan, Jurançon, Lescar, <a href=\"http://www.immo64.fr/agence-immobiliere/serres-castet-64121/groupe-immo-64/454363.htm\">Serres Castet</a> et vous propose un service de  transactions immobilières et de location. Découvrez sur ce site, notre sélection d’annonces immobilières sur Pau et sa région, parmi un choix de maisons, villas et appartements, terrains constructibles et propriétés.</p>\r\n\t\t\t<p><a href=\"/agences,liste.htm\" class=\"@@TYPEBOUTON@@ @@TYPEBOUTONACTION@@ btn-important\">Découvrir notre réseau</a></p>\r\n\t\t</div>\r\n\t</div>",
                "start": 2264,
                "end": 3181
            }
        ],
        "start": 2244,
        "end": 3190
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLES_REF",
        "right": "0",
        "start": 3198,
        "end": 3223
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_1",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 3227,
        "end": 3355
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_2",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 3357,
        "end": 3485
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_3",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 3487,
        "end": 3615
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_4",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 3617,
        "end": 3745
    },
    {
        "macro": "A",
        "left": "MICRO_DONNES_PRIX",
        "right": "1",
        "start": 3753,
        "end": 3778
    },
    {
        "macro": "A",
        "left": "INDEXATION_ESTIMATION",
        "right": "0",
        "start": 3786,
        "end": 3815
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "487807",
            "REP",
            "1"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TITLE_ESTIMATION",
                "right": "",
                "start": 3843,
                "end": 3866
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_ESTIMATION",
                "right": "",
                "start": 3870,
                "end": 3899
            },
            {
                "macro": "A",
                "left": "H1_ESTIMATION",
                "right": "",
                "start": 3903,
                "end": 3923
            },
            {
                "macro": "A",
                "left": "PHRASE_ESTIMATION",
                "right": "",
                "start": 3927,
                "end": 3951
            }
        ],
        "start": 3819,
        "end": 3960
    },
    {
        "macro": "A",
        "left": "ESTIMATIONPUBTITLE",
        "right": "",
        "start": 3968,
        "end": 3993
    },
    {
        "macro": "A",
        "left": "ESTIMATIONPUBTXT",
        "right": "",
        "start": 3997,
        "end": 4020
    },
    {
        "macro": "A",
        "left": "TITLE_AGENCES_LISTE_ESTIMATION",
        "right": "",
        "start": 4032,
        "end": 4069
    },
    {
        "macro": "A",
        "left": "DESCRIPTION_AGENCES_LISTE_ESTIMATION",
        "right": "",
        "start": 4073,
        "end": 4116
    },
    {
        "macro": "A",
        "left": "H1_AGENCESESTIMATION",
        "right": "",
        "start": 4121,
        "end": 4148
    },
    {
        "macro": "A",
        "left": "H2_AGENCESESTIMATION",
        "right": "",
        "start": 4152,
        "end": 4179
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_ESTIMATION_CONTENU",
        "right": "",
        "start": 4183,
        "end": 4222
    },
    {
        "macro": "A",
        "left": "INDEXATION_OUTILS",
        "right": "0",
        "start": 4230,
        "end": 4255
    },
    {
        "macro": "A",
        "left": "INDEXATION_REALISATION",
        "right": "0",
        "start": 4263,
        "end": 4293
    },
    {
        "macro": "A",
        "left": "INDEXATION_RESPONSIVE",
        "right": "0",
        "start": 4301,
        "end": 4330
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "FR",
            "LANGUE"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TITLE_GESTION",
                "right": "",
                "start": 4356,
                "end": 4376
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_GESTION",
                "right": "Notre gestion immobiliere",
                "start": 4379,
                "end": 4430
            },
            {
                "macro": "A",
                "left": "H1_GESTION",
                "right": "",
                "start": 4433,
                "end": 4450
            }
        ],
        "start": 4336,
        "end": 4459
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "FR",
            "LANGUE"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TITLE_SYNDIC",
                "right": "",
                "start": 4485,
                "end": 4504
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_SYNDIC",
                "right": "",
                "start": 4507,
                "end": 4532
            },
            {
                "macro": "A",
                "left": "H1_SYNDIC",
                "right": "",
                "start": 4535,
                "end": 4551
            }
        ],
        "start": 4465,
        "end": 4560
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "FR",
            "LANGUE"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TITLE_EXPERTISE",
                "right": "",
                "start": 4586,
                "end": 4608
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_EXPERTISE",
                "right": "",
                "start": 4611,
                "end": 4639
            },
            {
                "macro": "A",
                "left": "H1_EXPERTISE",
                "right": "",
                "start": 4642,
                "end": 4661
            }
        ],
        "start": 4566,
        "end": 4670
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "277683",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TITLE_AGENCE",
                "right": "Agence immobilière à Pau spécialiste de l'immobilier à Pau",
                "start": 4707,
                "end": 4784
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_AGENCE",
                "right": "Agence spécialiste de l'immobilier sur Pau, nous vous accompagnons tout au long de votre projet immobilier sur Pau et ses environs",
                "start": 4790,
                "end": 4945
            },
            {
                "macro": "A",
                "left": "H1_AGENCE",
                "right": "Agence immobilière Pau",
                "start": 4951,
                "end": 4989
            },
            {
                "macro": "A",
                "left": "H2_AGENCE",
                "right": "Cabinet immobilier Pau",
                "start": 4995,
                "end": 5033
            },
            {
                "macro": "A",
                "left": "SLOGAN_AGENCE",
                "right": "Agence immobilière spécialiste de l'immobilier à Pau",
                "start": 5039,
                "end": 5111
            }
        ],
        "start": 4678,
        "end": 5120
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "454363",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SLOGAN_AGENCE",
                "right": "<p>Le <a href=\"http://www.immo64.fr/immobilier/tout/immo-serres-castet-64/\">marché immobilier au nord de Pau</a>, au-delà de l'autoroute A64, est suffisamment riche et diversifié pour s'adapter  aux besoins de logement d'un grand nombre de foyers qui souhaitent s'installer  à une distance raisonnable de l'agglomération. <br />\r\n  L'agence Immo64 de Serres-Castet couvre  une vaste zone de compétence qui s'étend de <a href=\"http://www.bougarber.fr/\">Bougarber</a> et <a href=\"http://uzein.fr/\">Uzein</a>, à l'ouest,  jusqu'à la commune de <a href=\"http://www.mairie-morlaas.fr/page.asp?type=S&savoirplus=86&idsection=86\">Morlaas</a> à l'est. <br />\r\n  Le réseau Immo64 vous propose un grand  nombre de villas, maisons, appartements et terrains à vendre au nord de Pau.</p>",
                "start": 5169,
                "end": 5963
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 5973,
                "end": 5997
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<p>L'agence Immo64 de Serres-Castet est  heureuse de vous accueillir dans ses locaux du <a href=\"\">centre commercial Arena</a> ! </p>\r\n<p>Notre établissement vous propose, depuis  2012, un accompagnement personnalisé et sur mesure pour tout projet  d'achat-vente, de location ou de financement d'un bien immobilier à Serres-Castet et sur un vaste secteur au nord de Pau, allant de Bourgarber à Morlaas. </p>\r\n<p>Vous découvrirez dans notre vitrine un <a href=\"http://www.immo64.fr/immobilier/tout/immo-serres-castet-64/\">large choix de biens résidentiels à la vente ou à la location</a>, dont des maisons  de ville, des villas de prestige, des studios et appartements ou encore des terrains à bâtir.</p>\r\n<p>Notre agence de Serres-Castet bénéficie  de la force du réseau local Immo64, présent à travers à toute la région paloise  grâce à ses six implantations. </p>\r\n<p>Nos prestations, fondées sur des valeurs de proximité et de professionnalisme,incluent au besoin le prêt d'un camion de déménagement ou encore un suivi jusqu'à l'acte de vente !</p>",
                "start": 6005,
                "end": 7087
            }
        ],
        "start": 5144,
        "end": 7096
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "277683",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SEO_PORTEFEUILLE",
                "right": "1",
                "start": 7133,
                "end": 7157
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_1",
                "right": "<a href=\"http://www.immo64.fr/immobilier/vente-fonds-de-commerce/ville/bien-boutique/\">Nos Ventes de Fonds de Commerce</a>",
                "start": 7163,
                "end": 7324
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_2",
                "right": "<a href=\"#\"></a>",
                "start": 7327,
                "end": 7382
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_3",
                "right": "<a href=\"#\"></a>",
                "start": 7385,
                "end": 7440
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_4",
                "right": "<a href=\"#\"></a>",
                "start": 7443,
                "end": 7498
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_5",
                "right": "<a href=\"#\"></a>",
                "start": 7501,
                "end": 7556
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_6",
                "right": "<a href=\"#\"></a>",
                "start": 7559,
                "end": 7614
            }
        ],
        "start": 7104,
        "end": 7623
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "277683",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 7658,
                "end": 7686
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/Groupe-Immo-64-Pau/157893964280522",
                "start": 7692,
                "end": 7786
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "https://twitter.com/GroupeImmo64",
                "start": 7789,
                "end": 7849
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/101957357187349626163/about#101957357187349626163/about",
                "start": 7852,
                "end": 7963
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "",
                "start": 7966,
                "end": 7994
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 7997,
                "end": 8030
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "",
                "start": 8033,
                "end": 8065
            }
        ],
        "start": 7631,
        "end": 8074
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "471084",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "0",
                "start": 8109,
                "end": 8136
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "104269285648801442131",
                "start": 8142,
                "end": 8196
            }
        ],
        "start": 8082,
        "end": 8205
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "454363",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 8240,
                "end": 8268
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/Groupe-Immo-64-Pau/157893964280522",
                "start": 8274,
                "end": 8368
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "https://twitter.com/GroupeImmo64",
                "start": 8371,
                "end": 8431
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/112702355276398377831",
                "start": 8434,
                "end": 8511
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "",
                "start": 8514,
                "end": 8542
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 8545,
                "end": 8578
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "",
                "start": 8581,
                "end": 8613
            }
        ],
        "start": 8213,
        "end": 8622
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "454363",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 8657,
                "end": 8684
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "112702355276398377831",
                "start": 8690,
                "end": 8744
            }
        ],
        "start": 8630,
        "end": 8753
    },
    {
        "macro": "A",
        "left": "TITLE_AGENCES_LISTE",
        "right": "",
        "start": 8761,
        "end": 8787
    },
    {
        "macro": "A",
        "left": "DESCRIPTION_AGENCES_LISTE",
        "right": "",
        "start": 8791,
        "end": 8823
    },
    {
        "macro": "A",
        "left": "H1_AGENCESLISTE",
        "right": "GROUPE IMMO 64, tous les métiers de l’immobilier sur Pau et le Béarn.",
        "start": 8828,
        "end": 8919
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_TXT",
        "right": "1",
        "start": 8925,
        "end": 8950
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_CONTENU",
        "right": "<div class=\"pagination-justify\">\r\n    <img src=\"images/img-seo.jpg\" class=\"pull-left margin-right-15 margin-top-10\">\r\n    <p>Spécialiste des annonces immobilières à Pau et dans le reste du Béarn, le Groupe Immo 64 s’impose depuis 1997 comme le plus important réseau indépendant d’agences immobilières dans la région. Il propose un accompagnement constant, rigoureux et professionnel dans le domaine de l’achat-vente, de l’estimation et de la location.</p>\r\n    <h2 class=\"typo-action margin-top-20\">Sept agences partageant les mêmes valeurs fondamentales</h2>\r\n    <p>Outre les trois agences situées à Pau, dont une dédiée exclusivement à la location, le Groupe Immo 64 a su développer progressivement sa présence à l’extérieur de la ville afin de couvrir efficacement l’ensemble du Béarn. Les quatre agences Immo 64 de Gan, Jurançon, Lescar et <a href=\"http://www.immo64.fr/agence-immobiliere/serres-castet-64121/groupe-immo-64/454363.htm\">Serres-Castet</a> ont toutes construit leur succès et leur réputation sur une expertise poussée du marché local et des métiers de l’immobilier. Le réseau de nos agences adhère par ailleurs à la fédération nationale de l’immobilier (FNAIM) et fait bénéficier ses clients d’un accès privilégié à l’intégralité des biens en vente chez nos confrères via le fichier commun AMEPI.</p>\r\n    <h2 class=\"typo-action margin-top-20\">Du terrain en friche à la villa de prestige</h2>\r\n    <p>La variété de l’immobilier à Pau et dans les environs se reflète fidèlement dans la vitrine des biens en vente ou à louer chez Groupe Immo 64. Studios étudiants, appartements T2, T3 ou T4, maisons béarnaises typiques, villas exclusives mais aussi de nombreux terrains à bâtir et des garages ou parkings constituent une offre riche et diversifiée, idéale pour tous les particuliers souhaitant affiner leurs critères de sélection. En-dehors des transactions, Groupe Immo 64 assure des services de location particulièrement performants et offre par ailleurs un large éventail de biens locatifs éligibles à une défiscalisation de type Pinel.</p>\r\n    <h2 class=\"typo-action margin-top-20\">Les atouts d’un professionnel complet et bien implanté</h2>\r\n    <p>Les conseillers du Groupe Immo 64 mettent tout en œuvre pour valoriser leurs annonces immobilières à Pau et dans le reste du Béarn, via notamment des publications systématiques sur les sites Internet les plus fréquentés. Le respect du client, le professionnalisme et la qualité d’écoute sont au cœur de notre démarche commerciale : afin d’accompagner chaque client jusqu’au bout de son projet, nous pouvons vous proposer au besoin une mise en relation privilégiée avec d’autres professionnels du secteur comme des courtiers en crédit immobilier ou encore des artisans du bâtiment particulièrement fiables.</p>    \r\n</div>",
        "start": 8952,
        "end": 11778
    },
    {
        "macro": "A",
        "left": "SLOGAN_FOOTER",
        "right": "",
        "start": 11788,
        "end": 11808
    },
    {
        "macro": "A",
        "left": "TITLE_1_FOOTER",
        "right": "",
        "start": 11816,
        "end": 11837
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_1_FOOTER_1",
        "right": "",
        "start": 11841,
        "end": 11869
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_2_FOOTER_1",
        "right": "",
        "start": 11871,
        "end": 11899
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_3_FOOTER_1",
        "right": "",
        "start": 11901,
        "end": 11929
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_4_FOOTER_1",
        "right": "",
        "start": 11931,
        "end": 11959
    },
    {
        "macro": "INIT",
        "left": "CATWORDPRESS",
        "right": "33307",
        "start": 11967,
        "end": 11994
    },
    {
        "macro": "toParse",
        "content": []
    }
]