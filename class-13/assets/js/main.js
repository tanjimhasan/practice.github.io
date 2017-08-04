(function ($) {
	"use strict";

    jQuery(document).ready(function($){
 
    	var hopageSlides= $(".homepage-slides");

    	hopageSlides.owlCarousel({
    		items: 1,
    		loop: true,
    		autoplay: true,
    		nav: true,
    		navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"]
    	});

    	hopageSlides.on('translated.owl.carousel', function(event) {
    	    $(".slider-text h2").css('color','#01C0DA');
    	});

    	hopageSlides.on('translate.owl.carousel', function(event) {
    		$(".slider-text p").removeClass("animated slideInRight");
    	    $(".slider-text h2").removeClass("animated jackInTheBox");
    	});

    	hopageSlides.on('translated.owl.carousel', function(event) {
    		$(".slider-text p").addClass("animated slideInRight");
    	    $(".slider-text h2").addClass("animated jackInTheBox");
    	   
    	});

       	$(".video-bg-area").YTPlayer({
       	    fitToBackground: true,
       	    videoId: '0c57WC9Vc30'
       	});



    });


    jQuery(window).load(function(){

        
    });


}(jQuery));