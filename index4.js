var formTemplate = "<div class='col-md-12 extra'></div>";
var pointTemplate = "<div class='point'></div>";

$(".parent-unit").on('click', '.unit-add', function() {
	check();
	$(this).closest('.parent-unit').find('.addextra').append(formTemplate);
	$(this).closest('.unit').append(pointTemplate)
	$(this).closest('.parent-unit').find('.addextra').addClass("onclicktest");
});

function check() {
	$('.extra').remove();
	$('.point').remove();
	$('.addextra').removeClass('onclicktest');

}
$(function() {
	$('.paste').html($('.parent-unit').html());
})
$('.on-main').on('click', function() {
	$('.mymain').toggle();
	$('.mydata').toggleClass("mydata-toogle");
	$('.mymain').css("height", $(document).height());
	$('.mycontainer').toggleClass('mycontainer-mid');

})

$(function() {
	$('.cart-panel').click(function() {
		$('.foot').toggleClass('slide-up');
		$(".cart-click-up").fadeToggle("slow");
		$(".cart-click-icon-up").fadeToggle("slow");
		$(".cart-click-down").fadeToggle("slow");
		$(".cart-click-icon-down").fadeToggle("slow");
	});
});
