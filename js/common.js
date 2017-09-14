// 公共效果
// $.ajaxSetup({
// 	cache:false//关闭AJAX相应的缓存
// });
$(function(){
	//  获取cookie判断是否已经登录
	var userName = getCookie("enterOk");
	if(userName == ""){
		$(".logOut").css({"display":"none"});
	}else {
		// 隐藏登录注册提示
		$(".top-nav-l").find("p").css({"display":"none"});
		// 显示退出按钮
		$(".logOut").css({"display":"block"});
		// 将获取的cookie值给enterName
		$(".enterName").html(userName);
	}
	// 点击退出删除cookie
	$(".logOut").click(function(){
		setCookie("enterOk","",-1);
		// 重新设置头部样式
		userName = getCookie("enterOk");
		if(userName == ""){
			$(".logOut").css({"display":"none"});
			$(".top-nav-l").find("p").css({"display":"block"});
			$(".enterName").html(userName);
		}else {
			// 隐藏登录注册提示
			$(".top-nav-l").find("p").css({"display":"none"});
			// 显示退出按钮
			$(".logOut").css({"display":"block"});
			// 将获取的cookie值给enterName
			$(".enterName").html(userName);
		}
	});
	// 点击注册，跳转到注册页面
	$(".go-register").click(function(){
		location.href = "http://localhost/buybag-items/register.html";
	});
	// 点击登录跳转到登录页面
	$(".go-enter").click(function(){
		location.href = "http://localhost/buybag-items/enter.html";
	});
	// 点击logo图标跳转到首页
	$(".nav-log").click(function(){
		location.href = "http://localhost/buybag-items/";
	});
	// 点击去购物车
	$(".buy-car").click(function(){
		location.href = "http://localhost/buybag-items/buycar.html";
	});
	// nav搜索框得到焦点后隐藏value
	var inpSearStr = "" // 定义一个变量用于存放搜索框内输入的字符
	$("#search-inp").on("focus",function(){
		$(this).val(inpSearStr);
		// nav搜索框失去焦点事件 
		$("#search-inp").on("blur",function(){
			// 添加表单输入事件
			$(this).on("input",function(){
				inpSearStr = $(this).val();
			});
			if($(this).val().length == 0){
				$(this).val("搜索双肩背包试试~");
			}
		});
	});
	// 购物车鼠标移入事件
	$(".buyCar").hover(function(){
		$(this).css({"background":"#fff"});
		$(".buy-car .arrow").css({
			"border":"4px #fff solid",
			"border-bottom-color":"#CA224E",
			"border-top-color":"#fff"
		});
		$(".buyGood").css({"display":"block","background-color":"#fff"});
	},function(){
		$(this).css({"background":"#f2f2f2"});
		$(".buyGood").css("display","none");
		$(".buy-car .arrow").css({
			"border":"4px #f2f2f2 solid",
			"border-bottom-color":"#f2f2f2",
			"border-top-color":"#9A9A9A"
		});
	});
	//  设置列表属性
	if($("#homeHeader").index() == 0){
		$(".nav-list").find("li").eq(0).addClass("nav-active");
		$("#listTop .arrow").css("display","none");
		$(".listBox").css("display","block");
	}
	if($("#homeHeader").index() == -1){
		$("#listTop .arrow").css("display","inline-block");
		$(".listBox").css("display","none");
	}
	if($("#newHeader").index() == 0) {
		$(".nav-list").find("li").eq(1).addClass("nav-active");
	}
	// memuBox hover事件
	$(".memuBox").hover(function(){
		$(".listBox").css("display","block");
	},function(){
		$(".listBox").css("display","none");
	});

	// 点击列表跳转到列表页
	$("#listTop").click(function(){
		console.log($(this));
		location.href = "http://localhost/buybag-items/list.html";
	});

	 // 添加 .oneBox hover事件
	 $(".oneBox").hover(function(){
	 	$(".oneBox .listMemu").css("display","block");
	 	$(this).css({"border-right":"0","border-bottom":"1px solid #E5E5E5"});
	 },function(){
	 	$(".oneBox .listMemu").css("display","none");
	 	$(this).css({"border-bottom":"0","border-right":"1px solid #E5E5E5"});
	 	
	 });
	  $(".twoBox").hover(function(){
	 	$(".twoBox .listMemu").css("display","block");
	 	$(this).css({"border-right":"0","border-bottom":"1px solid #E5E5E5"});
	 },function(){
	 	$(".twoBox .listMemu").css("display","none");
	 	$(this).css({"border-bottom":"0","border-right":"1px solid #E5E5E5"});

	 });
	  $(".threeBox").hover(function(){
	 	$(this).css({"border-right":"0","border-bottom":"1px solid #E5E5E5"});
	 	$(".threeBox .listMemu").css("display","block");
	 },function(){
	 	$(".threeBox .listMemu").css("display","none");
	 	$(this).css({"border-bottom":"0","border-right":"1px solid #E5E5E5"});

	 });
	$(".fourBox").hover(function(){
	 	$(this).css({"border-right":"0","border-bottom":"1px solid #E5E5E5"});
	 	$(".fourBox .listMemu").css("display","block");
	 },function(){
	 	$(this).css({"border-bottom":"0","border-right":"1px solid #E5E5E5"});
	 	$(".fourBox .listMemu").css("display","none");
	 });

	// 添加导航鼠标事件
	$(".nav-list").find("li").each(function(index){
		//  hover事件
		$(this).hover(function(){
			$(this).css({"background":"#96193C"});
		},function(){
			if($(this).hasClass("nav-active")){
				$(this).css({"background":"#96193C"});
				$(".listBox").c
			}else {

				$(this).css({"background":"#D41C4F"});
			}
		});
	});
	//  点击事件
	$(".nav-list").find("li").eq(0).on("click",function(){
		location.href = "http://localhost/buybag-items/";
	});
	$(".nav-list").find("li").eq(1).on("click",function(){
		console.log(this);
		location.href = "http://localhost/buybag-items/new-good.html";
	});
});

// 设置窗口大小改变事件
$(window).resize(function(){
	// console.log($(window).width());
	// 当浏览器可视窗口小于925px时 缩小switch-aside
	// if($(window).width() < 925){
	// 	$(".switch-aside").css({"width":"42px","height":"42px"});
	// 	// $(".switchBox .aside-text").css({"display":"none"});
	// }
});

$(window).scroll(function(){
	// 添加to-top点击事件
	$(".to-top").click(function(){
		// 停止上一个运动事件
		$("html,body").stop();
		$("html,body").animate({"scrollTop":0},400,function(){
			// 隐藏to-top
			$(".switchBox li").eq(0).css("display","none");
		});
	});
	// 控制回到顶部显隐
	if($(window).scrollTop() >= 902){
		$(".switchBox li").eq(0).css("display","block");
	}else {
		$(".switchBox li").eq(0).css("display","none");
	}
	// 添加switchBox 中的li的hover 事件
	$(".switchBox").find("li").each(function(){
		$(this).hover(function(){
			$(this).addClass("asideHover")
		},function(){
			$(this).removeClass("asideHover");
		});
	}); 
});