/*
*  Multi Counter
*  @author cinbit.com
*  @date   2014-08-31
*  @email  btcinvestor@sina.com
*/
var enCookie=ChkCookie();
//var enCookie=false;
//alert(enCookie);
var namePtn	= DomainPtn(prefix,suffix);

var timeID 	= window.setTimeout("DownCount()",1000);
function SetCookie(name,secTime) {
    var exp = new Date();
    exp.setTime(exp.getTime() + secTime*1000);
	document.cookie = name + "="+ escape(secTime) + ";expires=" + exp.toUTCString() + "; path=/;";
	document.cookie = name + "x="+ escape(parseInt((exp.getTime()-Date.UTC(2014,9,25))/1000)) + ";expires=" + exp.toUTCString() + "; path=/;";
}
function AddCookie(name,value,expms) {
	var str=name+"="+escape(value);
	if(expms>0){
		var exp = new Date();
//		var ms = expdays*24*3600*1000;
		exp.setTime(exp.getTime() + expms);
		str += "; expires=" + exp.toUTCString();
	}
	document.cookie = str + "; path=/;";
}
function DelCookie(name){
	var exp = new Date(); 
	exp.setTime(exp.getTime() - 10000);
	document.cookie= name + "="+""+";expires="+exp.toUTCString();
} 
function GetCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	if (arr != null) {
		return unescape(arr[2]);
	}
	else {
		return null;
	}
}
function ChkCookie(){
	AddCookie("test","ok",0);
	if(GetCookie("test")=="ok"){
		DelCookie("test");
		return true;
	}
	else{
		return false;
	}
}
function forNum(num) {
	if (num < 10) {
		return "0" + num;
	}
	else {
		return num;
	}
}
function ShowTime(secTime) {
	var second = parseInt(secTime % 60);
	var minite = parseInt((secTime / 60) % 60);
	var hour = parseInt(secTime / 3600);
	var timeArray = [second.toString(), minite.toString(), hour.toString()];
	if (secTime <= 0) {
		return ["00:00:00"];
	}
	else {
		return [forNum(timeArray[2])+":"+forNum(timeArray[1])+":"+forNum(timeArray[0])];
	}
}
/*function DownCount(){
	window.clearTimeout(timeID);
	for ( var i=0;i<fcidArr.length;i++) { 
		if ( GetCookie(fcidArr[i]) != null) {
			var dtime=GetCookie(fcidArr[i]);
			var xtime=GetCookie(fcidArr[i]+"x");
			var exp=new Date();
			dtime=dtime-parseInt((exp.getTime()+(dtime-1)*1000-xtime*1000-Date.UTC(2014,9,25))/1000);
			document.getElementById(fcidArr[i]).innerHTML = ShowDomain(furlArr[i])+"<br />"+ShowTime(dtime);
			dtime=dtime-1;
			SetCookie(fcidArr[i],dtime);
		}
		else {
			document.getElementById(fcidArr[i]).innerHTML = ShowDomain(furlArr[i])+"<br />"+"00:00:00";
		}
	}	
	timeID = window.setTimeout("DownCount()",1000)
}*/
/*function DownCount(){
	window.clearTimeout(timeID);
	for ( var i=0;i<fc.length;i++) {
		document.getElementById(fc[i].pos+"tt").innerHTML = ShowDomain(fc[i].url,fc[i].pos);
		if(enCookie){
			if ( GetCookie(fc[i].pos) != null) {
				var dtime=GetCookie(fc[i].pos);
				var xtime=GetCookie(fc[i].pos+"x");
				var exp=new Date();
				dtime=dtime-parseInt((exp.getTime()+(dtime-1)*1000-xtime*1000-Date.UTC(2014,9,25))/1000);
				document.getElementById(fc[i].pos+"tm").innerHTML = ShowTime(dtime);
				dtime=dtime-1;
				SetCookie(fc[i].pos,dtime);
			}
			else {
				document.getElementById(fc[i].pos+"tm").innerHTML = "00:00:00";
			}
		}
		else{
			if(fc[i].now>0){
				document.getElementById(fc[i].pos+"tm").innerHTML = ShowTime(fc[i].now);
				fc[i].now=fc[i].now-1;
			}
			else{
				document.getElementById(fc[i].pos+"tm").innerHTML = "00:00:00";
			}
		}
	}	
	timeID = window.setTimeout("DownCount()",1000)
}*/
function DownCount(){
	window.clearTimeout(timeID);
	for ( var i=0;i<fc.length;i++) {
		document.getElementById(fc[i].pos+"tt").innerHTML = ShowDomain(fc[i].url,fc[i].pos);
		if(fc[i].now>0){
			document.getElementById(fc[i].pos+"tm").innerHTML = ShowTime(fc[i].now);
			fc[i].now=fc[i].now-1;
		}
		else{
			document.getElementById(fc[i].pos+"tm").innerHTML = "00:00:00";
		}
	}
	SetNow();
	timeID = window.setTimeout("DownCount()",1000)
}
/*function DownCount(){
	window.clearTimeout(timeID);
	for ( var i=0;i<fc.length;i++) {
		document.getElementById(fc[i].pos+"tt").innerHTML = ShowDomain(fc[i].url);
		if(enCookie){
			if ( GetCookie(fc[i].pos) != null) {
				fc[i].now=GetCookie(fc[i].pos)-1;
				var xtime=GetCookie(fc[i].pos+"x");
				var exp=new Date();
				fc[i].now=fc[i].now-parseInt((exp.getTime()+fc[i].now*1000-xtime*1000-Date.UTC(2014,9,25))/1000);
				document.getElementById(fc[i].pos+"tm").innerHTML = ShowTime(fc[i].now);
//				fc[i].now=fc[i].now-1;
				SetCookie(fc[i].pos,fc[i].now);
			}
			else {
				document.getElementById(fc[i].pos+"tm").innerHTML = "00:00:00";
			}
		}
		else{
			if(fc[i].now>0){
				document.getElementById(fc[i].pos+"tm").innerHTML = ShowTime(fc[i].now);
				fc[i].now=fc[i].now-1;
			}
			else{
				document.getElementById(fc[i].pos+"tm").innerHTML = "00:00:00";
			}
		}
	}	
	timeID = window.setTimeout("DownCount()",1000)
}*/
/*function ArrSort(fixArr,keyArr,Arr) {
	if((fixArr.length == keyArr.length) && (fixArr.length == Arr.length)) {
		for(var i=0;i<fixArr.length;i++){
			for(var j=i;j<fixArr.length;j++){
				if(keyArr[i]>keyArr[j]){
					var temp=keyArr[i];
					keyArr[i]=keyArr[j];
					keyArr[j]=temp;
					temp=Arr[i];
					Arr[i]=Arr[j];
					Arr[j]=temp;
				}
			}
		}
	}
}*/
function sortArr(obj) {
	for(var i=0;i<obj.length;i++){
		for(var j=i;j<obj.length;j++){
			if(obj[i].pri>obj[j].pri){
				swapObj(obj[i],obj[j]);
			}
		}
	}
}
function compressNum(arr){
	var data=new Array();
	if(arr.length>2){
		data.push(arr[0]);
		for(var i=1;i<arr.length-1;i++){
			if(arr[i]==arr[i-1]+1&&arr[i+1]==arr[i]+1){
				if(data[data.length-1]!="+"){
					data.push("+");
				}
			}
			else if(arr[i]==arr[i-1]-1&&arr[i+1]==arr[i]-1){
				if(data[data.length-1]!="-"){
					data.push("-");
				}			
			}
			else{
				data.push(arr[i]);
			}
		}
		data.push(arr[arr.length-1]);
	}
	else{
		for(var i=0;i<arr.length;i++){
			data.push(arr[i]);
		}
	}
	var str=data.join();
	str=str.replace(/,\+,/g,"+");
	str=str.replace(/,-,/g,"-");
	return str;
}
function uncompressNum(str){
	str=str.replace(/\+/g,",+,");
	str=str.replace(/-/g,",-,");
	var data=str.split(",");
	var arr=new Array();
	if(data.length>2){
		arr.push(data[0]);
		for(var i=1;i<data.length-1;i++){
			if(data[i]=="+"){
				for(var j=1;j<data[i+1]-data[i-1];j++){
					arr.push(Number(data[i-1])+j);
				}
			}
			else if(data[i]=="-"){
				for(var j=1;j<data[i-1]-data[i+1];j++){
					arr.push(data[i-1]-j);
				}
			}
			else{
				arr.push(data[i]);
			}
		}
		arr.push(data[data.length-1]);
	}
	else{
		for(var i=0;i<data.length;i++){
			arr.push(data[i]);
		}
	}
	return arr;
}
function SetPersonalize(){
	if(enCookie){
		var arrpri=new Array();
		for ( var i=0;i<fc.length;i++) {
			arrpri.push(fc[i].pri);
		}
		AddCookie("psl",compressNum(arrpri),30*24*60*60*1000);
	}
}
function GetPersonalize(){
	if(enCookie){
		if(GetCookie("psl") != null) {
			var arrpri=uncompressNum(GetCookie("psl"));
			var copyfc=fc.slice(0);
			var tempfc=new Array();
			for(var i=0;i<arrpri.length;i++){
				tempfc=copyfc.slice(0);
				if(arrpri[i]!=tempfc[i].pri){
					swapObj(fc[i],tempfc[arrpri[i]]);
				}
			}
		}
	}
}
function GetNow(){
	if(enCookie){
		if(GetCookie("now") != null) {
			var strNow=GetCookie("now");
			var arrNow=strNow.split(",");
			for(var i=0;i<arrNow.length;i++){
				fc[i].now=arrNow[i];
			}
		}
	}
}
function SetNow(){
	if(enCookie){
		var arrNow=new Array();
		var maxNow=0;
		for ( var i=0;i<fc.length;i++) {
			if(maxNow<fc[i].now){
				maxNow=fc[i].now;
			}
			arrNow.push(fc[i].now);
		}
		AddCookie("now",arrNow.join(),maxNow*1000);
	}
}
//SetNow();
/*function uncompressNum(str){
	str=str.replace(/\+/g,",+,");
	str=str.replace(/-/g,",-,");
	var data=str.split(",");
	var arr=new Array();
	var pos=1;
	if(data.length>2){
		arr[0]=data[0];
		for(var i=1;i<data.length-1;i++){
			if(data[i]=="+"){
				for(var j=1;j<data[i+1]-data[i-1];j++){
					arr[pos]=parseInt(data[i-1])+j;
					pos+=1;
				}
			}
			else if(data[i]=="-"){
				for(var j=1;j<data[i-1]-data[i+1];j++){
					arr[pos]=data[i-1]-j;
					pos+=1;
				}
			}
			else{
				arr[pos]=data[i];
				pos+=1;
			}
		}
		arr[pos]=data[data.length-1];
	}
	else{
		for(var i=1;i<arr.length;i++){
			arr[i]=data[i];
		}
	}
	return arr;
}*/

