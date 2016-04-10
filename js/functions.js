$(function() {
  $(window).scroll(function() {
  		$('.all').each(function(){
  		var imagePos = $(this).offset().top;

  		var topOfWindow = $(window).scrollTop();
  			if (imagePos < topOfWindow+100) {
  				$(this).addClass("slideUp");
  			}
  		});
});
