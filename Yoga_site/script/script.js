/* Smooth Scroll between anchor links */
$(window).on('load', function() {
    $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    });
});


/* Reveal Nav Bar after main page */
var height= window.innerHeight;

$(window).scroll(function() {
	if ($(this).scrollTop() > height*0.9) {
         $('.logo_nav').css('display', 'inline-block');      
     }
	if ($(this).scrollTop() < height*0.9) {
		$('.logo_nav').css('display', 'none');     
	}
});






