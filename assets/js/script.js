$(function () {
    /****SCROLL******/
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 600);
    });
    /****TOTLTIPS******/
    $('[data-toggle="tooltip"]').tooltip()
});
 

