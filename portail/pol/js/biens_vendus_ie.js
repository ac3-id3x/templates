$j(document).ready(function () {
    $j('#ka_liste_biens tr').not('.ka_biens_vendus_header, .ka_multipage, #ka_table_bottom_padding').mouseover(function () {
        $j(this).addClass('hoverIE');
    });
    $j('#ka_liste_biens tr').not('.ka_biens_vendus_header, .ka_multipage, #ka_table_bottom_padding').mouseout(function () {
        $j(this).removeClass('hoverIE');
    });
});