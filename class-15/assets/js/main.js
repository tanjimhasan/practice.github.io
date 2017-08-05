(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".portfolio-filter li").on("click", function() {
            $(".portfolio-filter li").removeClass("active");
            $(this).addClass("active");
        });
        
        $(".portfolio-item").filterizr({
            layout: "sameWidth",

        });    

    });


    jQuery(window).load(function(){

            
    });

}(jQuery));