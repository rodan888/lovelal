$(function() {
	var main = {
		opt: {
			wind: $(window),
			img: $('img'),
			linc: $('a'),
			butSearch: $('#search'),
			autoriz: $('.autoriz'),
			filterB: $('.filters'),
			popupB: $('.popup-btn'),
			popupGl: $('.popup-photo-list'),
			magnific: $('.popup-slider'),
			magnificConf: {
				delegate: 'a',
				type: 'image',
				gallery: {
					enabled:true
				}
			},	
			uploadForm: $('#file-dropzone'), 
			uploadConfig: { 
				url: "/upload",
				maxFilesize: 5,   
				paramName: "uploadfile",
				maxThumbnailFilesize: 10,
				addRemoveLinks: true,
				previewsContainer: '.visualizacao', 
				previewTemplate : $('.preview').html(),
				accept: function(file, done) {
					if (file.name == "justinbieber.jpg") {
					  done("Naha, you don't.");
					}
					else { done(); }
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
		popup: function(){
			this.opt.popupB.on('click',function(event){
				event.preventDefault();		

				var popID = $(this).data('id'),
						popup = $('#'+ popID);				

				if ($(this).hasClass('popup-photo-list')) {
					var photoList = $('.popup-slider img'),
							photoL    = photoList.length-1,
							photoRes  = popup.find('.popup-content');
					photoRes.html("");
					for(var i = 0; i < photoL; i++ ){
						var listItem =  photoList[i].src;
						photoRes.append('<li class="ava-select"><img src="'+ listItem +'"></li>')
					};

					$('.ava-select').on('click', function(){
						var src = $(this).find('img').attr('src'),
							canvas = $('#panel');
						canvas.data('img',src).attr('data-img',src);
						$('#crop_result').attr('src',src);
						console.log(src);
					});

				};

				
				popup.fadeIn('slow')
					.css('height', $(window).height() + 'px')
					.find('.dropzone-previews, .popup-content')
					.append('<span class="fade_out">&#9587;</span>');

				$('.fade_out').click(function(){
					popup.fadeOut('slow');
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
		uploadFoto: function(){
			this.opt.uploadForm.dropzone(
				main.opt.uploadConfig
			);
		},
		rangeSlider: function(){
			
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
			if (this.opt.grid.length) {
				this.opt.grid.packery();
			};

			// myPopup
			this.popup();

			// this.rangeInput();
			this.logIn();
			this.filter();

			//Profile upload foto
			this.uploadFoto();



			this.rangeSlider();
	

			



			
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

	// if ($('.btn.crop').length) {
		$('.btn.crop').on('click', function(){
			imageCropper.init();
		});		
	// };
	
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
	
	
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};	
});


$(document).ready(function() {

// $(document).ready(function(){
//  $('.sortable').sortable();
   
// });


  // instantiate the uploader
 //  $('#file-dropzone').dropzone({ 
	// url: "/upload",
	// maxFilesize: 5,   
	// paramName: "uploadfile",
	// maxThumbnailFilesize: 10,
	// addRemoveLinks: true,
	// previewsContainer: '.visualizacao', 
	// previewTemplate : $('.preview').html(),
	// accept: function(file, done) {
	// 	if (file.name == "justinbieber.jpg") {
	// 	  done("Naha, you don't.");
	// 	  // $('.sortable').sortable('enable');
	// 	}
	// 	else { done(); }
	//  }
	// init: function() {
	//   this.on('completemultiple', function(file, json) {
	//    $('.sortable').sortable('enable');
	//   });
	//   this.on('success', function(file, json) {
	//     alert('aa');
	//   });
	  
	//   this.on('addedfile', function(file) {
	   
	//   });
	  
	//   this.on('drop', function(file) {
	//     console.log('File',file)
	//   }); 
	// }
  // });

});