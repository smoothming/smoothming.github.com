$(function(){
	var next = $("#next");
	var prev = $("#prev");
	// var index = $("#index span");
	var box = $(".carousel>ul");
	var len = box.find("li").length;
	var index = 1;

	$("#index span").text(index);
	$("#index i").text(len);
	$(".carousel ul").css("width",len*1200 + 'px');

	//点击切换下一张
	next.click(function(){
		if (box.is(":animated")) {
			return;
		};
		animated(-1200);
	})
	//点击切换上一张
	prev.click(function(){
		if (box.is(":animated")) {
			return;
		};
		animated(1200);
	})
	//公共动画函数
	function animated(offset){
		var left = parseInt(box.css("left"))+offset;
		if(offset>0){
			offset = "+=" + offset;
			index --;
			if (index<1) {index = 1;};
		}else{
			offset = '-=' + Math.abs(offset);
			index ++;
			if (index>len) {index = len};
		}
		if (left>-1200) {
				box.animate({'left':0},350);
				$("#prev span").css("borderColor","transparent #666 transparent transparent");
			};
		if (left <= -1200*(len-1)) {
				box.animate({'left':-1200*(len-1)},350);
				$("#next span").css("borderColor","transparent transparent transparent #666");
			};
		if (left<0 && left>-1200*(len-1)) {
			box.animate({'left':left},350);
			$("#prev span").css("borderColor","transparent #334659  transparent transparent");
			$("#next span").css("borderColor","transparent  transparent transparent #334659");
		};
		$("#index span").text(index);
	}
})