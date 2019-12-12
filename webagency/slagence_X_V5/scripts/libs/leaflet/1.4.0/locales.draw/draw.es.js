var lngES = 'es', htmlLangES = $('html').attr('lang');
if (htmlLangES != undefined && htmlLangES != null) { lngES = htmlLangES; }

if (L && L.drawLocal && lngES == 'es') {
	var _L = L.drawLocal;
	
	if (_L.draw) {
		var _draw = L.drawLocal.draw;
		
		// toolbar
		_draw.toolbar.actions.title = 'Cancelar dibujo';
		_draw.toolbar.actions.text = 'Cancelar';
		
		_draw.toolbar.finish.title = 'Terminar dibujo';
		_draw.toolbar.finish.text = 'Terminar';
		
		_draw.toolbar.undo.title = 'Eliminar último punto dibujado';
		_draw.toolbar.undo.text = 'Eliminar último punto';
		
		
		_draw.toolbar.buttons.polyline = 'Dibujar una polilínea';
		_draw.toolbar.buttons.polygon = 'Dibujar un polígono';
		_draw.toolbar.buttons.rectangle = 'Dibujar un rectángulo';
		
		_draw.toolbar.buttons.circle = 'Dibujar un círculo';
		_draw.toolbar.buttons.marker = 'Dibujar un marcador';
		_draw.toolbar.buttons.circlemarker = 'Dibujar un marcador circular';
		
		// handlers
		_draw.handlers.circle.tooltip.start = 'Haz click y arrastra para dibujar un círculo';
		_draw.handlers.circle.radius = 'Radio';
		
		_draw.handlers.circlemarker.tooltip.start = 'Haz click en el mapa para situar el marcador circular';
		
		_draw.handlers.marker.tooltip.start = 'Haz click en el mapa para situar el marcador';
		
		//_draw.handlers.polygon.error = '<strong>Error:</strong>';
		_draw.handlers.polygon.tooltip.start = 'Haz click para empezar a dibujar la forma';
		_draw.handlers.polygon.tooltip.cont = 'Haz click para continuar dibujando la forma';
		_draw.handlers.polygon.tooltip.end = 'Haz click en el primer punto para cerrar la forma';
		
		_draw.handlers.polyline.error = '<strong>Error:</strong> las líneas no deben cruzarse';
		_draw.handlers.polyline.tooltip.start = 'Haz click para empezar a dibujar la línea';
		_draw.handlers.polyline.tooltip.cont = 'Haz click para continuar dibujando la línea';
		_draw.handlers.polyline.tooltip.end = 'Haz click en el último punto para terminar la línea';
		
		_draw.handlers.rectangle.tooltip.start = 'Haz click y arrastra para dibujar un rectángulo';
		
		_draw.handlers.simpleshape.tooltip.end = 'Suelta el ratón para terminar de dibujar';
	}
	
	if (_L.edit) {
		var _edit = L.drawLocal.edit;
		
		// toolbar
		_edit.toolbar.actions.save.title = 'Guardar los cambios';
		_edit.toolbar.actions.save.text = 'Guardar';
		
		_edit.toolbar.actions.cancel.title = 'Cancelar la edición, descarta todos los cambios';
		_edit.toolbar.actions.cancel.text = 'Cancelar';
		
		_edit.toolbar.actions.clearAll.title = 'Limpiar todas las capas';
		_edit.toolbar.actions.clearAll.text = 'Limpiar todo';
		
		_edit.toolbar.buttons.edit = 'Editar capas';
		_edit.toolbar.buttons.editDisabled = 'No hay capas que editar';
		_edit.toolbar.buttons.remove = 'Eliminar capas';
		_edit.toolbar.buttons.removeDisabled = 'No hay capas que eliminar';
		
		// handlers
		_edit.handlers.edit.tooltip.text = 'Arrastra el marcador para editar la forma';
		_edit.handlers.edit.tooltip.subtext = 'Haz click en cancelar para deshacer los cambios';
		
		_edit.handlers.remove.tooltip.text = 'Haz click en una forma para eliminarla';
	}
}
