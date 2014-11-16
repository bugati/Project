jQuery(document).ready(function(){
	
	var navOffset = jQuery("#fix").offset().top-3;
	
	jQuery(window).scroll(function(){
		var scrollPos = jQuery(window).scrollTop();
	
		if(scrollPos >= navOffset){
			
			jQuery("#fix").addClass("busfixed");
		
		}else{
			jQuery("#fix").removeClass("busfixed");
		}
		
	});

});


