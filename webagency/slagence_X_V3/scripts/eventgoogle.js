var $x = jQuery.noConflict();
$x(document).ready(function() { 
                //$x('#BoutonContactAnnonce').click(function() { 
                //            _gaq.push(['_trackEvent', 'Formulaire_annonce', 'annonce:$x$xREP:1$x$x']); 
                //}) 
                //$x('#boutonEnvoiAmi').click(function() { 
                //            _gaq.push(['_trackEvent', 'envoi_ami', 'annonce:$x$xREP:1$x$x']); 
                //}) 
                //$x('#boutonEnvoiEstimation').click(function() { 
                //            _gaq.push(['_trackEvent', 'formulaire_estimation', 'estimation']); 
                //}) 
                //$x('#boutonEnvoiAgence').click(function() { 
                //            _gaq.push(['_trackEvent', 'formulaire_contact', 'contact']); 
                //}) 
                $x('#BoutonContactAnnonce').click(function() { 
                              _gaq.push(['_trackPageview', '/formulaire_annonce.htm']); 
                }) 
                $x('#boutonEnvoiAmi').click(function() { 
                              _gaq.push(['_trackPageview', '/envoi_a_un_ami.htm']); 
                }) 
                $x('#boutonEnvoiEstimation').click(function() { 
                              _gaq.push(['_trackPageview', '/contact_estimation.htm']); 
                }) 
                $x('#boutonEnvoiAgence').click(function() { 
                              _gaq.push(['_trackPageview', '/formulaire_contact_agence.htm']); 
                }) 
}) ;