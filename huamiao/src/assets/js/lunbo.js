var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	autoplay : 3000,
	paginationClickable: true
});
$('.swiper-container-horizontal>.swiper-pagination').css({
	'margin-left':-$('.swiper-container-horizontal>.swiper-pagination').width()/2+'px'
});