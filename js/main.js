$(document).ready(function () {
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
        $("html").css("scrollBehavior", "smooth"), $(".nav-right>ul>li a").removeClass("active"), $(this).addClass("active")
    })

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
})