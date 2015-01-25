/*
*  @author cinbit.com
*  @date   2015-01-24
*  @email  cinbit@sina.com
*/

function ShowHtml(showDivId,showIframeId,hideDivId,hideIframeId,htmlPath,globalArray){
	var tmpArr;
	var QueryString;
	var QueryNum;
	var URL = document.location.toString();
	if(URL.lastIndexOf("?")!=-1){
		QueryString= URL.substring(URL.lastIndexOf("?")+1,URL.length);
		tmpArr=QueryString.split("&");
		QueryNum = tmpArr[0].substring(tmpArr[0].lastIndexOf("=")+1,tmpArr[0].length);
		var Num = parseInt(QueryNum);
		document.getElementById(showIframeId).src=globalArray[Num].url;
		document.getElementById(hideIframeId).src=htmlPath+globalArray[Num].pri+".html";
		QueryNum = tmpArr[1].substring(tmpArr[1].lastIndexOf("=")+1,tmpArr[1].length);
		if(parseInt(QueryNum)==0){
			Toggle(showDivId,hideDivId);
		}
		else{
			Toggle(hideDivId,showDivId);
		}
	}
}

function Toggle(showDivId,hideDivId){
	var target1=document.getElementById(showDivId);
	var target2=document.getElementById(hideDivId);
	if (target1.style.display=="block"){
		target1.style.display="none";
		target2.style.display="block";
	}
	else {
		target1.style.display="block";
		target2.style.display="none";
	}
}