require(["jquery-1.11.3","new.js"],function(){ // []中填入需要加载的js文件名,加载多个用","隔开
	$("#newHeader").load("header.html");
	$("#newFooter").load("footer.html");
});