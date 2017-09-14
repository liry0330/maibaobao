// 首页nav轮播图
$(function() {
    var ind = 0;
    var bannerTimer = setInterval(function() {
        if (ind > 4) {
            ind = 0;
        }
        mainFn(ind);
        ind++;
    }, 2000);
    // 封装一个主函数
    function mainFn(ind) {
        $(".banner-box").find("li").eq(ind).addClass("bannerShowImg").animate({
            "opacity": 1
        }, 100).siblings().removeClass("bannerShowImg").css("opacity", .5);
        $(".bannerNav").find("li").removeClass("navActive").eq(ind).addClass("navActive");
    };
    // 添加按钮点击事件
    $("#pageUp").mousedown(function() {
        // 停止定时器
        clearInterval(bannerTimer);
        ind--;
        if (ind < 0) {
            ind = 4;
        }
        mainFn(ind);
        $("#pageUp").mouseup(function() {
            //  停止上一个定时器
            clearInterval(bannerTimer);
            bannerTimer = setInterval(function() {
                if (ind > 4) {
                    ind = 0;
                }
                mainFn(ind);
                ind++;
            }, 1500);
        });
    });
    $("#pageDn").mousedown(function() {
        // 停止定时器
        clearInterval(bannerTimer);
        // clearInterval(timerOut);
        ind++;
        if (ind > 4) {
            ind = 0;
        }
        mainFn(ind);
        $("#pageDn").mouseup(function() {
            // 停止上一个定时器
            clearInterval(bannerTimer);
            bannerTimer = setInterval(function() {
                if (ind > 4) {
                    ind = 0;
                }
                mainFn(ind);
                ind++;
            }, 2000);
        });
    });
    // 给bannerNav中的li添加鼠标点击事件
    $(".bannerNav li").each(function(index) {
        $(this).mousedown(function() {
            // 停止定时器
            clearInterval(bannerTimer);
            ind = index;
            mainFn(ind);
        });
        $(this).mouseup(function() {
            bannerTimer = setInterval(function() {
                if (ind > 4) {
                    ind = 0;
                }
                mainFn(ind);
                ind++;
            }, 2000);
        });
    });

    // 添加轮播图点击事件
    // console.log($(".banner-box").find("li"));
    $(".banner-box").find("li").on("click", function() {
        console.log($(this).index());
        switch ($(this).index()) {
            case 0:
                location.href = "http://localhost/buybag-items/maotou.html";
                break;
            case 1:
                location.href = "http://localhost/buybag-items/maotou.html";
                break;
            case 2:
                location.href = "http://localhost/buybag-items/maotou.html";
                break;
            case 3:
                location.href = "http://localhost/buybag-items/maotou.html";
                break;
            case 4:
                location.href = "http://localhost/buybag-items/maotou.html";
                break;
        }
    });
});

// 楼梯显隐
$(function() {
    // 定义一个变量存储被点有class名为stairsActive的元素的下标
    var inde = 0;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 662) {
            // 隐藏楼梯
            $(".stairs").css({
                "display": "block"
            });
            // 遍历staits中所有的li添加hover事件
            $(".stairs li").each(function(index) {
                // 判断滚动距
                if (index < 5) {
                    if ($(window).scrollTop() >= $(".homeContent > div").eq(index).offset().top - 200 && $(window).scrollTop() < $(".homeContent > div").eq(index + 1).offset().top - 200)
                        $(".stairs li").eq(index).addClass("stairsActive")
                        .siblings().removeClass("stairsActive");
                } else if (index == 5) {
                    if ($(window).scrollTop() >= $(".homeContent > div").eq(index).offset().top - 200) {
                        $(".stairs li").eq(index).addClass("stairsActive")
                            .siblings().removeClass("stairsActive");
                    }
                }
                // 添加楼梯点击事件
                $(".stairs li").eq(index).click(function(e) {
                    // 获取该元素的下标
                    inde = $(this).index();
                    // 移除该元素上的hoverActive
                    $(this).removeClass("hoverActive");
                    var top = $(".homeContent > div").eq(inde).offset().top;
                    // 停止上一个运动函数
                    $("html,body").stop();
                    $(".stairs li").eq(inde).addClass("stairsActive")
                        .siblings().removeClass("stairsActive");
                    // 文档滚动到指定位置
                    $("html,body").animate({
                        "scrollTop": top
                    }, 400);
                    return false;
                });
                // 判断当前元素是否有stairsActive 的class属性
                if ($(this).hasClass("stairsActive")) {
                    inde = $(this).index();
                }
                // 移除该元素上所有的事件
                if (index == inde) {
                    return true;
                }
                // 给该元素的兄弟元素添加hover事件, 由于hover()事件不是JS中的事件，
                // 而是jquery中的一个方法，该方法中包含mousenter 和mouseleave事件，因此移除hover方法需要
                // 事件源 off('mouseenter').unbind('mouseleave')
                $(".stairs li").eq(inde).off('mouseenter').unbind('mouseleave').siblings().hover(fn1, fn2);

                function fn1() {
                    $(this).addClass("hoverActive");
                };

                function fn2() {
                    $(this).removeClass("hoverActive");
                }
            });
        } else {
            $(".stairs").css({
                "display": "none"
            });
        }
    });
});

