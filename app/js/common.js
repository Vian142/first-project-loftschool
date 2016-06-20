$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});






$(document).ready(function() {

	function heightDetect(){
		$(".res").css("height", $(window).height());
	};

	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});


/*Иконки диаграмм*/
	$(function() {
	    $(".dial").knob();
	});


	// Кнопка меню
$(".btn-sandwitch").click(function() {
  $(".btn-sandwitch__toggle").toggleClass("active");
});
$(".nav-list__item__link").click(function(){
	$(".wrap-navigation").fadeOut(600);
	$(".btn-sandwitch__toggle").toggleClass("active");
});

// Появление меню
$(".btn-sandwitch").click(function(){
	if ($(".wrap-navigation").is(":visible")){
		$(".wrap-navigation").fadeOut(400);
	} else {
		$(".wrap-navigation").fadeIn(200);
	};
});
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
