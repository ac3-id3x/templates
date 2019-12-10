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
                "start": 96,
                "end": 114
            }
        ],
        "start": 76,
        "end": 123
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
                "start": 151,
                "end": 175
            }
        ],
        "start": 131,
        "end": 184
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
                "right": "<div id=\"fnaim\"><img src=\"images/fnaim-big.png\" alt=\"fnaim\"></a></div>\r\n\t\t<div id=\"ma\"><img src=\"images/agence_immobiliere_meilleursagents_190x45_red.png\" alt=\"meilleursagents\"></a></div>\r\n\t\t<div class=\"row-fluid pagination-centered text-shadow-0\">\r\n\t\t\t<div class=\"span3\">\r\n\t\t\t\t<a class=\"btn-block h4-like padding-top-20 padding-bottom-20 radius-5 btn-action opacity-9 box-shadow\" href=\"/immobilier/pays/achat/france.htm\">Toutes nos<br />ventes</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"span3\">\r\n\t\t\t\t<a class=\"btn-block h4-like padding-top-20 padding-bottom-20 radius-5 btn-action opacity-9 box-shadow\" href=\"/immobilier/pays/locations/france.htm\">Toutes nos<br />locations</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"span3\">\r\n\t\t\t\t<a class=\"btn-block h4-like padding-top-20 padding-bottom-20 radius-5 btn-action opacity-9 box-shadow\" href=\"http://www.gimco.immoscope.fr/WD150AWP/WD150Awp.exe/CONNECT/Gimco?_WWREFERER_=&_WWNATION_=5\" target=\"_blank\">Espace Clients<br />Copropriétaire</a>\r\n\t\t\t</div>\t\t\r\n\t\t\t<div class=\"span3\">\r\n\t\t\t\t<a class=\"btn-block h4-like padding-top-20 padding-bottom-20 radius-5 btn-action opacity-9 box-shadow\" href=\"http://www.gimcovermeille-intranet.com/wp-login.php\" target=\"_blank\">Espace<br />Collaborateurs</a>\r\n\t\t\t</div>\t\r\n\t\t</div>",
                "start": 210,
                "end": 1473
            }
        ],
        "start": 190,
        "end": 1482
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
                "start": 1508,
                "end": 1530
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION2",
                "right": "",
                "start": 1533,
                "end": 1555
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION3",
                "right": "",
                "start": 1558,
                "end": 1580
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION4",
                "right": "",
                "start": 1583,
                "end": 1605
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION5",
                "right": "",
                "start": 1608,
                "end": 1630
            }
        ],
        "start": 1488,
        "end": 1639
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
                "right": "",
                "start": 1667,
                "end": 1682
            }
        ],
        "start": 1647,
        "end": 1691
    },
    {
        "macro": "A",
        "left": "H2_INDEX_MODULE",
        "right": "@@LG:NOSEXCLUSIVITES pcase@@",
        "start": 1697,
        "end": 1747
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
                "start": 1782,
                "end": 1844
            }
        ],
        "start": 1757,
        "end": 1853
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
                        "start": 1903,
                        "end": 1969
                    }
                ],
                "start": 1882,
                "end": 1979
            }
        ],
        "start": 1857,
        "end": 1988
    },
    {
        "macro": "A",
        "left": "BLOC_AGENCE_INDEX",
        "right": "0",
        "start": 1994,
        "end": 2019
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
                "start": 2041,
                "end": 2904
            }
        ],
        "start": 2021,
        "end": 2913
    },
    {
        "macro": "A",
        "left": "ENCART_TXT_HOME",
        "right": "1",
        "start": 2921,
        "end": 2944
    },
    {
        "macro": "A",
        "left": "POSITION_ENCART_TXT_HOME",
        "right": "2",
        "start": 2948,
        "end": 2980
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
                "right": "<div class=\"row-fluid pagination-centered\">\r\n\t\t\t<div class=\"span4\"><a class=\"btn-block h4-like padding-top-15 padding-bottom-15 radius-5 btn-important opacity-9 box-shadow\" href=\"http://edition2014.4ltrophy.com/#/\" target=\"_blank\">4L Trophy</a></div>\r\n\t\t\t<div class=\"span4\"><a class=\"btn-block h4-like padding-top-15 padding-bottom-15 radius-5 btn-important opacity-9 box-shadow\" href=\"@@_@@images/nl/nl.pdf\" target=\"_blank\">Notre newsletter</a></div>\t\t\r\n\t\t\t<div class=\"span4\"><a class=\"btn-block h4-like padding-top-15 padding-bottom-15 radius-5 btn-important opacity-9 box-shadow\" href=\"/agences,liste.htm\">Le groupe</a></div>\r\n\t\t</div>\r\n\t\t<div class=\"row-fluid margin-top-30 margin-right-30\">\r\n\t\t\t<div class=\"span8\">\r\n\t\t\t\t<h1>Gimcovermeille, le réseau immobilier sur l’ouest parisien, vous propose de découvrir son offre de biens immobiliers</h1>\r\n\t\t\t\t<p align=\"justify\">Notre <a href=\"/agences,liste.htm\">réseau</a> met à votre disposition 2 agences immobilières à Conflans Sainte Honorine, une agence à Poissy, au Vésinet, à Chatou, 2 agences à Rueil Malmaison, à Marly le Roi, 2 agences à La Celle Saint Cloud, une agence à Vaucresson, à Saint Nom la Bretèche et 2 agences à Voisins le Bretonneux. Découvrez sur ce site un grand choix d’annonces de vente et d’annonces de location, pour une sélection variée de maisons, studios, appartements, terrains, programmes neufs, locaux commerciaux, bureaux, fonds de commerce et biens immobiliers de prestige.</p>\r\n\t\t\t\t<ul class=\"padding-right-15 margin-top-10\">\r\n\t\t\t\t\t<li><span class=\"icon-v5 icon-v5-arrow-right-6 typo important\"></span><a href=\"/immobilier/tout/immo-la-celle-saint-cloud-78/\">Nos biens immobiliers à La Celle-Saint-Cloud</a></li>\r\n\t\t\t\t\t<li><span class=\"icon-v5 icon-v5-arrow-right-6 typo important\"></span><a href=\"/immobilier/achat/immo-la-celle-saint-cloud-78/bien-appartement/\">Nos annonces de Vente Appartements à La Celle Saint Cloud</a></li>\r\n\t\t\t\t\t<li><span class=\"icon-v5 icon-v5-arrow-right-6 typo important\"></span><a href=\"/immobilier/\">Tous nos biens immobiliers</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"span4 typo-action\">\r\n\t\t\t\t<h2 class=\"h1-like\">Le Groupe recrute</h2>\r\n\t\t\t\t<p align=\"justify\">Notre entreprise, 1er groupe immobilier indépendant de l’ouest parisien, acteur majeur dans le domaine des services immobiliers recrute, dans le cadre de son développement, des négociateurs (trices) immobiliers. </p>\r\n\t\t\t</div>\r\n\t\t</div>",
                "start": 3004,
                "end": 5459
            }
        ],
        "start": 2984,
        "end": 5468
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLES_REF",
        "right": "0",
        "start": 5476,
        "end": 5501
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_1",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 5505,
        "end": 5633
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_2",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 5635,
        "end": 5763
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_3",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 5765,
        "end": 5893
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_4",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 5895,
        "end": 6023
    },
    {
        "macro": "A",
        "left": "MICRO_DONNES_PRIX",
        "right": "1",
        "start": 6031,
        "end": 6056
    },
    {
        "macro": "A",
        "left": "INDEXATION_ESTIMATION",
        "right": "0",
        "start": 6064,
        "end": 6093
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
                "start": 6121,
                "end": 6144
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_ESTIMATION",
                "right": "",
                "start": 6148,
                "end": 6177
            },
            {
                "macro": "A",
                "left": "H1_ESTIMATION",
                "right": "",
                "start": 6181,
                "end": 6201
            },
            {
                "macro": "A",
                "left": "PHRASE_ESTIMATION",
                "right": "",
                "start": 6205,
                "end": 6229
            }
        ],
        "start": 6097,
        "end": 6238
    },
    {
        "macro": "A",
        "left": "TITLE_AGENCES_LISTE_ESTIMATION",
        "right": "",
        "start": 6246,
        "end": 6283
    },
    {
        "macro": "A",
        "left": "DESCRIPTION_AGENCES_LISTE_ESTIMATION",
        "right": "",
        "start": 6287,
        "end": 6330
    },
    {
        "macro": "A",
        "left": "H1_AGENCESESTIMATION",
        "right": "",
        "start": 6335,
        "end": 6362
    },
    {
        "macro": "A",
        "left": "H2_AGENCESESTIMATION",
        "right": "",
        "start": 6366,
        "end": 6393
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_ESTIMATION_CONTENU",
        "right": "",
        "start": 6397,
        "end": 6436
    },
    {
        "macro": "A",
        "left": "INDEXATION_OUTILS",
        "right": "0",
        "start": 6444,
        "end": 6469
    },
    {
        "macro": "A",
        "left": "INDEXATION_REALISATION",
        "right": "0",
        "start": 6477,
        "end": 6507
    },
    {
        "macro": "A",
        "left": "INDEXATION_RESPONSIVE",
        "right": "0",
        "start": 6515,
        "end": 6544
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
                "start": 6570,
                "end": 6590
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_GESTION",
                "right": "Notre gestion immobiliere",
                "start": 6593,
                "end": 6644
            },
            {
                "macro": "A",
                "left": "H1_GESTION",
                "right": "Gestion locative dans l’Ouest Parisien",
                "start": 6647,
                "end": 6702
            }
        ],
        "start": 6550,
        "end": 6711
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
                "start": 6737,
                "end": 6756
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_SYNDIC",
                "right": "",
                "start": 6759,
                "end": 6784
            },
            {
                "macro": "A",
                "left": "H1_SYNDIC",
                "right": "",
                "start": 6787,
                "end": 6803
            }
        ],
        "start": 6717,
        "end": 6812
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
                "start": 6838,
                "end": 6860
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_EXPERTISE",
                "right": "",
                "start": 6863,
                "end": 6891
            },
            {
                "macro": "A",
                "left": "H1_EXPERTISE",
                "right": "",
                "start": 6894,
                "end": 6913
            }
        ],
        "start": 6818,
        "end": 6922
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
                "start": 6959,
                "end": 6978
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_AGENCE",
                "right": "",
                "start": 6984,
                "end": 7009
            },
            {
                "macro": "A",
                "left": "H1_AGENCE",
                "right": "",
                "start": 7015,
                "end": 7031
            },
            {
                "macro": "A",
                "left": "H2_AGENCE",
                "right": "",
                "start": 7037,
                "end": 7053
            },
            {
                "macro": "A",
                "left": "SLOGAN_AGENCE",
                "right": "",
                "start": 7059,
                "end": 7079
            }
        ],
        "start": 6930,
        "end": 7088
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
                "left": "TXT_PUBLIC_PERSO",
                "right": "0",
                "start": 7129,
                "end": 7153
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "blabla",
                "start": 7161,
                "end": 7198
            }
        ],
        "start": 7098,
        "end": 7207
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "421317",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 7249,
                "end": 7273
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<p>L'agence immobilière GIMCOVERMEILLE de Chatou vous accueille du Lundi au Samedi, dans un cadre spacieux et décoré par des artistes catoviens. Située sur un axe incontournable, sa grande vitrine est à la vue de tous, entre la Place du Marché et la Mairie.</p>\r\n\t<p>Jean-Baptiste RICHARD, Dana BODOLEA, Laurence RUCKLI et Cécile AUBERT mettent tout en ouvre pour vous faire bénéficier de leur expérience, profiter de leurs nombreux contacts sur Chatou et vous apportent le meilleur service qu'une agence immobilière doit à un particulier, pour vos projets d'achat ou de vente. Nous mettons également à votre disposition tous les services du Groupe GIMCOVERMEILLE, en gestion locative et syndic de copropriété.</p>\r\n\t<p>Dans cette agréable commune, les habitants profitent tout particulièrement des bords de Seine et des nombreuses activités organisées dans la ville. Ville développée principalement à partir du XIXème siècle autour de la culture maraichère, puis avec les peintres « Impressionnistes » qui en firent leur lieu de villégiature. L'Ile des Impressionnistes est à ce titre un parc en hommage à ces nombreux artistes à la renommée mondiale.</p>\r\n\t<p>Découvrez sur ce site nos annonces immobilières sur Chatou, Croissy sur Seine, Le Vésinet et d'autres communes environnantes.</p>\r\n\t\t\r\n\t\t<h3 class=\"margin-top-20\">Nos annonces immobilières à La Celle Saint Cloud</h3>\r\n\t\tGIMCOVERMEILLE rassemble sur ce site des <a href=\"/immobilier/tout/immo-la-celle-saint-cloud-78/\" title=\"Nos annonces immobilières situées à la Celle Saint Cloud\">annonces immobilières à La Celle Saint Cloud</a> et sur l’ouest parisien, réunies par nos <a href=\"/agences,liste.htm\" title=\"13\r\n\t\t agences immobilières à votre service dans l'ouest parisien\">15 agences membres du groupe</a>. Découvrez notre sélection de biens à la vente : <a href=\"/immobilier/achat/immo-la-celle-saint-cloud-78/bien-maison/\" title=\"Ventes de maisons situées à La Celle Saint Cloud\">maisons<a/>, <a href=\"/immobilier/achat/immo-la-celle-saint-cloud-78/bien-appartement/\" title=\"Ventes d'appartements situées à La Celle Saint Cloud \">appartements</a>, <a href=\"/immobilier/achat/immo-la-celle-saint-cloud-78/bien-terrain/\" title=\"Ventes de terrains situées à la Celle Saint Cloud\">terrains</a>, sur La Celle Saint Cloud, et ses environs.\r\n\t\t<br />\r\n\t\tLe paysage immobilier de La Celle Saint Cloud et ses environs, reste résidentiel avec une bonne proportion de maisons ; des maisons traditionnelles ou maisons de ville, des meulières de caractère, des pavillons récents en diffus ou en lotissements, de belles propriétés et maisons d’architecte.<br />\r\n\t\tVous trouverez également à la vente des appartements et des maisons contemporaines, à La Celle Saint Cloud dans le Domaine St François d’Assise; une résidence à l’américaine, dans un espace boisé,  mais aussi dans les quartiers prisés de la Place Berthet, La Feuillaume et la Jonchère, les Gressets (avec un hameau pavillonnaire) et  La Chataigneraie (proche de la gare).\r\n\t\t\r\n\t\t<h3 class=\"margin-top-20\">Notre secteur de La Celle Saint Cloud</h3>\r\n\t\tA 30mn de Paris et 20mn de La Défense, ce secteur immobilier offre une bonne accessibilité à la capitale, par l’A13 et l’A86. La gare SNCF, direction Gare Saint Lazare ainsi que  la possibilité de rejoindre la ligne de RER à Rueil Malmaison, facilitent également son accès.\r\n\t\t<br /><br />\r\n\t\tSabine De Chambarlhac et son équipe professionnelle vous accompagnent pour une étude personnalisée et un suivi régulier de votre projet et mettent à votre disposition des partenaires compétents dans les domaines du financement et des travaux.",
                "start": 7277,
                "end": 10915
            }
        ],
        "start": 7223,
        "end": 10924
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "435260",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 10956,
                "end": 10980
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "Le Cabinet Gimcovermeille c'est une équipe de 55 personnes dynamiques, responsables, expérimentées en locations et en transactions depuis 1932, notre agence immobilières est située au 15 avenue Carnot à Conflans sainte honorine.\r\n\t\t\tAvec une équipe de professionnelles de la gestion immobilière, maîtrisant leur sujet pour certaines depuis plus de 20 ans, notre service de <a href=\"/immo,gestion.htm\" title=\"Notre service gestion locative à Conflans Sainte Honorine\">gestion locative basé à Conflans Sainte Honorine</a>, vous assure un niveau de compétence et de rigueur professionnelle.\r\n\t\t\t\t<br /><br />\r\n\t\t\t<h3>Gestion de votre patrimoine immobilier sur Conflans Sainte Honorine</h3>\r\n\t\t\tLe groupement GIMCOVERMEILLE se compose de <a href=\"/agences,liste.htm\" title=\"Nos 15 agences immobilières\">15 agences immobilières</a> pour la gestion et la <a href=\"/immobilier/achat/immo-conflans-sainte-honorine-78/bien-maison/\" title=\"Vente maisons Conflans Sainte Honorine\">vente de maisons</a> et <a href=\"/immobilier/achat/immo-conflans-sainte-honorine-78/bien-appartement/\" title=\"Vente appartement Conflans Sainte Honorine\">appartements</a>, sur Conflans Sainte Honorine et l’ouest parisien. \r\n\t\t\tNotre service de gestion locative, situé 15 avenue Carnot à Conflans Sainte Honorine, gère actuellement plus de 600 lots sur Conflans Sainte Honorine, Andrésy, Maurecourt, Cergy Pontoise, Eragny et Herblay et vous accueille pour la recherche d’une location ou pour la gestion de vos biens.\r\n\t\t\t\t<br /><br />\r\n\t\t\t<h3>Confiez-nous votre bien à Conflans Sainte Honorine !</h3>\r\n\t\t\t\t<strong>Vous êtes à la recherche d’une location, maison, pavillon, studio ou appartement, du F1 au F5, sur Conflans Ste Honorine et ses environs ?</strong><br />\r\n\t\t\tNotre équipe vous reçoit pour vous aider à constituer votre dossier de candidature et mettre toutes les chances de votre côté. <br />\r\n\t\t\t<strong>Afin d’être plus réactifs, pensez à venir avec</strong> :<br />\r\n\t\t\t\t<ul style=\"margin-left:50px;\">\r\n\t\t\t\t\t<li>Vos 3 derniers bulletins de salaire</li>\r\n\t\t\t\t\t<li>Une attestation de votre employeur</li>\r\n\t\t\t\t\t<li>Votre denier avis d’imposition</li>\r\n\t\t\t\t\t<li>Votre carte d’identité</li>\r\n\t\t\t\t\t<li>Vos dernières quittances de loyer</li>\r\n\t\t\t\t</ul><br />\r\n\t\t\tNos annonces de <a href=\"/immobilier/locations/immo-conflans-sainte-honorine-78/\" title=\"Nos biens à la location Conflans Sainte Honorine\">location sur Conflans Sainte Honorine</a> proposent un choix varié de biens, dans l’ancien, le récent ou le neuf, dans différentes gammes de standing, vous trouverez également des locaux commerciaux (boutiques), sur Conflans Sainte Honorine et ses environs.\r\n\t\t\t\t<br /><br />\r\n\t\t\t<h3>Confiez-nous la gestion de votre bien sur Conflans Sainte Honorine !</h3>\r\n\t\t\tNotre service perdra en charge l’ensemble des démarches administratives, avec une <strong>sélection rigoureuse des candidats locataires</strong>, les états des lieux, la gestion des travaux et réparations, l’encaissement des loyers et la possibilité de souscrire aux garanties de loyers impayés et dégradations immobilières.",
                "start": 10984,
                "end": 14084
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 14094,
                "end": 14122
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "https://plus.google.com/105310399054937452779/about",
                "start": 14127,
                "end": 14211
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 14218,
                "end": 14245
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "105310399054937452779",
                "start": 14250,
                "end": 14304
            }
        ],
        "start": 10930,
        "end": 14315
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "421329",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 14349,
                "end": 14373
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "L’Agence immobilière GIMCOVERMEILLE de Conflans Sainte Honorine proche de la gare et du centre-ville Vous séduira par son équipe de professionnel.\r\n  <br /><br />\r\n\t\t<h3>Gestion Locative, Syndic et Transactions Immobilières sur Conflans Sainte Honorine</h3>\r\n\t\t\tLe secteur immobilier de notre agence immobilière, couvre Conflans Sainte Honorine et les communes des environs, Maurecourt, Andrésy, Chanteloup les Vignes, Eragny sur Oise et Herblay. Un secteur de l’ouest parisien bien desservi par les 2 lignes SNCF et la gare RER (ligne Aa station) 20 minutes pour la défense, 30 minutes pour la station Auber, permettant à une clientèle d’actifs parisiens de trouver un meilleur compromis espace/budget/qualité de vie.\r\n\t\t\t<br /><br />\r\n\t\t\tAvec 35 000 habitants, Conflans Sainte Honorine , capitale de la Batellerie est une « ville à taille humaine », aux allures de campagne et à seulement quelques vols d’oiseaux de Paris. Une qualité rare qui vous séduira inévitablement. Vous découvrirez par ailleurs une ville dynamique où il fait bon vivre : les équipements culturels, sportifs, sociaux et de loisirs sont très diversifiés et le tissu associatif riche et varié.\r\n\t\t\t<br /><br />\r\n\t\t<h3>Notre portefeuille immobilier sur Conflans Sainte Honorine</h3>\r\n\t\t\tUn secteur qui offre une bonne mixité immobilière entre maisons et appartements, récent et ancien.\r\n\t\t\tLe cœur historique de Conflans Sainte Honorine, se compose de <a href=\"/immobilier/achat/immo-conflans-sainte-honorine-78/bien-maison/\" title=\"Nos maisons à vendre sur Conflans Sainte Honorine\">maisons de ville</a> et petites copropriétés, on trouve dans les quartiers résidentiels des maisons traditionnelles, des pavillons contemporains, des maisons de maître, maisons d’architecte et des résidences d’<a href=\"/immobilier/achat/immo-conflans-sainte-honorine-78/bien-appartement/\" title=\"Nos maisons à vendre sur Conflans Sainte Honorine\">appartements</a> dans le neuf ou le récent.\r\n\t\t\t<br /><br />\r\n\t\t<h3>Estimation gratuite sur Conflans Sainte Honorine</h3>\r\n\t\t\tToute l’équipe met à votre disposition ses compétences et son expérience en transaction.",
                "start": 14377,
                "end": 16526
            }
        ],
        "start": 14323,
        "end": 16535
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "458352",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 16567,
                "end": 16591
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "La proximité des forêts, du Parc de Saint Cloud...et à 15 minutes de PARIS par les transports, font de Garches une commune agréable à vivre, où l’on trouve les commodités d’une grande agglomération tout en conservant une ambiance de village propice à l’évasion.\r\n\t\t\t<br /><br />\r\n\t\t<h3>Notre agence immobilière à Garches</h3>\r\n\t\t\tAfin de personnaliser votre recherche au plus près de vos attentes, notre équipe vous reçoit pour une étude sur mesure de votre projet immobilier sur <a href=\"/immobilier/tout/immo-garches-92/\" title=\"Tout l'immobilier à Garches\">Garches</a> et ses environs, pour l’achat ou la vente d’une <a href=\"/immobilier/achat/immo-garches-92/bien-maison/\" title=\"Vente maison Garches\">maison</a>, d’un <a href=\"/immobilier/achat/immo-garches-92/bien-appartement/\" title=\"Vente appartement Garches\">appartement</a>, sur Garches, <a href=\"/immobilier/tout/immo-saint-cloud-92/\" title=\"Tout l'immobilier à Saint Cloud\">Saint Cloud</a>,  <a href=\"/immobilier/tout/immo-marnes-la-coquette-92/\" title=\"Tout l'immobilier à Marnes la Coquette\">Marnes la Coquette</a>, <a href=\"/immobilier/tout/immo-ville-d-avray-92/\" title=\"Tout l'immobilier à Ville d’Avray\">Ville d’Avray</a>, <a href=\"/immobilier/tout/immo-vaucresson-92/\" title=\"Tout l'immobilier à Vaucresson\">Vaucresson</a>, <a href=\"/immobilier/tout/immo-rueil-malmaison-92/\" title=\"Tout l'immobilier à Rueil-Malmaison\">Rueil-Malmaison</a>,  <a href=\"/immobilier/tout/immo-la-celle-saint-cloud-78/\" title=\"Tout l'immobilier à La Celle Saint Cloud\">La Celle Saint Cloud</a>,  <a href=\"/immobilier/tout/immo-bougival-78/\" title=\"Tout l'immobilier à Bougival\">Bougival</a>, <a href=\"/immobilier/tout/immo-le-chesnay-78/\" title=\"Tout l'immobilier au Le Chesnay\">Le Chesnay</a>.\r\n\t\t\t<br /><br />\r\n\t\t<h3>Notre portefeuille immobilier sur Garches</h3>\r\n\t\t\tNotre site vous permet de consulter une offre diversifiée de biens à la vente, des appartements sur Garches centre ville ou proche de la gare, dans l’ancien, le contemporain, le récent. \r\n\t\t\tLe paysage immobilier de Garches vous permet de découvrir des maisons de charme en meulière dans le centre  de ville, également des maisons traditionnelles, de ville, contemporaines où de belles demeures de prestige dans les quartiers résidentiels.\r\n\t\t\t\t <br /><br />\r\n\t\t\tISABELLE HAYE et son équipe mettent à votre service leur expérience et leur excellente connaissance du marché immobilier de Garches et ses environs pour vous aider à réaliser votre projet immobilier.\r\n\t\t\t<br /><br />\r\n\t\t\tNotre agence est ouverte du lundi au samedi, un accueil chaleureux vous sera réservé.",
                "start": 16595,
                "end": 19222
            }
        ],
        "start": 16541,
        "end": 19231
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "421314",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 19267,
                "end": 19295
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "https://plus.google.com/113609535300263488163?/about",
                "start": 19298,
                "end": 19383
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 19388,
                "end": 19412
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3>Notre agence immobilière à La Celle Saint Cloud</h3>\r\n  \tNotre agence immobilière est située 8 Place Docteur Berthet à La Celle Saint Cloud.<br />\r\n\t\tElle accueille le siège social du groupement GIMCOVERMEILLE ainsi que les services dédiés au syndic de copropriétés et à la gestion locative. \r\n\tNotre responsable d’agence SABINE DE CHAMBARLHAC et son équipe de professionnels de l’immobilier vous attendent pour une étude personnalisée de votre projet, qu’il s’agisse d’une future acquisition, d’une estimation pour la vente de votre maison, appartement sur <a href=\"/immobilier/tout/immo-La-Celle-Saint-Cloud-78/\" title=\"Tout l'immobilier à La Celle Saint Cloud\">La Celle Saint Cloud</a>, <a href=\"/immobilier/tout/immo-Rueil-Malmaison-92/\" title=\"Tout l'immobilier à Rueil Malmaison\">Rueil Malmaison</a>, <a href=\"/immobilier/tout/immo-Garches-92/\" title=\"Tout l'immobilier à Garches\">Garches</a>, <a href=\"/immobilier/tout/immo-Bougival-78/\" title=\"Tout l'immobilier à Bougival\">Bougival</a>, <a href=\"/immobilier/tout/immo-vaucresson-92/\" title=\"Tout l'immobilier à Vaucresson\">Vaucresson</a>, jusqu’à <a href=\"/immobilier/tout/immo-Versailles-78/\" title=\"Tout l'immobilier à Versailles\">Versailles</a>, <a href=\"/immobilier/tout/immo-Le-Chesnay-78/\" title=\"Tout l'immobilier au Chesnay\">Le Chesnay</a> et <a href=\"/immobilier/tout/immo-Louveciennes-78/\" title=\"Tout l'immobilier à Louveciennes\">Louveciennes</a>. \r\n\t\t<br /><br />\r\n\t\t<h3>1 er Réseau de l'Ouest Parisien</h3> \r\n\t\tGIMCOVERMEILLE est un groupement d’agences présent sur l’ouest parisien, entre le nord Yvelines et la Seine Saint Denis, qui rassemble aujourd’hui 14 agences, réparties sur La Celle Saint Cloud, Le Vésinet, Chatou, Conflans Sainte Honorine, Marly le Roi, Poissy, Saint Nom la Bretèche, Vaucresson, Voisins le Bretonneux et Rueil Malmaison.<br />\r\n\t\tNotre site, qui réunit l’ensemble de nos annonces immobilières sur ce vaste secteur, est donc en mesure de vous soumettre une offre de biens variée, maisons, pavillons, belles propriétés, studios, appartements de toutes surfaces, dans différentes gammes de prix et de standing.\r\n\t\t<br /><br />\r\n\t\t<h3>Notre secteur immobilier de La Celle Saint Cloud</h3>\r\n\t\tGrâce à notre parfaite connaissance du marché immobilier local, notre équipe de conseillers sera en mesure de vous fournir une estimation fiable et actualisée, de votre bien soumis à la vente.<br />\r\n\t\tParce qu’aujourd’hui, les exigences des futurs acquéreurs évoluent, nous tenons compte de la demande  pour positionner votre bien sur le marché, selon ses prestations, ses qualités immobilières, son environnement et son état général.<br />\r\n\t\tNos partenaires, dans le domaine du financement ou des travaux sont à votre disposition pour vous aider à trouver le meilleur financement ou pour deviser vos projets de rénovation.<br />\r\n\t\t<br />\r\n\t\t<strong>Dans le cadre de la vente de votre bien en exclusivité, notre agence vous offre le remboursement de vos diagnostics immobiliers.</strong>\r\n\t\t<br /><br />\r\n\t\t* voir conditions en agence.",
                "start": 19416,
                "end": 22486
            },
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 22496,
                "end": 22523
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "113609535300263488163",
                "start": 22528,
                "end": 22582
            }
        ],
        "start": 19239,
        "end": 22591
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "421315",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 22629,
                "end": 22653
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "L'Equipe met à votre service 25 ans d'expérience sur le secteur pour vous accompagner dans votre projet immobilier. Une équipe de professionnelles expérimentées en transaction , location et gestion locative vous apportera ses conseils avisés  <br /><br />\r\n\t\t\tParmi les plus anciennes agences de Bougival et la plus ancienne du Groupe GIMCOVERMEILLE, notre agence vous propose un service de transactions immobilières, locations & gestion locative sur Bougival et ses communes environnantes.\r\n\t\t\t<br /><br />\r\n\t\t\t<h3>Tout l’immobilier sur Bougival, La Celle Saint Cloud et l’ouest parisien</h3>\r\n\t\t\tSur un secteur essentiellement résidentiel imprégné par les impressionnistes, le paysage architectural de Bougival et ses environs, vous offre un choix d’<a href=\"/immobilier/achat/immo-bougival-78/bien-appartement/\" title=\"Ventes d'appartements situées à Bougival\">appartements</a>, de <a href=\"/immobilier/achat/immo-bougival-78/bien-maison/\" title=\"Ventes de maisons / villas situées à Bougival\">maisons / villas</a> et propriétés dans différentes gammes de prix.\r\n\t\t\tEn consultant notre site, vous pourrez découvrir une sélection de maisons traditionnelles, de villas contemporaines, des maisons anciennes type maison de maître ou demeure bourgeoise.\r\n\t\t\tVous trouverez également un choix d’<a href=\"/immobilier/locations/immo-bougival-78/bien-appartement/\" title=\"Locations d'appartements situées à Bougival\">appartements à la location</a> mais aussi des <a href=\"/immobilier/locations/immo-bougival-78/bien-maison/\" title=\"Locations de maisons situées à Bougival\">maisons</a> sur bougival.\r\n\t\t\t <br /><br />\r\n\t\t\tNotre secteur immobilier couvre les communes de <a href=\"/immobilier/tout/immo-bougival-78/\" title=\"Immobilier Bougival avec Gimcovermeille\">Bougival</a>, <a href=\"/immobilier/tout/immo-la-celle-saint-cloud-78/\" title=\"Immobilier La Celle Saint Cloud avec Gimcovermeille\">La Celle Saint Cloud</a>, <a href=\"/immobilier/tout/immo-croissy-sur-seine-78/\" title=\"Immobilier Croissy sur Seine avec Gimcovermeille\">Croissy sur Seine</a>, <a href=\"/immobilier/tout/immo-louveciennes-78/\" title=\"Immobilier Louveciennes avec Gimcovermeille\">Louveciennes</a>, <a href=\"/immobilier/tout/immo-marly-le-roi-78/\" title=\"Immobilier Marly le Roi avec Gimcovermeille\">Marly le Roi</a>, <a href=\"/immobilier/tout/immo-noisy-le-roi-78/\" title=\"Immobilier Noisy le Roi avec Gimcovermeille\">Noisy le Roi</a>, <a href=\"/immobilier/tout/immo-bailly-78/\" title=\"Immobilier Bailly avec Gimcovermeille\">Bailly</a> et <a href=\"/immobilier/tout/immo-le-chesnay-78/\" title=\"Immobilier Le Chesnay avec Gimcovermeille\">Le Chesnay</a>.\r\n\t\t\t\t <br /><br />\r\n\t\t\tSitué à 15 kms du centre de Paris, d’accès rapide vers la capitale par l’A13, 25 minutes par le train, jusqu’à la gare Saint Lazare, en passant par La Défense à 15 minutes.",
                "start": 22657,
                "end": 25504
            }
        ],
        "start": 22603,
        "end": 25513
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "421316",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 25545,
                "end": 25569
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "A 20km de Paris, le secteur immobilier du Vésinet, offre une bonne accessibilité à la capitale avec la RER (A) de St Germain en Laye à Paris, proche Ruel Malmaison, La Défense, Neuilly sur Seine.\r\n\t\t\tAvec de nombreux espaces verts et plans d’eau, ce secteur offre une tranquillité et une qualité de vie à seulement 20km de Paris et à 2 pas de St Germain en Laye et des écoles internationales.\r\n\t <br /><br />\r\n\t\tPatricia de Coudenhove et son équipe de collaboratrices vous attendent pour une étude sur mesure de votre projet immobilier sur <a href=\"/immobilier/tout/immo-le-vesinet-78/\" title=\"Immobilier Le Vésinet avec Gimcovermeille\">Le Vésinet</a>, <a href=\"/immobilier/tout/immo-chatou-78/\" title=\"Immobilier Chatou avec Gimcovermeille\">Chatou</a>, <a href=\"/immobilier/tout/immo-croissy-sur-seine-78/\" title=\"Immobilier Croissy sur Seine avec Gimcovermeille\">Croissy sur Seine</a>, <a href=\"http://www.gimcovermeille.com/immobilier-montesson.htm\" title=\"Immobilier Montesson avec Gimcovermeille\">Montesson</a> et <a href=\"http://www.gimcovermeille.com/immobilier-le-pecq.htm\" title=\"Immobilier Le Pecq avec Gimcovermeille\">Le Pecq</a>. Elles mettent à votre service leur dynamisme et leur expérience du marché immobilier du Vésinet et ses environs, pour vous apporter un conseil avisé sur le choix de votre future résidence et mener votre projet à la réussite.\r\n\t\t\t <br /><br />\r\n\t\t<h3>Nos annonces immobilières au Vésinet</h3>\r\n\t\tLe site de <a href=\"/agences,liste.htm\" title=\"15 agences immobilières à votre service dans l'ouest parisien\">notre groupement de 12 agences</a>, rassemble ici toutes les annonces immobilières en location et <a href=\"/immobilier/achat/immo-le-vesinet-78/bien-maison/\" title=\"Ventes de maisons situées au Vésinet\">vente de maisons</a>, <a href=\"/immobilier/achat/immo-le-vesinet-78/bien-appartement/\" title=\"Ventes d'appartements situées au Vésinet\">appartements</a>, <a href=\"/immobilier/achat/immo-le-vesinet-78/bien-terrain/\" title=\"Ventes de terrains situées au Vésinet\">terrains</a>, sur Le Vésinet et l’ouest parisien, pour une offre démultipliée près de chez vous.\r\n\t\tNotre agence immobilière située 13 Place du Marché au Vésinet vous propose un choix de biens à la vente maisons sur <a href=\"/immobilier/achat/immo-le-vesinet-78/bien-maison/\" title=\"Ventes de maisons situées au Vésinet\">Le Vésinet</a>, <a href=\"/immobilier/achat/immo-chatou-78/bien-maison/\" title=\"Ventes de maisons situées à Chatou\">Chatou</a>, <a href=\"/immobilier/achat/immo-croissy-sur-seine-78/bien-maison/\" title=\"Ventes de maisons situées à Croissy sur Seine\">Croissy sur Seine</a>, <a href=\"/immobilier/achat/immo-montesson-78/bien-maison/\" title=\"Ventes de maisons situées à Montesson\">Montesson</a> et <a href=\"/immobilier/achat/immo-le-pecq-78/bien-maison/\" title=\"Ventes de maisons situées à Le Pecq\">Le Pecq</a>. Nous proposons également des appartements à la vente sur <a href=\"/immobilier/achat/immo-chatou-78/bien-maison/\" title=\"Ventes de appartements situées à Chatou\">Chatou</a>, <a href=\"/immobilier/achat/immo-le-vesinet-78/bien-appartement/\" title=\"ventes d'appartements situées au Vésinet\">Le Vésinet</a>, <a href=\"/immobilier/achat/immo-montesson-78/bien-appartement/\" title=\"Ventes d'appartements situées à Montesson\">Montesson</a>, <a href=\"/immobilier/achat/immo-croissy-sur-seine-78/bien-appartement/\" title=\"Ventes d'appartements situées à Croissy sur Seine\">Croissy sur Seine</a> et <a href=\"/immobilier/achat/immo-le-pecq-78/bien-appartement/\" title=\"Ventes d'appartements situées à Le Pecq\">Le Pecq</a>.\r\n\t\t\t <br /><br />\r\n\t\tLe secteur immobilier du Vésinet, de Chatou et ses environs, reste résidentiel avec une bonne proportion de maisons, dans différentes gammes de prix et de standing.\r\n\t\tNos annonces de vente de maisons sur Le Vésinet, et ses environs proposent des villas traditionnelles et contemporaines, maisons de ville, des pavillons contemporains, de grandes propriétés, hôtels particuliers et des appartements de toutes surfaces, dans le récent ou l’ancien.\r\n\t\t\t <br /><br />\r\n\t\t<strong>Confiez nous votre recherche personnalisée.</strong>\t <br /><br />\r\n\t\t\r\n\t\tVous trouverez également parmi nos annonces, des terrains à bâtir et selon les opportunités des programmes immobiliers neufs.\r\n\t\t\t <br /><br />\r\n\t\tA 20km de Paris, le secteur immobilier du Vésinet, offre une bonne accessibilité à la capitale avec la RER (A) de St Germain en Laye à Paris, proche Ruel Malmaison, La Défense, Neuilly sur Seine.\r\n\t\tAvec de nombreux espaces verts et plans d’eau, ce secteur offre une tranquillité et une qualité de vie à seulement 20km de Paris et à 2 pas de St Germain en Laye et des écoles internationales.\r\n\t\t\t <br /><br />\r\n\t\tAttachés à la notion de suivi personnalisé, nous vous accompagnons dans chaque étape de votre projet et dans les démarches administratives liées à la mise en vente de votre bien avec une estimation gratuite. Nous mettons également à votre disposition des partenaires de confiance pour envisager vos projets de financement ou travaux de rénovation.",
                "start": 25573,
                "end": 30631
            }
        ],
        "start": 25519,
        "end": 30640
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "421318",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 30672,
                "end": 30696
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "Connue pour être la plus sûre des communes des Yvelines, Marly le Roi, offre un environnement agréable, entourée de verdure avec un cœur de ville ancien à l’image des plus beaux villages d’île de France. Avec 20 000 habitants et un \t\téquipement socioculturel et sportif de qualité, la commune attire les projets immobiliers de familles et d’actifs parisiens à la recherche d’une meilleure qualité de vie.\r\n \t\t <br /><br />\r\n\t\t<h3>Notre agence immobilière à Marly le Roi</h3>\r\n\t\tEric Dessertenne et son équipe vous reçoivent dans une ambiance détendue et dans des locaux décorés avec soin pour une découverte approfondie de votre projet immobilier.<br />\r\n\t\tAvec la plus grande écoute à vos attentes, nous définissons le cahier des charges de votre recherche immobilière, pour vous aider à trouver un bien immobilier sur <a href=\"/immobilier/tout/immo-marly-le-roi-78/\" title=\"Immobilier Marly le Roi avec Gimcovermeille\">Marly le Roi</a> et ses environs.<br /><br />\r\n\t\tNotre site vous propose un choix de biens à la vente, avec des appartements de toutes surfaces sur <a href=\"/immobilier/achat/immo-marly-le-roi-78/bien-appartement/\" title=\"Ventes d'appartements situées à Marly le Roi\">Marly le Roi</a>, <a href=\"/immobilier/achat/immo-louveciennes-78/bien-appartement/\" title=\"Ventes d'appartements situées à Louveciennes\">Louveciennes</a>, <a href=\"/immobilier/achat/immo-l-etang-la-ville-78/bien-appartement/\" title=\"Ventes d'appartements situées à L'Étang la Ville\">L’Etang la Ville</a>, <a href=\"/immobilier/tout/immo-mareil-marly-78/\" title=\"Ventes d'appartements situées à Mareil Marly\">Mareil Marly</a>, <a href=\"/immobilier/achat/immo-le-port-marly-78/bien-appartement/\" title=\"Ventes d'appartements situées à le Port Marly\">Le Port Marly</a>, <a href=\"/immobilier/achat/immo-bailly-78/bien-appartement/\" title=\"Ventes d'appartements situées à Bailly\">Bailly</a> et <a href=\"/immobilier/achat/immo-noisy-le-roi-78/bien-appartement/\" title=\"Ventes d'appartements situées à Noisy le Roi\">Noisy le Roi</a>, des <a href=\"/immobilier/achat/immo-marly-le-roi-78/bien-appartement/\" title=\"Ventes de maisons situées à Marly le Roi\">maisons</a> et <a href=\"/immobilier/achat/immo-marly-le-roi-78/bien-terrain/\" title=\"Ventes de terrains situées à Marly le Roi\">terrains</a> à bâtir sur Marly le roi.\r\n\t\t<br /><br />\r\n\t\tAvec une paysage immobilier surtout résidentiel, Marly le Roi et ses environs, offrent un choix de maisons traditionnelles, maisons de ville, des maisons très anciennes, maisons séculaires, dans le cœur historique, parfois classées au patrimoine historique, et une grande variété de pavillons contemporains, belles propriétés et des maisons d’architectes.\r\n\t\t<br /><br />\r\n\t\tQuelle que soit la nature de votre projet, vente, location, achat ou investissement, nous restons présents dans chaque étape de la transaction et nous vous apportons un conseil avisé, sur le choix de votre résidence, selon vos contraintes personnelles et professionnelles, et sur l’état du marché, pour une rentabilité locative optimisée, selon vos objectifs. \r\n\t\tLe marché immobilier de Marly le Roi, reste attractif comparativement au marché de la première couronne parisienne et l’excellente réputation des écoles et lycées en font un secteur prisé par de nombreuses familles.",
                "start": 30700,
                "end": 34007
            }
        ],
        "start": 30646,
        "end": 34016
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "421320",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 34048,
                "end": 34072
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3>Notre agence immobilière à Poissy</h3>\r\n  \tIdéalement placée en cœur de ville, 19 avenue du Cep, notre agence immobilière dispose sur Poissy d’un emplacement N°1, pour une visibilité optimale des annonces affichées en vitrine, avec un passage fréquent sur une artère commerçante.<br /><br />\r\n\t\t\tRécemment rénovée, notre agence vous accueille dans des locaux entièrement agencés de façon moderne et chaleureuse, avec une équipe de conseillers dédiée à la réussite de votre projet.\r\n\t\t\t<br />\r\n\t\t\tAgence immobilière basée à Poissy, intégrée au groupement GIMCOVERMEILLE, notre structure vous propose un service de gestion locative et transactions immobilières.\r\n\t\t\t<br />\r\n\t\t\tLe groupement GIMCOVERMEILLE se compose de 15 agences immobilières qui proposent les services de <a href=\"/immo,gestion.htm\" title=\"Notre service Gestion Locative à Poissy\">gestion</a>, <a href=\"http://www.gimcovermeille.com/location-poissy.htm\" title=\"Nos biens à la location sur Poissy\">location</a>, <a href=\"http://www.gimcovermeille.com/vente-poissy.htm\" title=\"Nos biens à la vente sur Poissy\">vente</a> et <a href=\"/immo,syndic.htm\" title=\"Notre service Syndic à Poissy\">syndic</a> sur Poissy et l’ouest parisien. \r\n\t\t\t<br /><br />\r\n\t\t\t<h3>Notre portefeuille immobilier sur Poissy</h3>\r\n\t\t\tNotre secteur immobilier se concentre sur <a href=\"/immobilier/tout/immo-poissy-78/\" title=\"Tout l'immobilier à Poissy\">Poissy</a>, <a href=\"/immobilier/tout/immo-carrieres-sous-poissy-78/\" title=\"Tout l'immobilier à Carrières sous Poissy\">Carrières sous Poissy</a>, <a href=\"/immobilier/tout/immo-orgeval-78/\" title=\"Tout l'immobilier à Orgeval\">Orgeval</a>, <a href=\"/immobilier/tout/immo-acheres-78/\" title=\"Tout l'immobilier à Achères\">Achères</a>, <a href=\"/immobilier/tout/immo-chambourcy-78/\" title=\"Tout l'immobilier à Chambourcy\">Chambourcy</a>, <a href=\"/immobilier/tout/immo-aigremont-78/\" title=\"Tout l'immobilier à Aigremont\">Aigremont</a> et <a href=\"/immobilier/tout/immo-saint-germain-en-laye-78/\" title=\"Tout l'immobilier à Saint Germain en laye\">Saint Germain en laye</a>. Un secteur de l’ouest parisien prisé pour son environnement, son histoire et de ses bords de Seine (Ile de Mignot), à proximité de la forêt de Saint Germain en Laye et ses écoles et lycée internationale, avec de nombreux accès à Paris A14, A13, RER A et SNCF pour rejoindre Paris, La Défense et St Lazare en 20mn.\r\n\t\t\tNotre site vous propose un vaste choix de biens à la vente, maisons, appartements et terrains  sur Poissy et proximité, dans différentes gammes de standing, dans le récent, le contemporain, l’ancien.\r\n\t\t\t<br /><br />\r\n\t\t\tUn service de <a href=\"/immo,gestion.htm\" title=\"Notre service Gestion Locative à Poissy\">gestion locative</a>, intégré à notre agence de Poissy est à votre disposition avec la possibilité de souscrire à la garantie des loyers impayés. Avec actuellement près de 450 lots gérés et un personnel qualifié de 4 spécialistes de ce domaine, notre agence vous garantit un niveau de compétence et une rigueur professionnelle dans la gestion de votre patrimoine immobilier.",
                "start": 34076,
                "end": 37182
            }
        ],
        "start": 34022,
        "end": 37191
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "421332",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 37223,
                "end": 37247
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "Avec un personnel <strong>qualifié et spécialiste de la gestion immobilière</strong>, vous êtes sûrs de trouver un service de qualité pour la gestion de votre patrimoine immobilier.\r\n\t\t<br />\t<br />\r\n\t\t<h3>GIMCOVERMEILLE, la gestion locative et le syndic sur Rueil Malmaison</h3>\r\n\t\t\tDavid Martin et son équipe vous proposent un service de <a href=\"/immo,gestion.htm\" title=\"Notre service gestion locative\">gestion locative sur Rueil Malmaison</a>.\r\n\t\t\t\t<br />\t<br />\r\n\t\t\tAvec un personnel <strong>qualifié et spécialiste de la gestion immobilière</strong>, vous êtes sûrs de trouver un service de qualité pour la gestion de votre patrimoine immobilier.\t<br />\r\n\t\t\tSelon vos objectifs et vos attentes, nous pourrons vous proposer un ensemble de garantie locatives, loyers impayés, dégradations immobilières, vacance locative ou assistance juridique.\t<br />\r\n\t\t\t<strong>Notre service prend en charge</strong> :\t<br />\r\n\t\t<ul style=\"margin-left:50px;\">\r\n\t\t\t<li>La recherche de candidats locataires</li>\r\n\t\t\t<li>La sélection du futur locataires</li>\r\n\t\t\t<li>Les états des lieux</li>\r\n\t\t\t<li>Les encaissements de loyers</li>\r\n\t\t\t<li>Nous serons présents en fin d’exercice pour une aide à la déclaration des revenus fonciers</li>\r\n\t\t\t</ul>\r\n\t\t\t\r\n\t\t\tNotre agence développe également une activité de <a href=\"/immo,syndic.htm\" title=\"Notre service syndic de copropriétés\">syndic de copropriétés sur Rueil Malmaison</a> avec les <strong>missions suivantes</strong> :\t<br />\r\n\t\t\t<ul style=\"margin-left:50px;\">\r\n\t\t\t<li>Faire respecter le règlement de copropriété</li>\r\n\t\t\t<li>Représenter le syndicat des copropriétaires en justice</li>\r\n\t\t\t<li>Intervenir en cas d’urgence sur les problèmes qui peuvent survenir dans les parties communes</li>\r\n\t\t\t<li>Gérer l’entretien et les réparations des équipements communs de la copropriété</li>\r\n\t\t\t<li>Informer les copropriétaires des actions menées et des lieux et dates des assemblées générales</li>\r\n\t\t\t</ul>",
                "start": 37251,
                "end": 39223
            }
        ],
        "start": 37197,
        "end": 39232
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "421325",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 39264,
                "end": 39288
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "L’agence immobilière GIMCOVERMEILLE de Rueil-Malmaison est idéalement située avenue Albert Ier, à deux pas du RER, et à 10 minutes à pied du centre-ville. Une équipe de 3 conseillers immobiliers vous attend pour une étude personnalisée de votre projet immobilier.\r\n\t\t<br /><br />\r\n\t<h3>Notre portefeuille immobilier sur Rueil-Malmaison</h3>\r\n\t\tDécouvrez sur ce site nos annonces immobilières sur <a href=\"/immobilier/tout/immo-rueil-malmaison-92/\" title=\"Découvrez nos annonces immobiliètres à Rueil-Malmaison\">Rueil-Malmaison</a> et les communes environnantes : <a href=\"/immobilier/tout/immo-nanterre-92/\" title=\"Découvrez nos annonces immobiliètres à Nanterre\">Nanterre</a>,  <a href=\"/immobilier/tout/immo-suresnes-92/\" title=\"Découvrez nos annonces immobiliètres à Suresnes\">Suresnes</a>, <a href=\"/immobilier/tout/immo-garches-92/\" title=\"Découvrez nos annonces immobiliètres à Garches\">Garches</a>, <a href=\"/immobilier/tout/immo-vaucresson-92/\" title=\"Découvrez nos annonces immobiliètres à Vaucresson\">Vaucresson</a>… et plus largement sur l’Ouest parisien, avec nos <strong>15 agences de transaction</strong>.\r\n\t\t<br /><br />\r\n\t<h3>Notre agence immobilière sur Rueil-Malmaison</h3>\r\n\t\tNotre agence implantée à Rueil-Malmaison <strong>depuis plus de 20 ans</strong> bénéficie d’une notoriété sur le secteur et  dispose d’un fichier acquéreurs conséquent, avec une clientèle variée : Rueillois ou habitants des communes voisines, primo-accédants ou propriétaires cherchant une plus grande surface, appartement ou maison.  Nous avons également une clientèle parisienne, attirée par la qualité de vie et d’environnement qu’offre notre ville,  à  seulement  15 minutes en RER de l’Etoile.\r\n\t\t<br /><br />\r\n\t\t<h3>Notre secteur de Rueil Malmaison</h3>\r\n\t\tNotre activité se  concentre avant tout sur Rueil, la plus grande commune des Hauts-de-Seine, qui offre un paysage immobilier varié, avec des quartiers bien différenciés :  le quartier  Albert Ier avec ses belles maisons bourgeoises du début du XXème siècle, et ses immeubles construits entre 1960 et 1980, le quartier des Bords de Seine, avec ses maisons meulières des années 30 et maisons contemporaines,  Rueil-sur-Seine,  avec ses immeubles standing  des années 1990-2000, le cœur de ville et ses demeures napoléoniennes, les hauteurs où se côtoient immeubles, petites résidences et maisons et bien sûr le Parc de La Malmaison et ses propriétés de prestige…\r\n\t\t<br /><br />\r\n\t\tCorinne Langlois et son équipe de collaborateurs expérimentés, connaissant parfaitement le secteur, sauront vous conseiller et vous accompagner dans la réalisation de vos projets de vente ou d’achat, pour votre plus grande satisfaction.",
                "start": 39292,
                "end": 41998
            }
        ],
        "start": 39238,
        "end": 42007
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "421323",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 42039,
                "end": 42063
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "Notre sélection de biens à la vente, se décline avec un choix de maisons, sur Saint Nom la Bretèche, Feucherolles et environs, avec des maisons traditionnelles en pierre, des maisons de ville, des meulières ou maisons de caractère, \tdes pavillons récents, de belles propriétés à proximité du golf de Saint Nom la Bretèche, des appartements de toutes surfaces, sur Noisy ou Bailly et des terrains à bâtir.\r\n\t\t\t<br /><br />\r\n\t\t\t<h3>Notre agence immobilière à Saint Nom la Bretèche</h3>\r\n\t\t\tNotre agence est situé dans le centre ville de Saint Nom La Bretèche. A 30mn de Paris La Défense et 40mn des Gares St Lazare et Montparnasse, le secteur immobilier de <a href=\"/immobilier/tout/immo-saint-nom-la-breteche-78/\" title=\"Immobilier Saint Nom la Bretèche avec Gimcovermeille\">Saint Nom la Bretèche</a> offre un environnement paisible, à proximité du golf et de la forêt, un paysage immobilier résidentiel, entre ville et campagne, aux portes de Paris, idéal pour l’installation à long terme des familles et des actifs parisiens à la recherche de plus de qualité de vie....\r\n\t\t\t<br /><br />\r\n\t\t\t<h3>Notre secteur de Saint Nom la Bretèche</h3>\r\n\t\t\tVirginie De Changy et son équipe vous accueillent dans une ambiance conviviale.<br />\r\n\t\t\tNous sommes à votre disposition pour une étude personnalisée de votre projet immobilier, avec la plus grande écoute, pour vous aider à réaliser un achat, une location ou la vente de votre <a href=\"http://www.gimcovermeille.com/vente-maison-saint-nom-la-breteche.htm\" title=\"Ventes de maisons situées à Saint Nom la Bretèche\">maison</a> ou <a href=\"/immobilier/achat/immo-saint-nom-la-breteche-78/bien-appartement/\" title=\"Ventes d'appartements situées à Saint Nom la Bretèche\">appartement</a>, sur Saint Nom la Bretèche et ses environs, <a href=\"/immobilier/tout/immo-feucherolles-78/\" title=\"Immobilier Feucherolles avec Gimcovermeille\">Feucherolles</a>, <a href=\"/immobilier/tout/immo-chavenay-78/\" title=\"Immobilier Chavenay avec Gimcovermeille\">Chavenay</a>, Davron, <a href=\"/immobilier/tout/immo-crespieres-78/\" title=\"Immobilier Crespières avec Gimcovermeille\">Crespières</a>, <a href=\"/immobilier/tout/immo-bailly-78/\" title=\"Immobilier Bailly avec Gimcovermeille\">Bailly</a>, <a href=\"/immobilier/tout/immo-noisy-le-roi-78/\" title=\"Immobilier Noisy le Roi avec Gimcovermeille\">Noisy le Roi</a>, <a href=\"http://www.gimcovermeille.com/immobilier-l-etang-la-ville.htm\" title=\"Immobilier L'Étang la Ville avec Gimcovermeille\">l’Etang la Ville</a>, Fourqueux et <a href=\"/immobilier/tout/immo-marly-le-roi-78/\" title=\"Immobilier Mareil-Marly avec Gimcovermeille\">Mareil Marly</a>.<br />\r\n\t\t\tNous prendrons le temps de déterminer votre cahier des charges en fonction de vos contraintes personnelles et professionnelles.",
                "start": 42067,
                "end": 44855
            }
        ],
        "start": 42013,
        "end": 44864
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "421319",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 44896,
                "end": 44920
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3>Notre agence immobilière à Vaucresson</h3>\r\n\t\t  Notre agence immobilière située à Vaucresson dans le centre ville, est ouverte 6 jours sur 7.\r\n\t\t\t\t\tMarie-France Le Seviller et son équipe mettent à votre disposition leurs compétences et leur maîtrise du marché immobilier local afin de vous aider à orienter votre projet, avec l’enthousiasme et le dynamisme nécessaires à sa réussite. \r\n\t\t\t<br /><br />\r\n\t\t\tNous vous proposons un service de qualité sur Vaucresson et ses environs pour la <a href=\"/immobilier/achat/immo-vaucresson-92/bien-maison/\" title=\"Ventes de maisons situées à Vaucresson\">vente de maisons</a> et <a href=\"/immobilier/achat/immo-vaucresson-92/bien-appartement/\" title=\"Ventes d'appartements situées à Vaucresson\">d’appartements</a> , mais également des <a href=\"/immobilier/locations/immo-vaucresson-92/bien-appartement/\" title=\"Locations d'appartements situées à Vaucresson\">appartements</a> et des <a href=\"/immobilier/locations/immo-vaucresson-92/bien-maison/\" title=\"Locations de maisons situées à Vaucresson\">maisons à la location sur Vaucresson</a> nous mettons également à votre disposition les services du Groupe GIMCOVERMEILLE en gestion locative et syndic sur Vaucresson et l’ouest parisien.\r\n\t\t\t<br /><br />\r\n\t\t\t<h3>Notre secteur de Vaucresson </h3>\r\n\t\t\tNotre secteur immobilier s’étend de <a href=\"/immobilier/tout/immo-la-celle-saint-cloud-78/\" title=\"Immobilier La Celle Saint Cloud avec Gimcovermeille\">La Celle Saint Cloud</a> à <a href=\"/immobilier/tout/immo-versailles-78/\" title=\"Immobilier Versailles avec Gimcovermeille\">Versailles</a>, et jusqu’à, Sèvres en passant par, <a href=\"/immobilier/tout/immo-garches-92/\" title=\"Immobilier Garches avec Gimcovermeille\">Garches</a>, <a href=\"/immobilier/tout/immo-vaucresson-92/\" title=\"Immobilier Vaucresson avec Gimcovermeille\">Vaucresson</a>, <a href=\"/immobilier/tout/immo-marnes-la-coquette-92/\" title=\"Immobilier Marnes-la-Coquette avec Gimcovermeille\">Marnes la Coquette</a>, <a href=\"/immobilier/tout/immo-ville-d-avray-92/\" title=\"Immobilier Ville d'Avray avec Gimcovermeille\">Ville d’Avray</a> et <a href=\"/immobilier/tout/immo-le-chesnay-78/\" title=\"Immobilier Le Chesnay avec Gimcovermeille\">Le Chesnay</a>.<br /><br />\r\n\t\t\t<h3>Notre portefeuille d'annonces sur Vaucresson</h3>\r\n\t\t\tUn secteur de l’ouest parisien prisé pour son environnement préservé, à proximité des bois ,des forêts de <a href=\"/immobilier/tout/immo-louveciennes-78/\" title=\"Immobilier Louveciennes avec Gimcovermeille\">Louveciennes</a>, <a href=\"/immobilier/tout/immo-marly-le-roi-78/\" title=\"Immobilier Marly le Roi avec Gimcovermeille\">Marly le Roi</a> et du <a href=\"/immobilier/tout/immo-saint-cloud-92/\" title=\"Immobilier Saint-Cloud avec Gimcovermeille\">Parc de Saint Cloud</a>.\r\n\t\t\tNotre clientèle se compose de résidents et d’actifs parisiens à la recherche d’un bon compromis espace qualité de vie et accessibilité à la capitale, pour des projets de résidence principale.\r\n\t\t\t<br /><br />\r\n\t\t\tNotre site vous soumet une offre variée de biens à la vente, des maisons traditionnelles, sur Vaucresson et ses environs, des demeures bourgeoises ,des meulières de caractère, villas contemporaines, belles propriétés, terrains à bâtir, ainsi que des appartements, dans le neuf ou l’ancien, pouvant correspondre à des projets d’investissement locatif.\r\n\t\t\tN’hésitez pas à nous demander plus de renseignements sur le service de gestion locative, les programmes neufs sur Vaucresson et ses environs, pour une étude de votre projet d’investissement.",
                "start": 44924,
                "end": 48479
            }
        ],
        "start": 44870,
        "end": 48488
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "421331",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 48520,
                "end": 48544
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3>Gestion Locative et Syndic de Copropriétés sur Voisins le Bretonneux</h3>\r\n\t\t<br /><br />\r\n\t\t\t\r\n\t\t<h4>Gestion locative à Voisins le Bretonneux</h4>\r\n\t\t\tNotre service de gestion locative à Voisin le Bretonneux, met à votre disposition une équipe de spécialistes de la gestion immobilière, pour une prise en charge globale des démarches administratives liées à la gestion de votre patrimoine immobilier : \r\n\t\t\t<ul style=\"margin-left:50px;\">\r\n\t\t\t<li>•\tSélection des candidats locataires, </li>\r\n\t\t\t<li>•\tLes visites et les états des lieux, </li>\r\n\t\t\t<li>•\tL’encaissement des loyers</li>\r\n\t\t\t<li>•\tLes relations d’intermédiaires entre propriétaires et locataires</li>\r\n\t\t\t<li>•\tL’aide à la déclaration des revenus fonciers en fin d’exercice.</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<br />\r\n\t\t\tNotre service prend également en charge les interventions en cas de travaux de réparation.\r\n\t\t\tDécouvrez sur ce site un choix de location de maisons et appartements, sur Voisins le Bretonneux, Montigny, Trappes, Elancourt, St Cyr l’Ecole et Versailles.\r\n\t\t\r\n\t\t\t<br /><br />\r\n\t\t\t<h4>Syndic à Voisins le Bretonneux</h4>\r\n\t\t\t\t\t\t<strong>Nos engagements</strong> : <br />\r\n\t\t\t<ul style=\"margin-left:50px;\">\r\n\t\t\t<li>•\tUn relationnel permanent avec le conseil syndical afin de gérer au mieux votre patrimoine, </li>\r\n\t\t\t<li>•\tDes visites régulières des copropriétés,</li>\r\n\t\t\t<li>•\tUne mise en concurrence des entreprises et contrats,</li>\r\n\t\t\t<li>•\tUn nombre de réunion avec le conseil syndical en cours d’année pour suivre les dossiers et préparer l’Assemblée générale.</li>\r\n\t\t\t</ul>\r\n\t\t\t<strong>Comptabilité</strong> :<br />\r\n\t\t\t\r\n\t\t\t<ul style=\"margin-left:50px;\">\r\n\t\t\t<li>•\tUn compte bancaire par copropriété,</li>\r\n\t\t\t<li>•\tUn contrôle des copropriétaires sur simple rendez-vous pour une transparence maximale,</li>\r\n\t\t\t<li>•\tMise en place de manière individuelle de la mensualisation des charges et du prélèvement automatique : aucun frais.</li>\r\n\t\t\t</ul>\r\n\t\t\t<br />\r\n\t\t\tN’hésitez pas à nous contacter dans le cadre d’un changement ou recherche de syndic pour votre copropriété  sur Voisins le Bretonneux et ses environs.",
                "start": 48548,
                "end": 50674
            }
        ],
        "start": 48494,
        "end": 50683
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "435263",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 50715,
                "end": 50739
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3>Gestion locative et Sndic de Copropriétés à Voisins le Bretonneux</h3>\r\n\t\t<br />\r\n\t\t<h4>Gestion locative à Voisins le Bretonneux</h4>\r\n\t\t\tNotre service de gestion locative à Voisin le Bretonneux, met à votre disposition une équipe de spécialistes de la gestion immobilière, pour une prise en charge globale des démarches administratives liées à la gestion de votre patrimoine immobilier : \r\n\t\t\t<ul style=\"margin-left:50px;\">\r\n\t\t\t<li>•\tLa sélection des candidats locataires</li>\r\n\t\t\t<li>•\tLes visites et les états des lieux </li>\r\n\t\t\t<li>•\tL’encaissement des loyers</li>\r\n\t\t\t<li>•\tLes relations d’intermédiaires entre propriétaires et locataires</li>\r\n\t\t\t<li>•\tL’aide à la déclaration des revenus fonciers en fin d’exercice</li>\r\n\t\t\t</ul>\r\n\t\t\tNotre service prend également en charge les interventions en cas de travaux de réparation.\r\n\t\t\tDécouvrez sur ce site un choix de location de maisons et appartements, sur Voisins le Bretonneux, Montigny, Trappes, Elancourt, St Cyr l’Ecole et Versailles.\r\n\t\t\t<br /><br />\r\n\t\t<h4>Syndic à Voisins le Bretonneux</h4>\r\n\t\t\t<ul style=\"margin-left:50px;\">\r\n\t\t\t\t<strong>Nos engagements</strong> \r\n\t\t\t<li>•\tUn relationnel permanent avec le conseil syndical afin de gérer au mieux votre patrimoine, \r\n\t\t\t<li>•\tDes visites régulières des copropriétés,\r\n\t\t\t<li>•\tUne mise en concurrence des entreprises et contrats,\r\n\t\t\t<li>•\tUn nombre de réunion avec le conseil syndical en cours d’année pour suivre les dossiers et préparer l’Assemblée générale.\r\n\t\t\t</ul>\r\n\t\t\t<ul style=\"margin-left:50px;\">\r\n\t\t\t<strong>Comptabilité</strong>\r\n\t\t\t<li>•\tUn compte bancaire par copropriété,\r\n\t\t\t<li>•\tUn contrôle des copropriétaires sur simple rendez-vous pour une transparence maximale,\r\n\t\t\t<li>•\tMise en place de manière individuelle de la mensualisation des charges et du prélèvement automatique : aucun frais.\r\n\t\t\t</strong>\r\n\t\t\tN’hésitez pas à nous contacter dans le cadre d’un changement ou recherche de syndic pour votre copropriété  sur Voisins le Bretonneux et ses environs.",
                "start": 50743,
                "end": 52771
            }
        ],
        "start": 50689,
        "end": 52780
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "555386",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 52812,
                "end": 52836
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<h3>GIMCOVERMEILLE vous présente son agence immobilière à La Celle Saint Cloud</h3>\r\n\t\t\t<p align=\"justify\">Notre agence immobilière, située 8 Place Docteur Berthet à La celle Saint Cloud, vous accueille du lundi au samedi pour une découverte de votre projet immobilier, qu’il s’agisse d’un achat immobilier en résidence principale, d’un projet d’investissement locatif, défiscalisé ou non, d’un projet de location, de la gestion de votre patrimoine immobilier, ou encore de la vente de votre bien immobilier sur La Celle Saint Cloud et ses environs.</p> \r\n\t\t\t<p align=\"justify\">Notre agence immobilière, intégrée au réseau Gimcovermeille, travaille en étroite collaboration avec les agences immobilières de notre secteur, présentes sur La Celle Saint Cloud mais aussi sur Vaucresson, Marly le Roi et Rueil Malmaison, afin de vous soumettre un choix varié de biens près de chez vous, maisons, appartements, dans le neuf ou l’ancien.</p>\r\n\t\t\t<p align=\"justify\">Notre responsable d’agence, M. Sébastien Blidon et son équipe de conseillers immobiliers vous reçoivent dans une ambiance chaleureuse pour une étude de votre projet d’achat, de vente ou de location et vous proposent un accompagnement pertinent, régulier et rigoureux tout au long de la transaction.</p>  \r\n\t\t\t<p align=\"justify\">Professionnels aguerris et spécialistes du marché immobilier de la Celle Saint Cloud et de l’ouest parisien, nos conseillers immobiliers vous guident dans le choix de votre future résidence ou dans celui d’un investissement immobilier. Ils sauront vous donner les informations relatives à la vie locale, lieux de vie, de scolarisation ainsi que tous les éléments relatifs à vos déplacements personnels et professionnels afin de choisir la maison ou l’appartement idéalement placé, proche des transports en commun ou accès routiers.</p>\r\n\t\t\t<p align=\"justify\">Notre agence pourra vous soumettre un choix de biens sur le secteur immobilier qui couvre les communes de Bougival, La Celle Saint Cloud, Vaucresson, Rueil Malmaison, Croissy sur Seine, Louveciennes, Marly le Roi...</p>\r\n\t\t\t<p align=\"justify\">Gimcovermeille met à votre disposition un service de gestion locative et syndic de copropriétés.</p>",
                "start": 52840,
                "end": 55068
            }
        ],
        "start": 52786,
        "end": 55077
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "555386",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SEO_PORTEFEUILLE",
                "right": "1",
                "start": 55114,
                "end": 55138
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_1",
                "right": "<a href=\"/immobilier/tout/immo-la-celle-saint-cloud-78/\">Immobilier La Celle Saint Cloud</a>",
                "start": 55144,
                "end": 55275
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_2",
                "right": "<a href=\"/immobilier/achat/immo-la-celle-saint-cloud-78/bien-appartement/\">Nos Appartements en Vente à La Celle Saint Cloud</a>",
                "start": 55278,
                "end": 55444
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_3",
                "right": "<a href=\"/immobilier/achat/immo-la-celle-saint-cloud-78/bien-maison/\">Nos Maisons en Vente à La Celle Saint Cloud</a>",
                "start": 55447,
                "end": 55603
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_4",
                "right": "<a href=\"/immobilier/\">Tous nos biens immobiliers</a>",
                "start": 55606,
                "end": 55698
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_5",
                "right": "<a href=\"#\"></a>",
                "start": 55701,
                "end": 55756
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_6",
                "right": "<a href=\"#\"></a>",
                "start": 55759,
                "end": 55814
            }
        ],
        "start": 55085,
        "end": 55823
    },
    {
        "macro": "A",
        "left": "TITLE_AGENCES_LISTE",
        "right": "",
        "start": 55837,
        "end": 55863
    },
    {
        "macro": "A",
        "left": "DESCRIPTION_AGENCES_LISTE",
        "right": "",
        "start": 55867,
        "end": 55899
    },
    {
        "macro": "A",
        "left": "H1_AGENCESLISTE",
        "right": "",
        "start": 55904,
        "end": 55926
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_TXT",
        "right": "1",
        "start": 55932,
        "end": 55957
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_CONTENU",
        "right": "<div class=\"row-fluid\">\r\n\t\t<h2>LE GROUPE GIMCOVERMEILLE</h2>\r\n\t\t<p><strong>Depuis le début de l'année 2011, le Groupe GIMCO (créé en 1978) et le Groupe VERMEILLE (créé en 1935) se sont rapprochés, et le nouveau Groupe ainsi formé, GIMCOVERMEILLE, est devenu le 1er réseau indépendant de la région parisienne Ouest.</strong></p>\r\n\t</div>\r\n\t<div class=\"row-fluid\">\r\n\t\t<div class=\"span7\">\r\n\t\t\t<p>GIMCOVERMEILLE c'est :</p>\r\n\t\t\t<ul class=\"padding-left-15\">\r\n\t\t\t\t<li>&bull; Un groupe totalement indépendant, à taille humaine, issus de 2 groupes familiaux,</li>\r\n\t\t\t\t<li>&bull; 12 agences de transaction,</li>\r\n\t\t\t\t<li>&bull; Plus de 3 500 lots en gérance,</li>\r\n\t\t\t\t<li>&bull; Plus de 200 copropriétés dont nous sommes syndics,</li>\r\n\t\t\t\t<li>&bull; Une équipe de plus de 90 collaborateurs sur 15 sites à votre service.</li>\r\n\t\t\t</ul>\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t<ul class=\"padding-left-15 margin-top-10\">Découvrez dès à présent :\r\n\t\t\t\t<li><span class=\"icon-v5 icon-v5-arrow-right-6 typo important\"></span><a href=\"/immobilier/tout/immo-la-celle-saint-cloud-78/\">Nos biens immobiliers à La Celle-Saint-Cloud</a></li>\r\n\t\t\t\t<li><span class=\"icon-v5 icon-v5-arrow-right-6 typo important\"></span><a href=\"/immobilier/achat/immo-la-celle-saint-cloud-78/bien-appartement/\">Nos annonces de Vente Appartements à La Celle Saint Cloud</a></li>\r\n\t\t\t\t<li><span class=\"icon-v5 icon-v5-arrow-right-6 typo important\"></span><a href=\"/immobilier/\">Tous nos biens immobiliers</a></li>\r\n\t\t\t</ul>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"span5\">\r\n\t\t\t<p>Le groupe GIMCOVERMEILLE est membre de la <strong>FNAIM :</strong></p>\r\n\t\t\t<p><a href=\"http://www.fnaim.fr\" target=\"_blank\"><img src=\"/images/fnaim.png\" /></a> Fédération Nationale de l'Immobilier </p>\r\n\t\t</div>\r\n\t</div>",
        "start": 55959,
        "end": 57712
    },
    {
        "macro": "A",
        "left": "SLOGAN_FOOTER",
        "right": "",
        "start": 57722,
        "end": 57742
    },
    {
        "macro": "A",
        "left": "TITLE_1_FOOTER",
        "right": "",
        "start": 57750,
        "end": 57771
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_1_FOOTER_1",
        "right": "",
        "start": 57775,
        "end": 57803
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_2_FOOTER_1",
        "right": "",
        "start": 57805,
        "end": 57833
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_3_FOOTER_1",
        "right": "",
        "start": 57835,
        "end": 57863
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_4_FOOTER_1",
        "right": "",
        "start": 57865,
        "end": 57893
    },
    {
        "macro": "INIT",
        "left": "CATWORDPRESS",
        "right": "24449",
        "start": 57901,
        "end": 57928
    },
    {
        "macro": "toParse",
        "content": []
    }
]