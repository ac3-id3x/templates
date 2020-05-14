// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~ maps-manager v1.0.0 ~~~

// This is a feature to correct GPS coordinates.
// In order to ease its use, it is put separately from the "maps manager" sources located at :
// \\x-ext\e$\base-svn\work\template\webagency\slagence_X_V5\maps\all\js\maps-manager\1.0.0\maps-manager.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~ More precises GPS coordinates ~~~
mapsManagerConstructor.prototype.getAgenciesForcedValues = function() {
	return [
		// { customer: string, idPublication: int, latitude: float, longitude: float }
		
		// arthurimmo
		{ customer: 'arthurim', idPublication: 413777, latitude:  43.6674789, longitude:   7.21377 },
		{ customer: 'arthurim', idPublication: 452217, latitude:  49.6498296, longitude:   1.7312855 },
		{ customer: 'arthurim', idPublication: 509351, latitude:  45.258471,  longitude:   4.706411 },
		{ customer: 'arthurim', idPublication: 596646, latitude:  43.3071,    longitude:   6.6329 },
		{ customer: 'arthurim', idPublication: 512257, latitude:  45.606124,  longitude:   5.155508 },
		
		{ customer: 'arthurim', idPublication: 485744, latitude:  48.60294,   longitude:   2.55844 },
		{ customer: 'arthurim', idPublication: 330574, latitude:  45.348856,  longitude:   4.889676 },
		{ customer: 'arthurim', idPublication: 484636, latitude:  48.822334,  longitude:   2.268284 },
		{ customer: 'arthurim', idPublication: 651040, latitude:  48.908597,  longitude:   2.517409 },
		{ customer: 'arthurim', idPublication: 651041, latitude:  43.9101058, longitude:   3.9991513 },

		{ customer: 'arthurim', idPublication: 229887, latitude:  43.393087,  longitude:   6.3307495 },
		{ customer: 'arthurim', idPublication: 543068, latitude: -20.882516,  longitude:  55.455172 },
		{ customer: 'arthurim', idPublication: 543415, latitude: -21.339722,  longitude:  55.474365 },
		{ customer: 'arthurim', idPublication: 542695, latitude:  43.7574081, longitude:   5.8963483 },
		{ customer: 'arthurim', idPublication: 662045, latitude:  41.866668,  longitude:   8.791561 },

		{ customer: 'arthurim', idPublication: 659059, latitude:  46.696480, longitude:  -1.939933 },
		{ customer: 'arthurim', idPublication: 679449, latitude:  45.658806, longitude:   5.908950 },
		{ customer: 'arthurim', idPublication: 728116, latitude:  43.301852, longitude:  -0.357042 },
		{ customer: 'arthurim', idPublication: 758837, latitude:  49.636765, longitude:  -1.625875 },
		{ customer: 'arthurim', idPublication: 541933, latitude:  14.621712, longitude: -60.988832 },

		{ customer: 'arthurim', idPublication: 790206, latitude:  43.409138, longitude:   6.043820 },
		{ customer: 'arthurim', idPublication: 791263, latitude:  43.48783,  longitude:   5.64657 },
		{ customer: 'arthurim', idPublication: 539437, latitude:  49.02061,  longitude:  -0.6323 },
		{ customer: 'arthurim', idPublication: 539438, latitude:  48.985824, longitude:  -0.477239 },
		{ customer: 'arthurim', idPublication: 518287, latitude:  43.520063, longitude:   5.444594 },

		{ customer: 'arthurim', idPublication: 133382, latitude:  43.311900, longitude:   5.367361 },
		{ customer: 'arthurim', idPublication: 819315, latitude:  46.331183, longitude:   6.375062 },
		{ customer: 'arthurim', idPublication: 805213, latitude:  46.303887, longitude:   6.437012 },
		{ customer: 'arthurim', idPublication: 835941, latitude:  48.611516, longitude:   2.417267 },
		{ customer: 'arthurim', idPublication: 878648, latitude:  47.055666, longitude:   6.603507 },

		{ customer: 'arthurim', idPublication: 523964, latitude:  48.154961, longitude:  -1.717293 },
		{ customer: 'arthurim', idPublication: 538289, latitude:  47.775832, longitude:  -3.009986 },
		{ customer: 'arthurim', idPublication: 522389, latitude:  48.627705, longitude:   7.626127 },
		{ customer: 'arthurim', idPublication: 596645, latitude:  43.3071,   longitude:   6.6329 },
		{ customer: 'arthurim', idPublication: 265498, latitude:  45.623102, longitude:   5.231425 },
		
		{ customer: 'arthurim', idPublication: 535943, latitude:  48.40815,  longitude:   2.70413 },  // agence Fontainebleau
		{ customer: 'arthurim', idPublication: 535944, latitude:  48.40815,  longitude:   2.70413 },  // agence Fontainebleau
		{ customer: 'arthurim', idPublication: 756456, latitude:  45.75218,  longitude:   1.42987 },  // agence Saint-Paul (www.sudlimoges-arthurimmo.com)
		{ customer: 'arthurim', idPublication: 757659, latitude:  45.75218,  longitude:   1.42987 },  // agence Saint-Paul (www.sudlimoges-arthurimmo.com)
		{ customer: 'arthurim', idPublication: 413777, latitude:  43.667478, longitude:   7.213770 }, // webagency\A_Nexi\arthurimmo_2016_nat
		
		{ customer: 'arthurim', idPublication: 596646, latitude:  43.3071,   longitude:   6.6329 },   // webagency\A_Nexi\arthurimmo_55888
		{ customer: 'arthurim', idPublication: 511738, latitude:  45.606124, longitude:   5.155508 }, // webagency\A_Nexi\arthurimmo_55753
		{ customer: 'arthurim', idPublication: 396223, latitude:  45.348855, longitude:   4.889654 }, // webagency\A_Nexi\arthurimmo_55754
		{ customer: 'arthurim', idPublication: 522390, latitude:  48.627705, longitude:   7.626127 }, // webagency\A_Nexi\arthurimmo_39009
		{ customer: 'arthurim', idPublication: 649530, latitude:  48.908597, longitude:   2.517409 }, // webagency\A_Nexi\arthurimmo_55779
		
		{ customer: 'arthurim', idPublication: 518898, latitude:  43.520001, longitude:   5.444594 }, // webagency\A_Nexi\arthurimmo_55799
		{ customer: 'arthurim', idPublication: 509349, latitude:  45.258471, longitude:   4.706411 }, // webagency\A_Nexi\arthurimmo_55821
		{ customer: 'arthurim', idPublication: 494740, latitude:  45.766944, longitude:   5.195833 }, // webagency\A_Nexi\arthurimmo_55880
		{ customer: 'arthurim', idPublication: 494741, latitude:  45.766944, longitude:   5.195833 }, // chavanoz
		{ customer: 'arthurim', idPublication: 781248, latitude:  43.48783,  longitude:   5.64657 },  // webagency\A_Nexi\arthurimmo_55919

		{ customer: 'arthurim', idPublication: 827522, latitude:  48.611516, longitude:   2.417267 }, // webagency\A_Nexi\arthurimmo_56203
		{ customer: 'arthurim', idPublication: 876599, latitude:  47.055666, longitude:   6.603507 }, // webagency\A_Nexi\arthurimmo_56611
		{ customer: 'arthurim', idPublication: 754978, latitude:  49.636765, longitude:  -1.625875 }, // webagency\A_Nexi\arthurimmo_55769
		{ customer: 'arthurim', idPublication: 537530, latitude:  49.02061,  longitude:  -0.6323 },   // webagency\A_Nexi\arthurimmo_40030
		{ customer: 'arthurim', idPublication: 673230, latitude:  45.658799, longitude:   5.908945 }, // webagency\A_Nexi\arthurimmo_55828

		{ customer: 'arthurim', idPublication: 726579, latitude:  43.301852, longitude:  -0.357042 }, // webagency\A_Nexi\arthurimmo_55835
		{ customer: 'arthurim', idPublication: 798767, latitude:  46.303887, longitude:   6.437012 }, // webagency\A_Nexi\arthurimmo_55912
		{ customer: 'arthurim', idPublication: 824373, latitude:  43.096526, longitude:  -0.045762 }, // webagency\A_Nexi\arthurimmo_56168
		{ customer: 'arthurim', idPublication: 653355, latitude:  46.696480, longitude:  -1.939933 }, // webagency\A_Nexi\arthurimmo_55844
		{ customer: 'arthurim', idPublication: 541917, latitude:  14.621712, longitude: -60.988832 }, // webagency\A_Nexi\arthurimmo_55787
		
		{ customer: 'arthurim', idPublication: 542694, latitude:  43.757408, longitude:   5.896348 }, // webagency\A_Nexi\arthurimmo_55829
		{ customer: 'arthurim', idPublication: 523963, latitude:  48.154931, longitude:  -1.717284 }, // webagency\A_Nexi\arthurimmo_55749
		{ customer: 'arthurim', idPublication: 538288, latitude:  47.775832, longitude:  -3.009986 }, // webagency\A_Nexi\arthurimmo_55861
		{ customer: 'arthurim', idPublication: 701500, latitude:  45.7396,   longitude:   4.86347  }, // webagency\A_Nexi\arthurimmo_55826
		{ customer: 'arthurim', idPublication: 710189, latitude:  45.7396,   longitude:   4.86347  }, // webagency\A_Nexi\arthurimmo_55826
		
		{ customer: 'arthurim', idPublication: 816153, latitude:  46.331182, longitude:   6.375061 }, // webagency\A_Nexi\arthurimmo_55992
		{ customer: 'arthurim', idPublication: 673230, latitude:  45.658799, longitude:   5.908945 }, // webagency\A_ID3X\arthurimmo_47828
		{ customer: 'arthurim', idPublication: 765798, latitude:  43.409133, longitude:   6.04385 },  // webagency\A_ID3X\arthurimmo_55356
		{ customer: 'arthurim', idPublication: 790232, latitude:  43.409138, longitude:   6.043820 }, // webagency\A_ID3X\arthurimmo_55356
		{ customer: 'arthurim', idPublication: 541917, latitude:  14.621712, longitude: -60.988832 }, // webagency\A_ID3X\arthurimmo_40290
		
		{ customer: 'arthurim', idPublication: 726579, latitude:  43.301852, longitude:  -0.357042 }, // webagency\A_ID3X\arthurimmo_54403
		{ customer: 'arthurim', idPublication: 542694, latitude:  43.757408, longitude:   5.896348 }, // webagency\A_ID3X\arthurimmo_40337
		{ customer: 'arthurim', idPublication: 649530, latitude:  48.908597, longitude:   2.517409 }, // webagency\A_ID3X\arthurimmo_46521
		{ customer: 'arthurim', idPublication: 653508, latitude:  41.866668, longitude:   8.791561 }, // webagency\A_ID3X\arthurimmo_46625
		{ customer: 'arthurim', idPublication: 653355, latitude:  46.696480, longitude:  -1.939933 }, // webagency\A_ID3X\arthurimmo_46619
		
		{ customer: 'arthurim', idPublication: 754978, latitude:  49.636765, longitude:  -1.625875 }, // webagency\A_ID3X\arthurimmo_55169
		{ customer: 'arthurim', idPublication: 543067, latitude: -20.882516, longitude:  55.455172 }, // webagency\A_ID3X\arthurimmo_40367
		{ customer: 'arthurim', idPublication: 543408, latitude: -21.339722, longitude:  55.474365 }, // webagency\A_ID3X\arthurimmo_40367
		{ customer: 'arthurim', idPublication: 985832, latitude:  43.729796, longitude:   5.179081 }, // webagency/A_Nexi/arthurimmo_mallemort
		{ customer: 'arthurim', idPublication: 983855, latitude:  43.729796, longitude:   5.179081 }, // webagency/A_Nexi/arthurimmo_mallemort
		
		{ customer: 'arthurim', idPublication: 738275, latitude:  45.87516,  longitude:   4.50126 },  // pontcharra-sur-turdine
		{ customer: 'arthurim', idPublication: 738424, latitude:  45.87516,  longitude:   4.50126 },  // pontcharra-sur-turdine

		{ customer: 'arthurim', idPublication: 1000958, latitude:  43.573020,  longitude:   6.999918 },  // le cannet		
		
		{ customer: 'arthurim', idPublication: 1005700, latitude:  48.926856,  longitude:   2.545313 },  // livry gargant
		{ customer: 'arthurim', idPublication: 1005396, latitude:  48.926856,  longitude:   2.545313 },  // livry gargant

		{ customer: 'arthurim', idPublication: 541280, latitude:  43.135209,  longitude:   6.365321 },  // le lavandou
		{ customer: 'arthurim', idPublication: 542932, latitude:  43.135209,  longitude:   6.365321 },  // le lavandou	

		{ customer: 'arthurim', idPublication: 987277, latitude:  42.935803,  longitude:   1.850999 },  // Lavelanet
		{ customer: 'arthurim', idPublication: 987621, latitude:  42.935803,  longitude:   1.850999 },  // Lavelanet
		
		{ customer: 'ageoppor', idPublication: 812681, latitude:  43.573067, longitude:   6.999982 }, // www.agencesopportunity.com
		
		{ customer: 'arthurim', idPublication: 662096, latitude:  41.952223, longitude:   8.777187 }, // Ajaccio
		
		// webagency\A_Nexi\primmo69250_34741
		{ customer: '________', idPublication: 133776, latitude: 45.7731711, longitude:   4.8431206 },
		{ customer: '________', idPublication: 133721, latitude: 45.874618,  longitude:   4.748019 },
		{ customer: '________', idPublication: 453267, latitude: 45.8101,    longitude:   4.79749 },

		// webagency\A_Nexi\guimematowa_35419
		{ customer: '________', idPublication: 497372, latitude: 42.701318,  longitude:   3.033502 },
		{ customer: '________', idPublication: 542084, latitude: 42.628478,  longitude:   3.032133 },

		// webagency\A_Nexi\rdcolombes_39105
		{ customer: '________', idPublication: 523384, latitude: 48.912366,  longitude:   2.256876 },
		{ customer: '________', idPublication: 523376, latitude: 48.913986,  longitude:   2.252526 },
		{ customer: '________', idPublication: 523378, latitude: 48.90745,   longitude:   2.266085 },
		{ customer: '________', idPublication: 523379, latitude: 48.907941,  longitude:   2.286519 },
		{ customer: '________', idPublication: 523380, latitude: 48.906223,  longitude:   2.268798 },
		{ customer: '________', idPublication: 523381, latitude: 48.905075,  longitude:   2.269132 },
		{ customer: '________', idPublication: 523383, latitude: 48.907396,  longitude:   2.248128 },

		// webagency\A_Nexi\vermeille_37518_v2
		{ customer: '________', idPublication: 519954, latitude:  42.546205, longitude:   3.021790 },
		{ customer: '________', idPublication: 517645, latitude:  42.523718, longitude:   3.086158 },

		// webagency\A_ID3X\investrr14_56370
		{ customer: '________', idPublication: 498121, latitude:  47.607494, longitude:   1.355009 },
		{ customer: '________', idPublication: 782518, latitude:  47.583945, longitude:   1.339645 },

		// webagency\A_Nexi\belvia-immobilier
		{ customer: '________', idPublication: 510336, latitude:  48.109133, longitude:  -1.6813031 },
		{ customer: '________', idPublication: 503597, latitude:  43.771532, longitude:   1.688190 },

		{ customer: '________', idPublication: 1007811, latitude:  46.157331, longitude:   6.667414 }, // webagency\A_ID3X\cwbk19_56801

		// diverses
		{ customer: '________', idPublication: 507430, latitude:  45.561798, longitude:   4.277082 }, // webagency\A_Nexi\reduron42_36074
		{ customer: '________', idPublication: 439417, latitude:  43.7451,   longitude:   1.241 },    // webagency\A_Nexi\tendance31_41895
		{ customer: '________', idPublication: 509306, latitude:  43.093634, longitude:   5.844568 }, // webagency\A_Nexi\ail83140_36809
		{ customer: '________', idPublication: 397457, latitude:  48.902938, longitude:   2.358309 }, // webagency\A_Nexi\laplaine93_35871
		{ customer: '________', idPublication: 397531, latitude:  47.721811, longitude:   1.94158 },  // webagency\A_Nexi\ann_tsn_36749
		{ customer: '________', idPublication: 569199, latitude:  43.18241,  longitude:   5.61461 },  // webagency\A_Nexi\cofagi13_42565
		{ customer: '________', idPublication: 452097, latitude:  44.559459, longitude:   4.748678 }, // webagency\A_Nexi\chapeaurouge26_40070
		{ customer: '________', idPublication: 522065, latitude:  48.636605, longitude:   2.473785 }, // webagency\A_Nexi\demeures91_38986
		{ customer: '________', idPublication: 405414, latitude:  45.651545, longitude:   4.797680 }, // webagency\A_Nexi\flandin69_39496
		{ customer: '________', idPublication: 419383, latitude:  41.872085, longitude:   8.787328 }, // webagency\A_Nexi\la2000_39853
		{ customer: '________', idPublication: 397531, latitude:  48.919862, longitude:   1.975695 }, // webagency\A_Nexi\lafo78630_36979
		{ customer: '________', idPublication: 298869, latitude:  43.569731, longitude:   7.107209 }, // webagency\A_Nexi\or050141_35957
		{ customer: '________', idPublication: 403913, latitude:  48.721757, longitude:   1.764776 }, // webagency\A_Nexi\orme78_35914
		{ customer: '________', idPublication: 507372, latitude:  45.76069,  longitude:   4.841182 }, // webagency\A_Nexi\patri38100_36397
		{ customer: '________', idPublication: 509349, latitude:  45.258471, longitude:   4.706411 }, // webagency\A_Nexi\ribeiro07430_36821
		{ customer: '________', idPublication: 311894, latitude:  43.607824, longitude:   1.335974 }, // webagency\A_Nexi\aero31_37393
		{ customer: '________', idPublication: 502401, latitude:  48.864326, longitude:   2.332367 }, // webagency\A_Nexi\ambassade_36041
		{ customer: '________', idPublication: 512058, latitude:  43.360495, longitude:  -1.698968 }, // webagency\A_Nexi\amodia_37079
		{ customer: '________', idPublication: 397747, latitude:  48.827356, longitude:   2.331844 }, // webagency\A_Nexi\castim_35490
		{ customer: '________', idPublication: 502293, latitude:  45.845461, longitude:   4.831508 }, // webagency\A_Nexi\cdimmo69_36015
		{ customer: '________', idPublication: 510219, latitude:  48.851122, longitude:   2.258753 }, // webagency\A_Nexi\gh75016_36852
		{ customer: '________', idPublication: 590004, latitude:  44.922734, longitude:   4.933220 }, // webagency\A_Nexi\immopro26_42464
		{ customer: '________', idPublication: 283795, latitude:  45.732066, longitude:  -1.098886 }, // webagency\A_Nexi\or089005_38035
		{ customer: '________', idPublication: 516021, latitude:  44.559141, longitude:   6.079865 }, // webagency\A_Nexi\tradi05_37389
		{ customer: '________', idPublication: 607341, latitude:  45.641038, longitude:  -1.084596 }, // webagency\A_Nexi\charry17_42672
		{ customer: '________', idPublication: 411353, latitude:  48.859640, longitude:   2.355175 }, // webagency\A_Nexi\exemplaire_35656
		{ customer: '________', idPublication: 425315, latitude:  47.870917, longitude:  -3.548544 }, // webagency\A_Nexi\michel29_35594
		{ customer: '________', idPublication: 482224, latitude:  47.279100, longitude:  -2.370391 }, // webagency\A_Nexi\or017006_37950
		{ customer: '________', idPublication: 537511, latitude:  43.745222, longitude:   7.429067 }, // webagency\A_Nexi\zodiaque98_40008
		{ customer: '________', idPublication: 397253, latitude:  44.194125, longitude:   0.602399 }, // webagency\A_Nexi\cotegas_36513
		{ customer: '________', idPublication: 452207, latitude:  49.649829, longitude:   1.731285 }, // webagency\A_Nexi\formerie_36098
		{ customer: '________', idPublication: 514925, latitude: -21.338995, longitude:  55.479366 }, // webagency\A_Nexi\isautier_37263
		{ customer: '________', idPublication: 497440, latitude:  48.842138, longitude:   2.321952 }, // webagency\A_Nexi\sp92_35430
		{ customer: '________', idPublication: 508253, latitude: -20.950319, longitude:  55.317157 }, // webagency\A_Nexi\srcf97412_36578
		{ customer: '________', idPublication: 510529, latitude: -21.355194, longitude:  55.565444 }, // webagency\A_Nexi\zoreol97_36898
		{ customer: '________', idPublication: 511614, latitude:  48.704500, longitude:   2.037615 }, // webagency\A_Nexi\bimmo78460_37016
		{ customer: '________', idPublication: 507430, latitude:  45.561798, longitude:   4.277082 }, // webagency\A_Nexi\reduron42_36074
		{ customer: '________', idPublication: 317401, latitude:  49.180684, longitude:  -0.362234 }, // webagency\A_Nexi\c21_2266_36792
		{ customer: '________', idPublication: 517577, latitude:  41.935217, longitude:   8.753920 }, // webagency\A_Nexi\lilmo20_37506
		{ customer: '________', idPublication: 481969, latitude:  48.800931, longitude:   2.286679 }, // webagency\A_Nexi\roda92_36846
		{ customer: '________', idPublication: 503849, latitude:  43.294899, longitude:  -0.373525 }, // webagency\A_Nexi\joanninimmob_36284
		{ customer: '________', idPublication: 515898, latitude:  48.582460, longitude:   7.749809 }, // webagency\A_Nexi\reverdin_37330
		{ customer: '________', idPublication: 471084, latitude:  47.721811, longitude:   1.94158 },  // webagency\A_Nexi\ann_tsn_36749
		{ customer: '________', idPublication: 364538, latitude:  47.370273, longitude:  -1.178564 }, // webagency\A_Nexi\mvdi441502_40387
		{ customer: '________', idPublication: 161489, latitude:  48.770794, longitude:   2.508703 }, // webagency\A_Nexi\sasval_36541
		{ customer: '________', idPublication: 637688, latitude:  45.748565, longitude:   4.839499 }, // webagency\A_Nexi\truche_42735
		{ customer: '________', idPublication: 417309, latitude:  43.393087, longitude:   6.330749 }, // webagency\A_Nexi\arth_32011_36081
		{ customer: '________', idPublication: 877299, latitude:  45.759727, longitude:   4.840974 }, // webagency\A_Nexi\fmi69003_42630
		{ customer: '________', idPublication: 774521, latitude:  48.606917, longitude:   2.891217 }, // webagency\A_Nexi\arthurimmo_55918
		{ customer: '________', idPublication: 633445, latitude:  48.606917, longitude:   2.891217 }, // webagency\A_Nexi\arthurimmo_55918
		{ customer: '________', idPublication: 467194, latitude:  48.947598, longitude:   2.147592 }, // webagency\A_Nexi\alexandrie_2016
		
		{ customer: '________', idPublication: 522124, latitude:  43.600984, longitude:   1.466152 }, // webagency\A_ID3X\actea31_55068
		{ customer: '________', idPublication: 471844, latitude:  47.862637, longitude:  -3.988319 }, // webagency\A_ID3X\patleberre_41823
		{ customer: '________', idPublication: 578196, latitude: -21.333005, longitude:  55.472055 }, // webagency\A_ID3X\acces974_42215
		{ customer: '________', idPublication: 527560, latitude:  49.646677, longitude:   2.567501 }, // webagency\A_ID3X\ihi80110_2199551
		{ customer: '________', idPublication: 598953, latitude:  14.605623, longitude: -61.043889 }, // webagency\A_ID3X\ouen76_42589
		{ customer: '________', idPublication: 464713, latitude:  48.924587, longitude:   2.186275 }, // webagency\A_ID3X\cale78_55463
		{ customer: '________', idPublication: 710844, latitude:  43.597500, longitude:   1.483740 }, // webagency\A_ID3X\actea31_55068
		{ customer: '________', idPublication: 651170, latitude:  45.767653, longitude:   4.842381 }, // webagency\A_ID3X\privalys_46581
		{ customer: '________', idPublication: 427194, latitude:  48.976088, longitude:   2.309129 }, // webagency\A_ID3X\jdi95_47817
		{ customer: '________', idPublication: 535580, latitude:  47.481626, longitude:   6.838687 }, // webagency\A_ID3X\vuillemard_55256
		{ customer: '________', idPublication: 742610, latitude:  48.988163, longitude:   2.064322 }, // webagency\A_ID3X\maluj59_54514
		{ customer: '________', idPublication: 734293, latitude:  48.931975, longitude:   2.039101 }, // webagency\A_ID3X\maluj59_54514
		{ customer: '________', idPublication: 667539, latitude:  49.382486, longitude:   3.325046 }, // webagency\A_ID3X\aisnoise_2017
		{ customer: '________', idPublication: 776575, latitude:  48.814674, longitude:   2.319668 }, // webagency\A_ID3X\cese92_55525
		{ customer: '________', idPublication: 541510, latitude:  46.504661, longitude:  -1.737686 }, // webagency\A_ID3X\vergnaud85_46640
		{ customer: '________', idPublication: 359340, latitude:  43.463993, longitude:   1.568114 }, // webagency\A_ID3X\tolosan31_54416
		{ customer: '________', idPublication: 461346, latitude:  45.764160, longitude:   4.853210 }, // webagency\A_ID3X\unis_53003_40933
		{ customer: '________', idPublication: 558544, latitude:  14.467935, longitude: -60.922136 }, // webagency\A_ID3X\mpi97_40788
		{ customer: '________', idPublication: 563925, latitude:  49.288544, longitude:  -0.375953 }, // webagency\A_ID3X\caennord14_41081
		{ customer: '________', idPublication: 584504, latitude:  48.990445, longitude:   2.165744 }, // webagency\A_ID3X\davriland_44060
		{ customer: '________', idPublication: 411353, latitude:  48.859640, longitude:   2.355175 }, // webagency\A_ID3X\exemplaire_42948
		{ customer: '________', idPublication: 406773, latitude:  47.251004, longitude:  -1.576576 }, // webagency\A_ID3X\ajpgdnantes_41803
		{ customer: '________', idPublication: 771609, latitude:  43.423573, longitude:   6.749009 }, // webagency\A_ID3X\affaire36_55417
		{ customer: '________', idPublication: 790902, latitude:  45.908621, longitude:   6.123655 }, // webagency\A_ID3X\hantz_55709
		{ customer: '________', idPublication: 467966, latitude:  43.569138, longitude:   7.113989 }, // webagency\A_ID3X\immo2000_45341
		{ customer: '________', idPublication: 530136, latitude:  45.367038, longitude:   5.593047 }, // webagency\A_ID3X\maud38500_47802
		{ customer: '________', idPublication: 742814, latitude:  43.172327, longitude:   6.531295 }, // webagency\A_ID3X\cavalaire_40080_2
		{ customer: '________', idPublication: 804910, latitude: -21.044334, longitude:  55.262102 }, // webagency\A_ID3X\iffimmo_2205632
		{ customer: '________', idPublication: 565535, latitude:  48.505000, longitude:  -2.743191 }, // webagency\A_ID3X\chai22000_56564
		{ customer: '________', idPublication: 859472, latitude:  43.544891, longitude:   3.974425 }, // webagency\A_ID3X\sacx34_56433
		{ customer: '________', idPublication: 771591, latitude:  43.342068, longitude:   6.692904 }, // webagency\A_ID3X\ferreboge_55151
		{ customer: '________', idPublication: 827237, latitude:  43.342068, longitude:   6.692904 }, // webagency\A_ID3X\ferreboge_55151
		{ customer: '________', idPublication: 543899, latitude:  43.186150, longitude:   5.620393 }, // webagency\A_ID3X\periere13_56354
		{ customer: '________', idPublication: 534146, latitude:  44.657087, longitude:  -1.148516 }, // webagency\A_ID3X\yalla33_2017
		{ customer: '________', idPublication: 697255, latitude:  44.662806, longitude:  -1.16631 },  // webagency\A_ID3X\yalla33_2017
		{ customer: '________', idPublication: 302380, latitude:  44.544026, longitude:  -0.258254 }, // webagency\A_ID3X\giron33210_54355
		{ customer: '________', idPublication: 467490, latitude:  44.553417, longitude:  -0.245228 }, // webagency\A_ID3X\giron33210_54355
		{ customer: '________', idPublication: 827317, latitude:  44.649523, longitude:  -0.354048 }, // webagency\A_ID3X\giron33210_54355
		{ customer: '________', idPublication: 379619, latitude:  43.459185, longitude:   5.563393 }, // webagency\A_ID3X\lorenzo13_56338
		{ customer: '________', idPublication: 812667, latitude:  45.732550, longitude:   4.82605 },  // webagency\A_ID3X\320416_55978
		{ customer: '________', idPublication: 517703, latitude:  45.841166, longitude:   5.288022 }, // webagency\A_ID3X\atout01_56001
		{ customer: '________', idPublication: 775052, latitude:  43.544172, longitude:   6.914510 }, // webagency\A_ID3X\laposte_2204812
		{ customer: '________', idPublication: 815040, latitude:  43.128410, longitude:   5.914723 }, // webagency\A_ID3X\ygimmo83_56014
		{ customer: '________', idPublication: 497597, latitude:  48.949510, longitude:   3.130937 }, // webagency\A_ID3X\immo77640_55724
		{ customer: '________', idPublication: 575299, latitude:  48.802838, longitude:   2.614298 }, // webagency\A_ID3X\agencegti_42060
		{ customer: '________', idPublication: 570254, latitude:  45.792484, longitude:   5.130948 }, // webagency\A_ID3X\proalliance_46510
		{ customer: '________', idPublication: 519136, latitude: -21.288332, longitude:  55.411705 }, // webagency\A_ID3X\oma786_37728
		{ customer: '________', idPublication: 619982, latitude:  47.728259, longitude:   0.575353 }, // webagency\A_ID3X\megsan72_42885
		{ customer: '________', idPublication: 557966, latitude:  14.546839, longitude: -60.964728 }, // webagency\A_ID3X\laguerre97_40895
		{ customer: '________', idPublication: 554792, latitude:  43.772522, longitude:   1.68781 },  // webagency\A_ID3X\jmbp_40780
		{ customer: '________', idPublication: 570533, latitude:  46.2029,   longitude:   5.2133 },   // webagency\A_ID3X\japom_41797
		{ customer: '________', idPublication: 548537, latitude:  48.610994, longitude:   2.417821 }, // webagency\A_ID3X\evrytransa_40423
		{ customer: '________', idPublication: 212980, latitude:  48.790338, longitude:   2.534038 }, // webagency\A_ID3X\cv2i_40500
		{ customer: '________', idPublication: 496803, latitude:  46.390340, longitude:   6.526160 }, // webagency\A_ID3X\chablais74_35372
		{ customer: '________', idPublication: 530340, latitude:  48.879944, longitude:   2.704516 }, // webagency\A_ID3X\brunet77_39544
		{ customer: '________', idPublication: 406773, latitude:  47.251004, longitude:  -1.576576 }, // webagency\A_ID3X\1perf
		{ customer: '________', idPublication: 562766, latitude:  42.691131, longitude:   3.034833 }, // webagency\A_ID3X\esteve66440_40948
		{ customer: '________', idPublication: 425322, latitude:  43.608886, longitude:   1.285041 }, // webagency\A_ID3X\pibimmges31_35614
		{ customer: '________', idPublication: 646345, latitude:  48.5702,   longitude:  -4.5224 },   // webagency\A_ID3X\plus29870_46468
		{ customer: '________', idPublication: 680671, latitude:  43.655329, longitude:   1.478493 }, // webagency\A_ID3X\union31_47910
		{ customer: '________', idPublication: 543914, latitude:  48.895287, longitude:   2.477461 }, // webagency\A_ID3X\arcades93_40411
		{ customer: '________', idPublication: 424258, latitude:  43.34427,  longitude:   3.215996 }, // webagency\A_ID3X\franc34500_45344
		{ customer: '________', idPublication: 330646, latitude:  43.659300, longitude:  -1.429000 }, // webagency\A_ID3X\or044019_2199522
		{ customer: '________', idPublication: 484692, latitude:  44.921767, longitude:   2.435365 }, // webagency\A_ID3X\paysvert_46376
		{ customer: '________', idPublication: 624715, latitude:  45.634570, longitude:   5.109467 }, // webagency\A_ID3X\investimmo38_42916
		{ customer: '________', idPublication: 641912, latitude:  48.894794, longitude:   2.095789 }, // webagency\A_ID3X\lpoimmobilier78_46370
		{ customer: '________', idPublication: 578165, latitude:  48.673792, longitude:   2.326441 }, // webagency\A_ID3X\cimeimmobilier91_42210
		{ customer: '________', idPublication: 567054, latitude:  45.624833, longitude:  -1.025425 }, // webagency\A_ID3X\opimmroy_41365
		{ customer: '________', idPublication: 418033, latitude:  48.914939, longitude:   2.253057 }, // webagency\A_ID3X\futurtransac78_41796
		{ customer: '________', idPublication: 572983, latitude:  48.768524, longitude:   2.053237 }, // webagency\A_ID3X\futurtransac78_41796
		{ customer: '________', idPublication: 734511, latitude:  45.624394, longitude:  -1.028106 }, // webagency\A_ID3X\impr17_54503
		{ customer: '________', idPublication: 724904, latitude:  47.587612, longitude:   1.332095 }, // webagency\A_ID3X\262835_54379
		{ customer: '________', idPublication: 706957, latitude:  48.699774, longitude:   2.61812 },  // webagency\A_ID3X\ann_gil_52228
		{ customer: '________', idPublication: 465984, latitude:  45.914669, longitude:   6.092507 }, // webagency\A_ID3X\desti97_46682
		{ customer: '________', idPublication: 386946, latitude:  48.535633, longitude:   2.657812 }, // webagency\A_ID3X\2mimmo77_40160
		{ customer: '________', idPublication: 571784, latitude:  43.636279, longitude:   5.099629 }, // webagency\A_ID3X\familimmo13_55083
		{ customer: '________', idPublication: 682170, latitude:  43.837762, longitude:   5.038093 }, // webagency\A_ID3X\familimmo13_55083
		{ customer: '________', idPublication: 650570, latitude:  44.661424, longitude:  -1.170576 }, // webagency\A_ID3X\aira33_55090
		{ customer: '________', idPublication: 567485, latitude:  49.188838, longitude:  -0.362444 }, // webagency\A_ID3X\julien14_41374
		{ customer: '________', idPublication: 514925, latitude: -21.338995, longitude:  55.479366 }, // webagency\A_ID3X\isautier_55366
		{ customer: '________', idPublication: 703969, latitude:  50.106272, longitude:   1.834599 }, // webagency\A_ID3X\chrisdevau_50168
		{ customer: '________', idPublication: 427117, latitude:  48.107432, longitude:  -1.404948 }, // webagency\A_ID3X\lucas35530_41266
		{ customer: '________', idPublication: 543066, latitude:  48.994901, longitude:   2.095449 }, // webagency\A_ID3X\pyramide78_40368
		{ customer: '________', idPublication: 331214, latitude:  45.926198, longitude:   4.948088 }, // webagency\A_ID3X\pernet_55364
		{ customer: '________', idPublication: 892292, latitude:  43.173968, longitude:   5.606137 }, // webagency\A_ID3X\expciotat_56678
		{ customer: '________', idPublication: 900940, latitude:  45.944683, longitude:  -0.960389 }, // webagency\A_ID3X\ajcimmo_56558
		{ customer: '________', idPublication: 812107, latitude:  49.181552, longitude:  -0.362501 }, // webagency\A_ID3X\vitto14000_55684  
		{ customer: '________', idPublication: 890726, latitude:  43.6719,   longitude:    7.19012 }, // webagency\A_ID3X\masson06_56674  
		{ customer: '________', idPublication: 907364, latitude:  46.283694, longitude:   6.086146 }, // webagency\A_ID3X\or01200_56761
		{ customer: '________', idPublication: 971246, latitude:  47.472122, longitude:   -0.55116 }, // webagency\A_ID3X\guyon_4788
		{ customer: '________', idPublication: 1016475, latitude:  44.739937, longitude:   -0.680622 }, // webagency\A_ID3X\capdeviole_56716		
		{ customer: '________', idPublication: 812554, latitude:  48.884652, longitude:   2.323058 }, // webagency\A_ID3X\france75017_55973
		
		
		// all websites
		{ customer: 'all', idPublication: 99999, latitude:  45.7731711, longitude:   4.843120699999986 }
	];
}

