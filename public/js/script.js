/* Author: Chad Schulz
   Date: 11/14/11
*/

/* Homepage slides */
jQuery(function(){
	jQuery('#slides').slides({
		preload: true,
		preloadImage: '../img/loading.gif',
		play: 5000,
		pause: 2500,
		hoverPause: true,
		effect: 'fade',
		crossfade: true,
		slideSpeed: 350,
		fadeSpeed: 500
	});
});

/* Community Projects Switcher */
jQuery(document).ready(function() {
	jQuery('#MosineeVeteransMemorial').hide();	
	jQuery('#RothschildVeteransPark').show();			   
						   
	jQuery('#btnRothschildVeteransPark').click(function() {
		jQuery('#RothschildVeteransPark').show();
		jQuery('#MosineeVeteransMemorial').hide();
		jQuery('#btnRothschildVeteransPark').addClass("current");
		jQuery('#btnMosineeVeteransMemorial').removeClass("current");
	});
	jQuery('#btnMosineeVeteransMemorial').click(function() {
		jQuery('#RothschildVeteransPark').hide();
		jQuery('#MosineeVeteransMemorial').show();
		jQuery('#btnRothschildVeteransPark').removeClass("current");
		jQuery('#btnMosineeVeteransMemorial').addClass("current");
	});
});

/* Special Projects Switcher */
jQuery(document).ready(function() {
	jQuery('#Hardscapes').hide();	
	jQuery('#WaterFeatures').show();			   
						   
	jQuery('#btnWaterFeatures').click(function() {
		jQuery('#WaterFeatures').show();
		jQuery('#Hardscapes').hide();
		jQuery('#btnWaterFeatures').addClass("current");
		jQuery('#btnHardscapes').removeClass("current");
	});
	jQuery('#btnHardscapes').click(function() {
		jQuery('#WaterFeatures').hide();
		jQuery('#Hardscapes').show();
		jQuery('#btnWaterFeatures').removeClass("current");
		jQuery('#btnHardscapes').addClass("current");
	});
});