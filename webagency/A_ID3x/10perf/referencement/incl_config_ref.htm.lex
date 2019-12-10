[
    {
        "macro": "A",
        "left": "INDEXATION_LANGUE",
        "right": "0",
        "start": 8,
        "end": 33
    },
    {
        "macro": "A",
        "left": "NOM_SITE_REF",
        "right": "",
        "start": 45,
        "end": 64
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
                "right": "",
                "start": 94,
                "end": 112
            }
        ],
        "start": 74,
        "end": 121
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
                "right": "",
                "start": 149,
                "end": 173
            }
        ],
        "start": 129,
        "end": 182
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
                "right": "<marquee class=\"hidden-phone typo-marron big bold font-title text-shadow-1\">\r\n\t\t\t\t<!--<img src=\"images/bike.png\" class=\"margin-right-10\"> \r\n\t\t\t\tRoulez avec IMMOVAL en exclusivité un vélo pour toute transaction voir conditions en agence - -->\r\n\t</marquee>",
                "start": 208,
                "end": 492
            }
        ],
        "start": 188,
        "end": 504
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
                "right": "<div class=\"titre-accueil typo-white bold text-shadow-1 relative z25 pagination-right\">Depuis 1972 ... l'immobilier , nous en avons fait toute une histoire</div>\r\n\t<div class=\"sous-titre-accueil big typo-action bold text-shadow-1 relative z25 pagination-right padding-bottom-25\">Pourquoi ne pas continuer à l'écrire ensemble ? </div>",
                "start": 532,
                "end": 886
            }
        ],
        "start": 512,
        "end": 895
    },
    {
        "macro": "A",
        "left": "H2_INDEX_MODULE",
        "right": "@@LG:TITRECOEUR pcase@@ @@LG: lcase@@",
        "start": 901,
        "end": 960
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
                "start": 995,
                "end": 1057
            }
        ],
        "start": 970,
        "end": 1066
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
                        "start": 1116,
                        "end": 1182
                    }
                ],
                "start": 1095,
                "end": 1192
            }
        ],
        "start": 1070,
        "end": 1201
    },
    {
        "macro": "A",
        "left": "BLOC_AGENCE_INDEX",
        "right": "0",
        "start": 1207,
        "end": 1232
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
                "start": 1254,
                "end": 2117
            }
        ],
        "start": 1234,
        "end": 2126
    },
    {
        "macro": "A",
        "left": "ENCART_TXT_HOME",
        "right": "0",
        "start": 2134,
        "end": 2157
    },
    {
        "macro": "A",
        "left": "POSITION_ENCART_TXT_HOME",
        "right": "1",
        "start": 2161,
        "end": 2193
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
                "right": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in mauris non tellus rhoncus placerat. Vestibulum pharetra erat eu metus sollicitudin aliquet. Aliquam sit amet justo diam, nec rutrum ligula. Ut facilisis, velit ac ornare venenatis, risus tortor sollicitudin dui, et dictum lacus orci eget nisi. Praesent semper consequat mauris quis ultrices. Sed pulvinar tincidunt volutpat. Proin lacus magna, gravida non tempor a, sodales ut diam. Ut lobortis vehicula nibh et tempor. Morbi vel risus dui, vel placerat quam. Aliquam erat volutpat. Aliquam odio nisl, posuere a aliquet ut, tincidunt quis justo. Nullam sed nunc nec tortor vestibulum blandit in a nulla. Nulla facilisi. Nulla vel est urna. Nam viverra, arcu ac euismod sagittis, urna velit semper nulla, vel porta arcu ipsum ac neque. Nulla tempor commodo euismod.</p>",
                "start": 2217,
                "end": 3087
            }
        ],
        "start": 2197,
        "end": 3096
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLES_REF",
        "right": "0",
        "start": 3104,
        "end": 3129
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_1",
        "right": "<a href=\"http://v5-londres.urlprovisoire.com.x-ext.poliris.net/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 3133,
        "end": 3314
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_2",
        "right": "<a href=\"http://v5-londres.urlprovisoire.com.x-ext.poliris.net/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 3316,
        "end": 3497
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_3",
        "right": "<a href=\"http://v5-londres.urlprovisoire.com.x-ext.poliris.net/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 3499,
        "end": 3680
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_4",
        "right": "<a href=\"http://v5-londres.urlprovisoire.com.x-ext.poliris.net/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 3682,
        "end": 3863
    },
    {
        "macro": "A",
        "left": "MICRO_DONNES_PRIX",
        "right": "1",
        "start": 3871,
        "end": 3896
    },
    {
        "macro": "A",
        "left": "INDEXATION_ESTIMATION",
        "right": "0",
        "start": 3904,
        "end": 3933
    },
    {
        "macro": "A",
        "left": "INDEXATION_OUTILS",
        "right": "0",
        "start": 3941,
        "end": 3966
    },
    {
        "macro": "A",
        "left": "INDEXATION_REALISATION",
        "right": "0",
        "start": 3974,
        "end": 4004
    },
    {
        "macro": "A",
        "left": "INDEXATION_RESPONSIVE",
        "right": "0",
        "start": 4012,
        "end": 4041
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
                "start": 4067,
                "end": 4087
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_GESTION",
                "right": "Notre gestion immobiliere",
                "start": 4090,
                "end": 4141
            },
            {
                "macro": "A",
                "left": "H1_GESTION",
                "right": "@@LG:LIEN:GESTLOC pcase@@",
                "start": 4144,
                "end": 4186
            }
        ],
        "start": 4047,
        "end": 4195
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
                "start": 4221,
                "end": 4240
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_SYNDIC",
                "right": "",
                "start": 4243,
                "end": 4268
            },
            {
                "macro": "A",
                "left": "H1_SYNDIC",
                "right": "",
                "start": 4271,
                "end": 4287
            }
        ],
        "start": 4201,
        "end": 4296
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
                "start": 4322,
                "end": 4344
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_EXPERTISE",
                "right": "",
                "start": 4347,
                "end": 4375
            },
            {
                "macro": "A",
                "left": "H1_EXPERTISE",
                "right": "",
                "start": 4378,
                "end": 4397
            }
        ],
        "start": 4302,
        "end": 4406
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
                "left": "TITLE_AGENCE",
                "right": "",
                "start": 4443,
                "end": 4462
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_AGENCE",
                "right": "",
                "start": 4468,
                "end": 4493
            },
            {
                "macro": "A",
                "left": "H1_AGENCE",
                "right": "",
                "start": 4499,
                "end": 4515
            },
            {
                "macro": "A",
                "left": "H2_AGENCE",
                "right": "",
                "start": 4521,
                "end": 4537
            },
            {
                "macro": "A",
                "left": "SLOGAN_AGENCE",
                "right": "<p class=\"pagination-justify\"><span class=\"typo-touch\">IMMOVAL</span> poursuit un développement continu fondé sur des valeurs fortes : confiance, clarté, rigueur, professionnalisme</p>\t\t\r\n\t\t<p class=\"pagination-justify\"><span class=\"typo-touch\">IMMOVAL</span> est présent dans les principaux domaines de l’immobilier, avec une même volonté : être proche de ses clients et allier transparence, compétence, innovation et qualité de service</p>\t\t\r\n\t\t<p class=\"pagination-justify\">Les consultants d’IMMOVAL, cultivent une relation privilégiée avec leurs interlocuteurs,  veillent à apporter un conseil, une expertise ainsi qu’une parfaite connaissance du marché ciblé.</p>\t\t\r\n\t\t<p class=\"pagination-justify\">Véritable partenaire de votre projet d’achat, de location ou de vente, nous construisons votre accompagnement de façon durable.</p>\t\t\r\n\t\t<p class=\"pagination-justify\">Nos clients font appel à notre savoir- faire pour prendre en charge la réalisation de leur projet d’achat ou de vente, en toute confiance.</p>\t\t\r\n\t\t<p class=\"pagination-justify\">Certains de nos clients, dont le temps ne permet pas une implication totale dans leurs démarches (distance, emploi du temps..), nous faisons tout le nécessaire pour conquérir, garder leurs confiances et leurs exigences avec un travail soigné et appliqué.</p>\r\n\t\t<p class=\"pagination-justify\">Nos consultants étudieront vos propositions et vos envies pour vous garantir l’excellence de la transaction.</p>",
                "start": 4543,
                "end": 6024
            }
        ],
        "start": 4414,
        "end": 6033
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "354575",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 6071,
                "end": 6099
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 6105,
                "end": 6138
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/111374745912715689710/about",
                "start": 6144,
                "end": 6227
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "http://www.facebook.com/pages/Immoval-Strasbourg/244812729028248",
                "start": 6233,
                "end": 6326
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "http://twitter.com/Immoval_immo",
                "start": 6332,
                "end": 6391
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/agenceimmoval",
                "start": 6397,
                "end": 6467
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/Imoval#video=x19oz39",
                "start": 6473,
                "end": 6552
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 6564,
                "end": 6591
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "111374745912715689710",
                "start": 6598,
                "end": 6652
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "0",
                "start": 6666,
                "end": 6690
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "IMMOVAL, votre agence immobilière spécialiste du marché immobilier de Strasbourg et sa région, vous souhaite la bienvenue.\r\n\t\t\t\t\t\t<br />\t<br />\r\n\t\t\t\t\t\tIssue d’un Groupe fondé en 1972 par Hubert Fischer, Immoval, agence immobilière indépendante et familiale, adhérente FNAIM, poursuit un développement continu fondé sur des valeurs fortes : la confiance, la clarté, la rigueur et le professionnalisme.\t<br />\r\n\t\t\t\t\t\t30 collaborateurs sont à votre service, chacun spécialiste de son domaine de compétence, en transaction immobilière et commerciale, vente de neuf, gestion/ location et syndic de copropriétés.\r\n\t\t\t\t\t\t\t<br />\t<br />\r\n\t\t\t\t\t\tNotre agence immobilière, située rue de l’Eglise à Strasbourg, développe ses compétences dans les principaux domaines de l’immobilier, avec la même volonté de rester proche de ses clients et d’allier transparence, compétence, innovation et qualité de service.\t<br />\r\n\t\t\t\t\t\tLes consultants D’IMMOVAL, cultivent une relation privilégiée avec leurs interlocuteurs, veillent à apporter un conseil, une expertise ainsi qu’une parfaite connaissance du marché immobilier de Strasbourg et de sa région pour une information ciblée sur votre projet.\t<br />\r\n\t\t\t\t\t\tVéritables partenaires de votre projet d’achat, d’investissement, de location, de vente ou gestion de votre patrimoine immobilier, nous vous accompagnons tout au long de la transaction pour un suivi, technique, juridique et au-delà pour la finalisation de votre projet.\t<br />\r\n\t\t\t\t\t\tNos clients font appel à notre savoir- faire pour prendre en charge la réalisation de leur projet d’achat ou de vente, de gestion et d’investissement, en toute confiance.\r\n\t\t\t\t\t\tPour certains de nos clients, dont le temps ne permet pas une implication totale dans leurs démarches (distance, emploi du temps..), nous faisons tout le nécessaire pour conquérir, garder leurs confiances et leurs exigences avec un travail soigné et appliqué dans la passion du métier.\t<br />\r\n\t\t\t\t\t\tNos consultants étudieront vos propositions et vos souhaits pour vous garantir l’excellence de la transaction.",
                "start": 6699,
                "end": 8793
            },
            {
                "macro": "A",
                "left": "SEO_PORTEFEUILLE",
                "right": "0",
                "start": 8804,
                "end": 8828
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_1",
                "right": "<a href=\"#\">test</a>",
                "start": 8840,
                "end": 8899
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_2",
                "right": "<a href=\"#\">tes</a>",
                "start": 8905,
                "end": 8963
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_3",
                "right": "<a href=\"#\">tes</a>",
                "start": 8969,
                "end": 9027
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_4",
                "right": "<a href=\"#\"></a>",
                "start": 9033,
                "end": 9088
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_5",
                "right": "<a href=\"#\"></a>",
                "start": 9094,
                "end": 9149
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_6",
                "right": "<a href=\"#\"></a>",
                "start": 9155,
                "end": 9210
            }
        ],
        "start": 6043,
        "end": 9219
    },
    {
        "macro": "A",
        "left": "H1_AGENCESLISTE",
        "right": "",
        "start": 9227,
        "end": 9249
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_TXT",
        "right": "0",
        "start": 9255,
        "end": 9280
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_CONTENU",
        "right": "jhl.",
        "start": 9282,
        "end": 9314
    },
    {
        "macro": "A",
        "left": "SLOGAN_FOOTER",
        "right": "",
        "start": 9324,
        "end": 9344
    },
    {
        "macro": "A",
        "left": "TITLE_1_FOOTER",
        "right": "",
        "start": 9352,
        "end": 9373
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_1_FOOTER_1",
        "right": "",
        "start": 9377,
        "end": 9405
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_2_FOOTER_1",
        "right": "",
        "start": 9407,
        "end": 9435
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_3_FOOTER_1",
        "right": "",
        "start": 9437,
        "end": 9465
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_4_FOOTER_1",
        "right": "",
        "start": 9467,
        "end": 9495
    },
    {
        "macro": "INIT",
        "left": "CATWORDPRESS",
        "right": "29111",
        "start": 9501,
        "end": 9528
    },
    {
        "macro": "A",
        "left": "TXT_PUBLIC_PERSO",
        "right": "1",
        "start": 9532,
        "end": 9556
    },
    {
        "macro": "toParse",
        "content": []
    }
]