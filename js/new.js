// banner部分轮播图
// 首页nav轮播图
$.ajaxSetup({
	cache:false
});
// $(function(){
// 	var ind = 0;
// 	var newTimer = setInterval(function(){
// 		// 判断ind 的值
// 		if(ind > 4){
// 			ind = 0;
// 		}
// 		// 调用主函数
// 		mainFn(ind);
// 		ind++;
// 	},2000);
// 	// 封装一个主函数
// 	function mainFn(ind){
// 		$(".newBannerBox").find("li").eq(ind).addClass("newBannerActive").animate({"opacity":1},100).siblings().removeClass("newBannerActive").css("opacity",.5);
// 		$(".newNav").find("li").removeClass("newActive").eq(ind).addClass("newActive");
// 	};
// 	// 添加按钮点击事件
// 	$(".pageUp").mousedown(function(){
// 		// 停止定时器
// 		clearInterval(newTimer);
// 		ind--;
// 		if(ind < 0){
// 			ind = 4;
// 		}
// 		mainFn(ind);
// 		$(".pageUp").mouseup(function(){
// 			//  停止上一个定时器
// 			clearInterval(newTimer);
// 			newTimer = setInterval(function(){
// 				if(ind>4){
// 					ind = 0;
// 				}
// 				mainFn(ind);
// 				ind ++ ;
// 			},2000);
// 		});
// 		// return false; // 阻止浏览器默认响应
// 	});
// 	$(".pageDn").mousedown(function(){
// 		// 停止定时器
// 		clearInterval(newTimer);
// 		// clearInterval(timerOut);
// 		ind++;
// 		if(ind > 4){
// 			ind = 0;
// 		}
// 		mainFn(ind);	
// 		$(".pageDn").mouseup(function(){
// 			// 停止上一个定时器
// 			clearInterval(newTimer);
// 			newTimer = setInterval(function(){
// 				if(ind>4){
// 					ind = 0;
// 				}
// 				console.log(ind);
// 				mainFn(ind);
// 				ind ++ ;
// 			},2000);
// 		});
// 	});
// 	// // 给bannerNav中的li添加鼠标点击事件
// 	$(".bannerNav li").each(function(index){
// 		$(this).mousedown(function(){
// 			// 停止定时器
// 			clearInterval(newTimer);
// 			console.log(ind);
// 			ind = index;
// 			mainFn(ind);
// 		});
// 		$(this).mouseup(function(){
// 			newTimer = setInterval(function(){
// 				if(ind>4){
// 					ind = 0;
// 				}
// 				mainFn(ind);
// 				ind++ ;
// 			},1500);
// 		});
// 	});
// });

// 封装一个轮播函数
function carousel (dom,nav,up,dn){
	var ind = 0;
	dom[nav+ "Timer"] = setInterval(function(){
		//  判断ind的大小
		if(ind > 4){
			ind = 0;
		}
		//  调用主函数
		mainFn(ind);
		ind++;
	},2000);
	//  封装主函数
	function mainFn(ind){
		$(dom).find("li").eq(ind).addClass("newBannerActive").animate({"opacity":1},100,function(){
			// 运动完成后重新开启定时器
		}).css("opacity",.8).siblings().removeClass("newBannerActive");
		$(nav).find("li").eq(ind).addClass("active").siblings().removeClass("active");
	};
	function fn(ind){
		$(dom).find("li").eq(ind).addClass("newBannerActive").animate({"opacity":1},100,function(){
			// 运动完成后重新开启定时器
			dom[nav+ "Timer"] = setInterval(function(){
				if(ind>4){
					ind = 0;
				}
				mainFn(ind);
				ind ++ ;
			},2000);
		}).css("opacity",.8).siblings().removeClass("newBannerActive");
		$(nav).find("li").eq(ind).addClass("active").siblings().removeClass("active");
	};
	//  添加按扭点击事件
	$(up).mousedown(function(){
		// 停止定时器
		clearInterval(dom[nav+ "Timer"]);
		ind--;
		if(ind < 0){
			ind = 4;
		}
		mainFn(ind);
		return false; // 阻止浏览器默认响应
	});
	$(dn).mousedown(function(){
		// 停止定时器
		clearInterval(dom[nav+ "Timer"]);
		// clearInterval(timerOut);
		ind++;
		if(ind > 4){
			ind = 0;
		}
		mainFn(ind);
		return false;
	});
	// // 给bannerNav中的li添加鼠标点击事件
	$(nav).find("li").each(function(index){
		$(this).mousedown(function(){
			// 停止定时器
			clearInterval(dom[nav+ "Timer"]);
			ind = $(this).index();
			mainFn(ind);
			return ;// 停止定时器
		});
	});
};
carousel(".popular .new-cen",".popular  .nav",".popular  .pageUp",".popular  .pageDn");
carousel(".newChose .new-cen",".newChose .nav",".newChose .pageUp",".newChose .pageDn");
carousel(".newBannerBox",".newBanner .newNav",".newBanner .pageUp",".newBanner .pageDn");
