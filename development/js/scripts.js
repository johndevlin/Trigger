

/********************************

	Some scripts I regularly use. 
	-----------------------------
	
	It's doubtful these will be
	used in every project, please
	remove any unused script. 
	
*/


/*********************
	Navigation Drawer
*/

// Open / Close nav drawer 
$('a[data-navigation="open-navigation"]').click(function() { 

	$('html').toggleClass('the-nav-is-open');
	
});


// Close nav drawer on ESC
$(document).keyup(function(e) {
	
	if (e.keyCode == 27) { 
		$('html').removeClass('the-nav-is-open');
	}
	
}); 
	


/***************
	Main Slider
*/

$('.main-slider').bxSlider({
	easing: 'ease-in-out'
});





// Debounced Resize function
$(window).on("debouncedresize", function( event ) {
	// Guff
});


// Return false class for buttons
$('.return-false').click(function() {
	return false; 
});


// jQuery placeholder listener 
$('input, textarea').placeholder();


// Add current year to .current-year
var currentYear = new Date().getFullYear();
$('.current-year').text(currentYear);

