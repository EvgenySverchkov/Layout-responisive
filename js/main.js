$(function(){
	$('.top-devices>div').on('click', function(e){
		for(let i=0; i<3; i++){
			let currElem = $($('.top-devices>div')[i]);
			if(currElem.hasClass('active') && !$(this).is(currElem)){
				currElem.removeClass('active');
			}else{
				if($(this).is(currElem)){
					$(this).addClass('active');
				}
			}
		}
	});
	$('.header-menu__responsive-btn').on('click', function(){
		$('.header-menu ul').slideToggle();
	});
});