function swapObj(x,y){
	var t;
	t=x.pri;
	x.pri=y.pri;
	y.pri=t;
	t=x.tim;
	x.tim=y.tim;
	y.tim=t;
	t=x.now;
	x.now=y.now;
	y.now=t;
	t=x.url;
	x.url=y.url;
	y.url=t;	
}

/*function DivClick(obj) {
	document.getElementById(obj.pos).onclick = function () {
		SetCookie(obj.pos,obj.tim);
		var vra=document.createElement("a");
		vra.target="_blank";
		vra.href=obj.url;
		document.getElementById(obj.pos).appendChild(vra);
		vra.click();
	}
}*/
function DivClick(id,time,url) {
	document.getElementById(id).onclick = function () {
		SetCookie(id,time);
		var vra=document.createElement("a"); 
		vra.target="_blank"; 
		vra.href=url; 
		document.body.appendChild(vra); 
		vra.click(); 		
	}
}
/*function onTt(id) {
	var i=parseInt(id.replace(/^p|tt$/ig,""));
	SetCookie(fc[i].pos,fc[i].tim);
	var vra=document.createElement("a"); 
	vra.target="_blank"; 
	vra.href=fc[i].url; 
	document.getElementById(id).appendChild(vra); 
	vra.click(); 	
}*/
/*function onTt(id) {
	var i=parseInt(id.replace(/^p|tt$/ig,""));
	var vra=document.createElement("a"); 
	vra.target="_blank";
	if(enCookie){
		SetCookie(fc[i].pos,fc[i].tim);
		AddCookie("url",fc[i].url,0);
		vra.href="browser.html";
	}
	else{
		vra.href=fc[i].url;
		fc[i].now=fc[i].tim;
	}
	document.getElementById(id).appendChild(vra); 
	vra.click(); 	
}*/
/*function onTt(id) {
	var i=parseInt(id.replace(/^p|tt$/ig,""));
	if(enCookie){
		SetCookie(fc[i].pos,fc[i].tim);
		AddCookie("url",fc[i].url,0);
	}
	else{
		fc[i].now=fc[i].tim;
	}
}
function onRs(id) {
	var i=parseInt(id.replace(/^p|rs$/ig,""));
	if(enCookie){
		SetCookie(fc[i].pos,fc[i].tim);
	}
	else{
		fc[i].now=fc[i].tim;
	}
}
function onUp(id) {
	var i=parseInt(id.replace(/^p|up$/ig,""));
	if(i>0){
		if(enCookie){
			var d0=0;
			if ( GetCookie(fc[i].pos) != null) {
				d0=GetCookie(fc[i].pos);
				DelCookie(fc[i].pos);
				DelCookie(fc[i].pos+"x");			
			}
			var d1=0;
			if ( GetCookie(fc[i-1].pos) != null) {
				d1=GetCookie(fc[i-1].pos);
				DelCookie(fc[i-1].pos);
				DelCookie(fc[i-1].pos+"x");			
			}
			SetCookie(fc[i-1].pos,d0);
			SetCookie(fc[i].pos,d1);
		}
		swapObj(fc[i],fc[i-1]);
		SetPersonalize();
	}
}
function onDw(id) {
	var i=parseInt(id.replace(/^p|dw$/ig,""));
	if(i<fc.length){
		if(enCookie){	
			var d0=0;
			if ( GetCookie(fc[i].pos) != null) {
				d0=GetCookie(fc[i].pos);
				DelCookie(fc[i].pos);
				DelCookie(fc[i].pos+"x");
			}
			var d1=0;
			if ( GetCookie(fc[i+1].pos) != null) {
				d1=GetCookie(fc[i+1].pos);
				DelCookie(fc[i+1].pos);
				DelCookie(fc[i+1].pos+"x");	
			}
			SetCookie(fc[i+1].pos,d0);
			SetCookie(fc[i].pos,d1);
		}
		swapObj(fc[i],fc[i+1]);
		SetPersonalize();
	}
}*/
function onTt(id) {
	var i=parseInt(id.replace(/^p|tt$/ig,""));
	if(fc[i].now==0){
		fc[i].now=fc[i].tim;
		SetNow();
	}
}
function onRs(id) {
	var i=parseInt(id.replace(/^p|rs$/ig,""));
	fc[i].now=fc[i].tim;
	SetNow();
}
function onUp(id) {
	var i=parseInt(id.replace(/^p|up$/ig,""));
	if(i>0){
	alert(fc[i].url+";"+fc[i-1].url);
		swapObj(fc[i],fc[i-1]);
		alert(fc[i].url+";"+fc[i-1].url);
		SetNow();
		SetPersonalize();
	}
}
function onDw(id) {
	var i=parseInt(id.replace(/^p|dw$/ig,""));
	if(i<fc.length){
		swapObj(fc[i],fc[i+1]);
		SetNow();
		SetPersonalize();
	}
}
function OpenURL(url,target) {
	var vra=document.createElement("a"); 
	vra.target=target; 
	vra.href=url; 
	document.body.appendChild(vra); 
	vra.click(); 		
}
/*function ShowDomain(url) {
	var suffix	= new Array(
//		".co.in",
		".com",
//		".in",
		".biz",
		".info"
		);
	var filter	= new Array(
		"www.",
		"^faucet."
		);
	var i;
	var strPtn	= "";
	for (i=0;i<suffix.length;i++) {
		strPtn	= strPtn + suffix[i].replace(".","\\.")+"|";
	}
	for (i=0;i<filter.length;i++) {
		strPtn	= strPtn + filter[i].replace(".","\\.")+"|";
	}
	strPtn	= strPtn + "\\.";
	var reg 	= new RegExp(strPtn,"ig");
	var strArr	= url.split("/",3);
	var str		= strArr[2].replace(reg,"");
	return str;
}*/
function DomainPtn(pfix,sfix) {
	var strPtn	= "";
	for (var i=0;i<sfix.length;i++) {
		strPtn	= strPtn + sfix[i].replace(".","\\.")+"|";
	}
	for (var j=0;j<pfix.length;j++) {
		strPtn	= strPtn + pfix[j].replace(".","\\.")+"|";
	}
	strPtn	= strPtn + "\\.";
	var reg = new RegExp(strPtn,"gi");
	return reg;
}
function ShowDomain(url,num) {
	var strArr = url.match(/[^\:|\/]+/gi);
	var str	= strArr[1].replace(namePtn,"");
	str = "<a href='browser.html?pos="+num+"' target='_blank'>"+str+"</a>";
	return str;
}
/*function onTt(id) {
	var i=parseInt(id.replace(/^p|tt$/ig,""));
	var vra=document.createElement("a"); 
	vra.target="_blank";
	if(enCookie){
		SetCookie(fc[i].pos,fc[i].tim);
		AddCookie("url",fc[i].url,0);
		vra.href="browser.html";
	}
	else{
		vra.href=fc[i].url;
		fc[i].now=fc[i].tim;
	}
	document.getElementById(id).appendChild(vra); 
	vra.click(); 	
}*/
function liame(){
var l=new Array("&#97","&#98","&#99","&#105","&#109","&#110","&#111","&#116","&#64","&#46");
document.getElementById("liame").innerHTML="联系："+l[2]+l[6]+l[5]+l[7]+l[0]+l[2]+l[7]+l[8]+l[2]+l[3]+l[5]+l[1]+l[3]+l[7]+l[9]+l[2]+l[6]+l[4];
}
liame();
function eU(Y) {
	var f = "";
	for (var c = 0; c < Y.length; c++) {
		f += String.fromCharCode(Y.charCodeAt(c) ^ (1 + (Y.length - c) % 32));
	}
	return escape(f);
}
function dU(Y) {
	var f = "";
	var s = unescape(Y);
	for (var c = 0; c < s.length; c++) {
		f += String.fromCharCode(s.charCodeAt(c) ^ (1 + (s.length - c) % 32));
	}
	return  f;
}