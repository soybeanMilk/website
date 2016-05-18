$("li").click(function () {
	$(this).siblings().children('a').css({
		color: '#FFFFFF',
	});
	$(this). children('a').css("color","#337ab7");
});

$(document).ready(function() {
	$("li.active").siblings().children('a').css({
		color: '#FFFFFF',
	});
	$("li.active").children('a').css("color","#337ab7");
});