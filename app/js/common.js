$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	
	$("form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {				
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$('.popup-slider').each(function() { 
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled:true
			}
		});
	});
	
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//Анимация логин регистрация
	$('.autoriz a').click(function(event) {
		event.preventDefault();
		var t        = $(this),
			dataForm = t.data('form'),
			parrent  = t.parents('.autoriz');

		$('.autoriz a').not(t).removeClass('active');
		toggleC(t);
		parrent.find('form').not('#'+dataForm).removeClass('active');			
		toggleC('#'+dataForm);
	});

	//Анимация фильтр
	$('#search').on('click',function(){
		toggleC(this);
		toggleC('.filters');
		// $(this).toggleClass('active');
	});


	function toggleC(el){
		$(el).toggleClass('active');
	};
});
