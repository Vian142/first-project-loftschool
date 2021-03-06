$(function () {
    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {
    }
    ;
    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });

});


$(document).ready(function () {

    /*Иконки диаграмм*/
    $(function () {
        $(".dial").knob({
            'width': 120,
            'height': 120,
            'fgColor': '#165ad1',
            'displayInput': false
        });
    });

    // Кнопка меню
    $(".btn-sandwitch").click(function (e) {
        e.preventDefault();
        $(".btn-sandwitch__toggle").toggleClass("active");
    });
    $(".nav-list__item__link").click(function () {
        $(".wrap-navigation").fadeOut(600);
        $(".btn-sandwitch__toggle").toggleClass("active");
    });

    // Появление меню
    $(".btn-sandwitch").click(function () {
        if ($(".wrap-navigation").is(":visible")) {
            $(".wrap-navigation").fadeOut(400);
        } else {
            $(".wrap-navigation").fadeIn(200);
        };
    });




    /* Вращение блока авторизации */
    var btnSignIn = $('.btn-SignIn'),
        authorizationBlock = $('.authorization-block'),
        welcomeBlock = $('.welcome-block'),
        loginBlock = $('.login-block'),
        btnBack = $('.btn-back');
// Кнопка авторизоваться
    btnSignIn.click(function (e) {
        e.preventDefault();
        btnSignIn.fadeOut(150);
        $(authorizationBlock).addClass('flipper');
    });
// Кнопка На главную
    btnBack.click(function (e) {
        e.preventDefault();
        btnSignIn.fadeIn(150);
        $(authorizationBlock).removeClass('flipper');
    });



    /* Блог */

    /*Открытие адаптивного меню*/
    (function(){
        var btnListPost =   $('.list-post-btn'),
            listPost    =   $('.wrapper-list-post');
        $(btnListPost).click(function(){
            $(listPost).toggleClass('view-list')
        });
    })();

    /* Скроллирование Блог*/

var listPost        = $('.list-post'),
    listPostItem    = $('.list-post__item'),
    listPostLink    = $('.list-post__item__link'),
    sectionPosts    = $('.section-posts'),
    posts           = $('.post'),
    lastId;

    $(document).scroll(function () {


        if ($(".blog").length) {
            var blogOffsetTop = $(sectionPosts).offset().top;
        }
        if ( ($(document).scrollTop() >= blogOffsetTop) ) {
            //listPost
            $(listPost).addClass('fixed');
            $(listPost).removeClass('not-fixed');
        }
        if ( ($(document).scrollTop() < blogOffsetTop) ){
            $(listPost).removeClass('fixed');
            $(listPost).addClass('not-fixed');
        }
    });

    $(listPostLink).click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(posts).attr(id);
        console.log(id);
        console.log(top);
        $('body,html').animate({scrollTop: top}, 500);
    });

    /*---*/


});


$(window).load(function () {

});
