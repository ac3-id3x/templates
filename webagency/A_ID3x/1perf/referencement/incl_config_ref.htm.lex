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
                "right": "",
                "start": 99,
                "end": 117
            }
        ],
        "start": 76,
        "end": 126
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
                "start": 157,
                "end": 181
            }
        ],
        "start": 134,
        "end": 190
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
                "right": "<span class=\"typo-white\">@@LG:TEMPLATESLOGAN pcase@@</span>",
                "start": 219,
                "end": 297
            }
        ],
        "start": 196,
        "end": 306
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
                "start": 335,
                "end": 357
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION2",
                "right": "",
                "start": 363,
                "end": 385
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION3",
                "right": "",
                "start": 391,
                "end": 413
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION4",
                "right": "",
                "start": 419,
                "end": 441
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION5",
                "right": "",
                "start": 447,
                "end": 469
            }
        ],
        "start": 312,
        "end": 478
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
                "right": "<span class=\"biggest typo-white\">TEMPLATE NEW-YORK - TIMES SQUARE</span>",
                "start": 509,
                "end": 596
            }
        ],
        "start": 486,
        "end": 605
    },
    {
        "macro": "A",
        "left": "H2_INDEX_MODULE",
        "right": "@@LG:NOSDERANN pcase@@",
        "start": 611,
        "end": 655
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
                "start": 693,
                "end": 755
            }
        ],
        "start": 665,
        "end": 764
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
                        "start": 823,
                        "end": 889
                    }
                ],
                "start": 796,
                "end": 902
            }
        ],
        "start": 768,
        "end": 911
    },
    {
        "macro": "A",
        "left": "BLOC_AGENCE_INDEX",
        "right": "0",
        "start": 917,
        "end": 942
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
                "start": 967,
                "end": 1830
            }
        ],
        "start": 944,
        "end": 1839
    },
    {
        "macro": "A",
        "left": "ENCART_TXT_HOME",
        "right": "0",
        "start": 1847,
        "end": 1870
    },
    {
        "macro": "A",
        "left": "POSITION_ENCART_TXT_HOME",
        "right": "1",
        "start": 1874,
        "end": 1906
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
                "start": 1933,
                "end": 2803
            }
        ],
        "start": 1910,
        "end": 2812
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLES_REF",
        "right": "0",
        "start": 2820,
        "end": 2845
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_1",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 2849,
        "end": 2977
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_2",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 2979,
        "end": 3107
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_3",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 3109,
        "end": 3237
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_4",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 3239,
        "end": 3367
    },
    {
        "macro": "A",
        "left": "MICRO_DONNES_PRIX",
        "right": "1",
        "start": 3375,
        "end": 3400
    },
    {
        "macro": "A",
        "left": "INDEXATION_ESTIMATION",
        "right": "0",
        "start": 3408,
        "end": 3437
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
                "start": 3465,
                "end": 3488
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_ESTIMATION",
                "right": "",
                "start": 3492,
                "end": 3521
            },
            {
                "macro": "A",
                "left": "H1_ESTIMATION",
                "right": "",
                "start": 3525,
                "end": 3545
            },
            {
                "macro": "A",
                "left": "PHRASE_ESTIMATION",
                "right": "",
                "start": 3549,
                "end": 3573
            }
        ],
        "start": 3441,
        "end": 3582
    },
    {
        "macro": "A",
        "left": "ESTIMATIONPUBTITLE",
        "right": "",
        "start": 3590,
        "end": 3615
    },
    {
        "macro": "A",
        "left": "ESTIMATIONPUBTXT",
        "right": "",
        "start": 3619,
        "end": 3642
    },
    {
        "macro": "A",
        "left": "LEGALESTIMATION",
        "right": "0",
        "start": 3650,
        "end": 3673
    },
    {
        "macro": "A",
        "left": "LEGALESTIMATIONTXT",
        "right": "@@LG:LOI2004AGENCE@@",
        "start": 3677,
        "end": 3722
    },
    {
        "macro": "A",
        "left": "TITLE_AGENCES_LISTE_ESTIMATION",
        "right": "",
        "start": 3732,
        "end": 3769
    },
    {
        "macro": "A",
        "left": "DESCRIPTION_AGENCES_LISTE_ESTIMATION",
        "right": "",
        "start": 3773,
        "end": 3816
    },
    {
        "macro": "A",
        "left": "H1_AGENCESESTIMATION",
        "right": "",
        "start": 3820,
        "end": 3847
    },
    {
        "macro": "A",
        "left": "H2_AGENCESESTIMATION",
        "right": "",
        "start": 3851,
        "end": 3878
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_ESTIMATION_CONTENU",
        "right": "",
        "start": 3882,
        "end": 3921
    },
    {
        "macro": "A",
        "left": "INDEXATION_OUTILS",
        "right": "0",
        "start": 3929,
        "end": 3954
    },
    {
        "macro": "A",
        "left": "INDEXATION_REALISATION",
        "right": "0",
        "start": 3962,
        "end": 3992
    },
    {
        "macro": "A",
        "left": "INDEXATION_RESPONSIVE",
        "right": "0",
        "start": 4000,
        "end": 4029
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
                "start": 4058,
                "end": 4078
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_GESTION",
                "right": "Notre gestion immobiliere",
                "start": 4084,
                "end": 4135
            },
            {
                "macro": "A",
                "left": "H1_GESTION",
                "right": "",
                "start": 4141,
                "end": 4158
            }
        ],
        "start": 4035,
        "end": 4167
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
                "start": 4196,
                "end": 4215
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_SYNDIC",
                "right": "",
                "start": 4221,
                "end": 4246
            },
            {
                "macro": "A",
                "left": "H1_SYNDIC",
                "right": "",
                "start": 4252,
                "end": 4268
            }
        ],
        "start": 4173,
        "end": 4277
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
                "start": 4306,
                "end": 4328
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_EXPERTISE",
                "right": "",
                "start": 4334,
                "end": 4362
            },
            {
                "macro": "A",
                "left": "H1_EXPERTISE",
                "right": "",
                "start": 4368,
                "end": 4387
            }
        ],
        "start": 4283,
        "end": 4396
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_TXT",
        "right": "1",
        "start": 4406,
        "end": 4431
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_CONTENU",
        "right": "Le Réseau AJP Immobilier est réparti sur tout le Pays de la Loire avec des agences en <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences en Loire Atlantique\">Loire Atlantique</a>, <a href=\"/agences,nantes.htm\" title=\"Nos agences à Nantes\">Nantes</a>, <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire\">Maine et Loire</a>, la <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée\">Vendée</a>, le <a href=\"/agences,morbihan.htm\" title=\"Nos agences dans le Morbihan\">Morbihan</a>, l'<a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine\">Ille et Vilaine</a> et la <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde\">Gironde</a>. <br ><br />Nos agences mettent à votre disposition leur expérience et savoir faire pour la réalisation de votre projet. N'hésitez pas à nous contacter !",
        "start": 4433,
        "end": 5314
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "228064",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 5351,
                "end": 5379
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Sainte-Pazanne/136585626374298",
                "start": 5384,
                "end": 5489
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 5494,
                "end": 5522
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/104776947165584135919/",
                "start": 5527,
                "end": 5605
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpSaintePazanne",
                "start": 5610,
                "end": 5683
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 5688,
                "end": 5721
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpSaintePazanne",
                "start": 5726,
                "end": 5801
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 5810,
                "end": 5837
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "104776947165584135919",
                "start": 5842,
                "end": 5896
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 5905,
                "end": 5929
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez Sainte Pazanne avec AJP Immobilier</h3>\r\n\t\t\t\t\t\t\t\tSituée en Pays de Retz, Sainte Pazanne est une commune dynamique, positionnée à égale distance de la mer et du périphérique nantais. Avec un peu plus de 5 000 habitants, cette commune dynamique se développe notamment grâce à sa gare, pour un accès facilité à Nantes et à Pornic. \r\n\t\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Agence AJP Immobilier à Sainte Pazanne</h3>\r\n\t\t\t\t\t\t\t\tAJP Immobilier est aujourd’hui <strong>un des plus importants groupes immobiliers en <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences en Loire Atlantique (44)\">Loire Atlantique (44)</a> </strong>. <br />\r\n\t\t\t\t\t\t\t\t20 agences sont présentes sur <a href=\"/agences,nantes.htm\" title=\"Nos agences immobilières à Nantes\">Nantes</a> et sa région et 7 dans le sud Loire, dont l’agence immobilière de Saint Pazanne, présente sur l’ensemble du Pays de Retz, du Pellerin à Machecoul et de Arthon en Retz à Bouaye en passant notamment par Port Saint Père, Rouans, Brains ou encore Machecoul.\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Nos annonces immobilières à Sainte Pazanne </h3>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\tTravaillant en fichier rapproché, nos agences se concertent pour <strong>vous proposer l’offre la plus vaste dans le sud Loire</strong>. Ainsi nous sommes sûrs de trouver rapidement le bien que vous rechercher à la <a href=\"/immobilier/achat/immo-sainte-pazanne-44/\" title=\"Toutes nos ventes sur Sainte Pazanne\">vente</a>, <a href=\"/immobilier/achat/immo-sainte-pazanne-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Sainte Pazanne\">maison</a> ou <a href=\"/immobilier/achat/immo-sainte-pazanne-44/bien-appartement/\" title=\"Tous nos appartements à la vente sur Sainte Pazanne\">appartement</a>, sur Sainte Pazanne et le sud Loire, tel que <a href=\"/immobilier/tout/immo-Machecoul-44/\" title=\"Tout l'immobilier à Machecoul\">Machecoul</a>, <a href=\"/immobilier/tout/immo-Saint-Mars-de-Coutais-44/\" title=\"Tout l'immobilier à Saint Mars de Coutais\">Saint Mars de Coutais</a> ou encore <a href=\"/immobilier/tout/immo-Saint-Jean-de-Boiseau-44/\" title=\"Tout l'immobilier à Saint Jean de Boiseau\">Saint Jean de Boiseau</a>.\r\n\t\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\tDécouvrez sur ce site une sélection d’annonces de vente de maisons de  <a href=\"/immobilier/achat/immo-sainte-pazanne-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Sainte Pazanne\">Sainte Pazanne</a> à  <a href=\"/immobilier/achat/immo-Bouaye-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Bouaye\">Bouaye</a>, <a href=\"/immobilier/achat/immo-Saint-Jean-de-Boiseau-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Saint Jean de Boiseau\">Saint Jean de Boiseau</a> et <a href=\"/immobilier/achat/immo-Le-Pellerin-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Le Pellerin\">Le Pellerin</a>, <a href=\"/immobilier/achat/immo-vue-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Vue\">Vue</a>, <a href=\"/immobilier/achat/immo-chemere-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Chéméré\">Chéméré</a>, <a href=\"/immobilier/achat/immo-Arthon-en-Retz-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Arthon en Retz\">Arthon en Retz</a>, <a href=\"/immobilier/achat/immo-Bourgneuf-en-Retz-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Bourgneuf en Retz\">Bourgneuf en Retz</a> et <a href=\"/immobilier/achat/immo-Machecoul-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Machecoul\">Machecoul</a>.\r\n\t\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\tLe marché immobilier de Sainte Pazanne et ses environs, reste attractif et propose un choix de <strong>biens accessibles aux primo-accédants</strong>.\r\n\t\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Faites confiance à AJP Saint Pazanne pour votre projet immobilier !</h3>\r\n\t\t\t\t\t\t\t\t<strong>Depuis 2005</strong>, notre agence immobilière de Saint Pazanne a intégré le réseau AJP Immobilier pour vous proposer un service complet en transaction et gestion locative.<br /> <strong>3 conseillers</strong> sont à votre disposition pour une étude personnalisée de votre projet d’achat immobilier (en résidence principale ou secondaire), ou pour une estimation de votre bien dans le cadre d’un mandat de vente. <br />\r\n\t\t\t\t\t\t\t\tNotre mandat Performance vous permettra de bénéficier d’un ensemble d’engagement de moyens et d’un suivi personnalisé pour une vente en exclusivité.",
                "start": 5936,
                "end": 10422
            }
        ],
        "start": 5324,
        "end": 10431
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "330065",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 10464,
                "end": 10492
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Angers/103849986336498",
                "start": 10497,
                "end": 10594
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 10599,
                "end": 10627
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/116619844727701781821/",
                "start": 10632,
                "end": 10710
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpAngers",
                "start": 10715,
                "end": 10781
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 10786,
                "end": 10819
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpAngers",
                "start": 10824,
                "end": 10892
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 10901,
                "end": 10928
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "116619844727701781821",
                "start": 10933,
                "end": 10987
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 10996,
                "end": 11020
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">AJP Immobilier vous fait découvrir Angers</h3>\r\n\t\t\t\t\t\t\tSituée à la croisée des axes de circulation entre l’atlantique et Paris, entre et la Bretagne et le Centre Angers est la deuxième ville des Pays de Loire avec 148 000 habitants. Préfecture du Maine et Loire, Angers est une commune administrative, qui accueille des entreprises du secondaire et du tertiaire. Elle se positionne également comme un des plus importants pôles horticoles européens.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Notre agence immobilière à Angers</h3>\r\n\t\t\t\t\t\t \t\r\n\t\t\t\t\t\t\tLe Réseau AJP Immobilier est <strong>un des plus importants groupes immobiliers en <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>, avec 20 agences sur <a href=\"/agences,nantes.htm\" Title=\"Nos agences AJP à Nantes\">Nantes</a> et ses environs, dont 7 dans le sud-Loire. Le réseau AJP se développe avec des agences présentes en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine\">Ille et Vilaine (35)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences dans le Morbihan\">Morbihan (56)</a>, dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences dans le Maine et Loire\">Maine et Loire (49)</a>, et en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée\">Vendée (85)</a>. \r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\tNotre agence immobilière, située à Angers, intégrée au réseau AJP Immobilier vous propose de consulter une sélection d’<a href=\"/immobilier/tout/immo-angers-49/\" title=\"Nos annonces immobilières sur Angers\">annonces immobilières sur Angers</a> : <a href=\"/immobilier/locations/immo-angers-49/\" title=\"Tous nos biens à la location à Angers\">locations</a> et <a href=\"/immobilier/achat/immo-angers-49/\" title=\"Tous nos biens à la vente à Angers\">ventes</a> d’<a href=\"/immobilier/achat/immo-angers-49/bien-appartement/\" title=\"Découvrez nos appartements à vendre sur Angers\">appartements</a>, <a href=\"/immobilier/achat/immo-angers-49/bien-maison/\" title=\"Découvrez nos maisons à vendre sur Angers\">maisons</a> sur Angers et sa région.<br />\r\n\t\t\t\t\t\t\tUne équipe de conseillers se tient à votre disposition pour vous aider à concrétiser un projet immobilier, qu’il s’agisse de la vente de votre appartement, maison, terrain sur Angers et sa région, de la recherche d’une location (studios, appartements, maisons) sur Angers, ou encore d’un achat immobilier.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Confiez-nous votre bien sur Angers et la région !</h3>\r\n\t\t\t\t\t\t\tSi vous souhaitez nous confier la vente de votre maison, appartement, sur Angers et sa région, nos conseillers vous proposeront une <strong>estimation gratuite</strong>, basée sur une méthode comparative, selon les qualités de votre bien, son confort, son équipement, ses prestations, et selon l’état du marché local. Ils pourront ensuite vous proposer notre mandat Performance, pour une exclusivité et un engagement de l’agence sur une <strong>vente efficace</strong>, un plan de communication personnalisé et un suivi régulier.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Gestion locative à Angers</h3>\r\n\t\t\t\t\t\t\tNotre service de gestion immobilière propose à nos clients propriétaires bailleurs, une formule de gestion globale pour la prise en charge des entrées et sorties des locataires, les états des lieux, les encaissements de loyers, l’aide à la déclaration des revenus fonciers ainsi qu’une garantie de loyers impayés. \r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Découvrez le réseau AJP Immobilier</h4>\r\n\t\t\t\t\t\t\tAJP c’est aussi <a href=\"http://www.ajp-investissement.com/\" title=\"AJP-Investissement\" target=\"_blank\">AJP-Investissement</a> et <a href=\"http://www.ajp-entreprises.com/\" title=\"AJP-Entreprises\" target=\"_blank\">AJP-Entreprises</a>, 2 structures dédiées à l’investissement immobilier, et à l’immobilier d’entreprise.",
                "start": 11027,
                "end": 15124
            }
        ],
        "start": 10437,
        "end": 15138
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "304259",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 15171,
                "end": 15199
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Bain-de-Bretagne/133590240010039",
                "start": 15204,
                "end": 15311
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 15316,
                "end": 15344
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/104814442421157414554/",
                "start": 15349,
                "end": 15427
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpBainDeBretagne",
                "start": 15432,
                "end": 15506
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 15511,
                "end": 15544
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpBainDeBretagne",
                "start": 15549,
                "end": 15625
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 15634,
                "end": 15661
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "104814442421157414554",
                "start": 15666,
                "end": 15720
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 15730,
                "end": 15754
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Le secteur de Bain de Bretagne</h3>\r\n\t\t\t\t\t\t\t\tSituée <strong>à seulement 25km au sud de Rennes</strong>, Bain de Bretagne offre tous les avantages de la ville à la campagne, avec un certain nombre d'administrations, d'établissements scolaires, écoles, collège et lycée. La population de cette commune a quasiment doublé depuis 2000 et compte aujourd’hui un peu plus de 7000 habitants. Le paysage immobilier de Bain de Bretagne, bien qu’essentiellement rural et ancien, dispose d’offres plus attractives pour une clientèle d’actifs rennais.\r\n\t\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre agence immobilière à Bain de Bretagne</h3> \r\n\t\t\t\t\t\t\t\t<strong>Depuis 2008</strong> notre agence immobilière, située à Bain de Bretagne, idéalement placée face à la mairie, vous propose un service de transaction, vente et location de <a href=\"/immobilier/achat/immo-bain-de-bretagne-35/bien-maison/\" title=\"Toutes nos maisons à la vente sur Bain de Bretagne\">maisons</a>, <a href=\"/immobilier/achat/immo-bain-de-bretagne-35/bien-appartement/\" title=\"Tous nos appartements à la vente sur Bain de Bretagne\">appartements</a>, <a href=\"/immobilier/achat/immo-bain-de-bretagne-35/bien-terrain/\" title=\"Tous nos terrains à la vente sur Bain de Bretagne\">terrains</a> et sur Bain de Bretagne et sa région, de <a href=\"/immobilier/tout/immo-crevin-35/\" title=\"Tout l'immobilier sur Crevin\">Crevin</a> au <a href=\"/immobilier/tout/immo-Grand-Fougeray-35/\" title=\"Tout l'immobilier sur Grand Fougeray\">Grand Fougeray</a> et de <a href=\"/immobilier/tout/immo-Pipriac-35/\" title=\"Tout l'immobilier sur Pipriac\">Pipriac</a> à <a href=\"/immobilier/tout/immo-Lalleu-35/\" title=\"Tout l'immobilier sur Lalleu\">Lalleu</a>. \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<br />\t\t\t\r\n\t\t\t\t\t\t\t\tAJP Immobilier compte aujourd’hui 3 agences immobilières, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine\">Ille et Vilaine (35)</a>: <a href=\"/agence-immobiliere/bain-de-bretagne-35470/ajp-immobilier-bain-de-bretagne/304259.htm\" title=\"Notre agence immobilière à Bain de Bretagne\">Bain de Bretagne</a>, <a href=\"/agence-immobiliere/redon-35600/ajp-immobilier-redon/14229.htm\" title=\"Notre agence immobilière à Redon\">Redon</a> et  <a href=\"/agence-immobiliere/rennes-35000/ajp-immobilier-rennes/313473.htm\" title=\"Notre agence immobilière à Rennes\">Rennes</a>. \r\n\t\t\t\t\t\t\t\t<br />Adhérant aux principes de notre réseau, nous travaillons en synergie pour optimiser les chances de réussite de votre projet. Ainsi notre fichier commun, nous permet de vous proposer <strong>une offre démultipliée</strong> de biens dans votre région.\r\n\t\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre secteur immobilier de Bain de Bretagne</h3>\r\n\t\t\t\t\t\t\t\tNotre secteur immobilier rayonne autour de <a href=\"/immobilier/tout/immo-bain-de-bretagne-35/\" title=\"Tous nos biens disponibles à Bain de Bretagne\">Bain de Bretagne</a>, sur 15km environ et s’étend du nord au sud de Crevin au Grand Fougeray et d’ouest en est de Pipriac à Lalleu.\r\n\t\t\t\t\t\t\t\tUn secteur de la campagne bretonne, sur lequel nous pourrons vous proposer un choix de biens à la <a href=\"/immobilier/achat/immo-bain-de-bretagne-35/\" title=\"Tous nos biens à la vente à Bain de Bretagne\">vente</a> et à la <a href=\"/immobilier/locations/immo-bain-de-bretagne-35/\" title=\"Tous nos biens à la location à Bain de Bretagne\">location</a>, des <a href=\"/immobilier/locations/immo-bain-de-bretagne-35/bien-appartement/\" title=\"Tous nos appartements à la location sur Bain de Bretagne\">appartements</a> sur Bain de Bretagne, mais aussi des <a href=\"/immobilier/locations/immo-bain-de-bretagne-35/bien-maison/\" title=\"Toutes nos maisons à la location sur Bain de Bretagne\">maisons</a> récentes en lotissements pavillonnaires, des maisons traditionnelles, maisons de bourg, demeures de caractère en pierre, sur les villages des environs, et un grand choix de fermes, longères rénovées ou a rénover dans la campagne environnante.\r\n\t\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Gestion Locative à Bain de Bretagne</h3> \r\n\t\t\t\t\t\t\t\tNotre assistante, dédiée à la gestion locative est à votre disposition pour vous aider à trouver une location (studio, appartement) sur Bain de Bretagne et sa région.<br />\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\tActuellement en charge d’un peu plus de 130 lots notre service de gestion, dispose d’une formule  globale avec prise en charge des entrées et sorties des locataires, états des lieux, encaissement des loyers, aide à la déclaration des revenus fonciers et garantie de loyers impayés. \r\n\t\t\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Vendez rapidement votre bien à Bain de Bretagne avec notre agence</h3>\r\n\t\t\t\t\t\t\t\tNotre mandat Performance vous permet de bénéficier d’un <strong>engagement</strong> sur les moyens de diffusion mis à disposition et d’une <strong>qualité de suivi</strong> avec comptes-rendus de visites systématiques. La meilleure offre pour se donner un maximum de chances de pouvoir vendre au meilleur prix, dans les meilleurs délais et en toute sérénité.<br />\r\n\t\t\t\t\t\t\t\tNotre relationnel et nos partenaires locaux, pourront intervenir sur vos devis travaux dans différents corps de métier pour <strong>vous aider à finaliser votre projet</strong>, dans le cadre de l’achat d’un bien à rénover.",
                "start": 15762,
                "end": 21140
            }
        ],
        "start": 15144,
        "end": 21149
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "206778",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 21182,
                "end": 21210
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Blain/130244697017514",
                "start": 21215,
                "end": 21311
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 21316,
                "end": 21344
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/102372327733633848548/",
                "start": 21349,
                "end": 21427
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpBlain",
                "start": 21432,
                "end": 21497
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 21502,
                "end": 21535
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpBlain",
                "start": 21540,
                "end": 21607
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 21616,
                "end": 21643
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "102372327733633848548",
                "start": 21648,
                "end": 21702
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 21712,
                "end": 21736
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez la ville de Blain avec AJP Immobilier</h3>\r\n\t\t\t\t\t\tAncienne cité gallo-romaine, Blain est une commune d’un peu plus de 8000 habitants, connue pour ses vestiges actuellement gardés dans le musée de la ville. Entre Nantes et Rennes, Nantes et Redon, Blain se positionne au coeur du pays des Namnètes.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Agence Immobilière AJP Immobilier à Blain</h3>\r\n\t\t\t\t\t\t Intégrée au réseau AJP Immobilier, notre agence bénéficie de la force d’un réseau de 20 agences en <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences en Loire Atlantique\">Loire Atlantique</a>. Une force de proposition qui nous permet de vous proposer le grand choix de biens à la vente, maisons, appartements, terrains, sur Blain, Plessé et la <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Toutes nos annonces en Loire Atlantique (44)\">Loire Atlantique (44)</a>.\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\tUne équipe de négociateurs et une personne dédiée à la gestion / location, sont à votre disposition, pour la réalisation de vos projets immobiliers sur Blain, Plessé, le Gâvre, Fay de Bretagne, Guenrouët.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre offre immobilière à Blain</h3>\r\n\t\t\t\t\t\t Notre agence immobilière située à Blain, vous propose un service de transaction en habitat et un service de gestion locative, sur Blain et sa région\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\tDécouvrez notre sélection de biens à la vente, <a href=\"/immobilier/achat/immo-blain-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Blain\">maisons</a>, <a href=\"/immobilier/achat/immo-blain-44/bien-terrain/\" title=\"Tous nos terrains à la vente sur Blain\">terrains</a>, <a href=\"/immobilier/achat/immo-blain-44/bien-appartement/\" title=\"Tous nos appartements à la vente sur Blain\">appartements</a>, sur entre autres, <a href=\"/immobilier/tout/immo-blain-44/\" title=\"Tout l'immobilier à Blain\">Blain</a>, <a href=\"/immobilier/tout/immo-Plesse-44/\" title=\"Tout l'immobilier à Plessé\">Plessé</a>, <a href=\"/immobilier/tout/immo-le-gavre-44/\" title=\"Tout l'immobilier à Le Gâvre\">Le Gâvre</a>, <a href=\"/immobilier/tout/immo-Fay-de-Bretagne-44/\" title=\"Tout l'immobilier à Fay de Bretagne\">Fay de Bretagne</a>, <a href=\"/immobilier/tout/immo-Guenrouet-44/\" title=\"Tout l'immobilier à Guenrouët\">Guenrouët</a>.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tNotre site rassemble nos offres de vente et location, avec un choix de maisons traditionnelles, maisons  contemporaines en résidences pavillonnaires, demeures de caractère et appartements dans le neuf, le récent ou l’ancien.<br /><br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre service Gestion Locative à Blain</h3>\r\n\t\t\t\t\t\tVous souhaitez nous confier la vente ou la gestion de votre bien ?\r\n\t\t\t\t\t\tNotre agence dispose d’un service de gestion locative, avec la possibilité de souscrire une assurance loyers impayés. Nos conseillers sont à votre disposition pour une estimation de votre bien.\r\n\t\t\t\t\t\tNotre mandat Performance vous permet de bénéficier :\r\n\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t<li>•\tDe la pose d’un panneau </li>\r\n\t\t\t\t\t\t<li>•\tDe mailings distribués sur votre secteur</li>\r\n\t\t\t\t\t\t<li>•\tD’un affichage en vitrine</li>\r\n\t\t\t\t\t\t<li>•\tD’un suivi personnalisé</li>\r\n\t\t\t\t\t\t<li>•\tDe l’ensemble de nos supports de communication</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\tAJP c’est aussi <a href=\"http://www.ajp-investissement.com/\" title=\"AJP-Investissement\" target=\"_blank\">AJP-Investissement</a> et <a href=\"http://www.ajp-entreprises.com\" title=\"AJP-Entreprises\" target=\"_blank\">AJP-Entreprises</a>, 2 structures dédiées à l’investissement immobilier, et à l’immobilier d’entreprise.",
                "start": 21744,
                "end": 25489
            }
        ],
        "start": 21155,
        "end": 25498
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "467545",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 25531,
                "end": 25559
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Bordeaux/767575336606798",
                "start": 25564,
                "end": 25663
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 25668,
                "end": 25696
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/114874705647702472765/",
                "start": 25701,
                "end": 25779
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpBordeaux",
                "start": 25784,
                "end": 25852
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 25857,
                "end": 25890
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpBordeaux",
                "start": 25895,
                "end": 25965
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 25974,
                "end": 26001
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "114874705647702472765",
                "start": 26006,
                "end": 26060
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 26070,
                "end": 26094
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez la ville de Bordeaux avec AJP Immobilier</h3>\r\n\t\t\t\t\t\tSituée place de l’église à Saint Augustin, notre agence à Bordeaux, vous propose un service de <strong>gestion locative</strong>, un service de <strong>transactions immobilières sur Bordeaux</strong> rive gauche, Mérignac, Caudéran. \r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\tDéjà présent en <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences en Loire Atlantique\">Loire Atlantique (44)</a>, avec une trentaine d’agences sur <a href=\"/agences,nantes.htm\" title=\"Nos agences à Nantes\">Nantes</a> et sa région, AJP Immobilier poursuit aujourd´hui son développement en <a href=\"/agences,liste.htm\" title=\"Nos agences en Gironde\">Gironde</a> avec une agence immobilière ouverte sur Bordeaux et une agence à <a href=\"/agence-immobiliere/pessac-33600/ajp-immobilier-pessac/447455.htm\" Title=\"Notre agence à Pessac\">Pessac</a>.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Découvrez Bordeaux avec AJP Immobilier</h3>\r\n\t\t\t\t\t\tAvec la base aérienne 106, l’Aéroport et un bassin d’emplois dynamique sur le secteur de Mérignac, le marché local reste porteur. De plus, la rive gauche bénéficie de la proximité de l’océan et d’un accès au tram.<br />\r\n\t\t\t\t\t\tBordeaux sera bientôt à 2h de Paris grâce à l’extension de la ligne du TGV prévue en 2017.\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t \t<h3 style=\"font-weight:bold;\">Notre zone de chalandise : Bordeaux & Mérignac</h3>\r\n\t\t\t\t\t\tNotre agence vous propose de consulter une offre de biens variée, parmi un choix de maisons traditionnelles, maisons de ville, échoppes simples ou doubles, maisons de caractère, maisons en pierre, villas contemporaines, belles propriétés, terrains, mais aussi parmi nos annonces de vente de <a href=\"/immobilier/achat/immo-bordeaux-33/bien-maison/\" title=\"Nos maisons à vendre sur Bordeaux\">maisons</a> et d’<a href=\"/immobilier/achat/immo-bordeaux-33/bien-appartement/\" title=\"Nos appartements à vendre sur Bordeaux\">appartements</a> sur <a href=\"/immobilier/achat/immo-bordeaux-33/bien-appartement/\" title=\"Tous nos appartements sur Bordeaux\">Bordeaux</a>, <a href=\"/immobilier/achat/immo-Merignac-33/bien-appartement/\" title=\"Tous nos appartements sur Mérignac\">Mérignac</a>, Caudéran, dans le neuf ou l’ancien.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\tNotre secteur immobilier qui s’étend sur la rive gauche, nous permet de vous proposer des biens à la <a href=\"/immobilier/achat/immo-merignac-33/bien-maison/\" title=\"Vente maison Mérignac\">vente maisons</a> et <a href=\"/immobilier/achat/immo-merignac-33/bien-appartement/\" title=\"Vente appartement Mérignac\">appartements sur Mérignac</a> et ses quartiers (La Glacière, Arlac, Bourran, Capeyron, Montdésir, Soleil), sur Caudéran (Centre, Primerose, Bel Air, Périnot, Grand Lebrun, Parc Bordelais) et sur <a href=\"/immobilier/tout/immo-bordeaux-33/\" title=\"Tout l'immobilier à Bordeaux\">Bordeaux</a> (Saint Seurin, Saint Bruno, Meriadeck, Ornano, Croix Blanche).\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\tA l’image du réseau AJP, notre agence développe une qualité de service dans une <strong>approche plus humaine</strong>, avec un <strong>personnel expérimenté</strong> et pour certains natifs de la région, passionnés d’immobilier et travaillant sur le terrain, au contact de la clientèle.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre service gestion locative à Bordeaux</h3>\r\n\t\t\t\t\t\tNotre agence dispose également d’un service de <strong>gestion locative</strong> afin de vous proposer la gestion en interne de votre investissement immobilier. <br />\r\n\t\t\t\t\t\tDans le cadre d’un projet d’investissement locatif, nos conseillers pourront vous proposer des biens au <strong>meilleur rapport rentabilité</strong> selon vos objectifs.<br />\r\n\t\t\t\t\t\tAJP Immobilier propose une formule de gestion globale, comprenant, la <strong>GLI (Garantie des Loyers Impayés)</strong>, la <strong>garantie de vacance locative</strong>, de détérioration immobilière, ainsi que la <strong>protection juridique</strong>.\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Confiez-nous votre bien sur Bordeaux !</h3>\r\n\t\t\t\t\t\tDans le cadre de la vente de votre maison, appartement, terrain sur Bordeaux, Mérignac, AJP Immobilier vous propose le mandat Performance, vous faisant bénéficier d’un engagement écrit sur des moyens conséquents, de diffusion de votre annonce immobilière.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Découvrez le réseau AJP Immobilier</h3>\r\n\t\t\t\t\t\tNotre groupe, c´est aussi <a href=\"http://www.ajp-investissement.com/\" title=\"AJP Investissement\" target=\"_blank\">AJP Investissement</a> et <a href=\"http://www.ajp-entreprises.com/index.htm\" title=\"AJP Entreprise\" target=\"_blank\">AJP Entreprise</a>, si vous souhaitez préparer votre retraite ou réduire vos impôts, ou si vous projetez de vendre ou d´acheter un fonds de commerce sur le 85 et le 44.",
                "start": 26102,
                "end": 31030
            }
        ],
        "start": 25504,
        "end": 31039
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "252654",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 31072,
                "end": 31100
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Carquefou/136159293084054",
                "start": 31105,
                "end": 31205
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 31210,
                "end": 31238
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/b/114256191838025445013/",
                "start": 31243,
                "end": 31323
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpCarquefou/",
                "start": 31328,
                "end": 31398
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 31403,
                "end": 31436
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpCarquefou",
                "start": 31441,
                "end": 31512
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 31521,
                "end": 31548
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "114256191838025445013",
                "start": 31553,
                "end": 31607
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 31617,
                "end": 31641
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">AJP Immobilier vous fait découvrir Carquefou</h3>\r\n\t\t\t\t\t\tAvec un peu plus de 18 000 habitants Carquefou est une commune qui privilégie les structures d’accueil familiales dans un cadre de vie agréable, avec de nombreuses écoles, le parc et ses structures pour les enfants, le parcours de santé et l’étang. Située aux portes de Nantes, et bénéficiant d’une excellente accessibilité aux différents axes de circulation (A11 et autres départementales), Carquefou reste un marché prisé pour tous les actifs nantais.\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t <br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Nos annonces immobilières à Carquefou</h3>\r\n\t\t\t\t\t\tNotre site régulièrement mis à jour, vous propose une offre de biens à la vente, à la location, maisons et appartements sur <a href=\"/immobilier/tout/immo-carquefou-44/\" title=\"Tout l'immobilier à Carquefou\">Carquefou</a>,  <a href=\"/immobilier/tout/immo-Thouare-sur-loire-44/\" title=\"Tout l'immobilier à Thouaré sur Loire\">Thouaré sur Loire</a> et <a href=\"/immobilier/tout/immo-sainte-luce-sur-loire-44/\" title=\"Tout l'immobilier à Sainte Luce sur loire\">Sainte Luce sur Loire</a>, aux portes de Nantes.\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre agence immobilière à Carquefou</h3> \r\n\t\t\t\t\t\t<strong>Christelle Mauny</strong> et son équipe vous accueillent du lundi au samedi, pour une étude sur mesure de votre projet immobilier, qu’il s’agisse de la vente de votre maison, appartement, sur  <a href=\"/immobilier/achat/immo-carquefou-44/bien-maison/\" title=\"Toutes nos maisons à la vente à Carquefou\">Carquefou</a>,  <a href=\"/immobilier/achat/immo-Thouare-sur-Loire-44/bien-maison/\" title=\"Toutes nos maisons à la vente à Thouaré sur Loire\">Thouaré sur Loire</a> ou <a href=\"/immobilier/tout/immo-sainte-luce-sur-loire-44/\" title=\"Toutes nos maisons à la vente à Sainte Luce\">Sainte Luce</a>, de la recherche d’une location, d’un achat immobilier ou de la gestion immobilière de votre patrimoine immobilier.\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\tIntégrée au réseau AJP Immobilier, notre agence immobilière développe sur Carquefou et sa proximité, un <strong>service immobilier de qualité</strong>, disposant de la force d’un réseau présent sur le département avec 20 agences, dont 11 agences proches de chez vous.<br />\r\n\t\t\t\t\t\tGrâce à notre travail en synergie et notre fichier commun, notre <strong>force de choix</strong> vous permet de trouver efficacement le bien que vous recherchez, à la vente ou à la location, maison ou appartement, sur Carquefou, Thouaré, Sainte Luce et le Grand Nantes.\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre service gestion locative à Carquefou</h3>\r\n\t\t\t\t\t\tNotre collaboratrice dédiée au service de gestion immobilière vous proposera une formule de gestion globale avec prise en charge des entrées et sorties de locataires, états des lieux, encaissement des loyers, aide à la déclaration des revenus fonciers et vous proposera une garantie de loyers impayés. \r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Faites confiance à AJP Immobilier Carquefou pour la vente de votre bien !</h3>\r\n\t\t\t\t\t\tDans le cadre de la vente de votre maison, appartement, sur Carquefou et proximité, nous vous proposerons notre mandat Performance, pour une exclusivité avec de nombreux avantages :<br />\r\n\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t<li>•\t<strong>Plan de communication</strong> sur tous les supports à disposition (presse et Internet)</li>\r\n\t\t\t\t\t\t<li>•\t<strong>Mailings personnalisés</strong> </li>\r\n\t\t\t\t\t\t<li>•\t<strong>Pose d’un panneau « à vendre »</strong> </li>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</ul\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\tL’agence met également à votre disposition ses partenaires pour intervenir sur vos recherches de financement. <br />\r\n\t\t\t\t\t\tAJP c’est aussi <a href=\"http://www.ajp-investissement.com\" title=\"AJP Investissement\" target=\"_blank\">AJP Investissement</a> et <a href=\"http://www.ajp-entreprises.com\" title=\"AJP Entreprises\" target=\"_blank\">AJP Entreprises</a>, 2 structures dédiées à l’investissement immobilier, et à l’immobilier d’entreprise.",
                "start": 31649,
                "end": 35772
            }
        ],
        "start": 31045,
        "end": 35781
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "238610",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 35814,
                "end": 35842
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Challans/103896992999243",
                "start": 35847,
                "end": 35946
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 35951,
                "end": 35979
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/102908349569519335943/",
                "start": 35984,
                "end": 36062
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "",
                "start": 36067,
                "end": 36095
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 36100,
                "end": 36133
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "",
                "start": 36138,
                "end": 36170
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 36179,
                "end": 36206
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "102908349569519335943",
                "start": 36211,
                "end": 36265
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 36275,
                "end": 36299
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez la ville de Challans avec AJP Immobilier</h3>\r\n\t\t\t\t\t\t2ème ville du département avec près de 20 000 habitants, Challans est idéalement positionnée à égale distance de Nantes, Saint Nazaire et La Roche sur Yon. Elle bénéficie de la proximité à la mer et aux plages de Vendée et d’un cadre de vie agréable et sécurisant. Réputée pour ses marchés et son dynamisme commercial, Challans  \r\n\t\t\t\t\t\t<br />\t<br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Agence immobilière à Challans</h3>\r\n\t\t\t\t\t\t \t<strong>Depuis 2006</strong>, notre agence rayonne sur Challans et sa proche agglomération, de <a href=\"/immobilier/tout/immo-la-Garnache-85/\" title=\"Tout l'immobilier à la Garnache\">la Garnache</a> à <a href=\"/immobilier/tout/immo-Saint-Urbain-85/\" title=\"Tout l'immobilier à Saint Urbain\">Saint Urbain</a>, <a href=\"/immobilier/tout/immo-Saint-Gervais-85/\" title=\"Tout l'immobilier à Saint Gervais\">Saint Gervais</a>, <a href=\"/immobilier/tout/immo-le-perrier-85/\" title=\"Tout l'immobilier à le Perruer\">Le Perrier</a>, <a href=\"/immobilier/tout/immo-Soullans-85/\" title=\"Tout l'immobilier à Soullans\">Soullans</a>, <a href=\"/immobilier/tout/immo-saint-christophe-du-ligneron-85/\" title=\"Tout l'immobilier à Saint Christophe du Ligneron\">Saint Christophe du Ligneron</a>, un secteur qui s’étend également sur la côte entre Fromentine et <a href=\"/immobilier/tout/immo-Saint-Jean-de-Monts-85/\" title=\"Tout l'immobilier à Saint Jean de Monts\">Saint Jean de Monts</a>, et jusqu’à Bouin au nord, Grand Landes à l’est et Apremont au sud.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\tAJP Immobilier, réseau immobilier national, se développe en <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">Loire Atlantique (44)</a> et compte déjà 20 agences sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a> et sa région, vous trouverez également nos agences en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a>, et en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>. \r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\tLe fonctionnement en réseau de notre groupement d’agences, nous permet de consulter une offre commune au niveau national et surtout une offre commune sur notre département (85). Ainsi, notre agence est en susceptible de vous soumettre un <strong>choix démultiplié de biens</strong> à la vente (maisons et appartements) sur Challans et la Vendée, ainsi qu’une sélection de biens à la location.\r\n\t\t\t\t\t\t<br />\t<br />\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre offre immobilière sur Challans</h3>\r\n\t\t\t\t\t\tNos annonces de vente de <a href=\"/immobilier/achat/immo-challans-85/bien-maison/\" title=\"Toutes nos maisons à la vente sur Challans\">maisons</a>, <a href=\"/immobilier/achat/immo-challans-85/bien-appartement/\" title=\"Tous nos appartements à la vente sur Challans\">appartements</a> et <a href=\"/immobilier/achat/immo-challans-85/bien-terrain/\" title=\"Tous nos terrains à la vente sur Challans\">terrains</a> vous proposent sur Challans et ses environs un vaste choix de biens dans le neuf, le récent ou l’ancien. Notre secteur s’étend de <a href=\"/immobilier/tout/immo-Beauvoir-sur-Mer-85/\" title=\"Tout l'immobilier à Beauvoir sur Mer\">Beauvoir sur Mer</a> à <a href=\"/immobilier/tout/immo-Saint-Jean-de-Monts-85/\" title=\"Tout l'immobilier à Saint Jean de Monts\">Saint Jean de Monts</a> et de <a href=\"/immobilier/tout/immo-Bouin-85/\" title=\"Tout l'immobilier à Bouin\">Bouin</a> à <a href=\"/immobilier/tout/immo-Saint-Etienne-du-Bois-85/\" title=\"Tout l'immobilier à Saint Etienne du Bois\">Saint Etienne du Bois</a>, en passant par <a href=\"/immobilier/tout/immo-Apremont-85/\" title=\"Tout l'immobilier à Apremont\">Apremont</a> et  <a href=\"/immobilier/tout/immo-Commequiers-85/\" title=\"Tout l'immobilier à Commequiers\">Commequiers</a>.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tSur le secteur de Challans nous pourrons vous proposer des ventes d’appartements dans le neuf ou l’ancien, sur Challans, des ventes maisons traditionnelles, maisons de ville et pavillons récents de plain pied,  sur Challans et sa périphérie, et dans la campagne environnante, des maisons en pierre, fermes, longères et propriétés de caractère.\r\n\t\t\t\t\t\tVous trouverez aussi parmi nos annonces, des terrains à bâtir et des locaux commerciaux.\r\n\t\t\t\t\t\t<br />\t<br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Gestion Locative à Challans</h3>\r\n\t\t\t\t\t\t<strong>Notre personnel disponible 6 jours sur 7</strong>, reçoit régulièrement les formations internes au réseau, pour rester informer sur les différents aspects techniques et législatifs de notre métier. \r\n\t\t\t\t\t\t<br />Notre collaboratrice dédiée au service de gestion locative, est à votre disposition, pour vous proposer une <strong>gestion globale avec</strong> : \r\n\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t<li>Prise en charge totale des charges administratives</li>\r\n\t\t\t\t\t\t<li>Entrées et sorties de locataires</li>\r\n\t\t\t\t\t\t<li>Etats des lieux</li>\r\n\t\t\t\t\t\t<li>Encaissement des loyers</li>\r\n\t\t\t\t\t\t<li>Aide à la déclaration des revenus fonciers</li>\r\n\t\t\t\t\t\t<li>Garantie de loyers impayés</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Confiez-nous la vente de votre bien à Challans !</h3>\r\n\t\t\t\t\t\tDans le cadre de la vente de votre maison, appartement sur Challans et sa région, AJP Immobilier vous propose le mandat Performance, avec les avantages suivants :<br />\r\n\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t\t<li><strong>Affichage prioritaire</strong> de votre annonce en vitrine d’agence\t</li>\r\n\t\t\t\t\t\t\t<li><strong>Mailings distribués</strong> dans la zone de proximité de votre bien</li>\r\n\t\t\t\t\t\t\t<li><strong>Pose d’un panneau « à vendre »</strong></li>\r\n\t\t\t\t\t\t\t<li><strong>Parutions presse</strong> (Ouest-France) et Internet</li>\r\n\t\t\t\t\t\t</ul>",
                "start": 36307,
                "end": 42507
            }
        ],
        "start": 35787,
        "end": 42516
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "14225",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 42548,
                "end": 42576
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Ch%C3%A2teaubriant/134246106616019",
                "start": 42581,
                "end": 42690
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 42695,
                "end": 42723
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/100272606368734768546/",
                "start": 42728,
                "end": 42806
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpChateaubriant",
                "start": 42811,
                "end": 42884
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 42889,
                "end": 42922
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpChateaubriant",
                "start": 42927,
                "end": 43002
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 43011,
                "end": 43038
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "100272606368734768546",
                "start": 43043,
                "end": 43097
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 43107,
                "end": 43131
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez Châteaubriant avec AJP Immobilier</h3>\r\n\t\t\t\t\t\t\tChâteaubriant compte aujourd’hui près de 13 000 habitants et se situe à égale distance de Rennes, Angers et Nantes. Sous préfecture de Loire Atlantique, c’est aussi une commune chargée de l’histoire du Pays de Mée. Au cœur d’un environnement essentiellement rural, Châteaubriant reste une commune dynamique, ne manquant pas de structures d’accueil familial, scolaire, sportif, etc. \r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\tPrésente sur le marché immobilier de Châteaubriant et sa région <strong>depuis 2000</strong>, notre agence vous propose un service immobilier et un conseil de qualité pour la réalisation de vos projets : achat, location, gestion ou vente de votre maison, appartement, terrain, de <a href=\"/immobilier/tout/immo-Chateaubriant-44/\" title=\"Tout l'immobilier à Châteaubriant\">Châteaubriant</a> à <a href=\"/immobilier/tout/immo-La-Meilleraye-de-Bretagne-44/\" title=\"Tout l'immobilier à La Meilleraye de Bretagne\">La Meilleraye de Bretagne</a> et de <a href=\"/immobilier/tout/immo-Saint-Aubin-des-Chateaux-44/\" title=\"Tout l'immobilier à Saint Aubin des Châteaux\">Saint Aubin des Châteaux</a> à  <a href=\"/immobilier/tout/immo-Villepot-44/\" title=\"Tout l'immobilier à Villepot\">Villepot</a> et <a href=\"/immobilier/tout/immo-Soudan-44/\" title=\"Tout l'immobilier à Soudan\">Soudan</a>.\r\n\t\t\t\t\t\t\t<br />\t<br />\r\n\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Agence Immobilière à Châteaubriant</h3>\r\n\t\t\t\t\t\t\tNotre agence met à votre disposition, le savoir-faire et  l’efficacité prouvée d’<strong>une équipe de professionnels maîtrisant parfaitement le marché immobilier local</strong>. Intégrée au réseau AJP Immobilier, elle bénéficie de la force d’une enseigne, devenue en moins de 11 ans un des plus grands groupes immobiliers en Loire Atlantique (44), qui comprend déjà 20 agences sur Nantes et sa région. \r\n\t\t\t\t\t\t\tAJP  se développe également en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, et dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a>.\r\n\t\t\t\t\t\t\t<br />\t<br />\r\n\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre offre immobilière à Châteaubriant</h3>\r\n\t\t\t\t\t\t\tNotre agence immobilière de Châteaubriant développe une activité de transactions immobilières, location et vente de <a href=\"/immobilier/achat/immo-Chateaubriant-44/bien-maison/\" title=\"Toutes nos maisons à la vente à Châteaubriant\">maisons</a>, <a href=\"/immobilier/achat/immo-Chateaubriant-44/bien-appartement/\" title=\"Tous nos appartements à la vente à Châteaubriant\">appartements</a>, <a href=\"/immobilier/achat/immo-Chateaubriant-44/bien-terrain/\" title=\"Tous nos terrains à la vente à Châteaubriant\">terrains</a>, de Châteaubriant à La Meilleraye de Bretagne  et de Saint Aubin des Châteaux à Villepot et Soudan, mais aussi de locaux commerciaux et fonds de commerces, grâce à notre filiale <a href=\"http://www.ajp-entreprises.com/\" title=\"Tout l'immobilier d'entreprise avec AJP Entreprises\" target=\"_blank\">AJP Entreprises</a>.\r\n\t\t\t\t\t\t\tNotre secteur immobilier du nord au sud, englobe les communes de <a href=\"/immobilier/tout/immo-Martigne-Ferchaud-35/\" title=\"Tout l'immobilier à Martigné Ferchaud\">Martigné Ferchaud</a>, <a href=\"/immobilier/tout/immo-Villepot-44/\" title=\"Tout l'immobilier à Villepot\">Villepot</a>, <a href=\"/immobilier/tout/immo-Soudan-44/\" title=\"Tout l'immobilier à Soudan\">Soudan</a>, <a href=\"/immobilier/tout/immo-rouge-44/\" title=\"Tout l'immobilier à Rougé\">Rougé</a>, <a href=\"/immobilier/tout/immo-Ruffigne-44/\" title=\"Tout l'immobilier à Ruffigné\">Ruffigné</a>, <a href=\"/immobilier/tout/immo-Sion-les-Mines-44/\" title=\"Tout l'immobilier à Sion les Mines\">Sion les Mines</a>, <a href=\"/immobilier/tout/immo-Saint-Aubin-des-Chateaux-44/\" title=\"Tout l'immobilier à Saint Aubin des Châteaux\">Saint Aubin des Châteaux</a>, <a href=\"/immobilier/tout/immo-Louisfert-44/\" title=\"Tout l'immobilier à Louisfert\">Louisfert</a>, <a href=\"/immobilier/tout/immo-Saint-Vincent-des-Landes-44/\" title=\"Tout l'immobilier à Saint Vincent des Landes\">Saint Vincent des Landes</a>, <a href=\"/immobilier/tout/immo-Isse-44/\" title=\"Tout l'immobilier à Issé\">Issé</a>, <a href=\"/immobilier/tout/immo-Erbray-44/\" title=\"Tout l'immobilier à Erbray\">Erbray</a>, <a href=\"/immobilier/tout/immo-Moisdon-La-Riviere-44/\" title=\"Tout l'immobilier à Moisdon La Rivière\">Moisdon La Rivière</a> et <a href=\"/immobilier/tout/immo-La-Meilleraye-de-Bretagne-44/\" title=\"Tout l'immobilier à La Meilleraye de Bretagne\">La Meilleraye de Bretagne</a>.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\tSur un secteur essentiellement rural, nous pourrons vous proposer à la vente, une sélection de maisons, sur Châteaubriant et sa région, parmi un choix de <strong>maisons de village</strong>, <strong>maisons de caractère en pierre</strong>, <strong>anciennes bâtisses à rénover</strong>, <strong>fermes</strong>, <strong>longères</strong> et <strong>maisons contemporaines</strong>. Notre collaborateur spécialiste de l’ancien de caractère vous apportera un conseil précieux sur d’éventuels projets de rénovation.\r\n\t\t\t\t\t\t\t<br />\t<br />\r\n\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Gestion locative à Châteaubriant</h3>\r\n\t\t\t\t\t\t\tNotre service de gestion locative vous proposera une <strong>formule globale</strong> avec \r\n\t\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t\t<li>Prise en charge des entrées et sorties de locataires</li>\r\n\t\t\t\t\t\t\t<li>Etats des lieux</li>\r\n\t\t\t\t\t\t\t<li>Encaissement des loyers</li>\r\n\t\t\t\t\t\t\t<li>Aide à la déclaration des revenus fonciers</li>\r\n\t\t\t\t\t\t\t<li>Garantie de loyers impayés</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<br />\t\r\n\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Le plus de notre agence immobilière à Châteaubriant</h3>\r\n\t\t\t\t\t\t\tNotre pack Performance vous permet de bénéficier des avantages d’un mandat exclusif, avec un plan de communication sur tous les supports à disposition : \r\n\t\t\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t\t\t<li>Mailings personnalisés</li>\r\n\t\t\t\t\t\t\t\t<li>Pose d’un panneau</li>\r\n\t\t\t\t\t\t\t\t<li>Parution en presse locale et sur Internet</li>\r\n\t\t\t\t\t\t\t\t</ul>",
                "start": 43139,
                "end": 49581
            }
        ],
        "start": 42522,
        "end": 49590
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "146731",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 49623,
                "end": 49651
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Challans/103896992999243",
                "start": 49656,
                "end": 49755
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 49760,
                "end": 49788
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/b/105133061187527137124/",
                "start": 49793,
                "end": 49873
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpClisson",
                "start": 49878,
                "end": 49945
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 49950,
                "end": 49983
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpClisson",
                "start": 49988,
                "end": 50057
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 50066,
                "end": 50093
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "105133061187527137124",
                "start": 50098,
                "end": 50152
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 50162,
                "end": 50186
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">AJP Immobilier vous fait découvrir Clisson</h3>\r\n\t\t\t\t\tSituée <strong>à 20mn de Nantes</strong> par le tram-train, Clisson se positionne sur un marché immobilier qui reste porteur et offre cependant un <strong>meilleur rapport qualité de vie / espace / prix</strong>. \r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\tRiche d’un passé qui se nourrit des épisodes tragiques des guerres vendéennes, Clisson est aujourd’hui une commune agréable à vivre dont le point culminant s’élève en son château du Xème siècle, forteresse emblématique de la ville. Avec 6979 habitants, Clisson poursuit un développement des infrastructures sociales avec bientôt la construction d’un lycée.\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Agence immobilière à Clisson</h3>\r\n\t\t\t\t <strong>Depuis 2003</strong>, notre agence immobilière développe sur Clisson et son agglomération, un service de gestion locative et une offre de biens variée (vente et location), avec des appartements dans le neuf ou l’ancien, des maisons traditionnelles, maisons de ville ou demeures bourgeoises, d’anciennes bâtisses de pierre et maisons de caractère dans le cœur historique, et des pavillons contemporains dans la périphérie.<br /><br />\r\n\t\t\t\t\tAJP Immobilier est aujourd’hui <strong>un des plus importants groupes immobiliers en <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>, avec déjà 20 agences immobilières sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a> et sa région. D’autres agences sont présentes en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, et dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a>.\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t <h3 style=\"font-weight:bold;\">Notre portefeuille immobilier sur Clisson</h3>\r\n\t\t\t\t\t\tSituée rue des Halles, notre agence immobilière se positionne idéalement au cœur de Clisson, et met à votre disposition un personnel qualifié pour un accompagnement global de votre projet immobilier. Découvrez nos offres de vente de <a href=\"/immobilier/achat/immo-clisson-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Clisson\">maisons</a>,  <a href=\"/immobilier/achat/immo-clisson-44/bien-appartement/\" title=\"Tous nos appartements à la vente sur Clisson\">appartements</a>,  <a href=\"/immobilier/achat/immo-clisson-44/bien-terrain/\" title=\"Tous nos terrains à la vente sur Clisson\">terrains</a>, sur <a href=\"/immobilier/tout/immo-Clisson-44/\" title=\"Tout l'immobilier à Clisson\">Clisson</a>, de  <a href=\"/immobilier/tout/immo-vallet-44/\" title=\"Tout l'immobilier à Vallet\">Vallet</a> à <a href=\"/immobilier/tout/immo-cugand-85/\" title=\"Tout l'immobilier à Cugand\">Cugand</a> et <a href=\"/immobilier/tout/immo-La-Bernardiere-85/\" title=\"Tout l'immobilier à La Bernardière\">La Bernardière</a>, ainsi que sur l’axe Nantes – <a href=\"/immobilier/tout/immo-cholet-49/\" title=\"Tout l'immobilier à Cholet\">Cholet</a>, entre <a href=\"/immobilier/tout/immo-monnieres-44/\" title=\"Tout l'immobilier à Monnières\">Monnières</a> et <a href=\"/immobilier/tout/immo-getigne-44/\" title=\"Tout l'immobilier à Gétigné\">Gétigné</a>.\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\tGrâce à la force de notre réseau et son fichier commun, notre agence est en mesure de vous proposer un <strong>vaste choix de biens</strong> à la vente, maisons, appartements, terrains, sur Clisson, de Vallet à Cugand et La Bernadière, entre Monnières et Gétigné, mais aussi sur Nantes et le sud Nantes, avec les 5 autres agences AJP présentes sur ce secteur.\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\r\n\t\t\t\t\t <h3 style=\"font-weight:bold;\">Vendez votre bien immobilier à Clisson avec AJP Immobilier Clisson !</h3>\r\n\t\t\t\t\tSi vous souhaitez nous confier la vente de votre maison, appartement, sur Clisson, Vallet et le sud Nantes, nous pourrons vous proposer le mandat Performance. <br />Ce mandat exclusif vous permet de bénéficier d’un <strong>engagement de notre part</strong>, pour une <strong>vente rapide</strong> et efficace grâce à la mise en place d’un plan de communication multi supports : mailings personnalisés, pose d’un panneau, presse locale et Internet.",
                "start": 50194,
                "end": 54746
            }
        ],
        "start": 49596,
        "end": 54755
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "206777",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 54788,
                "end": 54816
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Gu%C3%A9men%C3%A9-Penfao/133111700057857",
                "start": 54821,
                "end": 54936
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 54941,
                "end": 54969
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/107912946744425907922/",
                "start": 54974,
                "end": 55052
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpGuemenePenfao",
                "start": 55057,
                "end": 55130
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 55135,
                "end": 55168
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpGuemenePenfao",
                "start": 55173,
                "end": 55248
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 55257,
                "end": 55284
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "107912946744425907922",
                "start": 55289,
                "end": 55343
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 55353,
                "end": 55377
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez la ville de Guémené-Penfao</h3>\t\r\n\t\t\t\t\t\t\tSituée au cœur du Pays de Redon, et de la Vallée des 3 rivières, le Don, La Chère et la Vilaine, Guémené-Penfao compte aujourd’hui 5000 habitants sur un territoire de 10551 hectares. Entre Nantes et Rennes, le secteur immobilier de Guémené est un marché de rapport qui reste très attractif avec un paysage immobilier résidentiel, ancien et parfois rural, niché  dans un écrin de verdure.\r\n\t\t\t\t\t\t\t\t<br />\t<br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Agence immobilière AJP à Guémené-Penfao</h3>\t\r\n\t\t\t\t\t\t Intégrée au groupement AJP Immobilier depuis 2005, <strong>notre agence a pu obtenir jusqu’en 2011 le meilleur résultat du réseau</strong>, sur le nombre de <a href=\"/immobilier/achat/immo-guemene-penfao-44/\" title=\"Toutes nos annonces en vente à Guémené-Penfao\">ventes</a> (<a href=\"/immobilier/achat/immo-guemene-penfao-44/bien-maison/\" title=\"Toutes nos maisons en vente à Guémené-Penfao\">maisons</a>, <a href=\"/immobilier/achat/immo-guemene-penfao-44/bien-terrain/\" title=\"Tous nos terrains en vente à Guémené-Penfao\">terrains</a> et <a href=\"/immobilier/achat/immo-guemene-penfao-44/bien-appartement/\" title=\"Tous nos appartements en vente à Guémené-Penfao\">appartements</a>), réalisées sur les secteurs de Guémené-Penfao, Derval et Nozay et proximité.\r\n\t\t\t\t\t\t <br /><br />\r\n\t\t\t\t\t\t\tAvec une efficacité incontestable sur le secteur de Guémené, AJP Immobilier a su fidéliser une clientèle locale en travaillant dans un esprit de <strong>confiance mutuelle</strong>.\r\n\t\t\t\t\t\t\tEntouré d’un <strong>personnel qualifié</strong> et passionné, notre groupe poursuit aujourd’hui le développement de son agence immobilière sur Guémené-Penfao, dans le respect déontologique de ce métier, pour une qualité de service à la hauteur de vos attentes.\r\n\t\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t<strong>Nos services transaction et location</strong> vous attendent pour une <strong>étude sur mesure</strong> de votre projet immobilier, qu’il s’agisse d’un achat en résidence principale, secondaire, d’une location ou de la vente de votre maison, appartement, terrain, sur le secteur de <a href=\"/immobilier/tout/immo-Guemene-Penfao-44/\" title=\"Tout l'immobilier sur Guémené-Penfao\">Guémené-Penfao</a>, <a href=\"/immobilier/tout/immo-Derval-44/\" title=\"Tout l'immobilier sur Derval\">Derval</a> et <a href=\"/immobilier/tout/immo-Nozay-44/\" title=\"Tout l'immobilier sur Nozay\">Nozay</a>.\r\n\t\t\t\t\t\t\t\t<br />\t<br />\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Nos annonces immobilières sur Guémené-Penfao</h3>\r\n\t\t\t\t\t\t\tDans un paysage de verdure traversé par les 3 rivières du Pays de Redon, vous trouverez un choix de maisons de caractère en pierre, des maisons bourgeoises, des maisons de type rural, fermettes, corps de ferme, longères, ainsi que des pavillons contemporains, traditionnels et de belles propriétés.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\t\r\n\t\t\t\t\t\t\tNous vous proposons de consulter régulièrement notre site pour y trouver un choix varié d’annonces de vente de maisons sur Guémené-Penfao et ses environs, mais aussi des annonces de vente de terrains constructibles et locaux professionnels.\t\r\n\t\t\t\t\t\t\t\t<br />\t<br />\r\n\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre service Gestion Locative à Guémené-Penfao</h3>\r\n\t\t\t\t\t\t\tNotre agence dispose aussi d’un service de gestion locative, et vous propose une offre de biens à la location sur l’ensemble de notre secteur. <br />Notre spécialiste de la gestion immobilière est à votre disposition pour vous aider à trouver un logement ou pour proposer à notre clientèle de propriétaires bailleurs, la formule de gestion la mieux adaptée.",
                "start": 55385,
                "end": 59039
            }
        ],
        "start": 54761,
        "end": 59048
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "238601",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 59081,
                "end": 59109
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-La-Baule/135989459765821",
                "start": 59114,
                "end": 59213
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 59218,
                "end": 59246
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/111938057938065758441/",
                "start": 59251,
                "end": 59329
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpLaBaule",
                "start": 59334,
                "end": 59401
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 59406,
                "end": 59439
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpLaBauleo",
                "start": 59444,
                "end": 59514
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 59523,
                "end": 59550
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "111938057938065758441",
                "start": 59555,
                "end": 59609
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 59619,
                "end": 59643
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">AJP Immobilier vous fait découvrir la ville de La Baule</h3>\r\n\t\t\t\t\t\tAvec 16000 habitants à l’année et une population estivante de 150 000 âmes, La Baule est une des stations balnéaires de le Côte d’Amour les plus fréquentées. Dotée de nombreuses infrastructures liées au tourisme, palaces et hôtels, locations meublées, campings et chambres d’hôtes, Thalasso, nautisme, tennis , golf, équitation, etc., La Baule est une commune dédiée aux loisirs.\r\n\t\t\t\t\t\t<br />Au cœur d’un marché essentiellement orienté sur le secondaire, notre agence, située proche de la plage Benoit, répond <strong>depuis 2006</strong>, à une demande de projets liés au tourisme et aux projets de retraite, pour une clientèle provenant de Nantes, Rennes, ou région parisienne.<br /><br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Agence Immobilière AJP à la Baule</h3>\r\n\t\t\t\t\t\t Le Groupe AJP Immobilier, offre à notre agence la force d’un des plus grands réseaux immobiliers de Loire Atlantique. Avec 20 agences sur Nantes et sa région, notre fichier commun nous permet de vous soumettre une <strong>grande offre de biens</strong> dans votre région : vente de terrains, location et vente de maisons et appartements, sur La Baule, Le Pouliguen, Guérande, Le Croisic, Batz sur Mer et Pornichet...\r\n\t\t\t\t\t\t AJP Immobilier continue de se développer en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a> et en <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a>. 3 agences immobilières AJP sont présentes sur La Baule et Saint Nazaire pour une offre de proximité.<br /><br />\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Vente et location saisonnière à La Baule</h3> \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tDécouvrez sur ce site, une sélection d’annonces de vente de <a href=\"/immobilier/achat/immo-la-baule-Escoublac-44/bien-maison/\" title=\"Nos maisons à la vente sur La Baule Escoublac\">maisons</a> et <a href=\"/immobilier/achat/immo-la-baule-Escoublac-44/bien-appartement/\" title=\"Nos appartements à la vente sur La Baule Escoublac\">appartements</a> sur La Baule, <a href=\"/immobilier/tout/immo-le-Pouliguen-44/\" title=\"Tout l'immobilier à Le Pouliguen\">Le Pouliguen</a>, <a href=\"/immobilier/tout/immo-Guerande-44/\" title=\"Tout l'immobilier à Guérande\">Guérande</a>, <a href=\"/immobilier/tout/immo-Le-Croisic-44/\" title=\"Tout l'immobilier au Croisic\">Le Croisic</a>, <a href=\"/immobilier/tout/immo-Batz-sur-Mer-44/\" title=\"Tout l'immobilier à Batz sur Mer\">Batz sur Mer</a> et <a href=\"/immobilier/tout/immo-Pornichet-44/\" title=\"Tout l'immobilier au Pornichet\">Pornichet</a>. Préparez votre prochain séjour et consultez nos offres en location saisonnière, sur La Baule et proximité.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tNotre site rassemble une sélection d’annonces de vente de maisons, villas sur la Baule et de Pornichet, au Croisic, en bord de mer, ainsi que des annonces de vente d’appartements, à La Baule, dans les résidences du front de mer, avec terrasse ou balcon.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre service gestion locative à La Baule et sa région</h3>\r\n\t\t\t\t\t\tNotre agence dispose également d’un service de gestion locative, géré par notre spécialiste de la gestion immobilière. Ce service propose aux propriétaires, la garantie des loyers impayés, une gestion avec prise en charge globale des entrées, sorties, états des lieux, encaissement des loyers, travaux et propose une aide à la déclaration des revenus fonciers en fin d’année. Vous pourrez choisir de nous confier votre bien en location annuelle ou location saisonnière sur La Baule et la Côte d’Amour.\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\tNotre mandat Performance (vente en exclusivité) vous permet de <strong>bénéficier</strong> :\r\n\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t<li>\t•\tDe <strong>la pose d’un panneau « à vendre »</strong></li> \r\n\t\t\t\t\t<li>\t•\tDe <strong>mailings distribués</strong> sur votre secteur</li>\r\n\t\t\t\t\t<li>\t•\tD’un <strong>affichage en vitrine</strong></li>\r\n\t\t\t\t\t<li>\t•\tDe la <strong>parution de votre annonce</strong> dans le fichier de l’AMEPI (visible par 27 agences du Côtes-d'Armor)</li>\r\n\t\t\t\t\t<li>\t•\tD’un <strong>suivi personnalisé</strong></li>\r\n\t\t\t\t\t<li>\t•\tDe l’ensemble de nos <strong>supports de communication</strong></li>\r\n\t\t\t\t\t</ul> <br />\r\n\t\t\t\t\t\tAJP c’est aussi <a href=\"http://www.ajp-investissement.com\" title=\"AJP Investissement\" target=\"_blank\">AJP Investissement</a> et  <a href=\"http://www.ajp-entreprises.com\" title=\"AJP Entreprises\" target=\"_blank\">AJP Entreprises</a>, 2 structures dédiées à l’investissement immobilier, et à l’immobilier d’entreprise.",
                "start": 59651,
                "end": 64651
            }
        ],
        "start": 59054,
        "end": 64660
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "206782",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 64693,
                "end": 64721
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-La-Roche-sur-Yon/140090816009311",
                "start": 64726,
                "end": 64833
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 64838,
                "end": 64866
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/111538583438533360102/",
                "start": 64871,
                "end": 64949
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpImmoLaRocheSurYon/",
                "start": 64954,
                "end": 65032
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 65037,
                "end": 65070
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpImmoLaRochesurYon",
                "start": 65075,
                "end": 65154
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 65163,
                "end": 65190
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "111538583438533360102",
                "start": 65195,
                "end": 65249
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 65259,
                "end": 65283
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez la ville de La Roche sur Yon</h3>\r\n\t\t\t\t\t\tPréfecture de la Vendée, La Roche-Sur-Yon compte aujourd’hui 55 000 habitants et se développe tant sur le plan touristique qu’économique, se positionnant comme le premier pôle commercial du département. Grâce à  la vallée de l'Yon, la commune bénéficie d’un environnement naturel qui offre 40 hectares d'espaces aménagés.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Agence immobilière à La Roche sur Yon</h3> \r\n\t\t\t\t\t\tAJP Immobilier est <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>. Il compte 20 agences sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a> et <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">sa région</a>, et d’autres agences se développent en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a>, et en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, avec 5 agences immobilières à La Roche sur Yon, Luçon, Les Sables d’Olonne, Les Herbiers et Challans.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\t<br />\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Notre offre immobilière à La Roche sur Yon</h3>\r\n\t\t\t\t\t\tDécouvrez notre sélection de biens à la location et à la vente, <a href=\"/immobilier/achat/immo-la-roche-sur-yon-85/bien-maison/\" title=\"Toutes nos maisons à la vente sur La Roche sur Yon\">maisons</a>, <a href=\"/immobilier/achat/immo-la-roche-sur-yon-85/bien-appartement/\" title=\"Tous nos appartements à la vente sur La Roche sur Yon\">appartements</a>, <a href=\"/immobilier/achat/immo-la-roche-sur-yon-85/bien-terrain/\" title=\"Tous nos terrains à la vente sur La Roche sur Yon\">terrains</a> mais aussi des <a href=\"/immobilier/locations/immo-la-roche-sur-yon-85/bien-appartement/\" title=\"Tous nos appartements à la location sur La Roche sur Yon\">appartements</a> et des <a href=\"/immobilier/locations/immo-la-roche-sur-yon-85/bien-maison/\" title=\"Toutes nos maisons à la location sur La Roche sur Yon\">maisons</a> à la location sur La Roche sur Yon et ses environs.\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\tNos agences travaillent en fichier commun au sein du groupement et sont donc en mesure de vous proposer un choix important de biens à la vente (maisons, appartements, terrains) sur <a href=\"/immobilier/tout/immo-la-roche-sur-yon-85/\" title=\"Tout l'immobilier sur La Roche sur Yon\">La Roche sur Yon</a> et ses proches environs (<a href=\"/immobilier/tout/immo-Landeronde-85/\" title=\"Tout l'immobilier sur Landeronde\">Landeronde</a>, <a href=\"/immobilier/tout/immo-Venansault-85/\" title=\"Tout l'immobilier sur Venansault\">Venansault</a>, <a href=\"/immobilier/tout/immo-Mouilleron-le-Captif-85/\" title=\"Tout l'immobilier sur Mouilleron le Captif\">Mouilleron le Captif</a>, <a href=\"/immobilier/tout/immo-Aubigny-85/\" title=\"Tout l'immobilier sur Aubigny\">Aubigny</a>, <a href=\"/immobilier/tout/immo-Nesmy-85/\" title=\"Tout l'immobilier sur Nesmy\">Nesmy</a>, <a href=\"/immobilier/tout/immo-Les-Clouzeaux-85/\" title=\"Tout l'immobilier sur Les Clouzeaux\">Les Clouzeaux</a>, <a href=\"/immobilier/tout/immo-Belleville-sur-Vie-85/\" title=\"Tout l'immobilier sur Belleville sur Vie\">Belleville sur Vie</a>, <a href=\"/immobilier/tout/immo-La-Ferriere-85/\" title=\"Tout l'immobilier sur La Férrière\">La Férrière</a>).\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Gestion Locative à La Roche sur Yon</h3>\r\n\t\t\t\t\t\tNotre agence dispose d’un service de gestion locative, et vous propose une <strong>gestion globale</strong> avec :\r\n\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t<li>Prise en charge totale des charges administratives</li>\r\n\t\t\t\t\t\t<li>Entrées et sorties de locataires</li>\r\n\t\t\t\t\t\t<li>Etats des lieux</li>\r\n\t\t\t\t\t\t<li>Encaissement des loyers</li>\r\n\t\t\t\t\t\t<li>Aide à la déclaration des revenus fonciers</li>\r\n\t\t\t\t\t\t<li>Garantie de loyers impayés</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\tDécouvrez également sur ce site nos offres en location annuelle.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Confiez-nous la vente de votre bien immobilier à La Roche sur Yon !</h3>\r\n\t\t\t\t\t\tAJP Immobilier vous propose dans le cadre de la vente de votre maison, appartement, terrain sur La Roche sur Yon et ses proches environs, un mandat exclusif, qui vous permet de bénéficier d’un engagement de moyens et services.<br />\r\n\t\t\t\t\t\tLe mandat Performance est destiné à optimiser la vente de votre bien avec :\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t<li>\t•\tUn <strong>positionnement prioritaire</strong> en vitrine</li>\r\n\t\t\t\t\t\t<li>\t•\tDes <strong>mailings personnalisés</strong> distribués sur votre secteur</li>\r\n\t\t\t\t\t\t<li>\t•\tLa <strong>pose d’un panneau</strong> en façade du bien<</li>\r\n\t\t\t\t\t\t<li>\t•\tDes <strong>parutions presse et Internet</strong> et sur l’ensemble des supports à disposition du réseau.</li>\r\n\t\t\t\t\t\t</ul>",
                "start": 65291,
                "end": 70638
            }
        ],
        "start": 64666,
        "end": 70647
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "337385",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 70680,
                "end": 70708
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Le-Loroux-Botterau/135938069772052",
                "start": 70713,
                "end": 70822
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 70827,
                "end": 70855
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/114137448985150354543/",
                "start": 70860,
                "end": 70938
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpLeLorouxBottereau",
                "start": 70943,
                "end": 71020
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 71025,
                "end": 71058
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpLeLorouxBottereau",
                "start": 71063,
                "end": 71142
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 71151,
                "end": 71178
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "114137448985150354543",
                "start": 71183,
                "end": 71237
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 71247,
                "end": 71271
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">AJP Immobilier vous fait découvrir la ville de Loroux Bottereau</h3>\r\n\t\t\t\t\t\tEtape touristique sur la route des vins du Pays de Loire, Le Loroux Bottereau se situe à 20km du centre de Nantes, à 15mn du périphérique nantais et constitue un marché de report dynamique pour les actifs nantais. Au cœur de la Vallée maraichère, Le Loroux Bottereau  et les communes voisines, La Remaudière, Le Landreau,  Saint-Julien-de-Concelles, La Chapelle-Basse-Mer et Barbechat en Loire-Atlantique, Landemont en Maine-et-Loire, offrent un paysage de campagne à proximité des bords de Loire.\r\n\t\t\t\t\t\t<br /> <br />\r\n  \t\t  \t\t <h3 style=\"font-weight:bold;\">Agence immobilière Le Loroux Bottereau</h3>\r\n\t\t\t\t\t\t<strong>Depuis 2009</strong>, notre agence immobilière située au Loroux Botterau, Place de l’Eglise, vous propose un service de transaction et gestion locative. Retrouvez-nous Place de l’Eglise pour une étude de votre projet immobilier sur Le Loroux Bottereau, Saint Julien de Concelles, Le Landreau, La Chapelle Basse Mer, La Chapelle Heulin...\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t AJP Immobilier, un réseau à vocation nationale, devenu aujourd’hui <strong>un des plus grands groupes immobiliers de <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Nos annonces immobilières sur Le Loroux Bottereau</h3>\r\n\t\t\t\t\t\tAvec un fichier commun, pour une plus grande force de proposition dans votre région, AJP Immobilier met à votre disposition un portefeuille de biens partagé par les 20 agences de Nantes et sa région. \r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\tAvec une équipe de professionnels, <strong>spécialistes du marché immobilier de ce secteur</strong> (<a href=\"/immobilier/tout/immo-Le-Loroux-Bottereau-44/\" title=\"Tout l'immobilier sur Le Loroux Bottereau\">Le Loroux Bottereau</a>, <a href=\"/immobilier/tout/immo-Saint-Julien-de-Concelles-44/\" title=\"Tout l'immobilier sur Saint Julien de Concelles\">Saint Julien de Concelles</a>, <a href=\"/immobilier/tout/immo-La-Chapelle-Basse-Mer-44/\" title=\"Tout l'immobilier sur La Chapelle Basse Mer\">La Chapelle Basse Mer</a>, <a href=\"/immobilier/tout/immo-Le-Landreau-44/\" title=\"Tout l'immobilier sur Le Landreau\">Le Landreau</a>, <a href=\"/immobilier/tout/immo-La-Chapelle-Heulin-44/\" title=\"Tout l'immobilier sur La Chapelle Heulin\">La Chapelle Heulin</a>), notre agence travaille dans un esprit de proximité, pour vous aider à trouver le bien que vous recherchez proche de chez vous. L’<strong>écoute, le professionnalisme et l’efficacité</strong>, restent la base commune de notre travail dans une relation de confiance mutuelle avec notre clientèle.\r\n\t\t\t\t\t\tUne approche plus humaine dans la découverte de votre projet, pour mettre toutes les chances de votre côté dans la réalisation de votre projet immobilier sur Le Loroux Bottereau et ses environs.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\tNotre portefeuille de biens rassemble un choix d’appartements, dans le neuf ou l’ancien, de maisons traditionnelles, maisons de bourg, maisons de caractère en pierre, pavillons contemporains, et terrains constructibles.<br />\r\n\t\t\t\t\t\tIdéalement <strong>placée en cœur de ville</strong>, notre agence dispose d’une vitrine bien exposée pour un impact pertinent sur les annonces affichées.",
                "start": 71279,
                "end": 74667
            }
        ],
        "start": 70653,
        "end": 74676
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "448059",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 74709,
                "end": 74737
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Les-Sables-dOlonne/699242910140249",
                "start": 74742,
                "end": 74851
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 74856,
                "end": 74884
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/110785226564204365879/posts",
                "start": 74889,
                "end": 74972
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpLesSablesDolonne",
                "start": 74977,
                "end": 75053
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 75058,
                "end": 75091
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpLesSablesDolonne",
                "start": 75096,
                "end": 75174
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 75183,
                "end": 75210
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "110785226564204365879",
                "start": 75215,
                "end": 75269
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 75279,
                "end": 75303
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez la ville des Sables d’Olonne avec AJP</h3>\r\n\t\t\t\t\t\tPort de pêche, station balnéaire, Les Sables d’Olonne a su exploiter très tôt son potentiel touristique avec notamment une des plus belles plages d’Europe sur la côte de lumière. Sous préfecture de la Vendée, c’est une commune qui compte aujourd’hui  un peu plus de 14500 habitants.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Agence Immobilière les Sables d’Olonne</h3>\r\n\t\t\t\t\t\tNotre réseau est à ce jour <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>, qui compte déjà 20 agences sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a>  et sa <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">région</a>. Notre développement s’étend en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a>\r\n, et en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, avec 5 agences à Luçon, Les Sables d’Olonne, Les Herbiers, La Roche sur Yon et Challans.<br />\r\n\t\t\t\t\t\tNotre fonctionnement en fichier commun, permet à nos agences de vous proposer un <strong>choix plus vaste de biens</strong> à la location et à la vente (maisons, appartements), sur Les Sables d’Olonne et dans votre région. \r\n\t\t\t\t\t\t<br />\t<br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre offre immobilière aux Sables d'Olonne</h3>\r\n\t\t\t\t\t\tDécouvrez notre sélection d’annonces de location et vente de <a href=\"/immobilier/achat/immo-Les-Sables-d-Olonne-85/bien-maison/\" title=\"Nos maisons à la vente sur les Sables d'Olonne\">maisons</a>,  <a href=\"/immobilier/achat/immo-Les-Sables-d-Olonne-85/bien-appartement/\" title=\"Nos appartements à la vente sur les Sables d'Olonne\">appartements</a>,  <a href=\"/immobilier/achat/immo-Les-Sables-d-Olonne-85/bien-terrain/\" title=\"Nos terrains à la vente sur les Sables d'Olonne\">terrains</a> sur Les Sables d’Olonne. Notre équipe, composée de professionnels, spécialistes du marché immobilier local, vous attend pour une étude sur mesure de votre projet.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\tNous étendons notre secteur immobilier sur Les Sables d’Olonne et les villages des alentours, secteur sur lequel nous pourrons vous soumettre une sélection de maisons traditionnelles, maisons de bourg, anciennes demeures en pierre, maisons de caractère à rénover, villas de bord de mer et des terrains à bâtir.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Gestion locative aux Sables d'Olonne</h3>\r\n\t\t\t\t\t\tNotre service de gestion, est à votre disposition, avec notre spécialiste de la gestion immobilière pour une <strong>disponibilité 6 jours sur 7</strong>. Ce service propose une gestion globale pour une prise en charge totale des charges administratives, entrées et sorties de locataires, états des lieux, encaissement des loyers, aide à la déclaration des revenus fonciers et vous proposera une garantie de loyers impayés. \r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Vendez votre bien aux Sables d’Olonne avec notre agence !</h3>\r\n\t\t\t\t\t\tAJP Immobilier vous propose un mandat exclusif, le mandant Performance, pour vous permettre de bénéficier d’un engagement de moyens et services, destinés à optimiser la vente de votre maison, appartement, sur les Sables d’Olonne et ses environs.<br />\r\n\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t<li>\t•\t\tPositionnement prioritaire en vitrine d’agence </li>\r\n\t\t\t\t\t\t<li>\t•\t\tMailings de proximité </li>\r\n\t\t\t\t\t\t<li>\t•\t\tPose d’un panneau </li>\r\n\t\t\t\t\t\t<li>\t•\t\tParutions presse et Internet </li>\r\n\t\t\t\t\t</ul>",
                "start": 75311,
                "end": 79417
            }
        ],
        "start": 74682,
        "end": 79426
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "238607",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 79459,
                "end": 79487
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Lu%C3%A7on/144489198900966",
                "start": 79492,
                "end": 79593
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 79598,
                "end": 79626
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/110785226564204365879/",
                "start": 79631,
                "end": 79709
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpLucon",
                "start": 79714,
                "end": 79779
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 79784,
                "end": 79817
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpLucon",
                "start": 79822,
                "end": 79889
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 79898,
                "end": 79925
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "110785226564204365879",
                "start": 79930,
                "end": 79984
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 79994,
                "end": 80018
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">AJP vous fait découvrir la ville de Luçon</h3>\r\n\t\t\t\t\t\tAvec déjà 11000 habitants Luçon, capitale économique du Sud Vendée, est dominée par 2 monuments phares, sa cathédrale et son Grand séminaire. Inscrite dans la Communauté de Communes des Pays Nés de la Mer, la commune participe à un objectif commun pour une nouvelle dynamique locale orientée sur le tourisme.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Agence immobilière AJP Immobilier à Luçon</h3>\r\n\t\t\t\t\t\tAJP Immobilier est aujourd’hui <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>, avec déjà 20 agences sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a>  et <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">sa région</a>. Le développement se poursuit en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a>, et en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, avec 5 agences immobilières à Luçon, Les Sables d’Olonne, Les Herbiers, La Roche sur Yon et Challans.<br />\r\n\t\t\t\t\t\tFonctionnant en fichier commun, nos agences sont en mesure de vous soumettre un choix démultiplié de biens à la vente et à la location dans votre région. \r\n\t\t\t\t\t\t<br />\t\r\n\t\t\t\t\t\t Une équipe de professionnels, <strong>spécialiste du marché immobilier local</strong>, vous attend pour une <strong>étude personnalisée de votre projet</strong>, dans un véritable esprit de proximité et de confiance mutuelle.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Nos annonces immobilières sur Luçon</h3>\r\n\t\t\t\t\t\t Découvrez sur ce site nos annonces immobilières, location et vente de maisons, appartements, terrains entre <a href=\"/immobilier/tout/immo-Sainte-Hermine-85/\" title=\"Tout l'immobilier à Sainte Hermine\">Sainte Hermine</a>, <a href=\"/immobilier/tout/immo-Mareuil-sur-Lay-Dissais-85/\" title=\"Tout l'immobilier à Mareuil sur Lay Dissais\">Mareuil sur Lay Dissais</a> et <a href=\"/immobilier/tout/immo-Lucon-85/\" title=\"Tout l'immobilier à Luçon\">Luçon</a>. \r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t  <br />\r\n\t\t\t\t\t\tNotre secteur immobilier, se concentre sur Luçon et les villages de proximité, Les Magnils Reigniers, Chasnais, Péault, Corpe, Sainte Gemme La Plaine et Triaize. Un secteur sur lequel nous pourrons vous proposer une sélection de maisons traditionnelles, maisons de bourg, anciennes demeures en pierre, maisons de caractère à rénover, ainsi que des terrains constructibles.\r\n\t\t\t\t\t\tNotre portefeuille de biens vous propose également un choix de biens à la location ou à la vente, (maisons, appartements, terrains) jusqu’à  <a href=\"/immobilier/achat/immo-sainte-hermine-85/bien-maison/\" title=\"Toutes nos maisons à la vente sur Sainte Hermine\">Sainte Hermine</a>,  <a href=\"/immobilier/achat/immo-Mareuil-sur-Lay-Dissais-85/bien-maison/\" title=\"Toutes nos maisons à la vente sur Mareuil sur Lay Dissais\">Mareuil sur Lay Dissais</a>.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Le plus de notre agence immobilière à Luçon</h3>\r\n\t\t\t\t\t\tIntégrée dans le tissu associatif et économique local, notre agence immobilière est en mesure de vous propose sur Luçon, l’aide de partenaires, pour vos travaux de rénovation ou décoration, ainsi que celle de notre courtier, pour vous aider à trouver un financement et orienter votre projet sur la bonne voie.\r\n\t\t\t\t\t\tNous nous félicitons aujourd’hui d’un taux de réponses positives de 87% sur les dossiers de financement.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Gestion Locative à Luçon</h3>\r\n\t\t\t\t\t\tUn service de gestion locative, est à votre disposition, avec une spécialiste de la gestion immobilière <strong>disponible 6 jours sur 7</strong>. Elle vous proposera une gestion globale avec prise en charge totale des charges administratives, entrées et sorties de locataires, états des lieux, encaissement des loyers, aide à la déclaration des revenus fonciers et vous proposera une garantie de loyers impayés. \r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Vendez rapidement votre bien immobilier à Luçon avec notre agence !</h3>\r\n\t\t\t\t\t\tAJP Immobilier met en place un mandat exclusif, le mandant Performance, pour vous permettre de bénéficier d’un engagement de moyens et services, destinés à optimiser la vente de votre maison, appartement, entre Sainte Hermine, Mareuil sur Lay Dissais et Luçon.<br />\r\n\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t<li>•\t<strong>Positionnement prioritaire</strong> en vitrine d’agence</li>\r\n\t\t\t\t\t\t<li>•\t<strong>Mailings de proximité</strong></li>\r\n\t\t\t\t\t\t<li>•\t<strong>Pose d’un panneau</strong></li>\r\n\t\t\t\t\t\t<li>•\t<strong>Parutions presse et Internet</strong></li>\r\n\t\t\t\t\t\t</ul>",
                "start": 80026,
                "end": 85244
            }
        ],
        "start": 79432,
        "end": 85253
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "206779",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 85286,
                "end": 85314
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Nantes-Centre/136857463012788",
                "start": 85319,
                "end": 85423
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 85428,
                "end": 85456
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/113024880763766761342/",
                "start": 85461,
                "end": 85539
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpNantesCentre",
                "start": 85544,
                "end": 85616
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 85621,
                "end": 85654
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpNantesCentre",
                "start": 85659,
                "end": 85733
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 85742,
                "end": 85769
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "113024880763766761342",
                "start": 85774,
                "end": 85828
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 85838,
                "end": 85862
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Agence immobilière sur Nantes Ouest</h3>\r\n\t\t\t\t\t\tAvec deux agences AJP déjà présentes sur <a href=\"/agence-immobiliere/nantes-44000/ajp-immobilier-nantes-est/206780.htm\" title=\"Notre agence AJP Immobilier à Nantes Est\">Nantes Est</a> et <a href=\"/agence-immobiliere/nantes-44300/ajp-immobilier-nantes-nord/406773.htm\" title=\"Notre agence AJP Immobilier à Nantes Nord\">Nantes Nord</a>, ainsi que notre agence immobilière sur <a href=\"/agence-immobiliere/nantes-44000/ajp-immobilier-nantes-centre/482169.htm\" title=\"Notre agence AJP Immobilier à Nantes Centre\">Nantes Centre</a> et Nantes Ouest AJP Immobilier met toutes ses forces de votre côté pour couvrir le marché immobilier nantais et vous donner le meilleur choix en vente et location.<br />\r\n\t\t\t\t\t\tDevenu en moins de 11 ans <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>, AJP possède 20 agences immobilières sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a>  et <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">sa région</a>, ainsi qu’en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a> et dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a>.<br /><br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\tUne équipe de <strong>4 conseillers</strong> en vente, et une conseillère en location et gestion sont à votre disposition pour vous aider à réaliser votre projet de vente, d’achat ou de location. Nous mettons à votre disposition toute notre <strong>expérience de 11 ans d’activité</strong> sur le secteur pour vous offrir un travail d’estimation précis de votre bien sur Nantes, une découverte pointue de vos attentes pour un projet de résidence principale ou un investissement locatif.<br /> <br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\"> Nos annonces immobilières sur Nantes et sa région</h3>\r\n\t\t\t\t\t\tLes agences AJP fonctionnent en fichier commun, offrant ainsi à notre clientèle de futurs acquéreurs <strong>le plus grand choix dans leur région</strong>. 20 agences sont présentes dans le 44 dont 11 à proximité de Nantes.<br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<br /> \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t Notre site rassemble toutes nos annonces immobilières sur Nantes et ses quartiers centre et ouest, de l’île de Nantes à Procé et de Cathédrale à Chantenay. Une équipe de professionnels de l’immobilier est à votre disposition pour une étude de votre projet de location, de vente ou d’achat résidentiel ou d’investissement. Nous vous offrons une estimation de votre bien sur Nantes.\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t<a href=\"/immobilier/tout/immo-nantes-44/\" title=\"Nos annonces immobilières sur Nantes\">Nos annonces immobilières sur Nantes</a>, vous proposent une offre d’appartements de toutes surfaces, dans le neuf, le récent ou l’ancien, une offre de maisons traditionnelles, maisons de villes, maisons de maître ou demeures bourgeoises, hôtels particuliers et pavillons contemporains. Nous couvrons les quartiers du secteur centre et ouest, de l’île de Nantes à Procé et de Cathédrale à Chantenay.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Estimation et vente de votre bien immobilier à Nantes et sa région</h3>\r\n\t\t\t\t\t\tPour  la vente de votre bien, nous pourrons vous proposer le mandat Performance* et ses nombreux avantages :<br />\r\n\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t\t<li>•<strong>Distribution de mailings personnalisés</strong></li>\r\n\t\t\t\t\t\t\t<li>•<strong>Pose d’un panneau en façade</strong></li>\r\n\t\t\t\t\t\t\t<li>•<strong>Diffusion de votre annonce immobilière en presse locale</strong> sur Nantes</li>\r\n\t\t\t\t\t\t\t<li>•<strong>Diffusion sur Internet</strong> et les principaux portails immobiliers</li>\r\n\t\t\t\t\t</ul><br />\r\n\t\t\t\t\t\tNotre collaboratrice spécialiste de la gestion immobilière vous propose une formule de gestion globale pour la prise en charge des entrées et sorties de locataires, les états des lieux, les encaissements des loyers, l’aide à la déclaration de revenus fonciers et la <strong>garantie de loyers impayés</strong>.",
                "start": 85870,
                "end": 90437
            }
        ],
        "start": 85259,
        "end": 90446
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "482169",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "0",
                "start": 90479,
                "end": 90507
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "",
                "start": 90512,
                "end": 90541
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 90546,
                "end": 90574
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "",
                "start": 90579,
                "end": 90611
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "",
                "start": 90616,
                "end": 90644
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 90649,
                "end": 90682
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "",
                "start": 90687,
                "end": 90719
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "0",
                "start": 90728,
                "end": 90755
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "",
                "start": 90760,
                "end": 90793
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "0",
                "start": 90803,
                "end": 90827
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "",
                "start": 90835,
                "end": 90866
            }
        ],
        "start": 90452,
        "end": 90875
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "206780",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 90908,
                "end": 90936
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Nantes-Est/120466138000053",
                "start": 90941,
                "end": 91042
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 91047,
                "end": 91075
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/101695865383470687354/",
                "start": 91080,
                "end": 91158
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpNantesEst",
                "start": 91163,
                "end": 91232
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 91237,
                "end": 91270
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpNantesEst",
                "start": 91275,
                "end": 91346
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 91355,
                "end": 91382
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "101695865383470687354",
                "start": 91387,
                "end": 91441
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 91451,
                "end": 91475
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Agence immobilière AJP Nantes Est</h3>\r\n\t\t\t\t\t\t AJP Immobilier est devenu en moins de 11 ans <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>, avec déjà 20 agences immobilières sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a> et <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">sa région</a>. Il se développe également en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, et dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a>.\r\n\t\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t\tDevenu un acteur majeur de l’immobilier sur Nantes et notamment sur Nantes-est, notre agence met à votre disposition une équipe de professionnels expérimentés, fidèles à l’agence depuis ses débuts et maîtrisant parfaitement le marché immobilier de Nantes et ses quartiers. L’assurance pour notre clientèle d’être accompagnée avec professionnalisme, dans son projet immobilier, qu’il s’agisse de la recherche d’une location (maison ou appartement) sur Nantes ou d’un projet de résidence principale.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Notre offre immobilière sur Nantes</h3>\r\n\t\t\t\t\t\t\t\tAvec 20 agences dans le 44 dont 11 à proximité de Nantes, notre portefeuille de biens en fichier commun vous permet de bénéficier d’un <strong>vaste choix</strong> pour trouver rapidement le bien à la vente ou à la location, (maison, appartement, etc.) sur Nantes.<br />\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\tDécouvrez sur notre site l’ensemble de nos <a href=\"/immobilier/tout/immo-nantes-44/\" title=\"Toutes nos annonces immobilières sur Nantes\">annonces immobilières</a>, et vente de <a href=\"/immobilier/achat/immo-nantes-44/bien-maison/\" title=\"Toutes nos maisons à la vente Nantes\">maisons</a>, <a href=\"/immobilier/achat/immo-nantes-44/bien-appartement/\" title=\"Tous nos appartements à la vente Nantes\">appartements</a> et <a href=\"/immobilier/achat/immo-nantes-44/bien-terrain/\" title=\"Tous nos terrains à la vente Nantes\">terrains</a> sur Nantes mais aussi des <a href=\"/immobilier/locations/immo-nantes-44/bien-appartement/\" title=\"Tous nos appartements à la location Nantes\">appartements</a> et des <a href=\"/immobilier/locations/immo-nantes-44/bien-maison/\" title=\"Toutes nos maisons à la location Nantes\">maisons</a> à la location.\r\n\t\t\t\t\t\t\tBénéficiez des conseils d’une équipe de <strong>professionnels expérimentés</strong> et de la <strong>force d’un réseau immobilier</strong> implanté sur Nantes et la Loire Atlantique, avec 20 agences.\r\n\t\t\t\t\t\t\t<br />\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\tNous couvrons les quartiers du secteur est, entre l’<strong>Erdre et la Loire</strong>, du <strong>centre de Nantes</strong> jusqu’à la <strong>limite de Carquefou</strong> : la Gare, la Cathédrale, Pont Saint Mihiel, Jardin des Plantes, Dalby, Saint Donatien, Toutes Aides, Saint Clément, Chalatres, Rond point de Paris, le pont de la Tortière, Plessis Tison, La Marrière, Doulon et Vieux Doulon, l’Eraudière, Route de Paris et Paridis.\r\n\t\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre service Gestion Locative à Nantes</h3>\r\n\t\t\t\t\t\t\tNotre agence met à votre disposition un service de gestion locative. Notre spécialiste de la gestion immobilière vous proposera une <strong>formule de gestion globale avec</strong> :\r\n\t\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\t\r\n\t\t\t\t\t\t\t<li>Prise en charge des entrées et sorties de locataires</li>\r\n\t\t\t\t\t\t\t<li>Etats des lieux</li>\r\n\t\t\t\t\t\t\t<li>Encaissement des loyers</li>\r\n\t\t\t\t\t\t\t<li>Aide à la déclaration des revenus fonciers</li>\r\n\t\t\t\t\t\t\t<li>Garantie de loyers impayés</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Confiez-nous la vente de votre bien immobilier à Nantes !</h3> \r\n\t\t\t\t\t\t\tDans le cadre de la vente de votre maison, appartement, sur Nantes, nos conseillers vous proposeront le mandat Performance. Un mandat exclusif qui permet de nous engager sur une <strong>vente rapide</strong> et efficace avec l’élaboration d’un <strong>plan de communication</strong> sur tous les supports à disposition : mailings personnalisés, pose d’un panneau, parution au sein de la presse locale et Internet.<br />\r\n\t\t\t\t\t\t\tL’agence met également à votre disposition ses partenaires et son relationnel local, pour intervenir sur vos recherches de financement ou vos devis travaux. \r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\tAJP c’est aussi <a href=\"http://www.ajp-investissement.com\" title=\"AJP Investissement\" target=\"_blank\">AJP Investissement</a> et <a href=\"http://www.ajp-entreprises.com\" title=\"AJP Entreprises\" target=\"_blank\">AJP Entreprises</a>, 2 structures dédiées à l’investissement immobilier, et à l’immobilier d’entreprise.",
                "start": 91483,
                "end": 96729
            }
        ],
        "start": 90881,
        "end": 96738
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "406773",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 96771,
                "end": 96799
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Nantes-Nord/760897273942458",
                "start": 96804,
                "end": 96906
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 96911,
                "end": 96939
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/115006486181162110476/",
                "start": 96944,
                "end": 97022
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "",
                "start": 97027,
                "end": 97055
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 97060,
                "end": 97093
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "",
                "start": 97098,
                "end": 97130
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 97139,
                "end": 97166
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "115006486181162110476",
                "start": 97171,
                "end": 97225
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 97235,
                "end": 97259
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Agence immobilière AJP Nantes Nord</h3>\r\n\t\t  Intégrée au réseau AJP Immobilier, notre agence utilise la force d’un réseau de 36 agences dont 20 agences en Loire Atlantique et 7 dans le sud Loire pour une offre de biens démultipliée, notre force de proposition nous permet de vous soumettre un grand choix de biens à la vente, maisons, appartements, terrains, sur Orvault, Nantes secteur nord, La Chapelle sur Erdre, Suce sur Erdre, Sautron, Treillières.\r\n\t\t\t\t<br /><br />\r\n\t\t  \t\tNotre agence bénéficie d'un emplacement remarquable de part sa visibilité, la facilité de stationnement et la proximité immédiate des transports en commun. Toute notre équipe vous attend  pour une étude sur mesure de votre projet immobilier. <br /><br />\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t <h3 style=\"font-weight:bold;\">Nos annonces immobilières à Nantes Nord</h3> \r\n\t\t\t\tVous trouverez sur notre site nos offres de vente et location, avec un choix de maisons traditionnelles, maisons  contemporaines en résidences pavillonnaires, maisons d’architecte, demeures de caractère et appartements dans le neuf, le récent ou l’ancien.\r\n\t\t\t\t<br />\r\n\t\t\t\t\tNos conseillers sont à votre disposition, pour la réalisation de vos projets immobiliers, achat en résidence principale, investissement locatif, recherche d’un logement en location, ou vente de votre maison, appartement, sur <a href=\"/immobilier/tout/immo-orvault-44/\" title=\"tout l'immobilier à Orvault\">Orvault</a>, <a href=\"/immobilier/tout/immo-nantes-44/\" title=\"Tout l'immobilier à Nantes Secteur Nord\">Nantes secteur nord</a>, <a href=\"/immobilier/tout/immo-La-Chapelle-sur-Erdre-44/\" title=\"tout l'immobilier à La Chapelle sur Erdre\">La Chapelle sur Erdre</a>, <a href=\"/immobilier/tout/immo-Suce-sur-Erdre-44/\" title=\"tout l'immobilier à Suce sur Erdre\">Suce sur Erdre</a>, <a href=\"/immobilier/tout/immo-Sautron-44/\" title=\"tout l'immobilier à Sautron\">Sautron</a>, <a href=\"/immobilier/tout/immo-Treillieres-44/\" title=\"tout l'immobilier à Treillières\">Treillières</a>.\r\n\t\t\t\t<br /><br />\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t <h3 style=\"font-weight:bold;\">Gestion Locative à Nantes et la région</h3> \r\n\t\t\t\tVous souhaitez nous confier votre bien à la vente ou en gestion ?<br />\r\n\t\t\t\tNotre service de gestion locative vous permet de souscrire une assurance loyers impayés. <br />\r\n\t\t\t\tNos conseillers sont à votre disposition pour une estimation de votre bien.<br />\r\n\t\t\t\tNotre mandat Performance vous permet de bénéficier <br />\r\n\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t<li> •\tDe la <strong>pose d’un panneau</strong> </li> \r\n\t\t\t\t<li> •\tDe <strong>mailings distribués</strong> sur votre secteur </li> \r\n\t\t\t\t<li> •\tD’un <strong>affichage en vitrine</strong> </li> \r\n\t\t\t\t<li> •\tD’un <strong>suivi personnalisé</strong> </li> \r\n\t\t\t\t<li> •\tDe l’ensemble de nos <strong>supports de communication</strong> </li> \r\n\t\t\t</ul><br />\r\n\t\t\t\r\n\t\t\t <h3 style=\"font-weight:bold;\">Le réseau AJP Immobilier</h3>\r\n\t\t\t\tAJP c’est aussi nos filliales, <a href=\"http://www.ajp-investissement.com\" title=\"AJP Investissement\" target=\"_blank\">AJP Investissement</a> et <a href=\"http://www.ajp-entreprises.com\" title=\"AJP Entreprises\" target=\"_blank\">AJP Entreprises</a>, 2 structures dédiées à l’investissement immobilier, et à l’immobilier d’entreprise.<br />\r\n\t\t\t\tNotre agence est ouverte du lundi au samedi de 9h00 à 12h00 et de 14h à 19h00,  le samedi nous fermons à 17h00.<br />\r\n\t\t\t\t<strong>Toute l'équipe D'AJP Immobilier Nantes Nord se fera un plaisir de vous accueillir et vous conseiller</strong>\r\n\t\t\t\t<br />\r\n\t\t\t\tStéphane Mauny<br />\r\n\t\t\t\tDirecteur d'agence",
                "start": 97267,
                "end": 100872
            }
        ],
        "start": 96744,
        "end": 100881
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "206776",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 100914,
                "end": 100942
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Nort-sur-Erdre/146581195352375",
                "start": 100947,
                "end": 101052
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 101057,
                "end": 101085
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/117526254032048345904/",
                "start": 101090,
                "end": 101168
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpNortSurErdre",
                "start": 101173,
                "end": 101245
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 101250,
                "end": 101283
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpNortSurErdre",
                "start": 101288,
                "end": 101362
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 101371,
                "end": 101398
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "117526254032048345904",
                "start": 101403,
                "end": 101457
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 101467,
                "end": 101491
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">AJP vous fait découvrir la ville de Nort sur Erdre</h3>\r\n\t\t\t\t\t\t\tSitué à moins de 30mn de Nantes, le secteur immobilier de Nort sur Erdre, de sa proche agglomération sud, et des communes situées entre Héric et Ligné, jusqu’à Saint Mars du Désert et Grandchamps des Fontaines, offre un marché de report dynamique et porteur, pour tous les actifs nantais.\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\tAvec 7500 habitants, Nort sur Erdre fait partie de la communauté de communes Erdre & Gesvres, qui compte aujourd’hui 12 communes, Casson, Fay de Bretagne, Grandchamps des Fontaines, Héric, Les Touches, Nort sur Erdre, Notre Dame des Landes, Petit Mars, saint Mars du Désert, Sucé sur Erdre, Treillières, Vigneux de Bretagne, pour plus de 51 000 habitants. \r\n\t\t\t\t\t\t<br /> <br /> \r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Agence immobilière à Nort sur Erdre</h3>\r\n\t\t\t\t\t\t<strong>Depuis 2004</strong>, notre agence développe une activité de transaction en habitat, location et vente d’<a href=\"/immobilier/achat/immo-nort-sur-erdre-44/bien-appartement/\" title=\"Tous nos appartements à la vente sur Nort sur Erdre\">appartements</a>, de <a href=\"/immobilier/achat/immo-nort-sur-erdre-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Nort sur Erdre\">maisons</a> et <a href=\"/immobilier/achat/immo-nort-sur-erdre-44/bien-terrain/\" title=\"Tous nos terrains à la vente sur Nort sur Erdre\">terrains</a>, sur Nort sur Erdre et sa région.\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\tAvec une équipe de <strong>conseillers expérimentés</strong>, véritables professionnels sur le marché immobilier local, notre agence vous assure une qualité de conseil et un <strong>service de qualité</strong> appuyé par la force du réseau AJP Immobilier. Celui-ci compte déjà 20 agences sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a> et <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">sa région</a> et poursuit son développement en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, et dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a>.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre offre immobilière à Nort sur Erdre</h3>\r\n\t\t\t\t\t\tNotre secteur immobilier, s’étend sur <a href=\"/immobilier/tout/immo-nort-sur-erdre-44/\" title=\"Tout l'immobilier à Nort sur Erdre\">Nort sur Erdre</a> et ses environs, d’<a href=\"/immobilier/tout/immo-Abbaretz-44/\" title=\"Tout l'immobilier à Abbaretz\">Abbaretz</a>, <a href=\"/immobilier/tout/immo-Saffre-44/\" title=\"Tout l'immobilier à Saffré\">Saffré</a> à <a href=\"/immobilier/tout/immo-Grandchamps-des-Fontaines-44/\" title=\"Tout l'immobilier à Grandchamps des Fontaines\">Grandchamps des Fontaines</a> et <a href=\"/immobilier/tout/immo-Saint-Mars-du-Desert-44/\" title=\"Tout l'immobilier à Saint Mars du Désert\">Saint Mars du Désert</a>. \r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\tNotre agence immobilière de Nort sur Erdre vous propose une activité de transactions immobilières, location et vente de maisons appartements, terrains, de Nort sur Erdre à Abbaretz, Saffré, Riaillé, Trans sur Erdre, au nord, jusqu’à Casson, Les Touches, Petit Mars, Saint Mars du Désert et Grandchamps des Fontaines, au sud. Un secteur en plein développement, où vous trouverez à la vente, un choix de maisons contemporaines à Nort sur Erdre, d’appartements, dans le récent ou l’ancien, un choix de terrains, propriétés et maisons traditionnelles sur les villages de la campagne environnante.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Gestion Locative à Nort sur Erdre </h3>\r\n\t\t\t\t\t\tUn service de gestion locative est à votre disposition avec formule de gestion globale : \r\n\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t<li> •\tPrise en charge des entrées et sorties de locataires</li>\r\n\t\t\t\t\t\t<li> •\tEtats des lieux</li>\r\n\t\t\t\t\t\t<li> •\tEncaissement des loyers</li>\r\n\t\t\t\t\t\t<li> •\tAide à la déclaration des revenus fonciers</li>\r\n\t\t\t\t\t\t<li> •\tGarantie de loyers impayés</li>\r\n\t\t\t\t\t\t</ul><br />\r\n\t\t\t\t\t\tDans le cadre de la vente de votre bien, le pack Performance (mandat exclusif), vous permet d’obtenir un plan de communication multi supports : mailings personnalisés, pose d’un panneau, parution en presse locale et sur Internet.",
                "start": 101499,
                "end": 106139
            }
        ],
        "start": 100887,
        "end": 106148
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "447455",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 106181,
                "end": 106209
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Pessac/184910954878309",
                "start": 106214,
                "end": 106311
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 106316,
                "end": 106344
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/117337512413448106417/",
                "start": 106349,
                "end": 106427
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "",
                "start": 106432,
                "end": 106460
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 106465,
                "end": 106498
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "",
                "start": 106503,
                "end": 106535
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 106544,
                "end": 106571
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "117337512413448106417",
                "start": 106576,
                "end": 106630
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 106645,
                "end": 106669
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Agence immobilière Pessac (33)</h3>\r\n\t\t\t\t\t\t\t\tLoin des réseaux immobiliers nationaux classiques, AJP s´est construit une notoriété à la force d´une équipe de passionnés travaillant sur le terrain, au contact de la clientèle, au cœur de notre secteur immobilier, sur Pessac, Bordeaux et la CUB, Mérignac, Talence, Gradignan, Canéjan, St Jean d’Illac, Cestas... <br /> <br />\r\n\t\t\t\t\t\t\t\tAvec cette approche plus humaine de l´immobilier, un climat de confiance s´est instauré avec la clientèle pour une meilleure appréciation du projet immobilier.\r\n\t\t\t\t\t\t\t\tDisposant d’un directeur juridique et bénéficiant du service juridique de notre syndicat professionnel (UNIS), nous prenons toutes les mesures nécessaires pour répondre à chacune de vos interrogations sur le déroulement de la transaction. Une transparence nécessaire dans un métier complexe.\r\n\t\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\tDevenu en 16 ans <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>, Atlantique avec 20 agences sur Nantes et sa région, AJP Immobilier poursuit aujourd´hui son développement sur le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, l´<a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, la <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a> et la <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a> avec notre agence immobilière à Pessac.\r\n\t\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre offre immobilière à Pessac</h3> \r\n\t\t\t\t\t\t\t\t Notre agence immobilière de Pessac, idéalement située en cœur de ville, vous propose un service de transaction en habitat, location de <a href=\"/immobilier/locations/immo-pessac-33/bien-maison/\" title=\"Nos maisons à la location sur Pessac\">maisons</a> et  <a href=\"/immobilier/locations/immo-pessac-33/bien-appartement/\" title=\"Nos appartements à la location sur Pessac\">appartements</a>, sur Pessac, mais aussi des  <a href=\"/immobilier/achat/immo-pessac-33/bien-appartement/\" title=\"Nos appartements à la vente sur Pessac\">appartements</a> et des <a href=\"/immobilier/achat/immo-pessac-33/bien-maison/\" title=\"Nos maisons à la vente sur Pessac\">maisons</a> à vendre sur pessac, Bordeaux et la CUB, de Mérignac à Cestas en passant par Talence, Gradignan, Canéjan et St Jean d’Illac, ainsi qu’un service dédié à la <a href=\"http://www.ajp-immobilier.com/vente-terrain.htm\" title=\"Tous nos terrains à la vente \">vente de terrains</a>.\r\n\t\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\tDécouvrez sur ce site notre sélection d’annonces immobilières sur <a href=\"/immobilier/tout/immo-pessac-33/\" title=\"Tout l'immobilier à Pessac\">Pessac</a>, <a href=\"/immobilier/tout/immo-bordeaux-33/\" title=\"Tout l'immobilier à Bordeaux\">Bordeaux</a> et la CUB, de <a href=\"/immobilier/tout/immo-Merignac-33/\" title=\"Tout l'immobilier à Mérignac\">Mérignac</a> à <a href=\"/immobilier/tout/immo-Cestas-33/\" title=\"Tout l'immobilier à Cestas\">Cestas</a> en passant par <a href=\"/immobilier/tout/immo-Talence-33/\" title=\"Tout l'immobilier à Talence\">Talence</a>, <a href=\"/immobilier/tout/immo-Gradignan-33/\" title=\"Tout l'immobilier à Gradignan\">Gradignan</a>,  <a href=\"/immobilier/tout/immo-Canejan-33/\" title=\"Tout l'immobilier à Canéjan\">Canéjan</a> et <a href=\"/immobilier/tout/immo-Saint-Jean-d-Illac-33/\" title=\"Tout l'immobilier à Saint Jean d’Illac\">Saint Jean d’Illac</a>.\r\n\t\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t <h3 style=\"font-weight:bold;\">Gestion Locative à Pessac</h3>\r\n\t\t\t\t\t\t\t\tVous trouverez dans notre agence immobilière de Pessac, un service de gestion locative, qui gère actuellement  4 000 lots.\r\n\t\t\t\t\t\t\t\tUne formule de gestion globale vous sera proposée, comprenant, la <strong>GLI (Garantie des Loyers Impayés)</strong>, la garantie de vacance locative, de détérioration immobilière, ainsi que la protection juridique.\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<br />\tDans le cadre de la vente de votre maison, appartement, terrain sur Pessac et sa région, AJP Immobilier vous propose le mandat Performance, vous faisant bénéficier d’un engagement écrit sur des moyens conséquents, de diffusion de votre annonce immobilière.<br /><br />\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\tNotre groupe, c´est aussi <a href=\"http://www.ajp-investissement.com/\" titre=\"AJP Investissement\" target=\"_blank\">AJP Investissement</a> et <a href=\"http://www.ajp-entreprises.com/\" target=\"_blank\" title=\"AJP Entreprises\">AJP Entreprises</a>, si vous souhaitez préparer votre retraite ou réduire vos impôts, ou si vous projetez de vendre ou d´acheter un fonds de commerce sur le 85 et le 44.",
                "start": 106677,
                "end": 111594
            }
        ],
        "start": 106154,
        "end": 111603
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "379753",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 111636,
                "end": 111664
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Plumelec/139665749386288",
                "start": 111669,
                "end": 111768
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 111773,
                "end": 111801
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/116100223001404023832/",
                "start": 111806,
                "end": 111884
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpPlumelec",
                "start": 111889,
                "end": 111957
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 111962,
                "end": 111995
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpPlumelec",
                "start": 112000,
                "end": 112070
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 112079,
                "end": 112106
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "116100223001404023832",
                "start": 112111,
                "end": 112165
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 112176,
                "end": 112200
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Agence immobilière à Plumelec</h3>\r\n\t\t  Devenu en moins de 11 ans <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>, avec 20 agences sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a> et <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">sa région</a>, AJP Immobilier poursuit aujourd´hui son développement en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a> et dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, et vous présente son agence immobilière à Plumelec.\r\n\t\t<br />\r\n\t\t\tNotre agence immobilière est située à Plumelec, un village au cœur du Morbihan, de 2654 habitants, à 1h30 de Nantes, à 1h de Rennes et de Lorient, à 20 minutes de Vannes et à 20km du Golfe du Morbihan et des plages de l'Atlantique. <br /><br />\r\n\t\t\t\r\n\t\t<h3 style=\"font-weight:bold;\">Notre portefeuille sur Plumelec et la région</h3>\t\r\n\t\tNotre secteur immobilier, s’étend autour de <a href=\"/immobilier/tout/immo-plumelec-56/\" title=\"Toutes nos annonces à Plumelec\">Plumelec</a>, jusqu’à Josselin et Locminé et au sud, jusqu’à Elven et St Marcel. Un secteur peu urbanisé, dans un environnement de campagne et de verdure.\r\n\t\t<br /><br />\r\n\t\t\r\n\t\tNotre site réunit l’ensemble de nos annonces immobilières, avec un choix d’annonces de vente de maisons sur Plumelec et sa région, maisons traditionnelles, maisons de hameau, demeures de caractère en pierre, maisons néo-bretonnes, maisons contemporaines, ainsi qu’un choix de terrains constructibles.\r\n\t\t<br />\r\n\t\tVous trouverez également un choix de biens disponibles à la location annuelle, vide ou meublé.\r\n\t\t<br /><br />\r\n\t\t <h3 style=\"font-weight:bold;\">Gestion Locative à Plumelec</h3>\r\n\t\tNotre service de gestion locative, administré par notre collaboratrice spécialiste de la gestion immobilière, propose aux propriétaires bailleurs, une gestion globale pour:\r\n\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t<li> • Une prise en charge totale des entrées et sorties des locataires</li>\r\n\t\t\t<li> • Etats des lieux</li>\r\n\t\t\t<li> • Encaissements des loyers</li>\r\n\t\t\t<li> • Gestion des travaux</li>\r\n\t\t\t<li> • Aide à la déclaration des revenus fonciers en fin d’exercice</li>\r\n\t\t\t</ul>\r\n\t\t\t<br />Des garanties locatives sont proposées, telles que, la <strong>garantie des loyers impayés</strong>, la détérioration immobilière et la vacance locative.\r\n\t\t<br /><br />\r\n\t\t\r\n\t\t<h3 style=\"font-weight:bold;\">Confiez-nous la vente de votre bien à Plumelec !</h3>\r\n\t\tDans le cadre de la vente de votre maison, terrain, sur Plumelec et sa région, AJP Immobilier vous propose le mandat Performance, un mandat d’exclusivité, vous permettant de bénéficier d’un engagement de moyens conséquents, pour une diffusion de votre annonce immobilière sur les principaux supports presse et Internet et avec un affichage prioritaire en vitrine d’agence.",
                "start": 112208,
                "end": 115513
            }
        ],
        "start": 111609,
        "end": 115527
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "397260",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 115560,
                "end": 115588
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Questembert/124842150894601",
                "start": 115593,
                "end": 115695
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 115700,
                "end": 115728
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/118360140179640422347/posts",
                "start": 115733,
                "end": 115816
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpQuestembert",
                "start": 115821,
                "end": 115892
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 115897,
                "end": 115930
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpQuestembert",
                "start": 115935,
                "end": 116008
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 116017,
                "end": 116044
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "118360140179640422347",
                "start": 116049,
                "end": 116103
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 116113,
                "end": 116137
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez la ville de Questembert</h3>\r\n\t\t\t\t\t\t\tQuestembert est une commune de 7000 habitants qui s’inscrit dan la communauté de communes du Pays de Questembert. Situé entre Vannes et Rennes, cet ensemble de communes compte 13 localités pour 20 444, (Berric, Caden, La Vraie Croix, Larré, Lauzach, Le Cours, Limerzel, Malansac, Molac,  Pluherlin, Questembert, Rochefort en Terre, Saint Gravé.)\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Agence immobilière à Questembert</h3>\r\n\t\t\t\t\t\t\tNotre agence bénéficie d’un emplacement idéal, face à l’Eglise et d’un large linéaire de vitrine pour une exposition optimale de nos annonces. Notre site rassemble nos offres de location et vente de maisons, appartements et terrains, sur Questembert et sa communauté de commune.\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\tEn moins de 11 ans AJP Immobilier est devenu <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>. Il compte 20 agences sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a> et <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">sa région</a> et poursuit  son développement en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a> et dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a> avec notre agence immobilière à Questembert et à Vannes.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Notre portefeuille immobilier sur Questembert</h3>\r\n\t\t\t\t\t\t\tTravaillant en fichier commun avec les agences de <a href=\"http://www.ajp-immobilier.com/agence-immobiliere/redon-35600/ajp-redon/14229.htm\" title=\"L'agence AJP Immobilier Redon\">Redon</a>, <a href=\"http://www.ajp-immobilier.com/agence-immobiliere/plumelec-56420/ajp-plumelec/379753.htm\" title=\"L'agence AJP Immobilier Plumelec\">Plumelec</a> et <a href=\"http://www.ajp-immobilier.com/agence-immobiliere/vannes-56000/ajp-vannes/230435.htm\" title=\"L'agence AJP Immobilier Vannes\">Vannes</a>, nous sommes en mesure de vous présenter un grand choix de biens dans votre région, parmi une sélection d’annonces de vente de maisons traditionnelles, vente de maisons en pierre, sur Questembert et les villages de environs, mais aussi des fermes, corps de fermes ou longères, des maisons contemporaines ou des propriétés.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\tVous trouverez également un choix d’annonces de vente de terrains, sur <a href=\"/immobilier/achat/immo-Questembert-56/bien-terrain/\" title=\"Tous nos terrains à la vente sur Questembert\">Questembert</a> et sa communauté de communes et quelques appartements.\r\n\t\t\t\t\t\t\tDécouvrez  également nos biens disponibles à la location annuelle, vide ou meublé.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\tNotre secteur immobilier s’étend du nord au sud de <a href=\"/immobilier/achat/immo-Pleucadeuc-56/bien-terrain/\" title=\"Tous nos terrains à la vente sur Pleucadeuc\">Pleucadeuc</a>, <a href=\"/immobilier/achat/immo-Molac-56/bien-terrain/\" title=\"Tous nos terrains à la vente sur Molac\">Molac</a> à <a href=\"/immobilier/achat/immo-Noyal-Muzillac-56/bien-terrain/\" title=\"Tous nos terrains à la vente sur Noyal-Muzillac\">Noyal-Muzillac</a>, <a href=\"/immobilier/achat/immo-Berric-56/bien-terrain/\" title=\"Tous nos terrains à la vente sur Berric\">Berric</a> et <a href=\"/immobilier/achat/immo-Peaule-56/bien-terrain/\" title=\"Tous nos terrains à la vente sur Péaule\">Péaule</a> et d’est en ouest, de <a href=\"/immobilier/achat/immo-Caden-56/bien-terrain/\" title=\"Tous nos terrains à la vente sur Caden\">Caden</a>, <a href=\"/immobilier/achat/immo-Malansac-56/bien-terrain/\" title=\"Tous nos terrains à la vente sur Malansac\">Malansac</a>, à <a href=\"/immobilier/achat/immo-Trefflean-56/bien-terrain/\" title=\"Tous nos terrains à la vente sur Tréffléan\">Tréffléan</a>.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Gestion Locative à Questembert</h3> \r\n\t\t\t\t\t\t\tNotre agence met à votre disposition un service de gestion locative, qui propose aux propriétaires bailleurs la garantie des loyers impayés et une <strong>formule de gestion avec</strong>\r\n\t\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t\t<li>Prise en charge globale des entrées et sorties</li>\r\n\t\t\t\t\t\t\t<li>Etats des lieux</li>\r\n\t\t\t\t\t\t\t<li>Encaissement des loyers</li>\r\n\t\t\t\t\t\t\t<li>Travaux</li>\r\n\t\t\t\t\t\t\t<li>Aide à la déclaration des revenus fonciers en fin d’année<li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Faites confiance à AJP Immobilier pour la vente de votre bien !</h3>\r\n\t\t\t\t\t\t\tPour la vente de votre maison, terrains, sur Questembert et sa région, AJP Immobilier propose le mandat Performance, un mandat exclusif, qui permet de <strong>bénéficier d’un engagement</strong> de moyens mis à disposition, pour une multi diffusion des annonces (supports presse, Internet, mailings, pose d’un panneau et mailings personnalisés)",
                "start": 116145,
                "end": 121429
            }
        ],
        "start": 115533,
        "end": 121438
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "14229",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 121470,
                "end": 121498
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Redon/111518072232219",
                "start": 121503,
                "end": 121599
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 121604,
                "end": 121632
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/113143875441925384438/",
                "start": 121637,
                "end": 121715
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "",
                "start": 121720,
                "end": 121748
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 121753,
                "end": 121786
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "",
                "start": 121791,
                "end": 121823
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 121832,
                "end": 121859
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "113143875441925384438",
                "start": 121864,
                "end": 121918
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 121928,
                "end": 121952
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez la ville de Redon</h3>\r\n\t\t\t\t\t\tAu cœur d’un environnement de campagnes et cours d’eau, Redon se situe à la croisée des départements de l’Ille et Vilaine, de la Loire Atlantique et du Morbihan. Bien desservi par le train, Redon reste à moins de 1h de Rennes et de Nantes et à 40mn de Vannes et de la mer. Les communes les plus proches sont en Ille-et-Vilaine, Bains-sur-Oust, Sainte-Marie, dans le Morbihan, Saint-Perreux, Saint-Jean-la-Poterie, Rieux et en Loire-Atlantique, Saint-Nicolas-de-Redon.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\tAJP Immobilier à Redon vous propose depuis 1998 un service de transaction en habitat, vente de maisons, appartements, terrains, sur <a href=\"/immobilier/tout/immo-redon-35/\" title=\"Tout l'immobilier à Redon\">Redon</a>, <a href=\"/immobilier/tout/immo-Allaire-56/\" title=\"Tout l'immobilier à Allaire\">Allaire</a>, <a href=\"/immobilier/tout/immo-Rieux-56/\" title=\"Tout l'immobilier à Rieux\">Rieux<a/>, <a href=\"/immobilier/tout/immo-Fegreac-44/\" title=\"Tout l'immobilier à Fégréac\">Fégréac</a>, <a href=\"/immobilier/tout/immo-Avessac-44/\" title=\"Tout l'immobilier à Avessac\">Avessac</a>, <a href=\"/immobilier/tout/immo-sainte-marie-sur-mer-44/\" title=\"Tout l'immobilier à Sainte Marie\">Sainte Marie</a>, <a href=\"/immobilier/tout/immo-Bains-sur-Oust-35/\" title=\"Tout l'immobilier à Bains sur Oust\">Bains sur Oust</a> et <a href=\"/immobilier/tout/immo-Saint-Vincent-sur-Oust-56/\" title=\"Tout l'immobilier à Saint Vincent sur Oust\">Saint Vincent sur Oust</a>...\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Agence immobilière à Redon depuis 1998</h3>\r\n\t\t\t\t\t\t3 conseillers sont à votre disposition pour vous aider à réaliser votre projet immobilier et notre collaboratrice dédiée à la gestion locative vous aidera à trouver une location ou vous proposera une formule de gestion de votre bien.<br /> \r\n\t\t\t\t\t\tNotre agence est intégrée au réseau AJP Immobilier qui est devenu en moins de 11 ans <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>. Il se compose aujourd’hui de 20 agences sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a> et <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">sa région</a> et se développe également en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a> et en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, avec 3 agences immobilières à Rennes, Redon et Bain de Bretagne.\r\n\t\t\t\t\t\t<br /> \r\n\t\t\t\t\t\tIdéalement située en cœur de ville, avec un grand parking à disposition, notre agence bénéficie du meilleur impact visuel sur ses annonces affichées en vitrine.\r\n\t\t\t\t\t\tNous développons notre activité de transaction immobilière, location et gestion immobilière, sur un secteur essentiellement rural, où les villes et villages proposent un paysage immobilier de caractère.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Notre portefeuille d'annonces sur Redon</h3>\r\n\t\t\t\t\t\tNotre site rassemble une offre de biens à la vente, parmi un choix de maisons sur Redon, Allaire et ses environs, maisons rurales, maisons de caractère, maisons traditionnelles, corps de fermes, longères,  appartements sur Redon et Allaire.<br />\r\n\t\t\t\t\t\tVous trouverez également à la vente des terrains, autour de Redon et Allaires sur les villages des environs, entre La Gacilly, Saint Just (au nord) et Sévérac (au sud), et d’est en ouest, entre Fégréac, Avessac et Saint Gorgon.<br />\r\n\t\t\t\t\t\tNotre force de proposition est appuyée par le fichier commun des agences AJP présentes sur notre secteur : Guéméné, Questembert, Bain de Bretagne, Rennes et Blain.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Confiez-nous la vente de votre bien à Redon</h3>\r\n\t\t\t\t\t\tPour la vente de votre maison, appartement, terrain, sur Redon, Allaire et la région, nos conseillers vous proposeront une <strong>estimation fiable</strong>, basée sur une étude comparative et une parfaite connaissance du marché local. <br />\r\n\t\t\t\t\t\tNotre mandat Performance vous permettra de bénéficier d’une qualité de suivi, pour une vente rapide avec l’élaboration d’un plan de communication sur tous les supports à disposition : mailings personnalisés, pose d’un panneau, parution sur Internet.",
                "start": 121960,
                "end": 126754
            }
        ],
        "start": 121444,
        "end": 126763
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "313473",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 126796,
                "end": 126824
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Rennes/135848579782982",
                "start": 126829,
                "end": 126926
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 126931,
                "end": 126959
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/110358007922495114119/",
                "start": 126964,
                "end": 127042
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpRennes",
                "start": 127047,
                "end": 127113
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 127118,
                "end": 127151
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpRennes",
                "start": 127156,
                "end": 127224
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 127233,
                "end": 127260
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "110358007922495114119",
                "start": 127265,
                "end": 127319
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 127329,
                "end": 127353
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">AJP Immobilier vous fait découvrir la ville de Rennes</h3>\r\n\t\t\t\t\tCapitale bretonne et 10ème ville de France, Rennes compte aujourd’hui 206000 habitants. Son cœur de ville ancien en fait une métropole pleine de charme et son économie se développe aujourd’hui dans le secteur des nouvelles technologies. Avec le projet EURORENNES, basé sur la création d’une ligne express Paris-Rennes en 1h30 et la création d’un quartier d’affaires, le marché immobilier local connaîtra un nouvel élan d’ici 2014 à 2018.\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Agence immobilière à Rennes</h3>\r\n\t\t\t\t\t\r\n\t\t\t\t\tDepuis 2008 notre agence immobilière, située à Rennes, quartier Saint Hélier, vous propose un service de transaction, vente de <a href=\"/immobilier/achat/immo-rennes-35/bien-maison/\" title=\"Toutes nos maisons à la vente sur Rennes\">maisons</a>, <a href=\"/immobilier/achat/immo-rennes-35/bien-appartement/\" title=\"Tous nos appartements à la vente sur Rennes\">appartements</a>, <a href=\"/immobilier/achat/immo-rennes-35/bien-terrain/\" title=\"Tous nos terrains à la vente sur Rennes\">terrains</a> et <a href=\"/immobilier/achat/immo-rennes-35/bien-parking/\" title=\"Tous nos parking à la vente sur Rennes\">garages</A>, sur Rennes intramuros et proche agglomération mais aussi des <a href=\"/immobilier/locations/immo-rennes-35/bien-maison/\" title=\"Toutes nos maisons à la location sur Rennes\">maisons</a> et des <a href=\"/immobilier/locations/immo-rennes-35/bien-appartement/\" title=\"Tous nos appartements à la location sur Rennes\">appartements</a> à la location. Découvrez sur ce site notre sélection de biens et prenez contact avec nos conseillers pour une étude sur mesure de votre projet.\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t \r\n\t\t\t\t\tAJP Immobilier est devenu en moins de 11 ans <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>, avec déjà 20 agences immobilières sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a> et <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">sa région</a> et se développe en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a> et en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, avec 3 agences immobilières à Rennes, Redon et Bain de Bretagne.\r\n\t\t\t\t\t\r\n\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Nos annonces immobilières sur Rennes</h3>\r\n\t\t\t\t\tUn secteur sur lequel nous pourrons vous proposer un vaste choix de biens à la vente et à la location, des appartements sur Rennes centre, dans la vieille ville, dans des maisons ou immeubles à colombages, dans des résidences contemporaines, des immeubles anciens, ou des immeubles de style, en pierre. <br />\r\n\t\t\t\t\tVous trouverez également parmi nos annonces, des maisons de ville, des demeures bourgeoises, des maisons modernes ou de belles propriétés dans les résidences pavillonnaires de la périphérie, ainsi que des immeubles, des garages et parkings et des terrains constructibles.\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Gestion Locative à Rennes</h3> \r\n\t\t\t\t\tUne spécialiste de la gestion locative est à votre disposition à l’agence pour vous aider à trouver une location (studio, appartement) sur Rennes et sa proche agglomération. \tSi vous souhaitez nous confier la gestion de votre bien, elle vous proposera une <strong>formule de gestion globale</strong> avec :\r\n\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t<li>Prise en charge des entrées et sorties des locataires</li>\r\n\t\t\t\t\t<li>Etats des lieux</li>\r\n\t\t\t\t\t<li>Encaissement des loyers</li>\r\n\t\t\t\t\t<li>Aide à la déclaration des revenus fonciers</li>\r\n\t\t\t\t\t<li>Garantie de loyers impayés</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Vendez votre bien grâce notre agence immobilier AJP Rennes</h3> \r\n\t\t\t\t\tDans le cadre de la vente de votre maison, appartement sur Rennes, nos conseillers mettront à votre disposition leur connaissance pointue du marché local, pour vous proposer une estimation fiable, basée sur une étude comparative. <br />\r\n\t\t\t\t\tNotre mandat Performance (mandant exclusif), vous permet de bénéficier d’un <strong>engagement de notre part</strong> sur une qualité de suivi, une <strong>vente rapide</strong> et efficace avec l’élaboration d’un plan de communication sur tous les supports à disposition : \r\n\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t<li>Mailings personnalisés</li>\r\n\t\t\t\t\t<li>Pose d’un panneau</li>\r\n\t\t\t\t\t<li>Parution en presse et sur Internet</li>\r\n\t\t\t\t\t</ul> <br />\r\n\t\t\t\t\tNotre agence dispose également de partenaires locaux, pour intervenir sur vos recherches de financement ou vos devis travaux.",
                "start": 127361,
                "end": 132534
            }
        ],
        "start": 126769,
        "end": 132543
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "313473",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 132576,
                "end": 132604
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Rennes/135848579782982",
                "start": 132609,
                "end": 132706
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 132711,
                "end": 132739
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/110358007922495114119/",
                "start": 132744,
                "end": 132822
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpRennes",
                "start": 132827,
                "end": 132893
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 132898,
                "end": 132931
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpRennes",
                "start": 132936,
                "end": 133004
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 133013,
                "end": 133040
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "110358007922495114119",
                "start": 133045,
                "end": 133099
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 133109,
                "end": 133133
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">AJP Immobilier vous fait découvrir la ville de Rennes</h3>\r\n\t\t\t\t\tCapitale bretonne et 10ème ville de France, Rennes compte aujourd’hui 206000 habitants. Son cœur de ville ancien en fait une métropole pleine de charme et son économie se développe aujourd’hui dans le secteur des nouvelles technologies. Avec le projet EURORENNES, basé sur la création d’une ligne express Paris-Rennes en 1h30 et la création d’un quartier d’affaires, le marché immobilier local connaîtra un nouvel élan d’ici 2014 à 2018.\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Agence immobilière à Rennes</h3>\r\n\t\t\t\t\t\r\n\t\t\t\t\tDepuis 2008 notre agence immobilière, située à Rennes, quartier Saint Hélier, vous propose un service de transaction, vente de <a href=\"/immobilier/achat/immo-rennes-35/bien-maison/\" title=\"Toutes nos maisons à la vente sur Rennes\">maisons</a>, <a href=\"/immobilier/achat/immo-rennes-35/bien-appartement/\" title=\"Tous nos appartements à la vente sur Rennes\">appartements</a>, <a href=\"/immobilier/achat/immo-rennes-35/bien-terrain/\" title=\"Tous nos terrains à la vente sur Rennes\">terrains</a> et <a href=\"/immobilier/achat/immo-rennes-35/bien-parking/\" title=\"Tous nos parking à la vente sur Rennes\">garages</A>, sur Rennes intramuros et proche agglomération mais aussi des <a href=\"/immobilier/locations/immo-rennes-35/bien-maison/\" title=\"Toutes nos maisons à la location sur Rennes\">maisons</a> et des <a href=\"/immobilier/locations/immo-rennes-35/bien-appartement/\" title=\"Tous nos appartements à la location sur Rennes\">appartements</a> à la location. Découvrez sur ce site notre sélection de biens et prenez contact avec nos conseillers pour une étude sur mesure de votre projet.\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t \r\n\t\t\t\t\tAJP Immobilier est devenu en moins de 11 ans <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>, avec déjà 20 agences immobilières sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a> et <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">sa région</a> et se développe en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a> et en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, avec 3 agences immobilières à Rennes, Redon et Bain de Bretagne.\r\n\t\t\t\t\t\r\n\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Nos annonces immobilières sur Rennes</h3>\r\n\t\t\t\t\tUn secteur sur lequel nous pourrons vous proposer un vaste choix de biens à la vente et à la location, des appartements sur Rennes centre, dans la vieille ville, dans des maisons ou immeubles à colombages, dans des résidences contemporaines, des immeubles anciens, ou des immeubles de style, en pierre. <br />\r\n\t\t\t\t\tVous trouverez également parmi nos annonces, des maisons de ville, des demeures bourgeoises, des maisons modernes ou de belles propriétés dans les résidences pavillonnaires de la périphérie, ainsi que des immeubles, des garages et parkings et des terrains constructibles.\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Gestion Locative à Rennes</h3> \r\n\t\t\t\t\tUne spécialiste de la gestion locative est à votre disposition à l’agence pour vous aider à trouver une location (studio, appartement) sur Rennes et sa proche agglomération. \tSi vous souhaitez nous confier la gestion de votre bien, elle vous proposera une <strong>formule de gestion globale</strong> avec :\r\n\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t<li>Prise en charge des entrées et sorties des locataires</li>\r\n\t\t\t\t\t<li>Etats des lieux</li>\r\n\t\t\t\t\t<li>Encaissement des loyers</li>\r\n\t\t\t\t\t<li>Aide à la déclaration des revenus fonciers</li>\r\n\t\t\t\t\t<li>Garantie de loyers impayés</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Vendez votre bien grâce notre agence immobilier AJP Rennes</h3> \r\n\t\t\t\t\tDans le cadre de la vente de votre maison, appartement sur Rennes, nos conseillers mettront à votre disposition leur connaissance pointue du marché local, pour vous proposer une estimation fiable, basée sur une étude comparative. <br />\r\n\t\t\t\t\tNotre mandat Performance (mandant exclusif), vous permet de bénéficier d’un <strong>engagement de notre part</strong> sur une qualité de suivi, une <strong>vente rapide</strong> et efficace avec l’élaboration d’un plan de communication sur tous les supports à disposition : \r\n\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t<li>Mailings personnalisés</li>\r\n\t\t\t\t\t<li>Pose d’un panneau</li>\r\n\t\t\t\t\t<li>Parution en presse et sur Internet</li>\r\n\t\t\t\t\t</ul> <br />\r\n\t\t\t\t\tNotre agence dispose également de partenaires locaux, pour intervenir sur vos recherches de financement ou vos devis travaux.",
                "start": 133141,
                "end": 138314
            }
        ],
        "start": 132549,
        "end": 138323
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "313473",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 138356,
                "end": 138384
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Rennes/135848579782982",
                "start": 138389,
                "end": 138486
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 138491,
                "end": 138519
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/110358007922495114119/",
                "start": 138524,
                "end": 138602
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpRennes",
                "start": 138607,
                "end": 138673
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 138678,
                "end": 138711
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpRennes",
                "start": 138716,
                "end": 138784
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 138793,
                "end": 138820
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "110358007922495114119",
                "start": 138825,
                "end": 138879
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 138889,
                "end": 138913
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">AJP Immobilier vous fait découvrir la ville de Rennes</h3>\r\n\t\t\t\t\tCapitale bretonne et 10ème ville de France, Rennes compte aujourd’hui 206000 habitants. Son cœur de ville ancien en fait une métropole pleine de charme et son économie se développe aujourd’hui dans le secteur des nouvelles technologies. Avec le projet EURORENNES, basé sur la création d’une ligne express Paris-Rennes en 1h30 et la création d’un quartier d’affaires, le marché immobilier local connaîtra un nouvel élan d’ici 2014 à 2018.\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Agence immobilière à Rennes</h3>\r\n\t\t\t\t\t\r\n\t\t\t\t\tDepuis 2008 notre agence immobilière, située à Rennes, quartier Saint Hélier, vous propose un service de transaction, vente de <a href=\"/immobilier/achat/immo-rennes-35/bien-maison/\" title=\"Toutes nos maisons à la vente sur Rennes\">maisons</a>, <a href=\"/immobilier/achat/immo-rennes-35/bien-appartement/\" title=\"Tous nos appartements à la vente sur Rennes\">appartements</a>, <a href=\"/immobilier/achat/immo-rennes-35/bien-terrain/\" title=\"Tous nos terrains à la vente sur Rennes\">terrains</a> et <a href=\"/immobilier/achat/immo-rennes-35/bien-parking/\" title=\"Tous nos parking à la vente sur Rennes\">garages</A>, sur Rennes intramuros et proche agglomération mais aussi des <a href=\"/immobilier/locations/immo-rennes-35/bien-maison/\" title=\"Toutes nos maisons à la location sur Rennes\">maisons</a> et des <a href=\"/immobilier/locations/immo-rennes-35/bien-appartement/\" title=\"Tous nos appartements à la location sur Rennes\">appartements</a> à la location. Découvrez sur ce site notre sélection de biens et prenez contact avec nos conseillers pour une étude sur mesure de votre projet.\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t \r\n\t\t\t\t\tAJP Immobilier est devenu en moins de 11 ans <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>, avec déjà 20 agences immobilières sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a> et <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">sa région</a> et se développe en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a> et en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, avec 3 agences immobilières à Rennes, Redon et Bain de Bretagne.\r\n\t\t\t\t\t\r\n\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Nos annonces immobilières sur Rennes</h3>\r\n\t\t\t\t\tUn secteur sur lequel nous pourrons vous proposer un vaste choix de biens à la vente et à la location, des appartements sur Rennes centre, dans la vieille ville, dans des maisons ou immeubles à colombages, dans des résidences contemporaines, des immeubles anciens, ou des immeubles de style, en pierre. <br />\r\n\t\t\t\t\tVous trouverez également parmi nos annonces, des maisons de ville, des demeures bourgeoises, des maisons modernes ou de belles propriétés dans les résidences pavillonnaires de la périphérie, ainsi que des immeubles, des garages et parkings et des terrains constructibles.\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Gestion Locative à Rennes</h3> \r\n\t\t\t\t\tUne spécialiste de la gestion locative est à votre disposition à l’agence pour vous aider à trouver une location (studio, appartement) sur Rennes et sa proche agglomération. \tSi vous souhaitez nous confier la gestion de votre bien, elle vous proposera une <strong>formule de gestion globale</strong> avec :\r\n\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t<li>Prise en charge des entrées et sorties des locataires</li>\r\n\t\t\t\t\t<li>Etats des lieux</li>\r\n\t\t\t\t\t<li>Encaissement des loyers</li>\r\n\t\t\t\t\t<li>Aide à la déclaration des revenus fonciers</li>\r\n\t\t\t\t\t<li>Garantie de loyers impayés</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Vendez votre bien grâce notre agence immobilier AJP Rennes</h3> \r\n\t\t\t\t\tDans le cadre de la vente de votre maison, appartement sur Rennes, nos conseillers mettront à votre disposition leur connaissance pointue du marché local, pour vous proposer une estimation fiable, basée sur une étude comparative. <br />\r\n\t\t\t\t\tNotre mandat Performance (mandant exclusif), vous permet de bénéficier d’un <strong>engagement de notre part</strong> sur une qualité de suivi, une <strong>vente rapide</strong> et efficace avec l’élaboration d’un plan de communication sur tous les supports à disposition : \r\n\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t<li>Mailings personnalisés</li>\r\n\t\t\t\t\t<li>Pose d’un panneau</li>\r\n\t\t\t\t\t<li>Parution en presse et sur Internet</li>\r\n\t\t\t\t\t</ul> <br />\r\n\t\t\t\t\tNotre agence dispose également de partenaires locaux, pour intervenir sur vos recherches de financement ou vos devis travaux.",
                "start": 138921,
                "end": 144094
            }
        ],
        "start": 138329,
        "end": 144103
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "565323",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 144136,
                "end": 144164
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/AJP-Rennes-NORD-891375437621625/",
                "start": 144169,
                "end": 144255
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "https://twitter.com/AJP_Rennes_Nord",
                "start": 144260,
                "end": 144323
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/103359855792951158828/about",
                "start": 144328,
                "end": 144411
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "",
                "start": 144416,
                "end": 144444
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 144449,
                "end": 144482
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "",
                "start": 144487,
                "end": 144519
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 144528,
                "end": 144555
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "103359855792951158828",
                "start": 144560,
                "end": 144614
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 144624,
                "end": 144648
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">AJP IMMOBILIER vous présente son agence immobilière sur Rennes Nord</h3>\r\n\t\t\t\t\t<br/>Le marché immobilier de Rennes est désormais un secteur couvert par le groupe AJP Immobilier, avec la présence de 3 agences immobilières. Notre agence immobilière, présente sur le secteur nord, développe en conséquence une offre de biens à la <a href=http://www.ajp-immobilier.com/immobilier/achat/immo-rennes-35/>vente</a> et à la <a href=http://www.ajp-immobilier.com/immobilier/locations/immo-rennes-35/>location</a> sur une partie de la ville, qui s’étend de <a href=http://www.ajp-immobilier.com/immobilier/tout/immo-rennes-35/quartier-villejean-beauregard/>Villejean Beauregard</a> à l’ouest jusqu’au Parc des Gayeulles à l’est, et de la Bellangerais au nord, jusqu’au <a href=http://www.ajp-immobilier.com/immobilier/tout/immo-rennes-35/quartier-centre/>centre-ville</a>. Comme toutes les agences immobilières du Groupe AJP, l’agence AJP Rennes Nord travaille en étroit partenariat avec les agences intégrées du groupe, notamment celles de <a href=http://www.ajp-immobilier.com/agence-immobiliere/rennes-35000/ajp-immobilier-rennes/313473.htm>Rennes Est</a> et de <a href=http://www.ajp-immobilier.com/agence-immobiliere/pace-cedex-35740/ajp-immobilier-pace/565322.htm>Pacé</a>, pour un partage de fichiers en vente et location. Une force de proposition qui nous permet de répondre à tous vos projets immobiliers, pour vous aider à trouver le bien correspondant à vos attentes près de chez vous. \r\n\t\t\t\t\t<br/><br/>\r\n\t\t\t\t\t\r\n\t\t\t\t\tDepuis 2001, le Groupe AJP Immobilier étend son champ d’action afin de couvrir aujourd’hui le quart nord-ouest du territoire national et de proposer un service immobilier de proximité. Aujourd’hui <a href=http://www.ajp-immobilier.com/agences,liste.htm>48 agences immobilières</a> vous proposent de <a href=http://www.ajp-immobilier.com/agences,gironde.htm>Bordeaux</a> à Rennes, en passant par <a href=http://www.ajp-immobilier.com/agences,nantes.htm>Nantes</a>, <a href=http://www.ajp-immobilier.com/agence-immobiliere/vannes-56000/ajp-immobilier-vannes/230435.htm>Vannes</a> et <a href=http://www.ajp-immobilier.com/agence-immobiliere/angers-49000/ajp-immobilier-angers/330065.htm>Angers</a>, en <a href=http://www.ajp-immobilier.com/agences,gironde.htm>Gironde</a>, <a href=http://www.ajp-immobilier.com/agences,vendee.htm>Vendée</a>, dans <a href=http://www.ajp-immobilier.com/agences,morbihan.htm>le Morbihan</a>, <a href=http://www.ajp-immobilier.com/agences,maine-et-loire.htm>le Maine et Loire</a>, <a href=http://www.ajp-immobilier.com/agences,loire-atlantique.htm>la Loire Atlantique</a>, <a href=http://www.ajp-immobilier.com/agences,ille-et-vilaine.htm>l’Ille et Vilaine</a>, un vaste choix de <a href=http://www.ajp-immobilier.com/immobilier/>biens immobiliers</a>. \r\n\t\t\t\t\t<br/>\r\n\t\t\t\t\t<br/>Notre agence AJP Rennes Nord se compose d’une équipe de professionnels de l’immobilier, jeunes diplômés et personnel expérimenté, capable d’accompagner votre projet immobilier quel qu’il soit, achat immobilier en résidence principale, secondaire, projet d’investissement locatif, vente en viager, projet de location ou de gestion immobilière. \r\n\t\t\t\t\t<br/>Notre agence dispose d’un service de gestion locative intégré. Nos collaborateurs vous proposeront une formule de gestion adaptée à vos objectifs de rentabilité, avec la possibilité de souscrire une garantie de loyers impayés. \r\n\t\t\t\t\t<br/>\r\n\t\t\t\t\t<br/>Découvrez sur ce site nos offres en <a href=http://www.ajp-immobilier.com/immobilier/achat/immo-rennes-35/>vente</a> et <a href=http://www.ajp-immobilier.com/immobilier/locations/immo-rennes-35/>location</a>, parmi un choix de maisons dans différentes gammes de standing, anciennes ou contemporaines et pavillons avec jardin, <a href=http://www.ajp-immobilier.com/immobilier/achat-de-prestige/immo-rennes-35/>belles propriétés haut de gamme</a> et appartements de toutes surfaces dans le neuf, le récent ou l’ancien, <a href=http://www.ajp-immobilier.com/immobilier/achat/immo-rennes-35/bien-terrain/>terrains constructibles</a> et <a href=http://www.ajp-immobilier.com/immobilier/achat/immo-rennes-35/bien-boutique/>locaux professionnels</a>.",
                "start": 144656,
                "end": 148898
            }
        ],
        "start": 144109,
        "end": 148907
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "418999",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 148940,
                "end": 148968
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Rez%C3%A9/1413865785557413",
                "start": 148973,
                "end": 149074
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 149079,
                "end": 149107
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/110273234319255944152/",
                "start": 149112,
                "end": 149190
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpReze",
                "start": 149195,
                "end": 149259
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 149264,
                "end": 149297
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpReze",
                "start": 149302,
                "end": 149368
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 149377,
                "end": 149404
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "110273234319255944152",
                "start": 149409,
                "end": 149463
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 149473,
                "end": 149497
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez la ville de Rezé</h3>\r\n\t\t\t\t\tSituée au cœur de l’agglomération nantaise, Rézé est une commune de 33300 habitants dont l’histoire prend ses racines dans l’antiquité gallo-romaine. Elle se développe aujourd’hui sur le plan économique, industriel et commercial grâce au tramway et au périphérique, qui ont permis de faciliter l’accès au centre de Nantes, redonnant depuis un nouvel élan au marché immobilier local.\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Agence Immobilière à Rezé</h3>\r\n\t\t\t\t\tL’agence immobilière de Rezé est la 33ème du Groupe AJP Immobilier, un réseau devenu en moins de 11 ans un des plus grands groupes immobiliers de <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">Loire Atlantique (44)</a>, avec 20 agences sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a>  et sa région. Ce réseau poursuit son développement en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a> et en <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a>.\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\tSituée au cœur d’un marché porteur, notre agence immobilière répond à une logique de proximité sur Rezé et ses environs, poursuivant un axe de développement en étroite collaboration avec les agences AJP de notre secteur, notamment celles des <a href=\"/immobilier/tout/immo-les-Sorinieres-44/\" title=\"Tout l'immobilier à Sorinières\">Sorinières</a>, de <a href=\"/immobilier/tout/immo-Saint-Sebastien-sur-Loire-44/\" title=\"Tout l'immobilier à Saint Sébastien sur Loire\">Saint Sébastien sur Loire</a>, et celles de <a href=\"/immobilier/tout/immo-nantes-44/\" title=\"Tout l'immobilier à Nantes\">Nantes</a>.\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<strong>Ecoute</strong>, <strong>professionnalisme</strong> et <strong>efficacité</strong>, sont les maîtres mots de notre équipe qui est devenue spécialiste du marché immobilier local, pour vous soumettre les meilleures offres de vente de maisons, appartements, sur Rezé, Trentemoult, Bouguenais Les Couëts, Bouguenais Bourg, et l’Ile de Nantes.\r\n\t\t\t\t\t<br />Avec un <strong>service de proximité</strong> et une approche plus humaine dans la découverte de vos attentes, nous mettons toutes les chances de votre côté pour mener votre projet immobilier vers la réussite, qu’il s’agisse, de la recherche d’une location, d’un achat en résidence principale ou de la vente de votre maison ou appartement sur Rezé et le sud Nantes.\r\n\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\r\n\t\t\t\t\t <h3 style=\"font-weight:bold;\">Notre portfeuille d'annonces sur Rezé</h3>\r\n\t\t\t\t\tDécouvrez sur ce site notre portefeuille de biens à la vente, <a href=\"/immobilier/achat/immo-reze-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Rezé\">maisons</a>,  <a href=\"/immobilier/achat/immo-reze-44/bien-appartement/\" title=\"Tous nos appartements à la vente sur Rezé\">appartements</a> et <a href=\"/immobilier/achat/immo-reze-44/bien-terrain/\" title=\"Tous nos terrains à la vente sur Rezé\">terrains</a>, sur Rezé et le sud de Nantes mais aussi nos locations d'<a href=\"/immobilier/locations/immo-reze-44/bien-appartement/\" title=\"Tous nos appartements à la location sur Rezé\">appartements</a> et de <a href=\"/immobilier/locations/immo-reze-44/bien-maison/\" title=\"Toutes nos maisons à la location sur Rezé\">maisons</a>. Située sur Pont-Rousseau (tramway : Ligne 3), sur une place stratégique de ce quartier historique de Rezé, au 5 Place Pierre Sémard, notre agence vous accueille du lundi au vendredi de 9h à 19h et le samedi de 9h à 17h.\r\n\t\t\t\t\t<br />\t\r\n\t\t\t\t\r\n\t\t\t\t\tLa force de notre réseau, travaillant en <strong>fichier commun</strong>, nous offre la possibilité de consulter l’ensemble des biens partagés par les 11 agences de notre secteur et aussi par les 20 agences présentes sur le 44. <br />\r\n\t\t\t\t\t\r\n\t\t\t\t\t \r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Gestion locative à Rezé</h3>\r\n\t\t\t\t\tNotre agence dispose aussi d’un service de gestion locative, géré par une <strong>spécialiste de la gestion immobilière</strong>. \r\n\t\t\t\t\t<br />Ce service propose aux propriétaires :\r\n\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t<li>La garantie des loyers impayés</li>\r\n\t\t\t\t\t<li>Gestion avec prise en charge globale des entrées et sorties</li>\r\n\t\t\t\t\t<li>Etats des lieux</li>\r\n\t\t\t\t\t<li>Encaissement des loyers</li>\r\n\t\t\t\t\t<li>Gestion des travaux</li> \r\n\t\t\t\t\t<li>Aide à la déclaration des revenus fonciers en fin d’année</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<br />  <br />\r\n\t\t\t\t\t<h3 style=\"font-weight:bold;\">Vendez votre bien à Rezé avec AJP Rezé</h3>\r\n\t\t\t\t\tDans le cadre de la vente de votre maison, appartement, sur Rezé et ses environs, nous pourrons vous proposer une <strong>estimation gratuite</strong> et le <strong>mandat Performance</strong>, un mandat exclusif, qui permet de bénéficier d’un engagement sur les moyens mis à disposition pour la <strong>multi diffusion de votre annonce</strong> (supports presse Internet, mailings et pose d’un panneau pour une visibilité décuplée sur votre annonce immobilière).",
                "start": 149505,
                "end": 154888
            }
        ],
        "start": 148913,
        "end": 154897
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "284737",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 154930,
                "end": 154958
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-immobilier-Saint-Herblain/139435449418746",
                "start": 154963,
                "end": 155068
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 155073,
                "end": 155101
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/110193571448830410801/posts",
                "start": 155106,
                "end": 155189
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpSaintHerblain",
                "start": 155194,
                "end": 155267
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 155272,
                "end": 155305
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpSaintHerblain",
                "start": 155310,
                "end": 155385
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 155394,
                "end": 155421
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "110193571448830410801",
                "start": 155426,
                "end": 155480
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 155490,
                "end": 155514
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez la ville de Saint Herblain</h3>\r\n\t\t\t\t\t\t\tSaint-Herblain compte aujourd’hui 43000 habitants, se plaçant comme la 2ème ville de l’agglomération nantaise. A seulement 15mn de la gare de Nantes, cette commune suscite une forte demande de la part des actifs nantais sur un marché immobilier qui reste porteur et dynamique. Ecoles, commerces et équipements sportifs en font une ville familiale et agréable à vivre.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t  \r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Agence immobilière à Saint Herblain</h3>\r\n\t\t\t\t\t\t\tIntégrée dans le réseau AJP Immobilier depuis déjà 6 ans, notre agence immobilière de Saint Herblain, ouverte 6 jours sur 7, bénéficie de la force d’un réseau qui est devenu en moins de 11 ans un des plus importants groupes immobiliers en <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">Loire Atlantique (44)</a>, avec déjà 20 agences immobilières sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a> et sa région, mais aussi des agences en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, et dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a>.\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\tNotre site régulièrement mis à jour vous propose une sélection d’annonces de vente de <a href=\"/immobilier/achat/immo-Saint-Herblain-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Saint Herblain\">maison</a> et <a href=\"/immobilier/achat/immo-Saint-Herblain-44/bien-appartement/\" title=\"Tous nos appartements à la vente sur Saint Herblain\">appartements</a>, sur Saint Herblain, <a href=\"/immobilier/tout/immo-Coueron-44/\" title=\"Tout l'immobilier à Couëron\">Couëron</a> et <a href=\"/immobilier/tout/immo-indre-44/\" title=\"Tout l'immobilier à Indre\">Indre</a>. Située en cœur de ville, notre agence et son  équipe vous attendent pour une étude personnalisée de votre projet immobilier.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Nos annonces immobilières sur Saint Herblain</h3>\r\n\t\t\t\t\t\t\tTravaillant en fichier commun avec les autres agences du réseau et notamment celles de notre secteur, (11 à proximité de Nantes), nous somme en mesure de vous proposer un choix démultiplié de biens à la vente,  <a href=\"/immobilier/locations/immo-Saint-Herblain-44/bien-maison/\" title=\"Toutes nos maisons à la location sur Saint Herblain\">maisons</a>, <a href=\"/immobilier/locations/immo-Saint-Herblain-44/bien-appartement/\" title=\"Tous nos appartements à la location sur Saint Herblain\">appartements</a> et terrains sur Saint Herblain, et l’agglomération nantaise.<br />\r\n\t\t\t\t\t\t\tVous trouverez sur notre site une sélection de biens à la location et à la vente, des appartements, des maisons, sur <a href=\"/immobilier/locations/immo-saint-herblain-44/\" title=\"Toutes nos locations sur Saint Herblain\">Saint Herblain</a>, <a href=\"/immobilier/locations/immo-Coueron-44/\" title=\"Toutes nos locations sur Couëron\">Couëron</a> et <a href=\"/immobilier/locations/immo-indre-44/\" title=\"Toutes nos locations sur Indre\">Indre</a>, parmi un chois de maisons traditionnelles, pavillons contemporains. Nous pourrons également vous proposer des terrains ou propriétés en division parcellaire. \r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Faites-nous confiance pour la vente de votre immobilier à Saint Herblain !</h3>\r\n\t\t\t\t\t\t\tAvec une équipe de conseillers, dynamiques et motivés, travaillant en synergie, nous mettons toutes les chances de votre côté pour mener votre projet immobilier vers la réussite.\r\n\t\t\t\t\t\t\tUn véritable travail de terrain, nous permet de réaliser des recherches immobilières ciblées, correspondant exactement à vos critères de sélection. \r\n\t\t\t\t\t\t\t<br />Pour la vente de votre bien, notre mandat « Performance » vous permet de bénéficier d’un ensemble de points forts : <br />\r\n\t\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t\t<li>Visite groupée de tous nos conseillers pour une implication totale de l’équipe</li>\r\n\t\t\t\t\t\t\t<li>Pose d’un panneau</li>\r\n\t\t\t\t\t\t\t<li>Visibilité en vitrine d’agence</li>\r\n\t\t\t\t\t\t\t<li>Mailings de proximité</li>\r\n\t\t\t\t\t\t\t<li>Parution Ouest-France et Internet massive</li>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Le plus de notre agence immobilière à Saint Herblain</h3>\r\n\t\t\t\t\t\t\tL’agence met également à votre disposition ses partenaires et son relationnel local pour intervenir sur vos recherches de financement, vos devis travaux et futurs projets de construction.\r\n\t\t\t\t\t\t\tLe groupe AJP, c’est aussi <a href=\"http://www.ajp-investissement.com/\" titre=\"AJP Investissement\" target=\"_blank\">AJP Investissement</a> et <a href=\"http://www.ajp-entreprises.com/\" target=\"_blank\" title=\"AJP Entreprises\">AJP Entreprises</a> ; 2 structures dédiées à l’investissement immobilier et à l’immobilier d’entreprise.",
                "start": 155522,
                "end": 160795
            }
        ],
        "start": 154903,
        "end": 160804
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "348604",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 160837,
                "end": 160865
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Saint-Macaire/144975415513942",
                "start": 160870,
                "end": 160974
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 160979,
                "end": 161007
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/108024373034212409619/",
                "start": 161012,
                "end": 161090
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpSaintMacaire",
                "start": 161095,
                "end": 161167
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 161172,
                "end": 161205
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpSaintMacaire",
                "start": 161210,
                "end": 161284
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 161293,
                "end": 161320
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "108024373034212409619",
                "start": 161325,
                "end": 161379
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 161389,
                "end": 161413
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez la ville de Saint Macaire en Mauges</h3>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\tAvec 6530 habitants, Saint Macaire en Mauges se positionne idéalement à 20mn de Cholet et 45mn de Nantes, à proximité de l’axe de la N249. C’est une commune qui reste dynamique, avec des activités industrielles, artisanales et commerciales offrant un bassin d'emplois locaux. Les écoles, collège et associations culturelles, sociales et sportives en font une commune agréable à vivre et familiale.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Notre agence immobilère AJP Immobilier à Saint Macaire en Mauges</h3> \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\tDepuis 2009, notre agence vous propose un service de transactions en habitat et un service de gestion locative, avec une équipe de spécialistes dans chaque domaine et chaque secteur immobilier.<br />\r\n\t\t\t\t\t\t\tVous trouverez sur ce site, nos offres en location annuelle (vide et meublé), ainsi que nos annonces de vente de maisons, appartements et terrains, de Cholet à Saint Germain sur Moine et de Saint Macaire en Mauges à Beaupréau.\r\n\t\t\t\t\t\t\t\t<br /> \r\n\t\t\t\t\t\t\tLe groupement AJP Immobilier est devenu en moins de 11 ans un des plus importants groupes immobiliers en <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">Loire Atlantique (44)</a>, avec déjà 15 agences immobilières sur <a href=\"/agences,nantes.htm\" title=\"Toutes nos agences à Nantes\">Nantes</a> et sa région. Aujourd’hui le développement continu sur la <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, et dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a>, pour vous proposer avec 2 agences, un choix de biens à la vente, <a href=\"/immobilier/locations/immo-saint-macaire-en-mauges-49/bien-maison/\" title=\"Nos maisons à la vente sur Saint Macaire en Mauges\">maisons</a>, <a href=\"/immobilier/locations/immo-saint-macaire-en-mauges-49/bien-appartement/\" title=\"Nos appartements à la vente sur Saint Macaire en Mauges\">appartements</a>, <a href=\"/immobilier/locations/immo-saint-macaire-en-mauges-49/bien-terrain/\" title=\"Nos terrains à la vente sur Saint Macaire en Mauges\">terrains</a>, à Saint Macaire en Mauges et mais aussi des <a href=\"http://www.ajp-immobilier.com/immobilier/achat/immo-angers-49/bien-maison/\" title=\"Nos maisons à la vente sur Angers\">maisons</a>, <a href=\"/immobilier/locations/immo-angers-49/bien-terrain/\" title=\"Nos terrains à la vente sur Angers\">terrains</a> et appartements sur Angers.\r\n\t\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Nos annonces immobilières à Saint Macaire en Mauges</h3>\r\n\t\t\t\t\t\t\tTravaillant en fichier commun, les agences AJP Immobilier sont en mesure de vous proposer un choix démultiplié de biens à la vente et à la location dans votre région. Avec 5 agences en Maine et Loire et Loire Atlantique AJP Immobilier met toutes les chances de votre côté pour vous aider à trouver le bien que vous recherchez parmi nos annonces de vente de maisons, appartements, terrains, entre <a href=\"/immobilier/tout/immo-cholet-49/\" title=\"Tout l'immobilier à Cholet\">Cholet</a> et <a href=\"/immobilier/tout/immo-Saint-Germain-sur-Moine-49/\" title=\"Tout l'immobilier à Saint Germain sur Moine\">Saint Germain sur Moine</a> et entre <a href=\"/immobilier/tout/immo-Saint-Macaire-en-Mauges-49/\" title=\"Tout l'immobilier à Saint Macaire en Mauges\">Saint Macaire en Mauges</a> et <a href=\"/immobilier/tout/immo-Beaupreau-49/\" title=\"Tout l'immobilier à Beaupréau\">Beaupréau</a>, ou delà.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\tParmi nos biens à la vente ou à la location, vous découvrirez un choix d’appartements, en ville, dans le neuf, le récent ou l’ancien, un choix de maisons traditionnelles, maisons de ville ou maisons de bourg, pavillons contemporains, et dans les villages de campagne, des fermettes, corps de ferme à rénover ou longères.\r\n\t\t\t\t\t\t\t<br />  <br />\r\n\t\t\t\t\t\t\t<strong>Nos partenaires</strong>, pourront intervenir pour vous aider à trouver un financement ou vous informer sur les produits d’investissement immobilier défiscalisé (vente de maisons ou appartements neufs, sur Cholet et son agglomération) en loi Scellier. \r\n\t\t\t\t\t\t\t<br />  <br />\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Gestion locative à Saint Macaire en Mauges</h3>\r\n\t\t\t\t\t\t\tNotre service de gestion locative, pourra ensuite gérer votre investissement locatif, notre spécialiste de la gestion immobilière vous proposera une formule de gestion globale avec prise en charge des entrées et sorties de locataires, états des lieux, encaissement des loyers, aide à la déclaration des revenus fonciers et vous proposera une garantie de loyers impayés. \r\n\t\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Faites-nous confiance pour la vente de votre bien à Saint Macaire en Mauges</h3> \r\n\t\t\t\t\t\t\tSi vous souhaitez nous confier la vente de votre maison, appartement, sur Saint Macaire en Mauges et sa région, AJP Immobilier vous proposera le mandat Performance. \r\n\t\t\t\t\t\t\t<br />Ce mandat exclusif nous permet de nous engager sur une vente rapide et efficace avec l’élaboration d’un plan de communication sur tous les supports à disposition : mailings personnalisés, presse locale et Internet.",
                "start": 161421,
                "end": 167015
            }
        ],
        "start": 160810,
        "end": 167024
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "418996",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 167057,
                "end": 167085
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Saint-Marc-sur-Mer/1528906790670245",
                "start": 167090,
                "end": 167200
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 167205,
                "end": 167233
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/116810613414947889588/about",
                "start": 167238,
                "end": 167321
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpSaintMarcSurMer",
                "start": 167326,
                "end": 167401
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 167406,
                "end": 167439
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpSaintMarcSurMer",
                "start": 167444,
                "end": 167521
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 167530,
                "end": 167557
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "116810613414947889588",
                "start": 167562,
                "end": 167616
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 167626,
                "end": 167650
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez la ville de Saint Marc sur Mer</h3>\r\n\t\t\t\t\t\tSaint Marc sur Mer, quartier résidentiel situé à 6km à l’ouest de Saint Nazaire est avant tout une petite station balnéaire, qui offre un paysage de côte encore sauvage et de plages de sable, rendue célèbre par le film « Les vacances de Monsieur Hulot ».\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\tNotre agence immobilière située dans le quartier de Saint Marc sur Mer à Saint Nazaire, vous propose <strong>depuis 2011</strong>, un service immobilier de proximité pour trouver près de chez vous un choix de maisons et appartements, proche de l’océan. Découvrez également nos offres en <a href=\"/immobilier/location-vacances/immo-saint-marc-sur-mer-44/\" title=\"Nos locations saisonières à Saint Marc sur Mer\">location saisonnière à Saint Marc sur Mer</a>.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Vente et location saisonnière à Saint Marc sur Mer</h3>\r\n\t\t\t\t\t\tSituée face à la plage « Monsieur Hulot », notre agence immobilière de Saint Marc sur Mer, vous propose de consulter sur ce site un choix de biens à la vente, maisons, appartements, terrains, à <a href=\"/immobilier/tout/immo-saint-marc-sur-mer-44/\" title=\"Tout l'immobilier à Saint Marc sur Mer\">Saint Marc sur Mer</a>, l’Immaculée, et sur <a href=\"/immobilier/tout/immo-Pornichet-44/\" title=\"Tout l'immobilier à Pornichet\">Pornichet</a> (Sainte Margueritte, et Saint Sébastien), pouvant correspondre à des projets de résidence principale ou secondaire.<br />\r\n\t\t\t\t\t\tVous y trouverez une sélection de maisons traditionnelles, villas récentes, maisons de caractère et belles propriétés.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\tNotre service de location saisonnière vous propose également un choix de biens immobiliers, à Saint Marc sur Mer et sur <a href=\"/immobilier/location-vacances/immo-pornichet-44/\" title=\"Nos locations saisonières à Pornichet\">Pornichet</a>, parmi un choix de villas et appartements de bord de mer.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Notre équipe de professionnels à Saint Marc sur Mer</h3>\r\n\t\t\t\t\t\tNotre équipe met à votre disposition une équipe de conseillers pour l’achat ou la vente de votre bien et une spécialiste de la location et gestion immobilière.\r\n\t\t\t\t\t\tTravaillant en fichier commun avec les autres agences du réseau AJP et notamment celles de Saint Nazaire et La Baule, nous sommes en mesure de vous proposer un grand choix de biens dans votre région. 20 agences AJP sont présentes dans le 44 et 16 agences toutes enseignes confondues, sont membres de l’AMEPI de Saint Nazaire, fichier commun d’exclusivités.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Estimez et vendez votre bien immobilier à Saint Marc sur Mer</h3>  \r\n\t\t\t\t\t\tDans le cadre de la vente de votre maison, appartement, sur Saint Marc sur Mer, le mandat Performance vous permet de bénéficier d’une vente rapide et efficace avec un plan de communication multi supports: mailings personnalisés, pose d’un panneau, parution au sein de l’AMEPI, presse locale et Internet.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\tAJP c’est aussi <a href=\"http://www.ajp-investissement.com/\" target=\"_blank\" title=\"AJP-Investissemen\">AJP-Investissement</a> et <a href=\"http://www.ajp-entreprises.com/index.htm?lang=fr\" target=\"_blank\" title=\"AJP-Entreprises\">AJP-Entreprises</a>, 2 structures dédiées à l’investissement immobilier, et à l’immobilier d’entreprise.",
                "start": 167658,
                "end": 171083
            }
        ],
        "start": 167030,
        "end": 171092
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "304258",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 171125,
                "end": 171153
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Saint-Nazaire/133472130022398",
                "start": 171158,
                "end": 171262
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 171267,
                "end": 171295
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/110832142727913267126/posts",
                "start": 171300,
                "end": 171383
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpSaintNazaire",
                "start": 171388,
                "end": 171460
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 171465,
                "end": 171498
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpSaintNazaire",
                "start": 171503,
                "end": 171577
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 171586,
                "end": 171613
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "110832142727913267126",
                "start": 171618,
                "end": 171672
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 171682,
                "end": 171706
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "",
                "start": 171714,
                "end": 171745
            }
        ],
        "start": 171098,
        "end": 171754
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "330064",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 171787,
                "end": 171815
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Saint-S%C3%A9bastien/133237816714037",
                "start": 171820,
                "end": 171931
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 171936,
                "end": 171964
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/103839264272100407782/",
                "start": 171969,
                "end": 172047
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpSaintSebastien",
                "start": 172052,
                "end": 172126
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 172131,
                "end": 172164
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpSaintSebastien",
                "start": 172169,
                "end": 172245
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 172254,
                "end": 172281
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "103839264272100407782",
                "start": 172286,
                "end": 172340
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 172350,
                "end": 172374
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">AJP Immobilier vous fait découvrir la ville de  Saint Sébastien sur Loire</h3>\r\n\t\t\t\t\t\tA 10mn du centre de Nantes, Saint-Sébastien-sur-Loire est une commune agréable à vivre, avec un centre ville animé de commerces de proximité et  de nombreux espaces verts. Avec un peu plus de 24 000 habitants, Saint Sébastien sur Loire conserve un paysage immobilier résidentiel et pavillonnaire et dispose d’une bonne accessibilité avec ses 2 stations SNCF, ses bus et le busway.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Notre portefeuille à Saint Sébastien sur Loire</h3> \r\n\t\t\t\t\t\t\t<strong>Toute notre équipe vous attend pour une étude personnalisée</strong> de votre projet immobilier, qu’il s’agisse d’un achat en résidence principale, secondaire, d’une location ou de la vente de votre <a href=\"/immobilier/locations/immo-Saint-Sebastien-sur-Loire-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Saint Sébastien sur Loire\">maison</a>, <a href=\"/immobilier/locations/immo-Saint-Sebastien-sur-Loire-44/bien-appartement/\" title=\"Tous nos appartements à la vente sur Saint Sébastien sur Loire\">appartement</a>, <a href=\"/immobilier/locations/immo-Saint-Sebastien-sur-Loire-44/bien-terrain/\" title=\"Tous nos terrains à la vente sur Saint Sébastien sur Loire\">terrain</a>, sur  Saint Sébastien sur Loire, <a href=\"/immobilier/tout/immo-vertou-44/\" title=\"Tout l'immobilier à Vertou\">Vertou</a>, <a href=\"/immobilier/tout/immo-Basse-Goulaine-44/\" title=\"Tout l'immobilier à Basse Goulaine\">Basse Goulaine</a>, <a href=\"/immobilier/tout/immo-haute-Goulaine-44/\" title=\"Tout l'immobilier à Haute Goulaine\">Haute Goulaine</a>, et les quartiers sud de Nantes.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\tNotre site rassemble nos offres de vente et location, avec un choix de maisons traditionnelles, maisons  contemporaines en résidences pavillonnaires, maisons d’architecte, demeures de caractère et appartements dans le neuf, le récent ou l’ancien.\r\n\t\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Notre agence immobilière à Saint Sébastien sur Loire </h3> \r\n\t\t\t\t\t\t\tDepuis 2009 notre agence immobilière située à Saint Sébastien sur Loire, place de l’église, vous propose un service de transaction en habitat, et un service de gestion locative, sur Saint Sébastien, Vertou, Basse Goulaine, Haute Goulaine, et les quartiers sud de Nantes.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\tUn <strong>personnel qualifié</strong> composé de 4 conseillers et 1 personne dédiée à la gestion / location, est à votre disposition, pour la réalisation de vos projets immobiliers, achat en résidence principale, investissement locatif, recherche d’un logement en location, ou vente de votre maison, appartement, sur Vertou, Saint Sébastien sur Loire et proximité.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\tIntégrée au réseau AJP Immobilier, notre agence bénéficie de la force d’un réseau de 20 agences en <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">Loire Atlantique (44)</a> et 7 dans le sud Loire. Une force de proposition qui nous permet de vous soumettre le grand choix de biens à la vente, maisons, appartements, terrains, sur Saint Sébastien sur Loire et le sud Loire.<br />\r\n\t\t\t\t\t\t\tUn choix complété par celui de notre <strong>fichier commun en exclusivité avec 85 agences du Grand Nantes</strong>.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Vendez votre bien à Saint Sébastien sur Loire en toute sérénité</h3> \r\n\t\t\t\t\t\t\tVous souhaitez nous confier la vente ou la gestion de votre bien ?\r\n\t\t\t\t\t\t\tNotre agence dispose d’un service de gestion locative, avec la possibilité de souscrire une assurance loyers impayés. Nos conseillers sont à votre disposition pour une estimation de votre bien.\r\n\t\t\t\t\t\t\tNotre mandat Performance vous permet de bénéficier :\r\n\t\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t\t<li>•\tDe la pose d’un panneau</li>\r\n\t\t\t\t\t\t<li>\t•\tDe mailings distribués sur votre secteur</li>\r\n\t\t\t\t\t\t\t<li>•\tD’un affichage en vitrine</li>\r\n\t\t\t\t\t\t\t<li>•\tDe l’ensemble de nos supports de communication </li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\tAJP c’est aussi <a href=\"http://www.ajp-investissement.com/\" target=\"_blank\" title=\"AJP-Investissemen\">AJP-Investissement</a> et <a href=\"http://www.ajp-entreprises.com/index.htm?lang=fr\" target=\"_blank\" title=\"AJP-Entreprises\">AJP-Entreprises</a>, 2 structures dédiées à l’investissement immobilier, et à l’immobilier d’entreprise.",
                "start": 172382,
                "end": 176861
            }
        ],
        "start": 171760,
        "end": 176870
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "468982",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 176903,
                "end": 176931
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Saujon/309650309186690",
                "start": 176936,
                "end": 177033
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 177038,
                "end": 177066
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "",
                "start": 177071,
                "end": 177103
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpImmobilerSaujon",
                "start": 177108,
                "end": 177183
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 177188,
                "end": 177221
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpImmobilerSaujon",
                "start": 177226,
                "end": 177303
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "0",
                "start": 177312,
                "end": 177339
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "",
                "start": 177344,
                "end": 177377
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 177387,
                "end": 177411
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Découvrez la ville de Saujon avec AJP Immobilier</h3> \r\n\t\t\t\t\t\tSituée à 10km de Royan, Saujon est une commune d’environ 7000 habitants, traversée par la Seudre, qui offre un cadre de vie agréable, dans un climat de douceur, entre le parc à huîtres de Marennes et la Côte de Beauté.\r\n\t\t\t\t\t\t<br /> \r\n\t\t\t\t\t\tUn secteur situé entre 10km et 15km de Royan et de la Côte de beauté, qui offre un paysage immobilier résidentiel et pavillonnaire.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Agence Immobilière Saujon</h3>\r\n\t\t\t\t\t\tAJP Immobilier est devenu aujourd’hui un des plus importants groupes immobiliers en <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences immobilières en Loire Atlantique (44)\">Loire Atlantique (44)</a>, en <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde (33)\">Gironde (33)</a>, en <a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, en <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée (85)\">Vendée (85)</a>, dans le <a href=\"/agences,morbihan.htm\" title=\"Nos agences en Morbihan (56)\">Morbihan (56)</a>, dans le <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire (49)\">Maine et Loire (49)</a> et en Charente Maritime (17), sur le secteur immobilier de  Saujon.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t<strong>Pascal Chevalier</strong>, met à votre service son expérience de 10 ans sur le marché local pour vous apporter les meilleurs conseils sur le choix de votre future résidence ou investissement et pour vous accompagner dans chaque étape de la transaction jusqu’à la signature de l’acte notarial.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Notre offre immobilière sur Saujon</h3>\r\n\t\t\t\t\t\tDécouvrez sur ce site notre sélection de biens à la vente : maisons, appartements, terrains sur Saujon et les villages des environs, de Saint Sulpice de Royan à Sablonceaux et de Le Gua à Corme l’Ecluse et Semussac. <strong>Pascal Chevalier</strong> vous accueille pour une étude sur mesure de votre projet, accompagné d’un réseau  immobilier implanté sur l’ouest et la façade atlantique.\r\n\t\t\t\t\t\tNotre secteur immobilier autour de Saujon, s’étend aux communes et villages limitrophes, <a href=\"/immobilier/tout/immo-saint-sulpice-de-royan-17/\" title=\"Tout l'immobilier à Saint Sulpice de Royan\">Saint Sulpice de Royan</a>, <a href=\"/immobilier/tout/immo-medis-17/\" title=\"Tout l'immobilier à Medis\">Medis</a>, <a href=\"/immobilier/tout/immo-Semussac-17/\" title=\"Tout l'immobilier à Semussac\">Semussac</a>, <a href=\"http://www.ajp-immobilier.com/immobilier-Corme-Ecluse.htm\" title=\"Tout l'immobilier à Corme Ecluse\">Corme Ecluse</a>, Le Chay,<a href=\"http://www.ajp-immobilier.com/immobilier-Sablonceaux.htm\" title=\"Tout l'immobilier à Sablonceaux\">Sablonceaux</a>, <a href=\"http://www.ajp-immobilier.com/immobilier-Le-Gua.htm\" title=\"Tout l'immobilier à Le Gua\">Le Gua</a> et <a href=\"http://www.ajp-immobilier.com/immobilier-l-Eguille.htm\" title=\"Tout l'immobilier à l'Eguille\">l'Eguille</a>.\r\n\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tNotre sélection de biens à la vente, vous propose un choix de maisons de plain-pied sur Saujon et ses environs, maisons traditionnelles, pavillons contemporains, ou anciennes bâtisses à rénover, ainsi que des terrains à bâtir.\r\n\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Faites confiance à AJP Saujon pour la vente de votre bien</h3> \r\n\t\t\t\t\t\tDans le cadre de la vente de votre bien immobilier sur Saujon et ses environ, Pascal Chevalier vous proposera de bénéficier des nombreux avantages du mandat Performance et d’un engagement de moyens pour une diffusion pertinente de votre annonce de vente (mailings personnalisés, pose d’un panneau, parutions sur les portails immobiliers majeurs du web).",
                "start": 177419,
                "end": 181252
            }
        ],
        "start": 176876,
        "end": 181261
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "230435",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 181294,
                "end": 181322
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Vannes/130540143654901",
                "start": 181327,
                "end": 181424
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 181429,
                "end": 181457
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/100640096385744844004/",
                "start": 181462,
                "end": 181540
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpVannes",
                "start": 181545,
                "end": 181611
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 181616,
                "end": 181649
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpVannes",
                "start": 181654,
                "end": 181722
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 181731,
                "end": 181758
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "100640096385744844004",
                "start": 181763,
                "end": 181817
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 181827,
                "end": 181851
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Agence immobilière à Vannes</h3>\r\n\t\t  Ville médiévale et semi urbanisée, Vannes est aujourd’hui une commune active de 53900 habitants qui offre un paysage immobilier mixte. Préfecture du Morbihan, Vannes se positionne face à l’océan, et se développe sur le plan touristique.<br /><br />\r\n\t\t  Anciennement située Avenue de Verdun, notre agence immobilière bénéficie sur Vannes, depuis février 2012, d’<strong>un emplacement numéro 1, sur le port</strong>, devenant de ce fait la seule agence sur ce secteur.<br />\r\n\t\t\tUn emplacement qui confère à nos annonces affichées en vitrine, un impact de visibilité plus pertinent.\r\n\t\t\t<br />\r\n\t\t  Devenu en moins de 11 ans <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>, avec 15 agences sur Nantes et sa région, AJP Immobilier poursuit aujourd´hui son développement en <a href=\"/immobilier/33/gironde.htm\" title=\"Tout l'immobilier en Gironde (33)\">Gironde (33)</a>, en <a href=\"/immobilier/33/ille-et-vilaine.htm\" title=\"Tout l'immobilier en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, en <a href=\"/immobilier/85/vendee.htm\" title=\"Tout l'immobilier en Vendée (85)\">Vendée (85)</a> et dans le <a href=\"/immobilier/56/morbihan.htm\" title=\"Tout l'immobilier en Morbihan (56)\">Morbihan (56)</a>, et vous présente son agence immobilière à Vannes.\r\n\t\t\t<br /><br />\r\n\t\t\t\r\n\t\t\t<h3 style=\"font-weight:bold;\">Nos annonces immobilières sur Vannes</h3>\r\n\t\t\tVous trouverez sur notre site un vaste choix d’annonces de vente de <a href=\"/immobilier/achat/immo-vannes-56/bien-maison/\" title=\"Nos maisons à la vente sur Vannes\">maisons</a>, <a href=\"/immobilier/achat/immo-vannes-56/bien-appartement/\" title=\"Nos appartements à la vente sur Vannes\">appartements</a>, sur <a href=\"/immobilier/tout/immo-vannes-56/\" title=\"Nos biens à la vente sur Vannes\">Vannes</a> les communes de la proche agglomération, avec une sélection de vente de studios, appartements, sur Vannes centre ville, dans le neuf, le récent ou l’ancien, des maisons traditionnelles, contemporaines, ou années 30, ainsi que des fermes ou longères dans les villages de la périphérie.<br />\r\n\t\t\tNos partenaires, banques et entreprises du bâtiment, sont à votre disposition pour accompagner vos projets de financement ou vos projets de rénovation et travaux.<br />\r\n\t\t\tDécouvrez également notre sélection de biens disponibles à la <a href=\"/immobilier/locations/immo-vannes-56/\" title=\"Tous nos biens à la location\">location</a> annuelle, vide ou meublé.\r\n\t\t\t<br /><br />\r\n\t\t\t<h3 style=\"font-weight:bold;\">Gestion locative à Vannes</h3>\r\n\t\t\tNotre agence dispose aussi d’un service de <strong>gestion locative</strong>, géré par une spécialiste de la gestion immobilière. Ce service propose aux propriétaires, la garantie des loyers impayés, une gestion avec prise en charge globale des entrées, sorties, états des lieux, encaissement des loyers, travaux et propose une aide à la déclaration des revenus fonciers en fin d’année.\r\n\t\t\t<br /><br />\r\n\t\t\t<strong>AJP Immobilier met à votre disposition la force et les services d’un grand groupe.</strong><br />\r\n\t\t\tAJP Immobilier dispose d’une bonne notoriété axée sur une qualité de service à taille humaine et un véritable travail de terrain. Notre équipe de conseillers met à votre service toutes ses énergies pour la réussite de votre projet immobilier, dans un climat de confiance mutuelle.\r\n\t\t\t<br /><br />\r\n\t\t\t<h3 style=\"font-weight:bold;\">Vendez votre bien à Vannes gràce à notre agence !</h3>\r\n\t\t\tPour la vente de votre maison, appartement, sur Vannes, AJP Immobilier met en place le mandat Performance, un mandat exclusif, qui permet de bénéficier d’un engagement sur les moyens mis à disposition, pour la multi  diffusion de votre annonce (supports presse (journal Ouest-France), Internet, mailings, pose d’un panneau et fichier commun de l’<a href=\"http://www.amepi.fr\" title=\"AMEPI\" target=\"_blank\">AMEPI</a>. <br />\r\n\t\t\t<strong>9 autres agences immobilières sur Vannes</strong> auront ainsi une visibilité sur votre bien à la vente (exclusivité).",
                "start": 181859,
                "end": 186060
            }
        ],
        "start": 181267,
        "end": 186069
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "304809",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 186102,
                "end": 186130
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/AJP-Immobilier-Vieillevigne/127538900622802",
                "start": 186135,
                "end": 186238
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 186243,
                "end": 186271
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/106343248755665072345/",
                "start": 186276,
                "end": 186354
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/user/AjpVieillevigne",
                "start": 186359,
                "end": 186431
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 186436,
                "end": 186469
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/AjpVieillevigne",
                "start": 186474,
                "end": 186548
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 186557,
                "end": 186584
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "106343248755665072345",
                "start": 186589,
                "end": 186643
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 186653,
                "end": 186677
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Agence immobilière à Vieillevigne</h3>\r\n\t\t\t\t\t\t\tA la limite de la Loire Atlantique et de la Vendée, Vieillevigne est une commune de 3800 habitants, située à 30km au sud de Nantes et à proximité de Montaigu.\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\tNotre agence immobilière, située à Vieillevigne, est intégrée au groupement AJP Immobilier depuis 2006, avec une équipe de professionnels, spécialistes de leur secteur immobilier.\r\n\t\t\t\t\t\t\tSur un site régulièrement mis à jour, nous vous proposons de consulter un choix varié d’annonces immobilières, <a href=\"/immobilier/locations/immo-vieillevigne-44/\" title=\"Toutes nos locations à Vieillevigne\">locations</a> d’<a href=\"/immobilier/locations/immo-vieillevigne-44/bien-appartement/\" title=\"Tous nos appartements à la location sur Vieillevigne\">appartements</a> et de <a href=\"/immobilier/locations/immo-vieillevigne-44/bien-maison/\" title=\"Toutes nos maisons à la location sur Vieillevigne\">maisons</a> sur Vieillevigne et le Canton de <a href=\"/immobilier/tout/immo-montaigu-85/\" title=\"Tout l'immoblier sur Montaigu\">Montaigu</a> mais aussi des <a href=\"/immobilier/achat/immo-vieillevigne-44/bien-maison/\" title=\"Toutes nos maisons à la vente sur Vieillevigne\">maisons</a> et des <a href=\"/immobilier/achat/immo-vieillevigne-44/bien-appartement/\" title=\"Tous nos appartements à la vente sur Montaigu\">appartements</a> à la vente sur <a href=\"/immobilier/locations/immo-vieillevigne-44/\" title=\"Tout l'immobilier à Vieillevigne\">Vieillevigne</a> et le Canton de Montaigu ainsi que des <a href=\"/immobilier/tout/immo-montaigu-85/\" title=\"Tous nos terrains à la vente sur Montaigu\">terrains à bâtir</a>.\r\n\t\t\t\t\t\t\t <br /> \r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\tAJP Immobilier est <strong>un des plus importants groupes immobiliers en <a href=\"/immobilier/44/loire-atlantique.htm\" title=\"Tout l'immobilier en Loire Atlantique (44)\">Loire Atlantique (44)</a></strong>, avec déjà 20 agences sur Nantes et sa région, dont 7 dans le sud-Loire. Le réseau se développe avec des agences présentes en <a href=\"/immobilier/33/gironde.htm\" title=\"Tout l'immobilier en Gironde (33)\">Gironde (33)</a>, en <a href=\"/immobilier/33/ille-et-vilaine.htm\" title=\"Tout l'immobilier en Ille et Vilaine (35)\">Ille et Vilaine (35)</a>, dans le <a href=\"/immobilier/56/morbihan.htm\" title=\"Tout l'immobilier en Morbihan (56)\">Morbihan (56)</a>, dans le <a href=\"/immobilier/49/Maine-et-Loire.htm\" title=\"Tout l'immobilier dans le Maine et Loire(49)\">Maine et Loire (49)</a>, et en <a href=\"/immobilier/85/vendee.htm\" title=\"Tout l'immobilier en Vendée (85)\">Vendée (85)</a>. Découvrez sur ce site nos annonces de vente de maisons, appartements, terrains sur Vieillevigne et sa région.\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Nos annonces immobilières sur Vieillevigne </h3>\r\n\t\t\t\t\t\t\tNotre secteur immobilier englobe un territoire comprenant Le canton de <a href=\"/immobilier-Saint-Philbert-de-Grand-lieu.htm\" title=\"Tout l'immobilier à Saint Philbert de Grand Lieu\">Saint Philbert de Grand Lieu</a>, et s’étend également entre <a href=\"/immobilier-Treize-Septiers.htm\" title=\"Tout l'immobilier à Treize Septiers\">Treize Septiers</a> et <a href=\"/immobilier-Touvois.htm\" title=\"Tout l'immobilier à Touvois\">Touvois</a> en passant par <a href=\"/immobilier-lege.htm\" title=\"Tout l'immobilier à Legé\">Legé</a>. <br />\r\n\t\t\t\t\t\t\tNous sommes aussi présents sur des communes allant de Montbert à l’Herbergement (85), et de façon plus concentrée, sur les communes de <a href=\"/immobilier-Remouille.htm\" title=\"Tout l'immobilier à Remouillé\">Remouillé</a> et La Planche en Loire-Atlantique, <a href=\"/immobilier-Saint-Philbert-de-Bouaine.htm\" title=\"Tout l'immobilier à Saint-Philbert-de-Bouaine\">Saint-Philbert-de-Bouaine</a>, <a href=\"/immobilier-Rocheserviere.htm\" title=\"Tout l'immobilier à Rocheservière\">Rocheservière</a>, <a href=\"/immobilier-Mormaison.htm\" title=\"Tout l'immobilier à Mormaison\">Mormaison</a>, <a href=\"/immobilier-Saint-Andre-Treize-Voies.htm\" title=\"Tout l'immobilier à Saint-André-Treize-Voies\">Saint-André-Treize-Voies</a>, <a href=\"/immobilier-Bouffere.htm\" title=\"Tout l'immobilier à Boufféré\">Boufféré</a> et <a href=\"/immobilier-Saint-Hilaire-de-Loulay.htm\" title=\"Tout l'immobilier à Saint-Hilaire-de-Loulay\">Saint-Hilaire-de-Loulay</a> en Vendée.<br />\r\n\t\t\t\t\t\t\tNotre sélection de biens, à la vente et à la location vous soumet un choix d’appartements dans le neuf ou l’ancien sur Montaigu, des maisons traditionnelles, des maisons de bourg, des pavillons contemporains, et terrains constructibles sur l’ensemble de notre secteur.\r\n\t\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Vendez votre bien immobilier à Vieillevigne avec AJP immobilier Vieillevigne!</h3> \r\n\t\t\t\t\t\t\tDans le cadre de la vente de votre maison, appartement, sur Vieillevigne et le Canton de Montaigu, nos conseillers vous proposeront le <strong>mandat Performance</strong>. Un mandat exclusif qui permet de nous engager sur une vente efficace avec un <strong>plan de communication multi supports</strong> : mailings personnalisés et distribués sur votre secteur, pose d’un panneau, parution en presse locale et sur Internet.\r\n\t\t\t\t\t\t\t<br /> <br />\r\n\t\t\t\t\t\t\t<h3 style=\"font-weight:bold;\">Gestion Locative à Vieillevigne</h3> \r\n\t\t\t\t\t\t\tNotre collaboratrice dédiée au service de gestion immobilière proposera à nos clients propriétaires bailleurs, une formule de <strong>gestion globale</strong> pour :\r\n\t\t\t\t\t\t\t<ul style=\"margin-left:30px;\">\r\n\t\t\t\t\t\t\t<li>La prise en charge des entrées et sorties des locataires</li>\r\n\t\t\t\t\t\t\t<li>Les états des lieux</li>\r\n\t\t\t\t\t\t\t<li>Les encaissements de loyers</li>\r\n\t\t\t\t\t\t\t<li>L’aide à la déclaration des revenus fonciers<§li>\r\n\t\t\t\t\t\t\t<li>Garantie de loyers impayés</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\tAJP c’est aussi <a href=\"http://www.ajp-investissement.com/\" target=\"_blank\" title=\"AJP-Investissemen\">AJP-Investissement</a> et <a href=\"http://www.ajp-entreprises.com/index.htm?lang=fr\" target=\"_blank\" title=\"AJP-Entreprises\">AJP-Entreprises</a>, 2 structures dédiées à l’investissement immobilier, et à l’immobilier d’entreprise.",
                "start": 186685,
                "end": 192849
            }
        ],
        "start": 186075,
        "end": 192858
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "530416",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 192891,
                "end": 192919
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "",
                "start": 192924,
                "end": 192953
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 192958,
                "end": 192986
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "",
                "start": 192991,
                "end": 193023
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "",
                "start": 193028,
                "end": 193056
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "https://plus.google.com/111938057938065758441/about",
                "start": 193061,
                "end": 193145
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "",
                "start": 193150,
                "end": 193182
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 193191,
                "end": 193218
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "111938057938065758441",
                "start": 193223,
                "end": 193277
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "0",
                "start": 193287,
                "end": 193311
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Agence immobilière à Pornichet</h3>",
                "start": 193319,
                "end": 193426
            }
        ],
        "start": 192864,
        "end": 193435
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "534327",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 193468,
                "end": 193496
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "",
                "start": 193501,
                "end": 193530
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 193535,
                "end": 193563
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/105172818344182611173/posts",
                "start": 193568,
                "end": 193651
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "",
                "start": 193656,
                "end": 193684
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "https://plus.google.com/105172818344182611173/about",
                "start": 193689,
                "end": 193773
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "",
                "start": 193778,
                "end": 193810
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 193819,
                "end": 193846
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "105172818344182611173",
                "start": 193851,
                "end": 193905
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "0",
                "start": 193915,
                "end": 193939
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3 style=\"font-weight:bold;\">Agence immobilière à Savenay</h3>",
                "start": 193947,
                "end": 194052
            }
        ],
        "start": 193441,
        "end": 194061
    },
    {
        "macro": "A",
        "left": "TITLE_AGENCES_LISTE",
        "right": "",
        "start": 194073,
        "end": 194099
    },
    {
        "macro": "A",
        "left": "DESCRIPTION_AGENCES_LISTE",
        "right": "",
        "start": 194103,
        "end": 194135
    },
    {
        "macro": "A",
        "left": "H1_AGENCESLISTE",
        "right": "",
        "start": 194139,
        "end": 194161
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_TXT",
        "right": "1",
        "start": 194167,
        "end": 194192
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_CONTENU",
        "right": "Le Réseau AJP Immobilier est réparti sur tout le Pays de la Loire avec des agences en <a href=\"/agences,loire-atlantique.htm\" title=\"Nos agences en Loire Atlantique\">Loire Atlantique</a>, <a href=\"/agences,nantes.htm\" title=\"Nos agences à Nantes\">Nantes</a>, <a href=\"/agences,maine-et-loire.htm\" title=\"Nos agences en Maine et Loire\">Maine et Loire</a>, la <a href=\"/agences,vendee.htm\" title=\"Nos agences en Vendée\">Vendée</a>, le <a href=\"/agences,morbihan.htm\" title=\"Nos agences dans le Morbihan\">Morbihan</a>, l'<a href=\"/agences,ille-et-vilaine.htm\" title=\"Nos agences en Ille et Vilaine\">Ille et Vilaine</a> et la <a href=\"/agences,gironde.htm\" title=\"Nos agences en Gironde\">Gironde</a>.<br>Nos agences mettent à votre disposition leur expérience et savoir faire pour la réalisation de votre projet. N'hésitez pas à nous contacter !",
        "start": 194194,
        "end": 195063
    },
    {
        "macro": "A",
        "left": "H1BIENSVENDUS",
        "right": "",
        "start": 195071,
        "end": 195091
    },
    {
        "macro": "A",
        "left": "H1SUIVICLIENT",
        "right": "",
        "start": 195099,
        "end": 195119
    },
    {
        "macro": "A",
        "left": "PHRASESUIVI",
        "right": "",
        "start": 195121,
        "end": 195139
    },
    {
        "macro": "A",
        "left": "SLOGAN_FOOTER",
        "right": "",
        "start": 195149,
        "end": 195169
    },
    {
        "macro": "A",
        "left": "TITLE_1_FOOTER",
        "right": "",
        "start": 195177,
        "end": 195198
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_1_FOOTER_1",
        "right": "",
        "start": 195202,
        "end": 195230
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_2_FOOTER_1",
        "right": "",
        "start": 195232,
        "end": 195260
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_3_FOOTER_1",
        "right": "",
        "start": 195262,
        "end": 195290
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_4_FOOTER_1",
        "right": "",
        "start": 195292,
        "end": 195320
    },
    {
        "macro": "INIT",
        "left": "CATWORDPRESS",
        "right": "",
        "start": 195328,
        "end": 195350
    },
    {
        "macro": "A",
        "left": "OPTIDETAILTEXTSUP",
        "right": "",
        "start": 195356,
        "end": 195380
    },
    {
        "macro": "A",
        "left": "OPTIRECHERCHETEXTEAG",
        "right": "",
        "start": 195386,
        "end": 195413
    },
    {
        "macro": "toParse",
        "content": []
    }
]