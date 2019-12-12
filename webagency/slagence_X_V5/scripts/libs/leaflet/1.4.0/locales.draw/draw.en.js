var lngEN = 'en', htmlLangEN = $('html').attr('lang');
if (htmlLangEN != undefined && htmlLangEN != null) { lngEN = htmlLangEN; }

if (L && L.drawLocal && lngEN == 'en') {
	var _L = L.drawLocal;
	
	if (_L.draw) {
		var _draw = L.drawLocal.draw;
		
		// toolbar
		_draw.toolbar.actions.title = 'Cancel drawing';
		_draw.toolbar.actions.text = 'Cancel';
		
		_draw.toolbar.finish.title = 'Finish drawing';
		_draw.toolbar.finish.text = 'Finish';
		
		_draw.toolbar.undo.title = 'Delete last point drawn';
		_draw.toolbar.undo.text = 'Delete last point';
		
		
		_draw.toolbar.buttons.polyline = 'Draw a polyline';
		_draw.toolbar.buttons.polygon = 'Draw a polygon';
		_draw.toolbar.buttons.rectangle = 'Draw a rectangle';
		
		_draw.toolbar.buttons.circle = 'Draw a circle';
		_draw.toolbar.buttons.marker = 'Draw a marker';
		_draw.toolbar.buttons.circlemarker = 'Draw a circlemarker';
		
		// handlers
		_draw.handlers.circle.tooltip.start = 'Click and drag to draw circle.';
		_draw.handlers.circle.radius = 'Radius';
		
		_draw.handlers.circlemarker.tooltip.start = 'Click map to place circle marker.';
		
		_draw.handlers.marker.tooltip.start = 'Click map to place marker.';
		
		//_draw.handlers.polygon.error = '<strong>Error:</strong> FOO!';
		_draw.handlers.polygon.tooltip.start = 'Click to start drawing shape.';
		_draw.handlers.polygon.tooltip.cont = 'Click to continue drawing shape.';
		_draw.handlers.polygon.tooltip.end = 'Click first point to close this shape.';
		
		_draw.handlers.polyline.error = '<strong>Error:</strong> shape edges cannot cross!';
		_draw.handlers.polyline.tooltip.start = 'Click to start drawing line.';
		_draw.handlers.polyline.tooltip.cont = 'Click to continue drawing line.';
		_draw.handlers.polyline.tooltip.end = 'Click last point to finish line.';
		
		_draw.handlers.rectangle.tooltip.start = 'Click and drag to draw rectangle.';
		
		_draw.handlers.simpleshape.tooltip.end = 'Release mouse to finish drawing.';
	}
	
	if (_L.edit) {
		var _edit = L.drawLocal.edit;
		
		// toolbar
		_edit.toolbar.actions.save.title = 'Save changes.';
		_edit.toolbar.actions.save.text = 'Save';
		
		_edit.toolbar.actions.cancel.title = 'Cancel editing, discards all changes.';
		_edit.toolbar.actions.cancel.text = 'Cancel';
		
		_edit.toolbar.actions.clearAll.title = 'Clear all layers.';
		_edit.toolbar.actions.clearAll.text = 'Clear All';
		
		_edit.toolbar.buttons.edit = 'Edit layers.';
		_edit.toolbar.buttons.editDisabled = 'No layers to edit.';
		_edit.toolbar.buttons.remove = 'Delete layers.';
		_edit.toolbar.buttons.removeDisabled = 'No layers to delete.';
		
		// handlers
		_edit.handlers.edit.tooltip.text = 'Drag handles, or marker to edit feature.';
		_edit.handlers.edit.tooltip.subtext = 'Click cancel to undo changes.';
		
		_edit.handlers.remove.tooltip.text = 'Click on a feature to remove';
	}
}
