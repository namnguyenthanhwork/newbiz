$(window).ready(function () {

    // Preloader (if the #preloader div exists)
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });

    // scroll back
    $(window).scroll(function () {
        this.scrollY > 20 ? $(".header").addClass("sticky") : $(".header").removeClass("sticky"), this.scrollY > 20 ? $(".scroll-up-btn").addClass("show") : $(".scroll-up-btn").removeClass("show")
    }), $(".scroll-up-btn").click(function () {
        $("html").animate({
            scrollTop: 0
        }), $("html").css("scrollBehavior", "auto")
    })

    // toggle active link
    $(".nav-right>ul>li a").click(function () {
        $("html").css("scrollBehavior", "smooth"), $(".nav-right>ul>li").removeClass("active"), $(this).addClass("active")
    })

    // Porfolio isotope and filter 
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-items'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

    // Smooth scroll for the navigation and links with .scrollto classes
    $('.navbar a, .mobile-nav a').on('click', function () {
        $("html").css("scrollBehavior", "smooth");
        var target = $(this.hash);
        if (target.length) {
            if ($(this).parents('.navbar, .mobile-nav').length) {
                $('.navbar .active, .mobile-nav .active').removeClass('active');
                $(this).closest('li').addClass('active');
            }

            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                $('.mobile-nav-overly').fadeOut();
            }
        }
    });

    // Initiate the wowjs animation library
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 50, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();

    // jQuery counterUp (used in Whu Us section)
    $('.counter-up').counterUp({
        delay: 10,
        time: 2000
    });

    // carousel
    // $(".carousel").owlCarousel({
    //     autoplay: !0,
    //     autoplayTimeout: 3e3,
    //     autoplaySpeed: 1500,
    //     margin: 20,
    //     loop: !0,
    //     nav: !1,
    //     dot: !0,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1024: {
    //             items: 3
    //         }
    //     }
    // })




});