$(function () {
    'use strict'

    // Client Slider Start Here
    $('.cliant_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1500,
        arrows: false,
        // prevArrow: '<i class="fas fa-arrow-left prev_aro"></i>',
        // nextArrow: '<i class="fas fa-arrow-right nxt_aro"></i>',
        dots: true,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: false
                }
            }
        ]
    });


    // Team Slider Start Here
    $('.team_row').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 0,
        speed: 2000,
        arrows: false,
        dots: true,
        infinite: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false
            }
        }
    ]
    });


    // Testimonial Slider Start Here
    $('.testimonial_row').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 2000,
        dots: true,
        arrows: false,
        // prevArrow: '<i class="fas fa-arrow-left-long prev_aro"></i>',
        // nextArrow: '<i class="fas fa-arrow-right-long nxt_aro"></i>',
        infinite: false
    });

});