<?php	$LON = $_REQUEST['lon'];
	$LAT = $_REQUEST['lat'];
	$ADRESSE = $_REQUEST['adresse'];
	$FORMAT = $_REQUEST['format'];
	
	$URL = 'http://pro.kelquartier.com/poliris/getPortrait.php?lon='.$LON.'&lat='.$LAT.'&adresse='.urlencode($ADRESSE).'&format='.$FORMAT;
	$sh = curl_init($URL);
	curl_setopt($sh, CURLOPT_HEADER, 0);
	curl_setopt($sh, CURLOPT_RETURNTRANSFER, true);
	echo(curl_exec($sh));
	curl_close($sh);
?>