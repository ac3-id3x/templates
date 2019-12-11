<?php	$THEME = $_REQUEST['theme'];
	$THEME2 = $_REQUEST['theme2'];
	$MIN_LON = $_REQUEST['min_lon'];
	$MAX_LON = $_REQUEST['max_lon'];
	$MIN_LAT = $_REQUEST['min_lat'];
	$MAX_LAT = $_REQUEST['max_lat'];
	$FORMAT = $_REQUEST['format'];
	$COMPTAGE = 0;
	if(isset($_REQUEST['cpt'])) $COMPTAGE = $_REQUEST['cpt'];

	$URL = 'http://pro.kelquartier.com/poliris/getPoi.php?theme='.$THEME.'&theme2='.$THEME2.'&min_lon='.$MIN_LON.'&max_lon='.$MAX_LON.'&min_lat='.$MIN_LAT.'&max_lat='.$MAX_LAT.'&format='.$FORMAT.'&cpt='.$COMPTAGE;
	$sh = curl_init($URL);
	curl_setopt($sh, CURLOPT_HEADER, 0);
	curl_setopt($sh, CURLOPT_RETURNTRANSFER, true);
	echo(curl_exec($sh));
	curl_close($sh);
?>