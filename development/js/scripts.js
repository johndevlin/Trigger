

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

// Open nav 
$('a[data-navigation="open-navigation"]').click(function() { 

	$('.slide-me').toggleClass('the-nav-is-open');
	$('.slide-me').css('margin-left', '0px');
	
});

// Move button and nav over 10px on hover of button
$('a[data-navigation="open-navigation').mouseenter(function() {
	
	if (
		!$('a[data-navigation="open-navigation"').hasClass('the-nav-is-open')
	)
	{
		$('.slide-me').css('margin-left', '10px');
	}
	
});

// Move button and nav back to default position after hover
$('a[data-navigation="open-navigation').mouseleave(function() {
	
	$('.slide-me').css('margin-left', '0px');
	
});



/***************
	Main Slider
*/

$('.main-slider').bxSlider({
	
});





// Debounced Resize function
$(window).on("debouncedresize", function( event ) {
	// Guff
});


// Return false class for buttons
$('.return-false').click(function() {
	return false; 
});


// Do X ESC 
$(document).keyup(function(e) {
	
	if (e.keyCode == 27) { 
		$('.slide-me').removeClass('the-nav-is-open');
	}
	
}); 


// jQuery placeholder listener 
$('input, textarea').placeholder();


// Add current year to .current-year
var currentYear = new Date().getFullYear();
$('.current-year').text(currentYear);

