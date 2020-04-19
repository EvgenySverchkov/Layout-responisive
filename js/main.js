$(function(){
	$('.top-devices>div').on('click', function(e){
		if(!$(this).hasClass('active')){
			$('.top-devices>div').removeClass('active');
			$(this).addClass('active');
		};
	});
	$('.header-menu__responsive-btn').on('click', function(){
		$('.header-menu ul').slideToggle();
	});
});