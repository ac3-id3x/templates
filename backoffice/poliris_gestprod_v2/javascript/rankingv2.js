function MakeGraph(renderTo, defaultSeriesType, marginRight, marginBottom, backgroundColor, legend, title, axeX, categories, axeY, series, reversed, typeAffichage)
{
//	this.renderTo = renderTo;
//	this.defaultSeriesType = defaultSeriesType;
//	this.marginRight = marginRight;
//	this.marginBottom = marginBottom;
//	this.backgroundColor = backgroundColor;
//	this.legend = legend;
//	this.title = title;
//	this.xAxis = axeX;
//	this.categories = categories;
//	this.yAxis = axeY;
//	this.series = series;
//	this.isReversed = reversed
//	this.typeAffichage = typeAffichage;
	
	var chartOptions = ({
		chart: {
			renderTo: renderTo,
			defaultSeriesType: defaultSeriesType,
			marginRight: marginRight,
			marginBottom: marginBottom,
			backgroundColor: backgroundColor
		},
		credits: {
			enabled: false
		},
		tooltip: {
			formatter: function () {
								var str = '';
								if(typeAffichage == 1) {
									str = this.y > 1 ? this.y + String.fromCharCode(232) + 'me positon' : this.y + 'ère position';
	             	 	str = 'Semaine '+ this.x +' : '+ str;
	             	}
	            	if(typeAffichage == 2) {
	             	 	str = 'Semaine '+ this.x +' : '+ this.y + ' %';
	             	}
	             	
	             	return str;
	            }
		},
		title: {
			text: title,
			x: -20 //center
		},
		legend: {
			verticalAlign: 'top',
			enabled: legend
		},
		xAxis: {
			title: {
				text: axeX
			},
			labels: {
				rotation: 45,
				enabled: true
			},
			categories: categories
		},
		yAxis: {
			reversed: reversed,
			title: {
				text: axeY
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		plotOptions: {
					line: {
						color :  '#3B494C',
						dataLabels: {
							enabled: true
						},
						enableMouseTracking: true
					},
					series: {
						cursor: 'pointer',
						events: {
							legendItemClick: function(event) {
																for(var i = 0; i < chart.series.length; i++) {
																    if(!chart.series[i].selected) {
																        chart.series[i].hide();
																    }
																	}
																}
							}
					}
				},
		series: []
	});

	// Remplissage des séries
	if(series != null)
	{
		$.each(series, function (i,elt) {
				chartOptions.series.push({
					name: elt.Name,
					data: elt.Values
				});
			}
		)
	}

	chart = new Highcharts.Chart(chartOptions);

	if(chart.series.length > 1)
	{
		var seriesY = chart.series;
		for(var i = 1; i < seriesY.length-1; i++) {
			seriesY[i].hide();    //Hide the series
	  }
	}

}

