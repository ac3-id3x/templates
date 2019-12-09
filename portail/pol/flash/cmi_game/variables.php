<?php
/*if(isset($_POST['temps'])) 
	echo("variable Temps : " . $_POST['temps']);
else 
	echo("Chuck Norris a butté la matrice...y'a un problème quoi...");*/
	//isset($_POST['temps']);
	echo("Temps : " . $_POST['temps']) ."<br>"; 
	echo("Civilité : " . $_POST['civilite'])."<br>"; 
	echo("Nom : " . $_POST['nom'])."<br>"; 
	echo("Prénom : " . $_POST['prenom'])."<br>"; 
	echo("Code postal : " . $_POST['cp'])."<br>"; 
	echo("E-mail : " . $_POST['email'])."<br>"; 
	echo("Veux des informations (optin 1) ? : " . $_POST['optin_info'])."<br>"; 
	echo("Souhaite construire sa maison (optin 2) ? : " . $_POST['optin_construire'])."<br>"; 
	echo("Email de la personne défiée : " . $_POST['email_defi']);
	/**/
	/*****************************************************************************************************/
	/**/
$email = $_POST['email'];
$nom = $_POST["nom"];
$message = "Cher".$_POST["nom"]." ,vous avez réalisé un temps de ".$_POST['temps']."secondes...c'est mieux que Lens qui redescend en ligue 2.";
$sujet = "Votre résultat au jeu 'Construire'";
$entete = "From: Construire, le jeu ! \nContent-Type: text/html; charset=iso-8859-1";
// Envoi du mail
mail($email,$sujet,$message,$entete);
?>