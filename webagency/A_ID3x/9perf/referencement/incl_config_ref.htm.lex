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
                "right": "<p class=\"big font-title-photo pagination-centered typo-black-shadow-1 bold text\">Nos Agences de Ferney Voltaire et St Genis Pouilly vous offrent </br>un choix important de maisons, appartements et terrains à vendre et à louer dans le PAYS DE GEX</p>\r\n\t<p class=\"margin-bottom-50\"><a href=\"/immo,recrutement.htm\" class=\"btn btn-action\">Consultez notre offre d'emploi</a></p>",
                "start": 210,
                "end": 603
            }
        ],
        "start": 190,
        "end": 612
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
                "start": 638,
                "end": 660
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION2",
                "right": "",
                "start": 663,
                "end": 685
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION3",
                "right": "",
                "start": 688,
                "end": 710
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION4",
                "right": "",
                "start": 713,
                "end": 735
            },
            {
                "macro": "A",
                "left": "PHRASEROTATION5",
                "right": "",
                "start": 738,
                "end": 760
            }
        ],
        "start": 618,
        "end": 769
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
                "right": "<span class=\"typo-black bigger text font-body font-weight-600\">I2C IMMOBILIER - 04 50 40 40 20</span>",
                "start": 797,
                "end": 913
            }
        ],
        "start": 777,
        "end": 922
    },
    {
        "macro": "A",
        "left": "H2_INDEX_MODULE",
        "right": "@@LG:NOSNOUVEAUTES pcase@@",
        "start": 928,
        "end": 976
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
                "start": 1011,
                "end": 1073
            }
        ],
        "start": 986,
        "end": 1082
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
                        "start": 1132,
                        "end": 1198
                    }
                ],
                "start": 1111,
                "end": 1208
            }
        ],
        "start": 1086,
        "end": 1217
    },
    {
        "macro": "A",
        "left": "BLOC_AGENCE_INDEX",
        "right": "0",
        "start": 1223,
        "end": 1248
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
                "start": 1270,
                "end": 2133
            }
        ],
        "start": 1250,
        "end": 2142
    },
    {
        "macro": "A",
        "left": "ENCART_TXT_HOME",
        "right": "0",
        "start": 2150,
        "end": 2173
    },
    {
        "macro": "A",
        "left": "POSITION_ENCART_TXT_HOME",
        "right": "2",
        "start": 2177,
        "end": 2209
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
                "right": "<p class=\"h1-like pagination-centered typo-white text-shadow-1 margin-top-100\">L'immobilier en toute confiance</h1>\r\n\t\t<p class=\"pagination-centered typo-white text-shadow-1\">\r\n\t\t\tI2C Immobilier dispose de 2 agences immobilières à <a href=\"http://www.i2cimmobilier.com/agence-immobiliere/ferney-voltaire-01210/i-2-c-immobilier/452592.htm\">Ferney Voltaire</a>, <a href=\"http://www.i2cimmobilier.com/immo,agence-saint-genis-pouilly.htm\">Saint Genis en Pouilly</a> et d'une permanence à Divonne les Bains. Spécialiste du marché immobilier dans le Pays de Gex, tant sur la vente que sur la location, avec de nombreux <a href=\"http://www.i2cimmobilier.com/immobilier/neuf/ville/bien-programme/\">programmes immobiliers neufs</a> sur Ferney Voltaire, St Genis Pouilly, Divonne les Bains, Cessy, Gex et sur l'ensemble du Pays de Gex, pour des résidences d'appartements ou lotissements de villas individuelles et mitoyennes.\r\n\t\t</p>",
                "start": 2233,
                "end": 3193
            }
        ],
        "start": 2213,
        "end": 3202
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLES_REF",
        "right": "1",
        "start": 3210,
        "end": 3235
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_1",
        "right": "<a href=\"http://www.i2cimmobilier.com/immobilier/tout/immo-ferney-voltaire-01/\"><font color=\"white\">Ferney Voltaire</font></a>",
        "start": 3239,
        "end": 3386
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_2",
        "right": "<a href=\"http://www.i2cimmobilier.com/immobilier/tout/immo-prevessin-moens-01/\"><font color=\"white\">Prevessin Moens</font></a>",
        "start": 3388,
        "end": 3535
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_3",
        "right": "<a href=\"http://www.i2cimmobilier.com/immobilier/tout/immo-divonne-les-bains-01/\"><font color=\"white\">Divonne les Bains</font></a>",
        "start": 3537,
        "end": 3688
    },
    {
        "macro": "A",
        "left": "MOTEUR_VILLE_4",
        "right": "<a href=\"http://www.i2cimmobilier.com/immobilier/\"><font color=\"white\">Pays de Gex</font></a>",
        "start": 3690,
        "end": 3804
    },
    {
        "macro": "A",
        "left": "MICRO_DONNES_PRIX",
        "right": "1",
        "start": 3814,
        "end": 3839
    },
    {
        "macro": "A",
        "left": "INDEXATION_ESTIMATION",
        "right": "1",
        "start": 3847,
        "end": 3876
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "452592",
            "REP",
            "1"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TITLE_ESTIMATION",
                "right": "",
                "start": 3904,
                "end": 3927
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_ESTIMATION",
                "right": "",
                "start": 3931,
                "end": 3960
            },
            {
                "macro": "A",
                "left": "H1_ESTIMATION",
                "right": "Faites réaliser l’estimation gratuite de votre bien par un spécialiste du marché immobilier du Pays de Gex…",
                "start": 3964,
                "end": 4091
            },
            {
                "macro": "A",
                "left": "PHRASE_ESTIMATION",
                "right": "Notre parfaite connaissance du marché immobilier local, sur le Pays de Gex ainsi que nos méthodes d’analyses comparatives de marché, nous permettent d’ajuster un prix de vente avec précision, en fonction des prestations du bien, de son environnement, des ventes déjà réalisées sur un même secteur et selon les exigences actuelles de notre clientèle de futurs acquéreurs. Mieux estimé, votre bien, maison ou appartement à la vente, aura toutes les chances de trouver acquéreur dans les meilleurs délais et avec un minimum de points de négociation. Confiez nous la vente de votre bien en toute sérénité.",
                "start": 4095,
                "end": 4721
            }
        ],
        "start": 3880,
        "end": 4730
    },
    {
        "macro": "A",
        "left": "TITLE_AGENCES_LISTE_ESTIMATION",
        "right": "",
        "start": 4738,
        "end": 4775
    },
    {
        "macro": "A",
        "left": "DESCRIPTION_AGENCES_LISTE_ESTIMATION",
        "right": "",
        "start": 4779,
        "end": 4822
    },
    {
        "macro": "A",
        "left": "H1_AGENCESESTIMATION",
        "right": "",
        "start": 4826,
        "end": 4853
    },
    {
        "macro": "A",
        "left": "H2_AGENCESESTIMATION",
        "right": "",
        "start": 4857,
        "end": 4884
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_ESTIMATION_CONTENU",
        "right": "",
        "start": 4888,
        "end": 4927
    },
    {
        "macro": "A",
        "left": "INDEXATION_OUTILS",
        "right": "0",
        "start": 4935,
        "end": 4960
    },
    {
        "macro": "A",
        "left": "INDEXATION_REALISATION",
        "right": "0",
        "start": 4968,
        "end": 4998
    },
    {
        "macro": "A",
        "left": "INDEXATION_RESPONSIVE",
        "right": "0",
        "start": 5006,
        "end": 5035
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
                "start": 5061,
                "end": 5081
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_GESTION",
                "right": "Notre gestion immobiliere",
                "start": 5084,
                "end": 5135
            },
            {
                "macro": "A",
                "left": "H1_GESTION",
                "right": "",
                "start": 5138,
                "end": 5155
            }
        ],
        "start": 5041,
        "end": 5164
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
                "start": 5190,
                "end": 5209
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_SYNDIC",
                "right": "",
                "start": 5212,
                "end": 5237
            },
            {
                "macro": "A",
                "left": "H1_SYNDIC",
                "right": "",
                "start": 5240,
                "end": 5256
            }
        ],
        "start": 5170,
        "end": 5265
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
                "start": 5291,
                "end": 5313
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_EXPERTISE",
                "right": "",
                "start": 5316,
                "end": 5344
            },
            {
                "macro": "A",
                "left": "H1_EXPERTISE",
                "right": "",
                "start": 5347,
                "end": 5366
            }
        ],
        "start": 5271,
        "end": 5375
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "452592",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TITLE_AGENCE",
                "right": "Agences immobilières à Ferney Voltaire et Saint Genis en Pouilly",
                "start": 5412,
                "end": 5495
            },
            {
                "macro": "A",
                "left": "DESCRIPTION_AGENCE",
                "right": "",
                "start": 5501,
                "end": 5526
            },
            {
                "macro": "A",
                "left": "H1_AGENCE",
                "right": "Agences immobilières Ferney Voltaire, Saint Genis en Pouilly",
                "start": 5532,
                "end": 5608
            },
            {
                "macro": "A",
                "left": "H2_AGENCE",
                "right": "",
                "start": 5614,
                "end": 5630
            },
            {
                "macro": "A",
                "left": "SLOGAN_AGENCE",
                "right": "I2C Immobilier dispose de 2 agences immobilières à <a href=\"http://www.i2cimmobilier.com/immo,agence-ferney-voltaire.htm\">Ferney Voltaire</a>, <a href=\"http://www.i2cimmobilier.com/immo,agence-saint-genis-pouilly.htm\">Saint Genis en Pouilly</a> et d'une permanence à Divonne les Bains.\r\n\t<br/>Spécialiste du marché immobilier dans le Pays de Gex, tant sur la vente que sur la location, avec de nombreux programmes immobiliers neufs sur Ferney Voltaire, St Genis Pouilly, Divonne les Bains, Cessy, Gex et sur l'ensemble du Pays de Gex, pour des résidences d'appartements ou lotissements de villas individuelles et mitoyennes.",
                "start": 5636,
                "end": 6283
            }
        ],
        "start": 5383,
        "end": 6292
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "452592",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO",
                "right": "1",
                "start": 6333,
                "end": 6357
            },
            {
                "macro": "A",
                "left": "TXT_PUBLIC_PERSO_CONTENU",
                "right": "<p>\r\n<h3>I2C Immobilier : 2 agences immobilières à votre service à Ferney Voltaire et Saint Genis Pouilly, ainsi qu’une permanence, sur rendez-vous, à Divonne-Les-Bains</h3>\r\n\r\n<br/>Agence immobilière indépendante, I2C Immobilier vous propose un service de transactions immobilières, location et de gestion locative dans le Pays de Gex.\r\n\r\n<br/>Découvrez sur notre site notre sélection de biens immobiliers destinés à l’habitat, vente et location de maisons, villas, propriétés, appartements de toutes surfaces et terrains constructibles sur Ferney-Voltaire, Prévessin Moëns, Divonne les Bains, Saint Genis Pouilly, Ornex, Gex, Thoiry, Versonnex, Cessy, Chevry, Grilly, Saint Jean de Gonville, Péron, Echenevex, Sergy, Segny, Collonges, Challex, Sauverny, Pregnin, Flies, Vesancy, Pougny, Farges, Mourex, Tutegny, Pitegny, Crozet, Chens sur Léman… \r\n\r\n<br/>Vous trouverez également un choix de programmes immobiliers dans le Pays de Gex, vente de maisons ou appartements neufs. \r\n\r\n<br/>Notre agence déploie un plan de communication conséquent pour la diffusion de ses annonces immobilières, avec une forte présence sur Internet, (portails immobiliers et réseaux sociaux) et en presse immobilière locale. \r\n</p><p>\r\n<h3>I2C Immobilier vous souhaite la bienvenue à Ferney Voltaire</h3>\r\n\r\n<br/>Depuis 1987 I2C Immobilier et son dirigeant Antoine ARRIBAS, accompagné de Christiane ARRIBAS et ses collaborateurs, proposent leurs services de transactions immobilières, de programmes neufs, pour la vente, de gestion locative, d’estimation, d’achat et de location de biens destinés à l’habitation, sur tout le Pays de Gex, entre le lac de Genève et la chaîne du Jura, de Collonges Fort l’Ecluse à Divonne les Bains, en passant par Ferney-Voltaire, Saint Genis Pouilly et Prévessin.\r\n<br/>La notoriété de notre agence immobilière, auprès des acteurs économiques locaux, avec une réputation de sérieux et de rigueur professionnelle, nous a permis de pérenniser notre activité immobilière sur Ferney Voltaire et dans le Pays de Gex et de fidéliser une clientèle locale d’actifs genevois, de frontaliers et de fonctionnaires internationaux.\r\n<br/>Notre équipe de négociateurs immobiliers, fidèles à l’agence, détenant entre 8 et 15 ans d’expérience sur le marché immobilier local et véritables professionnels de l’immobilier, vous accompagne dans la réalisation de votre projet, avec un suivi régulier, une approche personnalisée, dans une structure immobilière à taille humaine. \r\n\r\n<br/>Notre service de gestion locative, administré par Christiane ARRIBAS, vous propose une gestion personnalisée avec la plus grande disponibilité, pour répondre à vos interrogations sur la valorisation de votre patrimoine immobilier. Notre service location dispose d’une offre importante de biens de qualité, avec une grande majorité d’appartements neufs ou récents, dans des résidences de très grand standing.\r\n\r\n<br/>Notre agence travaille en étroit partenariat avec divers intervenants dans la réalisation de votre projet immobilier. Notaires, avocats et conseillers juridiques, experts immobiliers dédiés à la vente de biens pour les étrangers, courtiers et banques pour l’obtention de prêts au meilleur taux et artisans pouvant réaliser rapidement vos projets travaux.\r\n<br/>Grâce à nos partenaires promoteurs immobiliers, nous développons également un service dédié à la vente en VEFA, vente de programmes immobiliers neufs, conseil en défiscalisation, avec un choix de maisons ou appartements sur le Pays de Gex et ses environs. Dans le cadre d’un projet d’investissement immobilier locatif, nous pourrons vous informer précisément sur les dispositifs de défiscalisation.\r\n<br/>Nos partenariats avec des sociétés de relocation de Genève et du Pays de Gex, nous permettent de trouver rapidement les locataires, pour une rentabilité optimale de votre appartement ou villa à la location.\r\n\r\n<br/>Dans le cadre de la vente de votre bien, I2C Immobilier vous propose un mandat exclusif vous permettant de bénéficier de nombreux avantages :\r\n<br/>-\tPose d’un panneau à vendre.\r\n<br/>-\tVisibilité optimisée (grand format) en vitrines d’agences et sur les portails immobiliers (mise en avant)\r\n<br/>-\tRemboursement des frais de diagnostics immobiliers à l’issue de la vente\r\n<br/>Dans le cadre d’un mandat semi exclusif (Mandat Accord), vous bénéficiez d’une réduction de 50% des honoraires d’agence dans le cas où vous trouvez vous-même l’acquéreur de votre bien.\r\n\r\n<br/>Placées au centre de Ferney-Voltaire et à l’entrée de la ville de Saint Genis Pouilly, nos agences vous accueillent en français, anglais, italien ou espagnol.\r\n<br/>Retrouvez-nous bientôt dans une nouvelle agence à Ferney Voltaire, sur 230m² d’espace dédiés à l’accueil de notre clientèle (courant 2016).\r\n</p>\r\n<p>\r\n<h3>I2C Immobilier vous souhaite la bienvenue à Saint Genis Pouilly</h3>\r\n\r\n<br/>Notre agence immobilière à Saint Genis Pouilly développe un service de transaction immobilière et gestion locative, estimation, vente et location, de maisons, appartements, terrains et programmes immobiliers neufs.\r\n\r\n<br/>Une équipe de conseillers expérimentés, menée par Antoine ARRIBAS et ses collaborateurs, vous accueille dans une ambiance chaleureuse, à l’entrée de la ville, pour une étude personnalisée de votre projet immobilier quel qu’il soit, location, achat en résidence principale, secondaire, projet d’investissement locatif (défiscalisé ou non), vente de votre bien immobilier, location.\r\n<br/>Notre excellente réputation et notre présence sur le marché immobilier de Saint Genis Pouilly et du Pays de Gex, depuis 1987, nous permettent de bénéficier d’une clientèle fidèle sur un marché immobilier qui reste dynamique et porteur.\r\n\r\n<br/>Dans le cadre de la vente de votre bien, I2C Immobilier vous propose un mandat exclusif vous permettant de bénéficier de nombreux avantages :\r\n<br/>-\tPose d’un panneau à vendre.\r\n<br/>-\tVisibilité optimisée (grand format) en vitrines d’agences et sur les portails immobiliers (mise en avant)\r\n<br/>-\tRemboursement des frais de diagnostics immobiliers à l’issue de la vente\r\n<br/>Dans le cadre d’un mandat semi exclusif (Mandat Accord), vous bénéficiez d’une réduction de 50% des honoraires d’agence dans le cas où vous trouvez vous-même l’acquéreur de votre bien.\r\n<br/>Notre agence déploie un plan de communication conséquent pour la diffusion de ses annonces immobilières, avec une forte présence sur Internet, (portails immobiliers et réseaux sociaux) et en presse immobilière locale. \r\n\r\n<br/>Placées au centre de Ferney-Voltaire et à l’entrée de la ville de Saint Genis Pouilly, nos agences vous accueillent en français, anglais, italien ou espagnol.\r\n</p>\r\n\r\n<p>\r\n<h3>I2C Immobilier vous invite à découvrir son portefeuille de biens immobiliers à Ferney Voltaire</h3>\r\n<br/>Située à la frontière de Genève, Ferney Voltaire est une commune dynamique, d’un peu plus de 10 000 habitants. Un dynamisme dû en partie à la présence du CERN et de son accélérateur de particules mais également à sa proximité avec Genève et son pôle économique bancaire. Elle suscite de ce fait de nombreuses demandes en logements, dans le cadre de mutations professionnelles sur le pôle scientifique ou le pôle tertiaire. Le paysage immobilier de ce secteur offre un choix varié de biens. Vous y trouverez des appartements anciens, en centre-ville, ou des appartements récents et neufs en résidences de standing. \r\n</p>\r\n<p>\r\n<h3>I2C Immobilier vous invite à découvrir son portefeuille de biens immobiliers à Divonne les Bains</h3>\r\n<br/>Divonne les Bains est située à 20 km au nord de Genève, à proximité du Lac Léman. C’est une commune qui compte aujourd’hui un peu plus de 10 000 habitants, réputée pour être une station thermale de qualité, dans un environnement exceptionnel, qui attire une clientèle en recherche d’un cadre de vie qualitatif et calme.\r\n<br/>Le paysage immobilier de Divonne les Bains, se compose en majorité d’appartement, on y trouve cependant davantage de maisons et villas que sur Ferney Voltaire. \r\n</p>\r\n<p>\r\n<h3>I2C Immobilier vous invite à découvrir son portefeuille de biens immobiliers à Prévessin Möens</h3>\r\n<br/>Prévessin Möens est située à la frontière genevoise, entre Ferney Voltaire et Saint Genis Pouilly. C’est une commune d’un peu plus de 7400 habitants qu’on apprécie pour son calme, son aspect résidentiel et son petit bourg animé de commerces de proximité et marchés.\r\n<br/>Prévessin Möens offre une accessibilité non négligeable pour toute une clientèle d’actifs genevois. Notre agence immobilière développe son offre de biens à Prévessin Möens avec un choix de maisons, appartements, à la vente ou à la location. \r\n</p>\r\n<p>\r\n<h3>Vous souhaitez réaliser l’achat d’une maison à Ferney Voltaire, consultez nos offres sur ce site</h3>\r\n<br/>Vous souhaitez vous installer en résidence principale à Ferney Voltaire ou ses environs et vous recherchez une maison, un appartement ou une villa…\r\n<br/>Notre agence immobilière développe une offre de vente de maisons et d’appartements, dans différentes catégories de biens, avec un choix d’appartements et de maisons traditionnelles ou maisons de ville, proche des commodités, des commerces, des écoles ou en quartiers résidentiels, avec un choix d’appartements haut standing, de maisons en résidences pavillonnaires et un choix de belles villas et propriétés haut de gamme.\r\n<br/>Nous sommes à votre écoute pour vous aider à trouver sur Ferney Voltaire le bien correspondant à vos attentes. \r\n</p>\r\n<p>\r\n<h3>Vous souhaitez réaliser l’achat d’un appartement dans le Pays de Gex, consultez nos offres sur ce site</h3>\r\n<br/>Avec la proximité de Genève l’Internationale, de nombreuses organisations, sociétés internationales, banques et autres grandes entreprises dans divers secteurs de l’économie, le marché immobilier du Pays de Gex est en mouvement constant. La plupart des actifs travaillent sur Genève et cherchent à se loger sur les communes de Ferney-Voltaire, Saint Genis Pouilly, Divonne-Les-Bains et les environs.\r\n<br/>Notre agence immobilière réalise tout au long de l’année un volume de ventes d’appartements, appartements de toutes surfaces dans le neuf ou l’ancien. Ces trois communes offrent en effet une excellente accessibilité à Genève et disposent de structures, avec notamment la présence d’un lycée international à Ferney-Voltaire, et bientôt à Saint Genis Pouilly.\r\n</p>",
                "start": 6365,
                "end": 16765
            }
        ],
        "start": 6302,
        "end": 16774
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "452592",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SEO_PORTEFEUILLE",
                "right": "1",
                "start": 16813,
                "end": 16837
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_1",
                "right": "<a href=\"http://www.i2cimmobilier.com/immobilier/achat/immo-ferney-voltaire-01/bien-appartement/\">appartements en vente à Ferney Voltaire</a>",
                "start": 16843,
                "end": 17023
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_2",
                "right": "<a href=\"http://www.i2cimmobilier.com/immobilier/locations/immo-ferney-voltaire-01/bien-appartement/\">appartements à louer à Ferney Voltaire</a>",
                "start": 17026,
                "end": 17209
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_3",
                "right": "<a href=\"http://www.i2cimmobilier.com/immobilier/achat/immo-prevessin-moens-01/bien-appartement/\">appartements à vendre sur Prevessin</a>",
                "start": 17212,
                "end": 17388
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_4",
                "right": "<a href=\"http://www.i2cimmobilier.com/immobilier/achat/immo-prevessin-moens-01/bien-maison/\">maisons à vendre sur Prevessin</a>",
                "start": 17391,
                "end": 17557
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_5",
                "right": "<a href=\"http://www.i2cimmobilier.com/immobilier/achat/immo-divonne-les-bains-01/bien-appartement/\">appartements à vendre à Divonne les Bains</a>",
                "start": 17560,
                "end": 17744
            },
            {
                "macro": "A",
                "left": "LINK_PERSO_PORTEFEUILLE_AGENCE_6",
                "right": "",
                "start": 17747,
                "end": 17786
            }
        ],
        "start": 16784,
        "end": 17795
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "452592",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DETAIL",
                "right": "1",
                "start": 17830,
                "end": 17858
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_FACEBOOK",
                "right": "http://www.facebook.com/pages/I-2-C-Immobilier-Ferney-Voltaire/113275615463790",
                "start": 17864,
                "end": 17971
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_TWITTER",
                "right": "http://twitter.com/I2C_immobilier",
                "start": 17974,
                "end": 18035
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_PLUS",
                "right": "",
                "start": 18038,
                "end": 18070
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_YOUTUBE",
                "right": "",
                "start": 18073,
                "end": 18101
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_GOOGLE_LOCAL",
                "right": "https://plus.google.com/b/110153733415749746669/110153733415749746669/about",
                "start": 18104,
                "end": 18212
            },
            {
                "macro": "A",
                "left": "SOCIAL_AGENCE_DAILYMOTION",
                "right": "",
                "start": 18215,
                "end": 18247
            }
        ],
        "start": 17803,
        "end": 18256
    },
    {
        "macro": "IF",
        "test": [
            "=",
            "452592",
            "FORM",
            "IDP"
        ],
        "content": [
            {
                "macro": "A",
                "left": "BADGE_GOOGLE_AGENCE",
                "right": "1",
                "start": 18291,
                "end": 18318
            },
            {
                "macro": "A",
                "left": "SOCIAL_BADGE_GOOGLE_AGENCE",
                "right": "110153733415749746669",
                "start": 18324,
                "end": 18378
            }
        ],
        "start": 18264,
        "end": 18387
    },
    {
        "macro": "A",
        "left": "TITLE_AGENCES_LISTE",
        "right": "",
        "start": 18395,
        "end": 18421
    },
    {
        "macro": "A",
        "left": "DESCRIPTION_AGENCES_LISTE",
        "right": "",
        "start": 18425,
        "end": 18457
    },
    {
        "macro": "A",
        "left": "H1_AGENCESLISTE",
        "right": "",
        "start": 18461,
        "end": 18483
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_TXT",
        "right": "0",
        "start": 18489,
        "end": 18514
    },
    {
        "macro": "A",
        "left": "AGENCES_LISTE_CONTENU",
        "right": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed nulla quis quam lobortis luctus nec in lectus. Duis vitae lorem eget risus feugiat egestas. Curabitur vel vestibulum tellus. Nunc commodo sapien fringilla dui pharetra vehicula. Fusce quis neque lectus, non viverra est. Integer tincidunt semper libero quis semper. Mauris id tellus et turpis mattis porta.",
        "start": 18516,
        "end": 18914
    },
    {
        "macro": "A",
        "left": "SLOGAN_FOOTER",
        "right": "",
        "start": 18924,
        "end": 18944
    },
    {
        "macro": "A",
        "left": "TITLE_1_FOOTER",
        "right": "",
        "start": 18952,
        "end": 18973
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_1_FOOTER_1",
        "right": "<a href=\"http://www.i2cimmobilier.com/immobilier/achat/immo-ferney-voltaire-01/bien-appartement/\">appartements en vente à Ferney Voltaire</a>",
        "start": 18977,
        "end": 19146
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_2_FOOTER_1",
        "right": "<a href=\"http://www.i2cimmobilier.com/immobilier/achat/immo-prevessin-moens-01/bien-appartement/\">appartements à vendre sur Prevessin</a>",
        "start": 19148,
        "end": 19313
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_3_FOOTER_1",
        "right": "<a href=\"http://www.i2cimmobilier.com/immobilier/achat/immo-divonne-les-bains-01/bien-appartement/\">appartements à vendre à Divonne les Bains</a>",
        "start": 19315,
        "end": 19488
    },
    {
        "macro": "A",
        "left": "LINK_PERSO_4_FOOTER_1",
        "right": "",
        "start": 19490,
        "end": 19518
    },
    {
        "macro": "INIT",
        "left": "CATWORDPRESS",
        "right": "24449",
        "start": 19528,
        "end": 19555
    },
    {
        "macro": "toParse",
        "content": []
    }
]