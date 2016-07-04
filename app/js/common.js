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
	
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.autoriz a').click(function(event) {
		event.preventDefault();
		var t        = $(this),
			dataForm = t.data('form'),
			parrent  = t.parents('.autoriz');

		$('.autoriz a').not(t).removeClass('active');
		t.toggleClass('active');

		parrent.find('form').not('#'+dataForm).removeClass('active');
		$('#'+dataForm).toggleClass('active');		
	});

});
