function loadCharts (context, options) { 
    //Avoid errors testing attributes
    if (options === undefined) {
        options = {}
    }
    
    function lisibilite_nombre(nbr){
				var nombre = ''+nbr;
				var retour = '';
				var count=0;
				for(var i=nombre.length-1 ; i>=0 ; i--)
				{
					if(count!=0 && count % 3 == 0)
						retour = nombre[i]+' '+retour ;
					else
						retour = nombre[i]+retour ;
					count++;
				}
				return retour;
		}

    $("table", context).each(function() {
        var type = '',
            cat = [],
            data = [],
            percent = [],
            full_date = [],
            colors = [],
            borderColor,
            table = $(this),
            id = this.id,
            title = $("caption", table).text(),
            head = $("thead", table),
            body = $("tbody", table),
            div = $('<div class="chart"></div>'),
            title_margin = 15,
            pie_data = undefined;

        if (id !== "evolution-taxe") {
            if (table.hasClass('column')) {
                type = 'column';
                if (table.parent().attr('id') === 'demographique') {
                    colors = ['#B2C909'];
                    borderColor = '#6F8A09';
                } else {
                    colors = ['#01AED9'];
                    borderColor = '#006E8F';
                }
            } else if (table.hasClass('pie')) {
                type = 'pie';
                if (id === 'repartition-hf') {
                    colors = ['#00AED9', '#D82A4D'];
                } else {
                    colors = ['#006E8F', '#0096C1', '#01AED9'];
                }
            } else if (table.hasClass('line')) {
                type = 'line';
                colors: ['#F00000'];
            }

            $("th", head).each(function() {
                var th = $(this);
                if (!th.hasClass('empty')) {
                    cat.push(th.text());
                    if (type === 'line') {
                        full_date.push(th.attr('title'));
                    }
                }
            });

            $("tr", body).each(function() {
                var tr = $(this),
                is_percent_tr = tr.hasClass('pourcentage');

                $("td", tr).each(function(index) {
                    var value;

                    if (is_percent_tr === true) {
                        percent.push($(this).text());
                    } else {
                        //value = parseInt($(this).text());
                        value = parseFloat($(this).text().replace(',', '.'));

                        if (type === 'pie') {
                            data.push([cat[index], value]);
                            title_margin = 35;
                        } else {
                            data.push(value);
                        }
                    }
                });
            });
            data = [{data: data}]; // modifié en objet pour gérer les taxes pro
        } else { //taxe pro
            type = 'column';
            borderColor = '#FFFFFF';
            colors = ['#006E8F', '#0096C1', '#01AED9','#00CEFC'];
            $("th", head).each(function() {
                var th = $(this);
                        if (!th.hasClass('empty')) {
                    cat.push(th.html());
                }
            });

            var td_data = {};

            $("tr", body).each(function() {

                var tr = this;
                td_data = {},
                td_data["data"] = [];

                $("td", tr).each(function (index_td) {
                    var value = $(this).text().replace(',', '.');
                    if (index_td === 0)  {
                        td_data["name"] = value;
                    } else {
                        td_data["data"].push(parseFloat(value));
                    }

                });
                data.push(td_data); 
            }); 
        }
        table.after(div).remove();
        div.attr('id', id);

        var chart = new Highcharts.Chart({
            credits: {
                enabled: false
            },
            legend: {
                enabled: (id != "evolution-taxe") ? (false) : (true),
                width:250
            },
            colors: colors,
            chart: {
                renderTo: id,
                type: type,
                height : (context !== "#demographique_sitemap") ? (null) : (200),
            		width : (context !== "#demographique_sitemap") ? (null) : (300),
                events: {
                    load: function () {
                        //Add the grey background to pie
                        if (type === 'pie') {
                            this.renderer.circle(pie_data.centerX, pie_data.centerY, pie_data.radius + 10).attr({fill: '#eeeeee'}).add();
                        }

                        if (options.pre_anim_callback) {
                            options.pre_anim_callback();
                        }

                        $("#"+id).animate({opacity: 1}, 1000, function() {
                            if (options.post_anim_callback) {
                                options.post_anim_callback();
                            }
                        });
                    }
                }
            },
            title: {
                text: title,
                margin: title_margin,
                style: {width:'300px',fontSize:'14px'}
            },
            xAxis: {
                gridLineWidth : 0,
                categories: cat,
                tickWidth: 0,
                //la barre d'axe en bordure grise
                lineColor: '#c8c8c8',
                lineWidth: (type === 'line') ? (0) : (3),
                offset: (type === 'line') ? (0) : (10),
                labels: {
                    align: (type === 'line') ? ('right') : ('center'),
                    rotation: (type === 'line') ? (300) : (0),
                    style: (id != "evolution-taxe") ? ({fontSize:'11px',width:'70px'}) : ({fontSize:'11px',width:'130px'}),
                                margin:5,
                                useHTML: true
                }
            },
            yAxis: {
                                    //min: 0,
                labels : {
                    enabled: (type === 'line' || id === "evolution-taxe") ? (true) : (false),
                    formatter: function () {
                        if(id != "evolution-taxe"){
                        return this.value + ' € / m²';
                      }else{
                        return this.value;
                      }
                    }
                },
                gridLineWidth : (type === 'line' || id === "evolution-taxe") ? (1) : (0),
                title: {
                   text: null
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        color: '#4BA700',
                        'font-weight': 'bold'
                    }
                } //stackLabels
             }, //yAxis
             plotOptions: {
                line: {
                    lineWidth: 1,
                    marker: {
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null // inherit from series
                    }
                },
                column:{
                    shadow: false,
                    borderRadius: 5,
                    borderColor: borderColor,
                    dataLabels: {
                            rotation: (id !== "evolution-taxe") ? (0) : (-90),
                        verticalAlign: 'bottom',
                        color: (id != "evolution-taxe") ? ('#024a5f') : ('#ffffff'),
                        align: (id != "evolution-taxe") ? ('center') : ('right'),
                        x: (id != "evolution-taxe") ? (0) : (-5),
                        y: (id != "evolution-taxe") ? (-5) : (2),
                        enabled: (id != "evolution-taxe") ? (percent.length > 1) : (true),  //Disabled if no data to display
                        style: {
                           'font-weight': 'bold'
                        },
                        formatter: function () {
                            //this.x => index
                            if(id != "evolution-taxe"){
                                return percent[this.point.x] + '%';
                            }else{
                                return this.y;
                            }

                        }
                    },
                    pointWidth:(id !== "evolution-taxe") ? (45) : (20)
                    //stacking: 'normal' stackLabel isn't display without
                },
                pie: {
                    shadow: false,
                    size: (context !== "#demographique_sitemap") ? ('75%') : ('95%'),
                    borderColor: "#ECECEC",
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        distance:10,
                        color: "#333333",
                        formatter: function () {
                            var ref = this.point.group,
                                coords = ref.getBBox(),
                                arc = this.point.graphic,
                                angle = arc.end - arc.start,
                                x,
                                y,
                                text = '';

                            if (pie_data === undefined) {
                                pie_data = {
                                    centerX: this.series.center[0] + ref.attr('translateX'),
                                    centerY: this.series.center[1] + ref.attr('translateY'),
                                    radius: arc.r
                                }
                            }

                            x = Math.cos(arc.start + (angle / 2)) * (arc.r / 2) + pie_data.centerX,
                            y = Math.sin(arc.start + (angle / 2)) * (arc.r / 2) + pie_data.centerY;

                            if (percent[this.point.x] === '' || percent[this.point.x] === undefined) {
                                percent[this.point.x] = Math.round(this.percentage);
                            }

                            text = percent[this.point.x] + '%'

                            ref.renderer.text(text, x, y)
                                .attr({
                                    'text-anchor': 'middle',    //center the SVG text
                                    className: 'ieFix'          //Class to apply style for IE < 8 (text is not in SVG, but in a span)
                                })
                                .css({
                                    color: 'white',
                                    'font-weight': 'bold'
                                })
                                .add()
                                .toFront();
                            //le texte normal au bout du connecteur
                            return this.point.name;

                        }
                    }
                } //pie
             }, //plotOptions
            series: data, /*series: [{data: data }],*/
            tooltip: {
                formatter: function() {
                    var tooltip_text;
                    if (type === 'pie') {
                        tooltip_text = this.point.name + ': '+ percent[this.point.x] + '%';
                    } else if (type === 'line') {
                        tooltip_text = '<b>' + full_date[this.point.x] + ': </b>' + (Math.round(this.y * 100) / 100);
                    } else if(id === "evolution-taxe") {
                        tooltip_text = this.series.name + ': '+ this.y;
                    }else{
                        tooltip_text = this.x + ': '+ lisibilite_nombre(this.y);
                    }
                    return tooltip_text;
                }
            }
        }) //new highcharts
    }); //each
} //loadCharts
