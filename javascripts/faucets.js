/*
*  @author cinbit.com
*  @date   2015-01-25
*  @email  cinbit@sina.com
*/

ShowFaucets("view1",0,39);
ShowFaucets("view2",40,79);
ShowFaucets("view3",80,119);

function ShowFaucets(showId,beginNum,endNum){
	var column=5;
	var row=Math.ceil((endNum-beginNum+1)/column);
	var strTable="";
	strTable+="<table border='0' cellSpacing='4' cellPadding='0' width='100%' align='center'>";
	strTable+="<tbody>";
	for(var i=0;i<row;i++){
		strTable+="<tr>";
		for(var j=0;j<column;j++){
			var count=i*column+j+beginNum;
			strTable+="<td width='20%' align='center'>";
			strTable+="<div class='faucet' id='p"+count+"'>";
			if(fc.length>count){
				strTable+="<div class='tt' id='p"+count+"tt' onclick='onTt(this.id);'></div>";
				strTable+="<div class='up' id='p"+count+"up' onclick='onUp(this.id);'><img class='img' src='./images/up.gif' title='排序前移' /></div>";
				strTable+="<div class='dw' id='p"+count+"dw' onclick='onDw(this.id);'><img class='img' src='./images/dw.gif' title='排序后移' /></div>";
				strTable+="<div class='tm' id='p"+count+"tm'></div>";
				strTable+="<div class='hp' id='p"+count+"hp'><img class='img' src='./images/hp.gif' title='帮助信息' /></div>";
				strTable+="<div class='rs' id='p"+count+"rs' onclick='onRs(this.id);'><img class='img' src='./images/rs.gif' title='重新计时' /></div>";
			}
			strTable+="</div>";
			strTable+="</td>";
		}
		strTable+="</tr>";
	}
	strTable+="</tbody>";
	strTable+="</table>";
	document.getElementById(showId).innerHTML=strTable;
}