$(function() {
	var main = {
		opt: {
			wind: $(window),
			img: $('img'),
			linc: $('a'),
			butSearch: $('#search'),
			autoriz: $('.autoriz'),
			filterB: $('.filters'),
			magnific: $('.popup-slider'),
			magnificConf: {
				delegate: 'a',
				type: 'image',
				gallery: {
					enabled:true
				}
			},	
			grid: $('.grid'),
			packeryOptions: {
				itemSelector: '.form-card',
				gutter: 4
			},
			range: $('.double-handle-slider'),
			rangeMin: $('.min-value'),
			rangeMax: $('.max-value'),
			rangeConfig: {
				start: [ 0, 100 ],
				connect: true,
				tooltips: false,
				step: 1,
				range: {
					'min': [ 0 ],
					'max': [ 100 ]
				},
				format: {
					to: function(value) {
						return value;
					},
					from: function(value) {
						return value;
					}
				}
			}	
		},
		// rangeInput: function(){	
		// 	noUiSlider.create( main.opt.range, main.opt.rangeConfig);	
			
		// 	main.opt.range.noUiSlider.on('change', function( values, handle ) { 			
		// 		var rangeValues = values;
		// 		main.opt.rangeMin.value = rangeValues[0];
		// 		main.opt.rangeMax.value = rangeValues[1];
			
		// 		var val = values[handle];			
		// 		if(handle) {
		// 			main.opt.rangeMax.value = Math.round(val);
		// 		} else {
		// 			main.opt.rangeMin.value = Math.round(val);
		// 		}
		// 	});	
		// 	main.opt.rangeMin.addEventListener('change', function(){
		// 		main.opt.range.noUiSlider.set([this.value, null]);
		// 	});				
		// 	main.opt.rangeMax.addEventListener('change', function(){
		// 		main.opt.range.noUiSlider.set([null, this.value]);
		// 	});
		// },
		filter: function(){
			this.opt.butSearch.on('click',function(){
				$(this).addClass('active');
				main.toggleC(main.opt.filterB);			

				main.opt.filterB.find('.container')
					.append('<span class="close"><i class="fa fa-times"></i></span>');

				$('.close').on('click',function(){
					main.opt.butSearch.removeClass('active');
					main.toggleC(main.opt.filterB);			
					$(this).detach();
				});
			});
		},
		logIn: function(){
			var loginB = this.opt.autoriz.find('a');
			loginB.on('click', function(event){
				event.preventDefault();
				var t     = $(this),
					  dataForm = t.data('form');
					
				loginB.not(t).removeClass('active');
				t.toggleClass('active');
				main.opt.autoriz.find('form').not('#'+dataForm).removeClass('active');			
				$('#'+dataForm).toggleClass('active');
			});
		},		
		toggleC: function(el){
			el.toggleClass('active');
		},
		winH: function(){			
			return this.opt.wind.height();
		},
		fullHeight: function(el){
			$(el).css('min-height',main.winH()+'px');
		},
		dragstart: function(el){
			$(el).on('dragstart',function(event){
				event.preventDefault();
			});
		},
		init: function(){
			// default functions
			this.dragstart(this.opt.img);
			this.dragstart(this.opt.linc);

			//Magnific popup slider
			this.opt.magnific.each(function(){ 
				$(this).magnificPopup(main.opt.magnificConf);
			});
			//Packery grid
			this.opt.grid.packery();




			// this.rangeInput();
			this.logIn();
			this.filter();

			var stepSlider = document.getElementById('slider-step');

				noUiSlider.create(stepSlider, {
					start: [ 20 ],
					step: 1,
					range: {
						'min': [  0 ],
						'max': [ 100 ]
					}
				});
			var stepSliderValueElement = document.getElementById('slider-step-value');

			stepSlider.noUiSlider.on('update', function( values, handle ) {
				stepSliderValueElement.innerHTML = values[handle];
			});



			
			// make all grid-items draggable
			// var $grid = this.opt.grid.packery();
			// $grid.find('.form-card').each( function( i, gridItem ) {
			//   var draggie = new Draggabilly( gridItem );
			//   // bind drag events to Packery
			//   $grid.packery( 'bindDraggabillyEvents', draggie );
			// });
		}
	};




	main.init();

	// $(document).ready(function(){

	// });

	
	// $("form").submit(function() {
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", 
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Thank you!");
	// 		setTimeout(function() {				
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	
	
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};	
});


$(document).ready(function() {
  var doubleHandleSlider = document.querySelector('.double-handle-slider');
	var minValInput = document.querySelector('.min-value');
	var maxValInput = document.querySelector('.max-value');

	
	noUiSlider.create(doubleHandleSlider, {
		start: [ 0, 100 ],
		connect: true,
		tooltips: false,
		step: 1,
		range: {
			'min': [ 0 ],
			'max': [ 100 ]
		},
		format: {
			to: function(value) {
				return value;
			},
			from: function(value) {
				return value;
			}
		}
	});	
	doubleHandleSlider.noUiSlider.on('change', function( values, handle ) { 			
		var rangeValues = values;

			minValInput.value = rangeValues[0];
			maxValInput.value = rangeValues[1];
			
			// This version updates a single input on change
			var val = values[handle]; // 0 or 1
			
			if(handle) {
				maxValInput.value = Math.round(val);
			} else {
				minValInput.value = Math.round(val);
			}
	});	
		minValInput.addEventListener('change', function(){
			doubleHandleSlider.noUiSlider.set([this.value, null]);
		});
			
		maxValInput.addEventListener('change', function(){
			doubleHandleSlider.noUiSlider.set([null, this.value]);
		});
});