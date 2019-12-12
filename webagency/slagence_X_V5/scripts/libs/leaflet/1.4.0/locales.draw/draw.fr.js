var lngFR = 'fr', htmlLangFR = $('html').attr('lang');
if (htmlLangFR != undefined && htmlLangFR != null) { lngFR = htmlLangFR; }

if (L && L.drawLocal && lngFR == 'fr') {
	var _L = L.drawLocal;
	
	if (_L.draw) {
		var _draw = L.drawLocal.draw;
		
		// toolbar
		_draw.toolbar.actions.title = 'Annuler le dessin';
		_draw.toolbar.actions.text = 'Annuler';
		
		_draw.toolbar.finish.title = 'Terminer le dessin';
		_draw.toolbar.finish.text = 'Terminer';
		
		_draw.toolbar.undo.title = 'Supprimer le dernier point tiré';
		_draw.toolbar.undo.text = 'Supprimer le dernier point';
		
		
		_draw.toolbar.buttons.polyline = 'Dessinez une polyligne';
		_draw.toolbar.buttons.polygon = 'Dessinez un polygone';
		_draw.toolbar.buttons.rectangle = 'Dessinez un rectangle';
		
		_draw.toolbar.buttons.circle = 'Dessiner un cercle';
		_draw.toolbar.buttons.marker = 'Dessinez un marqueur';
		_draw.toolbar.buttons.circlemarker = 'Dessinez un marqueur circulaire';
		
		// handlers
		_draw.handlers.circle.tooltip.start = 'Cliquez et faites glisser pour dessiner le cercle.';
		_draw.handlers.circle.radius = 'Rayon';
		
		_draw.handlers.circlemarker.tooltip.start = 'Cliquez sur la carte pour placer le marqueur circulaire.';
		
		_draw.handlers.marker.tooltip.start = 'Cliquez sur la carte pour placer le marqueur.';
		
		_draw.handlers.polygon.tooltip.start = 'Cliquez pour commencer à dessiner.';
		_draw.handlers.polygon.tooltip.cont = 'Cliquez pour continuer à dessiner.';
		_draw.handlers.polygon.tooltip.end = 'Cliquez sur le premier point pour fermer cette forme.';
		
		_draw.handlers.polyline.error = '<strong>Erreur:<strong> les polyligne ne peuvent pas traverser!';
		_draw.handlers.polyline.tooltip.start = 'Cliquez pour commencer à dessiner.';
		_draw.handlers.polyline.tooltip.cont = 'Cliquez pour continuer à dessiner.';
		_draw.handlers.polyline.tooltip.end = 'Cliquez sur le dernier point pour fermer cette forme.';
		
		_draw.handlers.rectangle.tooltip.start = 'Cliquez et faites glisser pour dessiner le rectangle.';
		
		_draw.handlers.simpleshape.tooltip.end = 'Relâchez la souris pour terminer le dessin.';
	}
	
	if (_L.edit) {
		var _edit = L.drawLocal.edit;
		
		// toolbar
		_edit.toolbar.actions.save.title = 'Sauvegarder les modifications.';
		_edit.toolbar.actions.save.text = 'Sauvegarder';
		
		_edit.toolbar.actions.cancel.title = "Annuler l'édition, rejette toutes les modifications.";
		_edit.toolbar.actions.cancel.text = 'Annuler';
		
		_edit.toolbar.actions.clearAll.title = 'Effacez toutes les collections.';
		_edit.toolbar.actions.clearAll.text = 'Tout effacer';
		
		_edit.toolbar.buttons.edit = 'Modifier les collections.';
		_edit.toolbar.buttons.editDisabled = 'Pas de collections à éditer.';
		_edit.toolbar.buttons.remove = 'Supprimez les collections.';
		_edit.toolbar.buttons.removeDisabled = 'Pas de collections à supprimer.';
		
		// handlers
		_edit.handlers.edit.tooltip.text = "Sélectionnez les poignées ou le marqueur pour modifier l'entité.";
		_edit.handlers.edit.tooltip.subtext = 'Cliquez sur annuler pour rétablir les modifications.';
		
		_edit.handlers.remove.tooltip.text = 'Cliquez sur une entité pour supprimer';
	}
}
