$(window).on('load', function (){
	$( '#loading' ).delay(500).fadeOut( 10, function() {
		$('.top_back_1').addClass('slide-img');
		$('.top_title_img,.top_sub_img,.sns').delay(1200).fadeIn(1800);
		if ($(window).width() < 675) {
		$('.res-title').delay(1200).fadeTo(1500,1);
		$('.sns').fadeTo(1500,1);
	}
	});
	
	function toggleNav() {
	  var body = document.body;
	  var hamburger = document.getElementById('js-hamburger');
	  var blackBg = document.getElementById('js-black-bg');

	  hamburger.addEventListener('click', function() {
		body.classList.toggle('nav-open');
	  });
	  blackBg.addEventListener('click', function() {
		body.classList.remove('nav-open');
	  });
	}
	toggleNav();
	
	
	
});

setTimeout(function(){
		$( '#loading' ).fadeOut();
	},5000);