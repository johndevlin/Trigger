

/********************************

	Some scripts I regularly use. 
	-----------------------------
	
	It's doubtful these will be
	used in every project, please
	remove any unused script. 
	
*/

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


// Form validation
 $('.some-form').validate({
 	rules: {
 		inputname: {
 			required: true,
 			email: true,
 			minlength: 10
 		},
 	}
 });