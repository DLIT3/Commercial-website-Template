$().ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
});


$(document).ready(function() {
    // add smooth scrolling to all links
    $("nav a[href*=#], i").on('click', function(event){
        // Make sure this.hash has a value before overriding behaviour
        if(this.hash !== ""){
            // Prevent default anchor click behaviour
            event.preventDefault();

            // Store hash
            var hash = this.hash

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                // add hash (#) to URL when done scrolling
                window.location.hash = hash;
            });
        } //End if
    });
});


AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
});