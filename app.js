var main = function () {
	//menu hiding functions
	$('.icon-menu').click(function() {
		$('.menu').animate({left: '0px'}, 400);
		$('body').animate({left: '285px'}, 400);
	});
	$('.icon-close').click(function() {
		$('.menu').animate({left: '-285px'}, 400);
		$('body').animate({left: '0px'}, 400);
	});

	//COMMENTS SECTION
	//button functionality
	$('.btn').click(function() {
		var post = $('.status-box').val();
		$('<li>').text(post).prependTo('posts');
		//clear field, reset counter
		$('.status-box').val('');
		$('.counter').text(140);
	});
		//counter feature and block unwanted submits
	$('.status-box').keyup(function() {
		var postLength = $(this).val().length;
		var charLength = 140 - postLength;
		$('.counter').text(charLength);

		if (charLength < 0 || charLength == 140) {
			$('.btn').addClass('disabled');
		} else {
			$('.btn').removeClass('disabled');
			}
	});

	$('.btn').addClass('disabled');


};

$(document).ready(main);