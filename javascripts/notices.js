/*
*  @author cinbit.com
*  @date   2015-01-24
*  @email  cinbit@sina.com
*/

var speed=40;
var maxlength=56;
var demo = document.getElementById("demo");
var demo1 = document.getElementById("demo1");
var demo2 = document.getElementById("demo2");
ShowNews();
demo2.innerHTML=demo1.innerHTML;
function Marquee(){
	if(demo.scrollLeft>=demo.offsetWidth){
		demo.scrollLeft-=demo2.offsetWidth;
	}
	else{
		demo.scrollLeft++;
	}
}
var MyMar=setInterval(Marquee,speed);
demo.onmouseover=function(){
	clearInterval(MyMar);
}
demo.onmouseout=function(){
	MyMar=setInterval(Marquee,speed);
}
function ShowNews(){
	var newslength=0;
	for(var i=news.length-1;i>=0;i--){
		newslength+=news[i].text.length+3;
		if(newslength>maxlength){
			break;
		}
		demo1.innerHTML+="<a href='"+news[i].url+"' target='_blank'>"+news[i].text+"</a>";
	}
}