// 楼层轮播图
$(function() {
    function moveBanner(box, nav) {
        var box = document.getElementsByClassName(box)[0];
        var nav = document.getElementsByClassName(nav)[0];
        var floorInd = 0;
        nav.floorTimer = setInterval(function() {
            // 调用主函数
            floorMain();
        }, 2000);
        // 封装主函数
        function floorMain() {
            // 判断floorInd的大小
            if (floorInd >= 6) {
                floorInd = 1;
            }
            floorShowImg(floorInd);
            showNav(floorInd);
            floorInd++;
        };

        function floorShowImg(ind) {
            $(box).animate({
                "left": -ind * 952
            }, 400, function() {
                if (floorInd == 6) {
                    $(box).css({
                        "left": 0
                    });
                };
            });
        };
        // 封装一个函数给nav中的a添加class属性
        function showNav(ind) {
            if (ind == 5) {
                ind = 0;
            }
            $(nav).children().eq(ind).addClass("floorActive").siblings().removeClass("floorActive");
        }
        // 添加nav点击事件
        $(nav).children().each(function() {
            $(this).mousedown(function() {
                // 停止定时器
                clearInterval(nav.floorTimer);
                floorInd = $(this).index();
                floorShowImg(floorInd);
                $(nav).children().eq(floorInd).addClass("floorActive").siblings().removeClass("floorActive");
            });
            $(this).mouseup(function() {
                // 关闭上一个定时器
                clearInterval(nav.floorTimer);
                // 开启计时器
                nav.floorTimer = setInterval(function() {
                    // 调用主函数
                    floorMain();
                }, 2000);
            });
        });
    };
    moveBanner("oneFloorBanner", "oneFloorNav");
    moveBanner("twoFloorBanner", "twoFloorNav");

    // 获取json数据
    // $.ajax({
    //  type:"GET",
    //  url:"json/list.json",
    //  success:function(data){
    //      console.log(data);
    //  }
    // });

    $.get("json/list.json", function(data) {
        // 创建3楼数据 floorBannerBox
        var F3 = data[0].home["3F"];
        // 创建元素 floorBanner
        for (var i = 0; i < 6; i++) {
            $('<img src="" alt="">').attr({
                "src": F3["photo"]["" + (i + 1)]
            }).appendTo($(".threeFloorBanner"));
        }
        // floorNav
        for (var i = 0; i < 5; i++) {
            $('<a href="javascript:;" class="floorActive"></a>').html(F3["navTxt"][i]).appendTo($(".threeFloorNav"));
        }
        // floorList 元素创建
        for (var i = 0; i < 15; i++) {
            $('<li><dl><dt><img src=' + F3["photo"]["0" + (i + 1)] + ' alt=""></dt><dd><a href="javascript:;">' + F3["listTxt"][i + 1] + '</a><span><b>' + F3['ins'][i + 1] + '</b>&nbsp;<del>' + F3['del'][i + 1] + '</del></span></dd></dl></li>').appendTo($(".threeFloor .floorList"));
        }
        // 创建4楼数据 floorBannerBox
        var F4 = data[0].home["4F"];
        for (var i = 0; i < 6; i++) {
            $('<img src="" alt="">').attr({
                "src": F4["photo"]["" + (i + 1)]
            }).appendTo($(".fourFloorBanner"));
        }
        // floorNav
        for (var i = 0; i < 5; i++) {
            $('<a href="javascript:;" class="floorActive"></a>').html(F4["navTxt"][i]).appendTo($(".fourFloorNav"));
        }
        // floorList 元素创建
        for (var i = 0; i < 9; i++) {
            $('<li><dl><dt><img src=' + F4["photo"]["0" + (i + 1)] + ' alt=""></dt><dd><a href="javascript:;">' + F4["listTxt"][i + 1] + '</a><span><b>' + F4['ins'][i + 1] + '</b>&nbsp;<del>' + F4['del'][i + 1] + '</del></span></dd></dl></li>').appendTo($(".fourFloor .floorList"));
        }
        // 创建5楼数据 floorBannerBox
        var F5 = data[0].home["5F"];
        for (var i = 0; i < 6; i++) {
            $('<img src="" alt="">').attr({
                "src": F5["photo"]["" + (i + 1)]
            }).appendTo($(".fiveFloorBanner"));
        }
        // floorNav
        for (var i = 0; i < 5; i++) {
            $('<a href="javascript:;" class="floorActive"></a>').html(F5["navTxt"][i]).appendTo($(".fiveFloorNav"));
        }
        // floorList 元素创建
        for (var i = 0; i < 9; i++) {
            $('<li><dl><dt><img src=' + F5["photo"]["0" + (i + 1)] + ' alt=""></dt><dd><a href="javascript:;">' + F5["listTxt"][i + 1] + '</a><span><b>' + F5['ins'][i + 1] + '</b>&nbsp;<del>' + F5['del'][i + 1] + '</del></span></dd></dl></li>').appendTo($(".fiveFloor .floorList"));
        }
        // 创建第6层的数据
        var F6 = data[0]["home"]["6F"];
        for (var i = 0; i < 5; i++) {
            $('<li><img src= ' + F6["photo"]["" + (i + 1)] + ' alt=""/></li>').appendTo($(".sixBanner"));
        }
        // floorList 元素创建
        for (var i = 0; i < 7; i++) {
            $('<li><dl><dt><img src=' + F6["photo"]["0" + (i + 1)] + ' alt=""></dt><dd><a href="javascript:;">' + F6["listTxt"][i + 1] + '</a><span><b>' + F6['ins'][i + 1] + '</b>&nbsp;<del>' + F6['del'][i + 1] + '</del></span></dd></dl></li>').appendTo($(".sixFloor .floorList"));
        }
        // 设定一个变量存放mark的横坐标
        var markX = 0;
        var listX = -238;
        var listY = 0;
        // 获取sixBanner中所有的li给2-5 li添加hover事件
        $(".markBox").on("mouseover", function(event) {
            markX = parseInt((event.pageX - $(this).offset().left) / 238) * 238;
            if (markX <= 0) {
                markX = -239;
            }
            $(".bannerMark").css({
                "left": markX,
                "top": 1
            });
            $(".markBox").on("mouseout", function() {
                $(".bannerMark").css({
                    "left": -239,
                    "top": 1
                });
            });
        });
        // 添加listMarkBox鼠标移入事件
        $(".listMarkBox").on("mousemove", function(event) {
            // 计算下标
            $(".listMarkBox").on("mouseover", "li", function() {
                listX = $(this).offset().left - $(".listMarkBox").offset().left - parseInt($(".floorList").css("border-width"));
                listY = $(this).offset().top - $(".listMarkBox").offset().top - parseInt($(".floorList").css("margin-top")) - parseInt($(".floorList").css("border-width"));
            });
            // 设定蒙层边界
            if (event.pageX - $(this).offset().left > 477 && event.pageY - $(this).offset().top > 250) {
                // 隐藏蒙层
                listX = -238;
                listY = 0;
            }
            $(".listMark").css({
                "left": listX,
                "top": listY
            });
            $(".listMarkBox").on("mouseout", function() {
                // listX = -238;
                // listY = 0;
                $(".listMark").css({
                    "left": -238,
                    "top": 0
                });
            });
        });

        // 添加轮播图播放效果
        moveBanner("threeFloorBanner", "threeFloorNav");
        moveBanner("fourFloorBanner", "fourFloorNav");
        moveBanner("fiveFloorBanner", "fiveFloorNav");
    });

});
// .css("border-right","1px #E5E5E5 solid")