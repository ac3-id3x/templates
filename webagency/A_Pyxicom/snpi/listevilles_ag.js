$$DYN:ID3:TOJS$$
$$B:IMMOBW:VILLESAGENCES:ALIAS:LISTEAGVIL:QRY:CP$$
			$$BIF:LISTEAGVIL$$
								<select name="CP" onchange="javascript:ListeAg(this);">	
									<option value="">-- $$LG:SELECVILLE pcase$$ --</option>
											$$DO$$   
											$$IFNEXT:LISTEAGVIL:CP$$
									<option value="$$LISTEAGVIL:CP$$"$$IF(:FORM_CP2:LISTEAGVIL:CP$$ selected="selected"$$END$$>$$LISTEAGVIL:VILLE$$ ($$LISTEAGVIL:CP$$) </option>
											$$END$$
											$$LOOP$$
								</select>
							$$BFIN$$