//移除cookie
function removeCookie(name){
    setCookie(name,"",-1);
};

//获取cookie的value值
function getCookie(name) {
    // cookie 样式为 "name1=value1; name2=value2"
    var cookieStr = document.cookie;
    //将格式转换为 ["name1=value1","name2=value2"] 的数组形式
    var cookies = cookieStr.split("; ");
    // 遍历数组中的每一个字符串，去除 "=";
    for(var i=0; i<cookies.length; i++){
        var detail = cookies[i].split("=");
        if(detail[0]===name) {
            return decodeURIComponent(detail[1]);
            // return detail[1];
        }
    }
    return "";//找不到时返回空
};
// 设置cookie
/* 参数
        name  cookies名
        value cookie值
        expires cookie的有效期（天数）
        domain 路径
        secure 安全访问
*/
function setCookie(name,value,expires,domain,secure){
    var cookieText = name + "=" + encodeURIComponent(value) + ";path=/";
    var date = new Date();
    date.setDate(date.getDate() + expires);
    cookieText += ";expires=" + date;
    // 判断domain是否传参
    if(domain){
        cookieText += ";domain=" + domain;
    }
    if(secure){
        cookieText += ";secure";
    }
    document.cookie = cookieText;
};
// function setCookie(name,value,expires,){
//     //获取日期
//     var exp = new Date();
//     exp.setDate(exp.getDate() + expires);
//     var gmtStr = exp.toGMTString();// 将时间转换为gmt时间
//     document.cookie = name + "=" + value +";expires=" + gmtStr;
// };
