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
                "right": "@@AGENCE_NOM@@ agence immobilière à Bourgoin Jallieu, La Verpillière et l'Isle d'Abeau",
                "start": 96,
                "end": 200
            }
        ],
        "start": 76,
        "end": 209
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
                "right": "Achat, vente et location de maisons et appartements à Bourgoin et La Verpillière et @@AGENCE_VILLE@@. Découvrir les annonces immobilières de nos agences La Foret à La Verpillière, Bourgoin-jallieu et @@AGENCE_VILLE@@.",
                "start": 237,
                "end": 478
            }
        ],
        "start": 217,
        "end": 487
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
                "right": "Immobilier @@AGENCE_VILLE@@, Bourgoin, Verpillière",
                "start": 513,
                "end": 582
            }
        ],
        "start": 493,
        "end": 591
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
                "start": 617,
                "end": 639
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION2",
                "right": "",
                "start": 642,
                "end": 664
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION3",
                "right": "",
                "start": 667,
                "end": 689
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION4",
                "right": "",
                "start": 692,
                "end": 714
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION5",
                "right": "",
                "start": 717,
                "end": 739
            }
        ],
        "start": 597,
        "end": 748
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
                "start": 776,
                "end": 791
            }
        ],
        "start": 756,
        "end": 800
    },
    {
        "macro": "A",
        "left": "H2_INDEX_MODULE",
        "right": "@@LG:NOSDERANN pcase@@",
        "start": 806,
        "end": 850
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
                "start": 885,
                "end": 947
            }
        ],
        "start": 860,
        "end": 956
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
                        "start": 1006,
                        "end": 1072
                    }
                ],
                "start": 985,
                "end": 1082
            }
        ],
        "start": 960,
        "end": 1091
    },
    {
        "macro": "A",
        "left": "BLOC_AGENCE_INDEX",
        "right": "0",
        "start": 1097,
        "end": 1122
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
                "start": 1144,
                "end": 2007
            }
        ],
        "start": 1124,
        "end": 2016
    },
    {
        "macro": "A",
        "left": "ENCART_TXT_HOME",
        "right": "1",
        "start": 2024,
        "end": 2047
    },
    {
        "macro": "A",
        "left": "POSITION_ENCART_TXT_HOME",
        "right": "1",
        "start": 2051,
        "end": 2083
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
                "right": "<div class=\"row-fluid\">\r\n\t\t<div class=\"span8\">\r\n\t\t\t<h1>LAFORET IMMOBILIER BOURGOIN JALLIEU & LA VERPILLIERE</h1>\r\n\t\t\t<p class=\"pagination-justify\">7 conseillers immobiliers régulièrement formés par le réseau et la FNAIM et entièrement dédiés à la vente de votre maison ou appartement ou à votre recherche immobilière sur le Nord Isère, sont à votre disposition dans notre agence immobilière, pour définir vos objectifs, vos critères de choix, et mener rapidement votre projet immobilier vers la réussite.</p>\r\n\r\n\t\t\t<p class=\"pagination-justify\">Vous trouverez dans notre agence de Bourgoin les services de transaction, achat, vente et location de maisons, appartements, fonds de commerce, transaction en terrain à bâtir et un service de gestion locative.</p>\r\n\r\n\t\t\t<p class=\"pagination-justify\">Nos <strong>agences immobilières de Bourgoin et de La Verpillière</strong> vous proposeront une gamme de biens immobiliers (maisons, appartements) sur environs 20km autour de Bourgoin Jallieu, sur l’axe Lyon / La Tour du Pin, de Ruy à Heyrieux, en passant par à La Verpillière, L’Isle d’Abeau, Villefontaine, St Quentin Fallavier, St Savin, Ruy ; St jean de Bournay et sur l’axe Bourgoin / Grenoble jusqu’à la Cote st André.</p><br />\r\n\t\t\t\r\n\t\t\t<h2>LAFORET IMMOBILIER vous souhaite la bienvenue à Bourgoin Jallieu, la Verpillière, L’isle d’Abeau…</h2>\r\n\t\t\t<p class=\"pagination-justify\">Achat, gestion / location, estimation et vente, nos agences immobilières développent une gamme complète de services immobiliers pour répondre à tous vos projets immobiliers. </p>\r\n\t\t\t<p class=\"pagination-justify\">Réunies sur ce site pour vous soumettre les meilleures offres de vente et l’offre la plus diversifiée près de chez vous, nos agences immobilières vous proposent de consulter une sélection d’annonces de vente et de location de maisons, villas, propriétés, belles demeures, appartements de toutes surfaces dans le neuf ou l’ancien, terrains constructibles, immeubles, locaux commerciaux et bureaux, sur Bourgoin Jallieu, L'Isle d'Abeau, Saint Alban de Roche, Saint Jean de Bournay, Ruy, La Verpillière, La Tour du Pin, Saint Chef, Champier, Cessieu, Vaulx Milieu, Villefontaine, Saint Quentin Fallavier, Saint Savin, Charantonnay, La Côte Saint André, Roche, Morestel…</p>\r\n\r\n\r\n\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"span4 pagination-justify\">\r\n\t\t\t<img src=\"images/photo-acc.jpg\" alt=\"\" />\r\n\t\t</div>\r\n\t</div>",
                "start": 2107,
                "end": 4535
            }
        ],
        "start": 2087,
        "end": 4544
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLES_REF",
        "right": "0",
        "start": 4552,
        "end": 4577
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_1",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 4581,
        "end": 4709
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_2",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 4711,
        "end": 4839
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_3",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 4841,
        "end": 4969
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_4",
        "right": "<a href=\"/recherche,basic.htm?idqfix=1&idtt=8&idtypebien=1&pxmax=Max&pxmin=Min&tri=d_dt_crea&ci=&\">Test</a>",
        "start": 4971,
        "end": 5099
    },
    {
        "macro": "A",
        "left": "MICRO_DONNES_PRIX",
        "right": "1",
        "start": 5107,
        "end": 5132
    },
    {
        "macro": "A",
        "left": "INDEXATION_ESTIMATION",
        "right": "0",
        "start": 5140,
        "end": 5169
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
                "start": 5197,
                "end": 5220
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_ESTIMATION",
                "right": "",
                "start": 5224,
                "end": 5253
            },
            {
                "macro": "A",
                "left": "H1_ESTIMATION",
                "right": "",
                "start": 5257,
                "end": 5277
            },
            {
                "macro": "A",
                "left": "PHRASE_ESTIMATION",
                "right": "",
                "start": 5281,
                "end": 5305
            }
        ],
        "start": 5173,
        "end": 5314
    },
    {
        "macro": "A",
        "left": "ESTIMATIONPUBTITLE",
        "right": "",
        "start": 5322,
        "end": 5347
    },
    {
        "macro": "A",
        "left": "ESTIMATIONPUBTXT",
        "right": "",
        "start": 5351,
        "end": 5374
    },
    {
        "macro": "A",
        "left": "LEGALESTIMATION",
        "right": "0",
        "start": 5382,
        "end": 5405
    },
    {
        "macro": "A",
        "left": "LEGALESTIMATIONTXT",
        "right": "@@LG:LOI2004AGENCE@@",
        "start": 5409,
        "end": 5454
    },
    {
        "macro": "A",
        "left": "TITLE_AGENCES_LISTE_ESTIMATION",
        "right": "",
        "start": 5464,
        "end": 5501
    },
    {
        "macro": "A",
        "left": "DESCRIPTION_AGENCES_LISTE_ESTIMATION",
        "right": "",
        "start": 5505,
        "end": 5548
    },
    {
        "macro": "A",
        "left": "H1_AGENCESESTIMATION",
        "right": "",
        "start": 5553,
        "end": 5580
    },
    {
        "macro": "A",
        "left": "H2_AGENCESESTIMATION",
        "right": "",
        "start": 5584,
        "end": 5611
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_ESTIMATION_CONTENU",
        "right": "<p align=\"justify\">Laforêt Immobilier vous propose gratuitement l’estimation immobilière de votre maison ou appartement à l’Isle d’Abeau, Bourgoin Jallieu, La Verpillière, …</p>\r\n\r\n<p align=\"justify\">Vous souhaitez vendre votre bien immobilier, votre appartement, votre maison, votre immeuble, ou terrain dans le Nord Isère et vous souhaitez une estimation immobilière fiable et précise de votre bien…</p>\r\n<p align=\"justify\">Nos agences immobilières vous proposent de découvrir sur ce site notre nouvel outil d’estimation immobilière en ligne. Laissez vous guider en remplissant avec précision les différents champs proposés par l’outil d’estimation, vos coordonnées, la localisation, l’environnement du bien, le descriptif précis, les mesures exactes, les prestations, l’état général, etc. </p>\r\n<p align=\"justify\">Ce formulaire une fois rempli vous donnera une pré-estimation de votre bien, afin de vous donner une idée du prix de vente.\r\nCet outil de pré-estimation immobilière en ligne, permet donc à toute personne souhaitant confier son bien immobilier à la vente de prendre une décision affirmée.\r\nUne fois pré-estimé, le bien est ensuite soumis à notre équipe de professionnels, pour un ajustement précis du prix de vente.</p>\r\n\r\n<p align=\"justify\">Un prix de vente peut en effet être réajusté selon la qualité des prestations, mais aussi en fonction des exigences de la clientèle locale sur ce type de bien ou selon l’environnement, accès facilité à une gare, possibilité de parking, etc.</p>\r\n\r\n<p align=\"justify\">Sur le marché immobilier du Nord Isère, les prix de vente au m², peuvent varier d’une commune à l’autre. On peut aussi observer des variations de prix, dans le courant de l’année. Ainsi, seul un professionnel de l’immobilier, spécialiste du secteur en question sera en mesure de vous donner avec précision le prix de vente de votre bien. Sur une estimation immobilière à la Verpillière, nous pourrons observer une nette différence avec le marché immobilier de l’est lyonnais et sur une estimation immobilière à Bourgoin Jallieu et ses environs, nous pourrons observer des différences, avec certaines communes ou villages, comme par exemple sur Maubec et Ruy.</p>\r\n\r\n<p align=\"justify\">Laforêt Immobilier vous invite à faire réaliser l’estimation immobilière de votre bien, maison ou appartement, par un professionnel aguerri et maîtrisant parfaitement le marché immobilier local…</p>\r\n\r\n<p align=\"justify\">Il est de fait que l’évaluation immobilière prend aujourd’hui tout son sens dans un marché immobilier national soumis à toutes les fluctuations de conjoncture, de réglementations et autres paramètres qui animent les tendances du marché, qui encouragent les acheteurs vers de nouveaux critères de sélection…\r\nIl convient donc pour les professionnels de l’immobilier que nous sommes de rester informés en permanence, afin de capter les demandes, les exigences et les nouvelles contraintes des futurs acquéreurs et ainsi pouvoir estimer les biens soumis à la vente avec des valeurs actualisées. <br />\r\nSi aujourd’hui le diagnostic est devenu un paramètre important dans la décision finale entre deux biens similaires, il en est d’autres qui varient selon les dispositions légales, en termes d’amélioration de l’habitat, d’écologie ou même de projet de revente à court ou moyen terme. </p>\r\n\r\n<p align=\"justify\">Prenez le temps d’utiliser notre outil d’estimation afin de vous donner une idée de départ sur le prix de vente de votre maison ou appartement. <br />\r\nLes champs d’informations, coordonnées, localisation, environnement du bien, descriptif précis, mesures exactes, prestations, état général, etc., seront dans un premier temps les premiers critères déterminant pour vous donner un prix de vente. Celui-ci pourra être réajusté lors de la visite du bien par un professionnel de l’immobilier, un spécialiste de votre secteur immobilier. <br />\r\nIl saura déterminer la cote immobilière de votre région, de la ville, du quartier ou même de votre résidence ou copropriété. </p>\r\n\r\n<p align=\"justify\">Les prix de l’immobilier sur le Nord Isère, à Bourgoin Jallieu, La Verpillière et l’Isle d’Abeau….\r\nEnviron 2000€ le mètre carré pour une maison ou un appartement.<br />\r\nCe marché immobilier s’est sensiblement redynamisé depuis 2015 après une nette baisse des prix.<br />\r\nUne baisse qui s’est stabilisée et qui permet aujourd’hui de constater un volume de ventes constant depuis le 1er trimestre 2016.<br />\r\nLa demande est encouragée d’autant plus, qu’on a pu assister à une baisse historique des taux d’intérêt. </p>",
        "start": 5615,
        "end": 10216
    },
    {
        "macro": "A",
        "left": "INDEXATION_OUTILS",
        "right": "0",
        "start": 10224,
        "end": 10249
    },
    {
        "macro": "A",
        "left": "INDEXATION_REALISATION",
        "right": "0",
        "start": 10257,
        "end": 10287
    },
    {
        "macro": "A",
        "left": "INDEXATION_RESPONSIVE",
        "right": "0",
        "start": 10295,
        "end": 10324
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
                "start": 10350,
                "end": 10370
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_GESTION",
                "right": "Notre gestion immobiliere",
                "start": 10373,
                "end": 10424
            },
            {
                "macro": "A",
                "left": "H1_GESTION",
                "right": "",
                "start": 10427,
                "end": 10444
            }
        ],
        "start": 10330,
        "end": 10453
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
                "start": 10479,
                "end": 10498
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_SYNDIC",
                "right": "",
                "start": 10501,
                "end": 10526
            },
            {
                "macro": "A",
                "left": "H1_SYNDIC",
                "right": "",
                "start": 10529,
                "end": 10545
            }
        ],
        "start": 10459,
        "end": 10554
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
                "start": 10580,
                "end": 10602
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_EXPERTISE",
                "right": "",
                "start": 10605,
                "end": 10633
            },
            {
                "macro": "A",
                "left": "H1_EXPERTISE",
                "right": "",
                "start": 10636,
                "end": 10655
            }
        ],
        "start": 10560,
        "end": 10664
    },
    "<!-- LAFORET IMMOBILIER BOURGOIN JALLIEU -->",
    {
        "macro": "IF",
        "test": [
            "=",
            "358507",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TITLE_AGENCE",
                "right": "Agence immobilière Bourgoin-Jallieu - Laforêt immobilier Bourgoin-Jallieu (38300)",
                "start": 10754,
                "end": 10854
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_AGENCE",
                "right": "La Forêt Immobilier vous accompagne dans votre projet d'achat, de vente ou de location près de Bourgoin Jallieu en Isère. Découvrez nos annonces et contactez notre agence immobiliere de Bourgoin",
                "start": 10860,
                "end": 11079
            },
            {
                "macro": "A",
                "left": "H1_AGENCE",
                "right": "",
                "start": 11085,
                "end": 11101
            },
            {
                "macro": "A",
                "left": "H2_AGENCE_COORDPERSO",
                "right": "",
                "start": 11107,
                "end": 11134
            },
            {
                "macro": "A",
                "left": "H2_AGENCE",
                "right": "",
                "start": 11140,
                "end": 11156
            },
            {
                "macro": "A",
                "left": "SLOGAN_AGENCE",
                "right": "<h2>Laforêt Immobilier vous présente son agence immobilière à Bourgoin Jallieu…</h2><br />\r\n\r\n<strong>Notre secteur immobilier.</strong>\r\n<p align=\"justify\">Notre agence immobilière située 20 rue Robert Belmont à Bourgoin Jallieu développe son activité immobilière sur un secteur qui englobe : <br />Bourgoin Jallieu et sa proche agglomération, à savoir, les communes de Ruy, Saint Savin, Domarin, Maubec, Meyrié, Nivolas Vermelle, Sérézin de la Tour, puis au nord jusqu’à Montcarra, les communes de Saint Chef, Salagnon, vers le sud, les communes de Chézeneuve, Crachier, Saint Agnin sur Bion, Les Epparres, Charantonnay, Sainte Anne sur Gervonde, Meyrieu les Etangs, Saint Jean de Bournay, enfin, dans la périphérie de l’Isle d’Abeau, les villages de Saint Marcel Bel Accueil, Saint Alban de Roche, Four…</p>\r\n\r\n<strong>Notre équipe de conseillers immobiliers.</strong>\r\n<p align=\"justify\">Expérimentés et maîtrisant depuis longtemps le marché immobilier de Bourgoin Jallieu, nos conseillers immobiliers bénéficient d’une formation régulière, en interne, ou dans le cadre des formations prodiguées par la FNAIM. Ces formations nous permettent de vous proposer un service immobilier performant, à l’écoute des évolutions techniques et juridiques de notre profession, mais aussi à l’écoute des tendances de notre marché immobilier.<br />\r\nUne information indispensable pour vous donner les conseils les plus avisés sur l’orientation de vos projets immobiliers, qu’il s’agisse d’achat immobilier en résidence principale ou de projets liés à un investissement immobilier locatif (défiscalisé ou pas, Loi Pinel). </p>\r\n\r\n<strong>Nos services.</strong>\r\n<p align=\"justify\">Notre agence immobilière est adhérente FNAIM, elle se positionne en spécialiste du marché immobilier du Nord Isère et développe une activité de gestion / location et transaction immobilière, pour l’achat, la location, l’estimation, la vente et la gestion de maisons, villas, propriétés, appartements dans le neuf ou l’ancien, terrains, immeubles, locaux commerciaux et bureaux. <br />\r\n2 formules de gestion peuvent vous être proposées (gestion simple ou gestion locative) sans contrainte, avec la possibilité de souscrire à notre option « Tranquillité » pour obtenir la GLI (garantie des loyers impayés).</p>",
                "start": 11162,
                "end": 13462
            }
        ],
        "start": 10725,
        "end": 13471
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "358507",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 13516,
                "end": 13540
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<p>Laforêt Immobilier vous souhaite la bienvenue à Bourgoin Jallieu…</p>\r\n\r\n\r\n<p class=\"pagination-justify\">Agence immobilière adhérente FNAIM, spécialiste du secteur immobilier du Nord-Isère, notre agence située 20 rue Robert Belmont à Bourgoin Jallieu, vous accueille du lundi au samedi de 9h à 19h, pour une étude personnalisée de votre projet immobilier, pour un accompagnement pointu de votre recherche immobilière, pour vous aider à commercialiser votre bien à la vente, maison, villa, appartement, terrain à bâtir…</p>\r\n\r\n<p class=\"pagination-justify\">Notre agence immobilière, présente sur le marché immobilier de Bourgoin Jallieu, développe son offre de biens immobiliers, sur les communes des environs : <a href=\"http://www.laforet-bourgoinjallieu.com/immobilier/tout/immo-bourgoin-jallieu-38/\">Bourgoin Jallieu</a> et sa proche agglomération, <a href=\"http://www.laforet-bourgoinjallieu.com/immobilier/tout/immo-ruy-38/\">Ruy</a>, <a href=\"http://www.laforet-bourgoinjallieu.com/immobilier/tout/immo-saint-savin-38/\">Saint Savin</a>, Domarin, Maubec, Meyrié, Nivolas Vermelle, Sérézin de la Tour, puis au nord jusqu’à Montcarra, Saint Chef, Salagnon, vers le sud, Chézeneuve, Crachier, Saint Agnin sur Bion, Les Epparres, Charantonnay, Sainte Anne sur Gervonde, Meyrieu les Etangs, Saint Jean de Bournay, puis dans la périphérie de l’Isle d’Abeau, sur les villages de Saint Marcel Bel Accueil, Saint Alban de Roche, Four…</p>\r\n\r\n<p class=\"pagination-justify\">Deux  autres agences immobilières sont présentes sur le Nord Isère, à La Verpillière, ainsi qu’ à l’Isle d’Abeau, afin de compléter une offre de biens variée, près de chez vous.\r\nUn travail en étroit partenariat entre nos agences immobilières du Nord Isère, nous permet de vous proposer un vaste choix d’annonces immobilières sur Bourgoin Jallieu et sa région, vente et location d’appartements de toutes surfaces dans le neuf ou l’ancien, vente et location de maisons, villas, fermes, dans différentes gammes de standing, vente d’immeubles et terrains à bâtir.\r\nDe plus nos agences sont membres de l’AMEPI, fichier commun d’exclusivités, pour un partage de mandats avec 6 agences de la région et une offre démultipliée de biens.</p> \r\n\r\n<p class=\"pagination-justify\">Notre service de gestion locative, centralisé à l’agence de Bourgoin Jallieu, vous propose 2 formules (gestion simple ou gestion locative) sans contrainte et dans les meilleures conditions de gestion, avec la possibilité de souscrire à notre option « Tranquillité » pour obtenir la GLI (garantie des loyers impayés).</p>\r\n\r\n<p class=\"pagination-justify\">Dans le cadre de la vente de votre bien les agences Laforêt estiment votre bien gratuitement, vous proposent le mandat Favoriz, pour bénéficier d’options de visibilité sur votre annonce immobilière, pour un accompagnement personnalisé et plus de services.*</p> \r\n\r\n<p class=\"pagination-justify\">Partenaire du CSBJ RUGBY, nous adhérons aux valeurs de ce club centenaire qui fait la fierté de notre ville.</p>\r\n\r\n* Voir conditions en agence.",
                "start": 13548,
                "end": 16620
            }
        ],
        "start": 13485,
        "end": 16629
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "358507",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SEO_PORTEFEUILLE",
                "right": "1",
                "start": 16672,
                "end": 16696
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_1",
                "right": "<a href=\"/immobilier/achat/immo-bourgoin-jallieu-38/bien-appartement/\">Acheter un appartement à Bourgoin Jallieu</a>",
                "start": 16702,
                "end": 16857
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_2",
                "right": "<a href=\"/immobilier/achat/immo-bourgoin-jallieu-38/bien-maison/\">Achat / Vente de maisons près de Bourgoin Jallieu</a>",
                "start": 16860,
                "end": 17018
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_3",
                "right": "<a href=\"/immobilier/locations/immo-bourgoin-jallieu-38/\">Louer un bien immobilier à Bourgoin Jallieu</a>",
                "start": 17021,
                "end": 17165
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_4",
                "right": "<a href=\"/immobilier/investissement/immo-bourgoin-jallieu-38/\">Investir dans l'immobilier à Bourgoin</a>",
                "start": 17168,
                "end": 17311
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_5",
                "right": "<a href=\"/immobilier/achat-de-prestige/immo-bourgoin-jallieu-38/\">Immobilier de prestige</a>",
                "start": 17314,
                "end": 17445
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_6",
                "right": "<a href=\"/immobilier/tout/immo-bourgoin-jallieu-38/\">Toutes les annonces immobilières à Bourgoin-Jallieu</a>",
                "start": 17448,
                "end": 17595
            }
        ],
        "start": 16643,
        "end": 17604
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "358507",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 17639,
                "end": 17667
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "https://www.facebook.com/pages/Lafor%C3%AAt-Immobilier-Dubessy-Bourgoin/102453509828325",
                "start": 17673,
                "end": 17789
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "https://twitter.com/LaforetImmo38",
                "start": 17792,
                "end": 17853
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "",
                "start": 17856,
                "end": 17888
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/channel/UCwLByFhLlqzGEYeL1NQGaVg",
                "start": 17891,
                "end": 17975
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 17978,
                "end": 18011
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/referencement-DUBES38",
                "start": 18014,
                "end": 18094
            }
        ],
        "start": 17612,
        "end": 18103
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
                "start": 18138,
                "end": 18165
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "104269285648801442131",
                "start": 18171,
                "end": 18225
            }
        ],
        "start": 18111,
        "end": 18234
    },
    "<!-- LAFORET IMMOBILIER LA VERPILLIERE -->",
    {
        "macro": "IF",
        "test": [
            "=",
            "418262",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TITLE_AGENCE",
                "right": "Agence immobilière La Verpilliere - LaForet immobilier La Verpilliere (38290)",
                "start": 18324,
                "end": 18420
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_AGENCE",
                "right": "Trouvez votre bien immobilier à La Verpilliere en Isère avec La Forêt. Notre agence immobilière vous propose des maisons, des appartements à vendre et à louer près de La Verpillière",
                "start": 18426,
                "end": 18632
            },
            {
                "macro": "A",
                "left": "H1_AGENCE",
                "right": "agence immobilière La Verpilliere",
                "start": 18638,
                "end": 18687
            },
            {
                "macro": "A",
                "left": "H2_AGENCE_COORDPERSO",
                "right": "",
                "start": 18693,
                "end": 18720
            },
            {
                "macro": "A",
                "left": "H2_AGENCE",
                "right": "cabinet immobilier La Verpilliere",
                "start": 18726,
                "end": 18775
            },
            {
                "macro": "A",
                "left": "SLOGAN_AGENCE",
                "right": "<h2>Laforêt Immobilier vous présente son agence immobilière à La Verpillière…</h2>\r\n\r\n<p align=\"justify\">Vous avez un projet immobilier, d’achat immobilier en résidence principale, en résidence secondaire, vous souhaitez investir et trouver le meilleur rendement locatif, ou vous constituer un patrimoine immobilier, vous avez un projet de vente et vous avez besoin des conseils d’un professionnel de l’immobilier et d’une évaluation immobilière précise pour estimer au juste prix votre maison ou appartement….<br />\r\nN’hésitez pas à venir pousser la porte de notre agence immobilière, située 718 rue de la République à La Verpilliere pour une étude approfondie de votre projet immobilier, pour un accompagnement pointu de la vente de votre bien ou pour une recherche immobilière personnalisée. <br />\r\n\r\nNos conseillers immobiliers se rendent disponibles pour découvrir en détail les tenants et aboutissants de votre projet d’acquisition, ils seront attentifs à vos exigences, vos contraintes personnelles, familiales, professionnelles ou budgétaires, afin de mieux déterminer votre axe de recherche immobilière.<br />\r\nUne offre ciblée, de maisons ou d’appartements vous sera proposée, avec l’assurance d’effectuer des visites de biens efficaces pour un choix correspondant réellement à vos attentes.</p>\r\n\r\n<strong>Vous souhaitez nous confier la vente de votre bien immobilier à La Verpillière …</strong>\r\n<p align=\"justify\">Un de nos conseillers immobiliers se rendra disponible pour effectuer avec rigueur l’évaluation immobilière de votre bien (maison ou appartement), selon les informations fournies et avec une analyse précise du bien sur place. Un prix sera donné en fonction de la qualité du bien, de ses prestations, de son emplacement et selon la cote immobilière locale et les ventes déjà réalisées sur ce même secteur. <br />\r\nNotre mandat exclusif, le Mandat Favoriz, vous permet de bénéficier de plusieurs avantages : \r\n<li>•\tLa planification des actions commerciales</li>\r\n<li>•\tUn accompagnement jusqu'à la signature.</li>\r\n<li>•\tUne visibilité optimale des annonces immobilières  </li>\r\n<li>•\tDes services exclusifs pour le suivi et la vente de votre bien</li>\r\n<li>•\tLa parution de votre annonce immobilière dans le fichier commun AMEPI du Nord Isère, partagé par 6 agences de la région.</li></p>",
                "start": 18781,
                "end": 21119
            }
        ],
        "start": 18295,
        "end": 21128
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "418262",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 21169,
                "end": 21193
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<p>Laforêt Immobilier vous souhaite la bienvenue à La Verpillière…</p>\r\n\r\n<p class=\"pagination-justify\">Avec 3 agences immobilières, situées à La Verpillière, Bourgoin Jallieu, L’isle D’abeau, notre site, régulièrement mis à jour et référencé, vous propose une large gammes de biens à la vente ou à la location, maisons, villas, propriétés, terrains à bâtir, immeubles de rapport et appartements de toutes surfaces dans le neuf ou l’ancien.</p>\r\n\r\n<p class=\"pagination-justify\">Notre agence immobilière vous accueille à La Verpillière, 718 rue de la République, pour une découverte attentive de votre projet immobilier, qu’il s’agisse de l’achat d’une maison, d’un appartement, d’un terrain, pour un projet de résidence principale, de l’achat d’un appartement ou immeuble pour un projet d’investissement locatif, ou encore de la vente de votre bien.\r\nUne équipe de 6 commerciaux, spécialistes du marché immobilier du Nord Isère sont à votre disposition pour accompagner votre projet.</p>\r\n \r\n<p class=\"pagination-justify\">Adhérente FNAIM, notre agence vous garantit un niveau de compétence et un respect des règles déontologiques de notre profession, pour une transaction en toute sérénité.\r\nGrâce au réseau Laforêt, notre agence vous propose un mandat exclusif vous permettant de bénéficier de nombreux avantages, pour un service plus personnalisé et pour une commercialisation de votre bien dans les meilleures conditions : \r\nLes avantages du Mandat Favoriz :\r\n<ul>\r\n<li>- La planification des actions commerciales</li>\r\n<li>- Un accompagnement jusqu'à la signature.</li>\r\n<li>- Une visibilité optimale des annonces immobilières</li>\r\n<li>- Des services exclusifs pour le suivi et la vente de votre bien</li>\r\n<li>- La parution de votre annonce immobilière dans le fichier commun AMEPI du Nord Isère, partagé par 6 agences de la région.</li><br />\r\n</ul>\r\nVous trouverez sur notre site un vaste choix d’annonces immobilières, sur <a href=\"http://www.laforet-bourgoinjallieu.com/immobilier/tout/immo-la-verpilliere-38/\">la Verpillière</a> et ses environs, notamment sur les communes limitrophes du 69, <a href=\"http://www.laforet-bourgoinjallieu.com/immobilier/tout/immo-satolas-et-bonce-38/\">Satolas et Bonce</a>, Chamagnieu, Grenay, Heyrieux, Valencin, Saint Just Chaleyssin, puis du nord au sud, de Frontonas, à Saint Georges d’Espéranche, Charantonnay, Diémoz, Bonnefamille, Villefontaine, Vaulx milieu, Roche…</p>\r\n\r\n<p class=\"pagination-justify\">Notre site réunit l’ensemble des annonces immobilières des 3 agences Laforêt de Bourgoin Jallieu, La Verpillière et l’Isle d’Abeau, pour une offre plus conséquente et plus variée près de chez vous.</p> \r\n\r\n<p class=\"pagination-justify\">Découvrez également notre service de gestion locative.\r\n2 Formules de gestion vous seront proposées (gestion simple ou gestion locative) avec la possibilité de souscrire à la GLI (garantie des loyers impayés).</p>\r\n\r\n<p class=\"pagination-justify\">Partenaire du CSBJ RUGBY, nous adhérons aux valeurs de ce club centenaire qui fait la fierté de notre ville.</p>\r\n\r\n<p class=\"pagination-justify italic\">* Voir conditions en agence.</p>",
                "start": 21201,
                "end": 24370
            }
        ],
        "start": 21138,
        "end": 24379
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "552455",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TITLE_AGENCE",
                "right": "Agence immobilière Laforet L'ISLE D'ABEAU  - LaForet immobilier L'ISLE D'ABEAU",
                "start": 24414,
                "end": 24511
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_AGENCE",
                "right": "Trouvez votre bien immobilier à L'ISLE D'ABEAU avec La Forêt. Notre agence immobilière vous propose des maisons, des appartements à vendre et à louer près de   L'ISLE D'ABEAU",
                "start": 24517,
                "end": 24716
            },
            {
                "macro": "A",
                "left": "H1_AGENCE",
                "right": "agence immobilière L'ISLE D'ABEAU",
                "start": 24722,
                "end": 24771
            },
            {
                "macro": "A",
                "left": "H2_AGENCE_COORDPERSO",
                "right": "",
                "start": 24777,
                "end": 24804
            },
            {
                "macro": "A",
                "left": "H2_AGENCE",
                "right": "cabinet immobilier L'ISLE D'ABEAU",
                "start": 24810,
                "end": 24859
            },
            {
                "macro": "A",
                "left": "SLOGAN_AGENCE",
                "right": "<h2>Laforêt Immobilier vous présente son agence immobilière à L’Isle d’Abeau…</h2>\r\n\r\n<p align=\"justify\">Laforêt Immobilier à L’Isle d’Abeau est un agence immobilière issue du groupe d’agences du Nord Isère, avec celles de Bourgoin Jallieu et de La Verpillière.<br />\r\nElle est présente sur le marché immobilier de l’Isle d’Abeau et développe une offre de biens immobiliers variée, dans différentes gammes de prix et de confort, sur les communes des environs de l’Isle d’Abeau. Elle travaille en étroit partenariat avec les 2 autres agences Laforêt Immobilier de Bourgoin Jallieu et La Verpillière et vous soumet sur ce site son offre de biens immobiliers en fichier partagé pour mettre à votre disposition une sélection plus conséquente d’annonces de vente et d’annonces de location près de chez vous et dans votre région.</p>\r\n\r\n<p align=\"justify\">Laforêt Immobilier à L’Isle d’Abeau est adhérente FNAIM, elle garantit en ce sen une formation régulière de l’ensemble de son personnel et de ce fait, vous prodigue les conseils les plus pertinents et actualisés sur le marché immobilier local et sur les aspects techniques et juridiques des transactions.<br />\r\nRompus à l’application de la Loi Allur, nos conseillers sauront répondre à toutes les questions juridiques. <br />\r\nVous pourrez rencontrer nos 6 conseillers immobiliers 1 rue du Sermet à L'isle d'Abeau, au cœur du quartier des trois Vallons, à proximité du Golf, dans un secteur résidentiel et pavillonnaire, du lundi au samedi de 9h à 19h, pour une étude de projet.</p> \r\n\r\n<strong>Un secteur immobilier concentré sur L’Isle d’Abeau et les communes des proches environs…</strong><br />\r\n\r\n<p align=\"justify\">Découvrez sur ce site nos annonces de vente et de location sur Saint Marcel Bel Accueil, Saint Alban de la Roche, Domarin, Four, Roche et Vaulx Milieu.<br /> Consultez nos offres de maisons, villas, appartements, terrains, sur un secteur immobilier avec facilité d’accès à l’autoroute A 43, à 30mn de Lyon, de la gare TGV et à 15 mn de l’aéroport Lyon Saint Exupéry. </p>",
                "start": 24865,
                "end": 26930
            }
        ],
        "start": 24385,
        "end": 26939
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "552455",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SEO_PORTEFEUILLE",
                "right": "1",
                "start": 26978,
                "end": 27002
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_1",
                "right": "<a href=\"http://www.laforet-bourgoinjallieu.com/immobilier/achat/immo-l-isle-d-abeau-38/bien-appartement/\">Acheter un appartement à L'Isle d'Abeau</a>",
                "start": 27008,
                "end": 27197
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_2",
                "right": "<a href=\"http://www.laforet-bourgoinjallieu.com/immobilier/achat/immo-l-isle-d-abeau-38/bien-maison/\">Achat / Vente de maisons L'Isle d'Abeau</a>",
                "start": 27200,
                "end": 27384
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_5",
                "right": "<a href=\"http://www.laforet-bourgoinjallieu.com/immobilier/tout/immo-l-isle-d-abeau-38/\">Immobilier L'Isle d'Abeaue</a>",
                "start": 27387,
                "end": 27545
            }
        ],
        "start": 26949,
        "end": 27555
    },
    "<!-- LAFORET IMMOBILIER L'Isle d'Abeau -->",
    {
        "macro": "IF",
        "test": [
            "=",
            "552455",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 27638,
                "end": 27662
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<p>Laforêt Immobilier vous souhaite la bienvenue à L’Isle d’Abeau…</p>\r\n\r\n\r\n<p class=\"pagination-justify\">Laforêt Immobilier à l’Isle d’Abeau vous accueille dans une ambiance chaleureuse pour découvrir ensemble la nature de votre projet immobilier, quel qu’il soit, achat en résidence principale, secondaire, location d’une maison, d’un appartement, investissement à but locatif, défiscalisé ou non, gestion immobilière de votre patrimoine immobilier ou vente de votre maison, villa, propriété, appartement, terrain sur l’Isle d’Abeau et ses proches environs.</p>\r\n\r\n<p class=\"pagination-justify\">Notre agence immobilière, adhérente FNAIM, est située rue Sermet à L’Isle d’Abeau, au cœur du quartier des trois Vallons, à proximité du Golf, dans un secteur résidentiel et pavillonnaire. 6 conseillers immobiliers, spécialistes <a href=\"http://www.laforet-bourgoinjallieu.com/immobilier/tout/immo-l-isle-d-abeau-38/\">du marché immobilier de L’Isle d’Abeau</a> et sa région, se tiennent à votre disposition pour accompagner votre projet, avec des conseils avisés et une offre ciblée pour une meilleure corrélation entre vos attentes et nos offres. \r\n</p>\r\n\r\n<p class=\"pagination-justify\">Notre secteur immobilier se concentre sur L’Isle d’Abeau et les communes des proches environs, <a href=\"http://www.laforet-bourgoinjallieu.com/immobilier/tout/immo-saint-marcel-bel-accueil-38/\">Saint Marcel Bel Accueil</a>, <a href=\"http://www.laforet-bourgoinjallieu.com/immobilier/tout/immo-saint-alban-de-roche-38/\">Saint Alban de la Roche</a>, Domarin, Four, Roche et Vaulx Milieu. Un secteur immobilier bénéficiant de l’accès facilité à l’autoroute A 43, situé à 30mn de Lyon, de la gare TGV et à 15 mn de l’aéroport Lyon Saint Exupéry. </p> \r\n\r\n<p class=\"pagination-justify\">Notre agence vous propose de découvrir sur ce site, une sélection variée de biens, en vente et location, partagée par 3 agences immobilières, situées à La Verpillière, Bourgoin Jallieu, L’isle d’Abeau, avec  un choix d’appartements, de maisons, dans le neuf ou l’ancien, de propriétés et terrains constructibles.\r\nDans le cadre de la vente de votre bien, notre agence vous propose un mandat exclusif, le mandat Favoriz  vous permettant de bénéficier des avantages suivants : \r\nul>\r\n<li>•\tplanification des actions commerciales</li>\r\n<li>•\taccompagnement de votre projet jusqu’à la signature de l’acte authentique</li>\r\n<li>•\tvisibilité optimale des annonces sur le web et les autres supports de communication </li> \r\n<li>•\tservices exclusifs pour le suivi et la vente de votre bien</li>\r\n<li>•\tparution de votre annonce dans le fichier AMEPI - Nord Isère, partagé par 6 agences de la région.</li>\r\n</ul>\r\n</p>\r\n\r\n* Voir conditions en agence.",
                "start": 27670,
                "end": 30420
            }
        ],
        "start": 27607,
        "end": 30429
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "552455",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 30466,
                "end": 30494
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "",
                "start": 30500,
                "end": 30529
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 30532,
                "end": 30560
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/b/113651647209565979630/113651647209565979630/about",
                "start": 30563,
                "end": 30670
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "",
                "start": 30673,
                "end": 30701
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 30704,
                "end": 30737
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "",
                "start": 30740,
                "end": 30772
            }
        ],
        "start": 30439,
        "end": 30781
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "0",
                "start": 30818,
                "end": 30842
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "",
                "start": 30850,
                "end": 30897
            }
        ],
        "start": 30793,
        "end": 30906
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "418262",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SEO_PORTEFEUILLE",
                "right": "1",
                "start": 30943,
                "end": 30967
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_1",
                "right": "<a href=\"/immobilier/achat/immo-la-verpilliere-38/\">Vente de biens immobiliers à La Verpillière</a>",
                "start": 30973,
                "end": 31111
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_2",
                "right": "<a href=\"/immobilier/achat/immo-la-verpilliere-38/bien-maison/\">Achat Vente de maisons La Verpillière</a>",
                "start": 31114,
                "end": 31258
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_3",
                "right": "<a href=\"/immobilier/achat/immo-la-verpilliere-38/bien-appartement/\">Achat Vente appartments à La Verpillière</a>",
                "start": 31261,
                "end": 31413
            }
        ],
        "start": 30914,
        "end": 31424
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "418262",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 31461,
                "end": 31489
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "",
                "start": 31495,
                "end": 31524
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "",
                "start": 31527,
                "end": 31555
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "https://plus.google.com/u/0/b/109496023209132249206/109496023209132249206/about",
                "start": 31558,
                "end": 31669
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "https://www.youtube.com/channel/UCuhVG4Jfszuj2YOh3T2jLXA",
                "start": 31672,
                "end": 31756
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "",
                "start": 31759,
                "end": 31792
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "http://www.dailymotion.com/referencement-LAFO38290",
                "start": 31795,
                "end": 31877
            }
        ],
        "start": 31434,
        "end": 31886
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
                "start": 31921,
                "end": 31948
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "104269285648801442131",
                "start": 31954,
                "end": 32008
            }
        ],
        "start": 31894,
        "end": 32017
    },
    {
        "macro": "A",
        "left": "TITLE_AGENCES_LISTE",
        "right": "Découvrez nos agences à @@AGENCE_VILLE@@, Bourgoin jallieu et La Verpillière",
        "start": 32029,
        "end": 32131
    },
    {
        "macro": "A",
        "left": "DESCRIPTION_AGENCES_LISTE",
        "right": "Nos agences mettent à votre disposition leur expérience et savoir faire pour la réalisation de votre projet. N'hésitez pas à nous contacter.",
        "start": 32135,
        "end": 32307
    },
    {
        "macro": "A",
        "left": "H1_AGENCESLISTE",
        "right": "Agences immobilières  @@AGENCE_VILLE@@, Bourgoin jallieu et La Verpillière",
        "start": 32312,
        "end": 32408
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_TXT",
        "right": "1",
        "start": 32414,
        "end": 32439
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_CONTENU",
        "right": "<h2>LAFORET IMMOBILIER vous présente ses 3 agences immobilières à Bourgoin Jallieu, la Verpillière, L’isle d’Abeau…</h2>\r\n<p align=\"justify\">Nos agences immobilières de Bourgoin, l’Isle d’Abeau et de La Verpillière vous proposent une sélection de biens immobiliers variée, des annonces de vente de maisons, d’appartements, sur Bourgoin Jallieu et son agglomération, sur l’axe Lyon / La Tour du Pin, de Ruy à Heyrieux, en passant par à La Verpillière, L’Isle d’Abeau, Villefontaine, St Quentin Fallavier, St Savin, Ruy ; St jean de Bournay et sur l’axe Bourgoin / Grenoble jusqu’à la Cote st André…<br /> \r\nPour l’achat, la gestion / location, l’estimation et la vente, nos agences développent une gamme de services immobiliers pour répondre à tous vos projets. </p>",
        "start": 32441,
        "end": 33236
    },
    {
        "macro": "A",
        "left": "H1BIENSVENDUS",
        "right": "",
        "start": 33244,
        "end": 33264
    },
    {
        "macro": "A",
        "left": "H1SUIVICLIENT",
        "right": "",
        "start": 33272,
        "end": 33292
    },
    {
        "macro": "A",
        "left": "PHRASESUIVI",
        "right": "",
        "start": 33294,
        "end": 33312
    },
    {
        "macro": "A",
        "left": "SLOGAN_FOOTER",
        "right": "",
        "start": 33322,
        "end": 33342
    },
    {
        "macro": "A",
        "left": "TITLE_1_FOOTER",
        "right": "",
        "start": 33350,
        "end": 33371
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_1_FOOTER_1",
        "right": "<a href=\"/estimation,immobiliere.htm\">estimation en ligne</a>",
        "start": 33375,
        "end": 33464
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_2_FOOTER_1",
        "right": "<a href=\"/immobilier/tout/immo-l-isle-d-abeau-38/\">Immobilier L'Isle d'Abeau</a>",
        "start": 33466,
        "end": 33574
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_3_FOOTER_1",
        "right": "<a href=\"/immobilier/tout/immo-la-verpilliere-38/\">Immobilier La Verpillière</a>",
        "start": 33576,
        "end": 33684
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_4_FOOTER_1",
        "right": "<a href=\"/immobilier/tout/immo-bourgoin-jallieu-38/\">Immobilier Bourgoin Jallieu</a>",
        "start": 33686,
        "end": 33798
    },
    {
        "macro": "INIT",
        "left": "CATWORDPRESS",
        "right": "34880",
        "start": 33806,
        "end": 33833
    },
    {
        "macro": "A",
        "left": "ESTIMATIONENLIGNEPERSO",
        "right": "<p class=\"pagination-justify\">Laforêt Immobilier vous propose gratuitement l’estimation immobilière de votre maison ou appartement à l’Isle d’Abeau, Bourgoin Jallieu, La Verpillière, …</p>\r\n\r\n<p class=\"pagination-justify\">Vous souhaitez vendre votre bien immobilier, votre appartement, votre maison, votre immeuble, ou terrain dans le Nord Isère et vous souhaitez une estimation immobilière fiable et précise de votre bien…</p>\r\n<p class=\"pagination-justify\">Nos agences immobilières vous proposent de découvrir sur ce site notre nouvel outil d’estimation immobilière en ligne. Laissez vous guider en remplissant avec précision les différents champs proposés par l’outil d’estimation, vos coordonnées, la localisation, l’environnement du bien, le descriptif précis, les mesures exactes, les prestations, l’état général, etc. \r\nCe formulaire une fois rempli vous donnera une pré-estimation de votre bien, afin de vous donner une idée du prix de vente.</p>\r\n\r\n<p class=\"pagination-justify\">Cet outil de pré-estimation immobilière en ligne, permet donc à toute personne souhaitant confier son bien immobilier à la vente de prendre une décision affirmée.\r\nUne fois pré-estimé, le bien est ensuite soumis à notre équipe de professionnels, pour un ajustement précis du prix de vente.</p>\r\n\r\n<p class=\"pagination-justify\">Un prix de vente peut en effet être réajusté selon la qualité des prestations, mais aussi en fonction des exigences de la clientèle locale sur ce type de bien ou selon l’environnement, accès facilité à une gare, possibilité de parking, etc.</p>\r\n\r\n<p class=\"pagination-justify\">Sur le marché immobilier du Nord Isère, les prix de vente au m², peuvent varier d’une commune à l’autre. On peut aussi observer des variations de prix, dans le courant de l’année. Ainsi, seul un professionnel de l’immobilier, spécialiste du secteur en question sera en mesure de vous donner avec précision le prix de vente de votre bien. Sur une estimation immobilière à la Verpillière, nous pourrons observer une nette différence avec le marché immobilier de l’est lyonnais et sur une estimation immobilière à Bourgoin Jallieu et ses environs, nous pourrons observer des différences, avec certaines communes ou villages, comme par exemple sur Maubec et Ruy.</p>",
        "start": 33837,
        "end": 36127
    },
    {
        "macro": "toParse",
        "content": []
    }
]