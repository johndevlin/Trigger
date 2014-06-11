

/********************************

	Some scripts I regularly use. 
	-----------------------------
	
	It's doubtful these will be
	used in every project, please
	remove any unused script. 
	
*/

$('a[data-navigation="open-navigation"]').click(function() { 

	$('.slide-me').toggleClass('the-nav-is-open');
	$('.slide-me').css('margin-left', '0px');
	
});



$('a[data-navigation="open-navigation').mouseenter(function() {
	
	if (
		!$('a[data-navigation="open-navigation"').hasClass('the-nav-is-open')
	)
	{
		$('.slide-me').css('margin-left', '10px');
	}
	
});

$('a[data-navigation="open-navigation').mouseleave(function() {
	
	$('.slide-me').css('margin-left', '0px');
	
});


// if (
// 	$('a[data-navigation="open-navigation').is(":hover"); &&
	
// 	!$('a[data-navigation="open-navigation"').hasClass('the-nav-is-open'); 
// )

// {
// 	$('.slide-me').css('margin-left', '20px');
// }






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


// Do X ESC 
$(document).keyup(function(e) {
	
	if (e.keyCode == 27) { 
		// Guff
	}
	
}); 


// Add current year to .current-year
var currentYear = new Date().getFullYear();
$('.current-year').text(currentYear);