// The following is a feature to update some agency data
mapsManagerConstructor.prototype.updateAgenciesData = function() {
	
	// a) update agency with new GPS coordinates (manual input in the current JS file).
	var forcedValues = this.getAgenciesForcedValues();
	if (forcedValues.length > 0) {
		
		// set regular expression of idPublication
		var nRows = false, valueSeparator = '', values = '';
		for (f = 0; f < forcedValues.length; f++) {
			values += valueSeparator + forcedValues[f].idPublication;
			if (!nRows) { nRows = true; valueSeparator = '|'; }
		}
		
		if (values != '') {
			var idp = '', _agencies = this.mapDataList.agencies.data, idPublicationRegExp = new RegExp('^(' + values + ')$');
			//if (this.outputDebug) { console.log('updateAgenciesData() >> generated RegExp :'); console.log(idPublicationRegExp); }
			
			for (d = 0; d < _agencies.length; d++) {
				idp = _agencies[d].idPublication.toString();
				if (idp != '') {
					// Regexp test
					if (idp.match(idPublicationRegExp)) {
						for (f = 0; f < forcedValues.length; f++) {
							if (_agencies[d].idPublication == forcedValues[f].idPublication) {
								//if (this.outputDebug) { console.log('idp :' + idp); }
								_agencies[d].latitude = forcedValues[f].latitude;
								_agencies[d].longitude = forcedValues[f].longitude;
								break;
							}
						}
					} // Regexp test END
				}
			}
		}
	}
	
	// b.1) remove agency whose coordinates "lat/lon" are 0/0.
	var _agencies = this.mapDataList.agencies.data;
	for (d = 0; d < _agencies.length; d++) {
		if (_agencies[d].nom != 'AGX') {
			if (this.coordinatesGulfOfGuinea({ lat: _agencies[d].latitude, lon: _agencies[d].longitude })) _agencies.splice(d, 1);
		}
	}
	
	// b.2) remove agency (other than first one) whose coordinates "lat/lon" are out of bounds.
	for (d = 0; d < _agencies.length; d++) {
		if (this.coordinatesOutOfBounds({ lat: _agencies[d].latitude, lon: _agencies[d].longitude })) {
			if (d > 0) {
				_agencies.splice(d, 1);
			}
			else {
				_agencies[d].latitude =  parseFloat(id3xContent.macro.E.PAGE.MAP_CENTER_LATITUDE);
				_agencies[d].longitude = parseFloat(id3xContent.macro.E.PAGE.MAP_CENTER_LONGITUDE);
			}
		}
	}
	
	// c) update hidden input
	if (document.getElementById('bing-json-idp')) $('#bing-json-idp').val(_agencies.length > 0 ? _agencies[0].idPublication : 0);
	if (document.getElementById('bing-json-lat')) $('#bing-json-lat').val(_agencies.length > 0 ? _agencies[0].latitude : 0);
	if (document.getElementById('bing-json-lng')) $('#bing-json-lng').val(_agencies.length > 0 ? _agencies[0].longitude : 0);
}

mapsManagerConstructor.prototype.coordinatesGulfOfGuinea = function(p) {
	// p = { lat: Float, lon: Float }
	return ( (p.lat == 0 && p.lon == 0) ? true : false );
}

mapsManagerConstructor.prototype.coordinatesOutOfBounds = function(p) {
	// p = { lat: Float, lon: Float }
	return ( ( (-180 < p.lat && p.lat < 180) && (-360 < p.lon && p.lon < 360) ) ? false : true );
}
