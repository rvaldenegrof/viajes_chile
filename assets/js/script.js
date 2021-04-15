/*$(function () {
    $(window).scroll(function () { 
        if($('#menu').offset().top > 100){
            $('#menu').addClass("bg-dark");
        } else {
            $('#menu').removeClass("bg-dark");
        }
    });

    $(window).scroll(function(){
        $('navbar').toggleClass('scrolled', 
        $(this).scrollTop() > 1080);
    });

    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
});
 */
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});