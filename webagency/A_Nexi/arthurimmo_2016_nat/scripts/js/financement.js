$(window).load(function() {

    // FORMULAIRE FINANCEMENT
    //Classe générique pour gérer ACTIF/INACTIF
    $(".btn-financement").on("click",function(e) {
        e.preventDefault();
        var btn = $(this);
        var val = btn.data("value");
        var champ = btn.data("hidden");
        $("#"+champ).val(val);
        $(".btn-financement[data-hidden='"+champ+"']").removeClass("btn-action").addClass("btn-neutre");
        btn.addClass("btn-action").removeClass("btn-neutre");
    });


    // Classe spécifique pour gérer les 3 groupes.
    $(".btn-financement[data-hidden='FinTypeFinancement']").on("click",function() {
        $("."+$(this).data("hidden")).hide();
        $("#"+$(this).data("cible")).show();
        if($(this).data("cible") == 'FinTypeFinancement-2'){
            $(".SituationPerso").hide();
        } else {
            $(".SituationPerso").show();
        }

        $(".FinSituationPerso").show();
        $(".FinSubmit").show();
    });

    // Situation familiale
    $(".btn-financement[data-hidden='FinSituation']").on("click",function() {
        $("."+$(this).data("hidden")).hide();
        $("#"+$(this).data("cible")).show();
        if($(this).data("cible") == 'FinSituation-2'){
            $(".FinSituationConjoint").show();
        } else {
            $(".FinSituationConjoint").hide();
        }
    });

    // Situation professionnelle
    $("select[name='FinSituationPro']").on("change",function() {
        if($('option:selected',this).data("cible") == 'FinSituationSalarie'){
            $("#FinSituationSalarie").show();
        } else {
            $("#FinSituationSalarie").hide();
        }
        if($('option:selected',this).data("statut") == 'freelance'){
            $(".FinSituationFreelance").hide();
        } else {
            $(".FinSituationFreelance").show();
        }
    });

    // Signature
    $(".btn-financement[data-hidden='ProSign']").on("click",function() {
        $("."+$(this).data("hidden")).hide();
        $("#"+$(this).data("cible")).show();
    });

    // Autre type de projet
    $("select[name='ProTypeProjet']").on("change",function() {
        if($('option:selected',this).data("cible") == 'ProTypeProjetAutre'){
            $(".ProTypeProjetAutre").show();
        } else {
            $(".ProTypeProjetAutre").hide();
        }
    });

    // Autres charges
    $(".btn-financement[data-hidden='RegrpCharges']").on("click",function() {
        $("."+$(this).data("hidden")).hide();
        $("#"+$(this).data("cible")).show();
    });

    // Logement
    $(".btn-financement[data-hidden='RegrpLogement']").on("click",function() {
        $("."+$(this).data("hidden")).hide();
        $("#"+$(this).data("cible")).show();
    });

    $("#form-financement").submit(function(e){
        var error = false;
        $(".btn-financement-required").each(function(){
            if( $(this).is(":visible") ){
                var hid = $(this).data("hidden");
                var valhid = $("#"+hid).val();
                if( !valhid ){
                    error = true;
                    $(".btn-financement[data-hidden='"+hid+"']").addClass("btn-error");
                }
            }
        });
        $(".required").each(function(){
            if( $(this).is(":visible") ){
                if( !$(this).val() ){
                    error = true;
                    $(this).addClass("field-error");
                }
            }
        });
        if( error ){
            e.preventDefault();
            alert("Veuillez renseigner tous les champs obligatoires");
        }
    });

    if( $("#form-financement").length ){  //on vérifie qu'on est sur le form de financement.
        $(".btn-financement").each(function(){
            var hid = $(this).data("hidden");
            var valhid = $("#"+hid).val();
            var valbtn = $(this).data("value");
            if( valhid == valbtn ){
                $(this).click();
            }
        });
    }

});
