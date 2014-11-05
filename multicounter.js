/*
*  Multi Counter
*  @author cinbit.com
*  @date   2014-08-31
*  @email  btcinvestor@sina.com
*/
var fc = new Array();
fc[0] = {pos:"p0",pri:1,tim:60*60,url:"https://www.kipcoin.com/signup/12499"};
fc[1] = {pos:"p1",pri:0,tim:5*60,url:"http://moonbit.co.in/?ref=b8ebe1f083e3"};
/*fc[2] = {pos:"p2",pri:2,tim:60*60,url:"http://freebitco.in/?r=543770"};
fc[3] = {pos:"p3",pri:3,tim:60*60,url:"http://faucet.bitcoinzebra.com/?ref=f69dcf34fe09"};
fc[4] = {pos:"p4",pri:4,tim:15*60,url:"http://bitcoinker.com/faucet?ref=846b68927dc3"};
fc[5] = {pos:"p5",pri:5,tim:60*60,url:"http://www.pinktussy.com/?r=investor"};
fc[6] = {pos:"p6",pri:6,tim:2*60*60,url:"http://yourclicks.info/?r=investor"};
fc[7] = {pos:"p7",pri:7,tim:60*60,url:"http://www.flyingfaucet.com/?ref=4035"};
fc[8] = {pos:"p8",pri:8,tim:50*60,url:"http://coindigger.biz/?r=e7db5b428f"};
fc[9] = {pos:"p9",pri:9,tim:60*60,url:"http://www.coin-giveaway.info/?ref=2fe7745899f0"};
*/
//ArrSort(fc);
DivClick(fc[0].pos,fc[0].tim,fc[0].url);
DivClick(fc[1].pos,fc[1].tim,fc[1].url);
/*DivClick(fc[2]);
DivClick(fc[3]);
DivClick(fc[4]);
DivClick(fc[5]);
DivClick(fc[6]);
DivClick(fc[7]);
DivClick(fc[8]);
DivClick(fc[9]);*/

var homeURL		= "http://www.cinbit.com";
var walletURL	= "https://www.kipcoin.com/signup.php?r=12499";
var exchangeURL	= "https://www.okcoin.com/?invid=2001550";
var timeID 	= window.setTimeout("DownCount()",1000);
function SetCookie(name,secTime) {
    var exp  = new Date();
    exp.setTime(exp.getTime() + secTime*1000);
	document.cookie = name + "="+ escape(secTime) + ";expires=" + exp.toUTCString() + "; path=/;";
	document.cookie = name + "x="+ escape(parseInt((exp.getTime()-Date.UTC(2014,9,25))/1000)) + ";expires=" + exp.toUTCString() + "; path=/;";
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
function DownCount(){
	window.clearTimeout(timeID);
	for ( var i=0;i<fc.length;i++) { 
		if ( GetCookie(fc[i].pos) != null) {
			var dtime=GetCookie(fc[i].pos);
			var xtime=GetCookie(fc[i].pos+"x");
			var exp=new Date();
			dtime=dtime-parseInt((exp.getTime()+(dtime-1)*1000-xtime*1000-Date.UTC(2014,9,25))/1000);
			document.getElementById(fc[i].pos+"tt").innerHTML = ShowDomain(fc[i].url);
			document.getElementById(fc[i].pos+"tm").innerHTML = ShowTime(dtime);
			dtime=dtime-1;
			SetCookie(fc[i].pos,dtime);
		}
		else {
			document.getElementById(fc[i].pos+"tt").innerHTML = ShowDomain(fc[i].url);
			document.getElementById(fc[i].pos+"tm").innerHTML = "00:00:00";
		}
	}	
	timeID = window.setTimeout("DownCount()",1000)
}
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
function ArrSort(Arr) {
	for(var i=0;i<Arr.length;i++){
		for(var j=i;j<Arr.length;j++){
			if(Arr[i].pri>Arr[j].pri){
				var tmp=Arr[i].pri;
				Arr[i].pri=Arr[j].pri;
				Arr[j].pri=tmp;
				tmp=Arr[i].tim;
				Arr[i].tim=Arr[j].tim;
				Arr[j].tim=tmp;
				tmp=Arr[i].url;
				Arr[i].url=Arr[j].url;
				Arr[j].url=tmp;
			}
		}
	}
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
function onRs(id) {
	var i=parseInt(id.replace(/^p|rs$/ig,""));
	SetCookie(fc[i].pos,fc[i].tim);
}
function onUp(id) {
	var i=parseInt(id.replace(/^p|up$/ig,""));
	if(i>0){
		var d0=0;
		if ( GetCookie(fc[i].pos) != null) {
			d0=GetCookie(fc[i].pos);
		}
		var d1=0;
		if ( GetCookie(fc[i-1].pos) != null) {
			d1=GetCookie(fc[i-1].pos);
		}
		SetCookie(fc[i-1].pos,d0);
		SetCookie(fc[i].pos,d1);
		var tmp=fc[i].pri;
		fc[i].pri=fc[i-1].pri;
		fc[i-1].pri=tmp;
		tmp=fc[i].tim;
		fc[i].tim=fc[i-1].tim;
		fc[i-1].tim=tmp;
		tmp=fc[i].url;
		fc[i].url=fc[i-1].url;
		fc[i-1].url=tmp;
	}
}
function onDw(id) {
	var i=parseInt(id.replace(/^p|dw$/ig,""));
	if(i<fc.length){
		var d0=0;
		if ( GetCookie(fc[i].pos) != null) {
			d0=GetCookie(fc[i].pos);
		}
		var d1=0;
		if ( GetCookie(fc[i+1].pos) != null) {
			d1=GetCookie(fc[i+1].pos);
		}
		SetCookie(fc[i+1].pos,d0);
		SetCookie(fc[i].pos,d1);		
		var tmp=fc[i].pri;
		fc[i].pri=fc[i+1].pri;
		fc[i+1].pri=tmp;
		tmp=fc[i].tim;
		fc[i].tim=fc[i+1].tim;
		fc[i+1].tim=tmp;
		tmp=fc[i].url;
		fc[i].url=fc[i+1].url;
		fc[i+1].url=tmp;
	}
}
function OpenURL(url,target) {
	var vra=document.createElement("a"); 
	vra.target=target; 
	vra.href=url; 
	document.body.appendChild(vra); 
	vra.click(); 		
}
function ShowDomain(url) {
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
}
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