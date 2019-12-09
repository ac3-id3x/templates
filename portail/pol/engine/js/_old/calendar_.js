// By lenhatanh | nhatanh.voxfamilyvn.com | Depends on mootools
var DateTime = new Class({
	
	DayofMonth: function(m,y) {
		switch(m){
			case 1 :
			case 3 :
			case 5 :
			case 7 :
			case 8 :
			case 10 :
			case 12 :
				return 31; break;
			case 4 :
			case 6 :
			case 9 :
			case 11 :
				return 30; break;
			case 2 : return y % 4 == 0 ? 29 : 28; break;
		}
	},
	
	DatetoWeekday: function(d,m,y) {
		var d = new Date(y,m-1,d);
		_1 = d.getDay();
		_2 = d.getMonth();
		if(_2 == m-1) return _1!=0 ? _1 : 7 //Sunday is 7
		else return false;
	}
	
});

var Calendar = DateTime.extend({
	
	info: function(opt) {
		this.opt = {
			min_month: 1,
			min_year: 1,
			max_month: 12,
			max_year: 9999,
			position: 'after',
			onSelect: Class.empty,
			link_next: '>>',
			link_prev: '<<',
			weekday_text: 'Lun|Mar|Mer|Jeu|Ven|Sam|Dim',
			month_text: 'Janvier|Février|Mars|Avril|Mai|Juin|Juillet|Août|Septembre|Octobre|Novembre|Décembre',
			auto_show: true
		};
		Object.extend(this.opt, opt || {});
		
		this.year = this.opt.year ? this.opt.year : this.opt.c_year;
		this.month = this.opt.month ? this.opt.month : this.opt.c_month;
		
	},
	
	initialize: function(opt) {
		this.info(opt);
		if(this.opt.auto_show) this.Create();
		else this.ready_show = false;
	},
	
	prepairCreate: function() {

		if(this.year == this.opt.c_year) {
			if(this.month == this.opt.c_month) _3 = this.opt.c_day;
			else if(this.month > this.opt.c_month) _3 = 0;
			else _3 = 32
		} else if(this.year < this.opt.c_year) _3 = 32;
		else _3 = 0;
		
		_7 = this.DatetoWeekday(1,this.month,this.year);		
		_4 = this.DayofMonth(this.month,this.year);
		_5 = _4 + _7 - 1;
		_6 = Math.ceil(_5 / 7) * 7;

		this.html = '<div class="'+ this.opt.css_title +'">';
		_1 = this.opt.month_text.split('|');
		this.html += '<span id="' + this.opt.e_name + '_prev">' + this.opt.link_prev + '</span> '+ _1[this.month-1] + '.' + this.year;
		this.html += ' <span id="' + this.opt.e_name + '_next">' + this.opt.link_next + '</span></div>';
		
		_2 = this.opt.weekday_text.split('|');
		for(i=0;i<=6;i++) {
			this.html += '<div class="' + this.opt.css_day + '">' + _2[i] + '</div>';
		}

		_8 = 1;
		var el = new Array()
		var el_v = new Array();
		
		for(i=1;i<=_6;i++) {
			if(i>=_7 && i<=_5) {
				
				id = this.opt.e_name + '_element_' + _8;
				el.push(id);
				el_v.push(_8);
				this.html += '<div id="' + id + '" class="';

				if(_8<_3)  this.html += this.opt.css_pastday;
				else if(_8==_3)  this.html += this.opt.css_currentday;
				else  this.html += this.opt.css_futureday;

				this.html += '">' + _8 + '</div>';
				_8++;
				
			} else this.html += '<div class="' + this.opt.css_emptyday + '">&nbsp;</div>';
		}
		this.el = el;
		this.el_v = el_v;
		
	},
	
	Create: function() {
		if(!this.opt.c_day || !this.opt.c_year || !this.opt.c_month) return;
		/*_1 = $check($(this.opt.e_name), $(this.opt.e_name), new Element(this.opt.e_name));*/
		if(!$(this.opt.e_name)) {
			var _1 = new Element(this.opt.e_name);
			_1.id = this.opt.e_name;
		}
		else _1 = $(this.opt.e_name);
		
		this.prepairCreate();
		_1.addClassName(this.opt.css_calendar);
		_1.setStyle('display', 'block');
		_1.setStyle('opacity', 0);
		if(!this.opt.auto_show) {
			y = $(this.opt.p_name).getOffset('top') + 5;
			x = $(this.opt.p_name).getOffset('left') + 5;
			_1.setStyle('position', 'absolute');
			_1.setStyle('top', y + 'px');
			_1.setStyle('left', x + 'px');
			_1.setStyle('z-index', '1000');
			this.opt.position = 'before';
		}
		_1.setHTML(this.html);
		_1.inject(this.opt.p_name, this.opt.position).effect('opacity').custom(0,1);
		
		this.el.each(function(e, i){
			$(e).addEvent('click', function(){
				if(!this.opt.auto_show) this.hide();
				this.opt.onSelect([this.month,this.el_v[i],this.year], this);
			}.bind(this));
		}, this);
		$(this.opt.e_name + '_prev').addEvent('click', function(){this.prevMonth()}.bind(this));
		$(this.opt.e_name + '_next').addEvent('click', function(){this.nextMonth()}.bind(this));
		
		this.ready_show = true;
	},
	
	hide: function() {
		if(!this.ready_show) return;
		else {
			$(this.opt.e_name).effect('opacity').custom(1,0);
			this.ready_show = false;
		}
	},
	
	show: function() {
		if(!$(this.opt.e_name)) this.Create();
		else {
			if(this.ready_show) return;
			else {
				$(this.opt.e_name).effect('opacity').custom(0,1);
				this.ready_show = true;
			}
		}
	},
	
	prevMonth: function () {
		if(this.year==this.opt.min_year) {
			if(this.month ==this.opt.min_month) return;
			else this.month--;
		} else {
			if(this.month==1) {
				this.month=12;
				this.year--;
			} else this.month--;
		}
		this.Create();
	},
	
	nextMonth: function () {
		if(this.year==this.opt.max_year) {
			if(this.month ==this.opt.max_month) return;
			else this.month++;
		} else {
			if(this.month==12) {
				this.month=1;
				this.year++;
			} else this.month++;
		}
		this.Create();
	}

});