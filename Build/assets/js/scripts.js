

/********************************

	Some scripts I regularly use. 
	-----------------------------
	
	It's doubtful these will be
	used in every project, please
	remove any unused script. 
	
*/


// Add current year to .current-year
var currentYear = (new Date).getFullYear();
$('.current-year').text(currentYear)


// Debounced Resize function
$(window).on("debouncedresize", function( event ) {
	// Guff
});


// Do X ESC 
$(document).keyup(function(e) {
	
	if (e.keyCode == 27) { 
		// Guff
	}
	
});


// Sticky something, probably sidebar
$(document).scroll(function() {
	
	if ($(document).scrollTop() >= 150) {
		$('aside').addClass('stuck');
	}
	else {
		$('aside').removeClass('stuck');
	}
	
}); 


// Validation 
function validateEmail(email) { 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
} 

function validation() {
	
	var name = $('input[name=name]').val();
	var email = $('input[name=email]').val();
	var message = $('textarea[name=message]').val();
	
	var err_name = 0, err_email = 0, err_message = 0;
	
	if(name == '' || name == undefined || name.length < 6){
		err_name = 1;
		$('.name_err').addClass('show-error');
	} else {
		err_name = 0;
		$('.name_err').removeClass('show-error');
	}
	
	if(email == '' || email == undefined || !validateEmail(email)){
		err_email = 1;
		$('.email_err').addClass('show-error');
	} else {
		err_email = 0;
		$('.email_err').removeClass('show-error');
	}
	
	if(message == '' || message == undefined || message.length < 6){
		err_message = 1;
		$('.message_err').addClass('show-error');
	} else {
		err_message = 0;
		$('.message_err').removeClass('show-error');
	}
	
	if(err_name == 0 && err_email == 0 && err_message == 0){
		return true;
	}
	
	return false;
}


/* Smooth scroll */
$(document).ready(function(){function e(e){return e.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")}function r(e){for(var t=0,n=arguments.length;t<n;t++){var r=arguments[t],i=$(r);if(i.scrollTop()>0){return r}else{i.scrollTop(1);var s=i.scrollTop()>0;i.scrollTop(0);if(s){return r}}}return[]}var t=e(location.pathname);var n=r("html","body");$("a[href*=#]").each(function(){var r=e(this.pathname)||t;if(t==r&&(location.hostname==this.hostname||!this.hostname)&&this.hash.replace(/#/,"")){var i=$(this.hash),s=this.hash;if(s){var o=i.offset().top;$(this).click(function(e){e.preventDefault();$(n).animate({scrollTop:o},400,function(){location.hash=s})})}}})})



