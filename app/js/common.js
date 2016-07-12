$(function() {
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

/*Иконки диаграмм*/
	$(function() {
	    $(".dial").knob({
	    	'width': 120,
	    	'height': 120,
	    	'fgColor': '#165ad1',
	    	'displayInput': false
	    });
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

/*Вращение блока авторизации*/
  	var btnSignIn = $('.btn-SignIn'),
  		authorizationBlock = $('.authorization-block'),
  		welcomeBlock = $('.welcome-block'),
  		loginBlock = $('.login-block');

	btnSignIn.click(function(event) {
		$this.fadeOut(50);
		$(authorizationBlock).toggleClass('rotate-block');
	});


});




$(window).load(function() {

});
