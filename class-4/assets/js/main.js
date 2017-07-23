jQuery(document).ready(function($){
	$(".team-carousel").owlCarousel({
		items: 3,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		margin: 30,
		loop: true,
	});
});