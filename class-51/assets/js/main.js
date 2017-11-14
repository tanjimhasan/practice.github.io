(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	$(".slider-area").owlCarousel({
    		items: 1,
    		loop: true,
    		autoplay: true,
    		nav: false,
    		dots: true,
    	});
        $(".logo-slider").owlCarousel({
            items: 5,
            margin:30,
            loop: true,
            nav: false,
            dots: false,

        });

    });


}(jQuery));