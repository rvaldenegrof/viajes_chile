$(function () {
    $(window).scroll(function () { 
        if($('#menu').offset().top > 100){
            $('#menu').addClass("bg-dark");
        } else {
            $('#menu').removeClass("bg-dark");
        }
    });
});
 