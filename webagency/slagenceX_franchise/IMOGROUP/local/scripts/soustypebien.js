
				function Soustypes(){
					var elt_typebien = document.getElementById("typebien");
					var elt_biens = document.getElementById("biens");
					var elt_maisons = document.getElementById("maisons");
					var j = 0;
					var listeinput = document.getElementsByTagName( "input" );
					if( elt_typebien && elt_biens && elt_maisons ) {

						if( elt_typebien.checked==true ) {

							elt_biens.style.display="inline";
							elt_maisons.style.display="none";

							for( j=0; j< listeinput.length; j++ ) {
								if( listeinput[j].id.substring( 0, 15 ) == "idsoustypebien_" ) {
									listeinput[j].checked = false;
								}
							}

						} else {
							
							elt_biens.style.display="none";
							elt_maisons.style.display="inline";

							for( j=0; j< listeinput.length; j++ ) {
								if( listeinput[j].id.substring( 0, 11 ) == "idtypebien_" ) {
									listeinput[j].checked = false;
								}
							}

						}
					} else {
						alert("element d'id 'typebien' ou 'biens' ou 'maisons' non trouvé dans la page");
					}
				}
				
