<script type="text/javascript">
$(document).delegate("#resultat","pageshow", function (event) {
	// DELETE ITEMS
	localStorage.removeItem('derniererecherche');
	localStorage.removeItem('phraserecherche');
	// CREATE ITEMS
	var lastSearch = "$$REP:QRY replace %2f / removeqry annlistepg removeqry lang$$";
	var phraseSearch = "$$ANNLISTE:PHRASE pcase smalltextv2 40$$";
	localStorage.setItem('derniererecherche',lastSearch);
	localStorage.setItem('phraserecherche',phraseSearch);
});
</script>