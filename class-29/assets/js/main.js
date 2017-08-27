(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	$(".portfolio-list").masonry({
    		percentPosition: true,
    		fitWidth: true,
    	});


    	$(".single-portfolio-item").hover(function(){
    		$(".single-portfolio-item .portfolio-hover h3").removeClass("animated fadeInUp");
    		$(this).find(".portfolio-hover h3").addClass("animated fadeInUp");

    		$(".single-portfolio-item .portfolio-link").removeClass("animated fadeInUp");
    		$(this).find(".portfolio-hover .portfolio-link").addClass("animated fadeInUp");
    	});


    	$(".menu-trigger").on('click',function(){
    		/* Act on the event */
    		$(".offcanvas-menu").addClass("active");
    		$(".offcanvas-menu-overlay").addClass("active");
    	});


    	$(".offcamvas-menu-close i.fa,.offcanvas-menu-overlay").on('click',function(){
    		/* Act on the event */
    		$(".offcanvas-menu").removeClass("active");
    		$(".offcanvas-menu-overlay").removeClass("active");
    	});


        


    });


    jQuery(window).load(function(){
        
    });


}(jQuery));