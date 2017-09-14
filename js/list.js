
$(function(){
	// 设置小图鼠标事件
	$(".small img").hover(function(){
		$(this).css({"border":"1px #f00 solid"});
	},function(){
		$(this).css({"border":"1px #fff solid"});
	});
	$(".show-type-style").find("li").hover(function(){
		$(this).css({"box-shadow":"0 0 6px #000"});
	},function(){
		$(this).css({"box-shadow":"0 0 "});
	});
	// conTop 点击事件
	// console.log(1);
	// console.log($(".listArrow"));
	$(".sectionList").each(function(){
		if($(this).css("display") == "block"){
			$(this).siblings().find(".listArrow").css({"border-left-color":"#fff","border-top-color":"#666"});		
			
		}else {
			$(this).siblings().find(".listArrow").css({"border-left-color":"#666","border-top-color":"#fff"});
			
		}
	});

	// 定义一个变量作为开关
	var judge = false;
	$(".conTop").click(function(){
	// console.log($(".sectionList").css("display"));
		if(judge){
			$(this).find(".listArrow").css({"border-left-color":"#666","border-top-color":"#fff"});
			$(this).siblings(".sectionList").css("display","none");
			judge = false;
		}else {
			$(this).find(".listArrow").css({"border-left-color":"#fff","border-top-color":"#666"});
			$(this).siblings(".sectionList").css("display","block");
			judge = true;
		}
		// if($(this).css("border-top-color") == "#666"){

		// }else {

		// }
		// judge++;
		// $(this).toggle(function(){
		// },function(){
		// });
		// 隐藏显示;

		
	});
});