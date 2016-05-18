$("button[name='denglu']").click(function (event) {
	var dengluzhanghao;
	var denglumima;
	dengluzhanghao=$("input[name='dengluzhanghao']").val();
	denglumima=$("input[name='denglumima']").val();
	if ('zhangle'===dengluzhanghao && '19951030'===denglumima) {
		alert('登录成功');
	}else {
		alert('登录失败');
	}
	window.location.href='web1.html';


})




