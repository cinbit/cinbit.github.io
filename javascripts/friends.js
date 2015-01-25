/*
*  @author cinbit.com
*  @date   2015-01-24
*  @email  cinbit@sina.com
*/

ShowFriendlinks("links");
function ShowFriendlinks(id){
	for(var i=0;i<friends.length;i++){
		document.getElementById(id).innerHTML+="<a href='"+friends[i].url+"' target='_blank'>"+friends[i].name+"</a>";
	}
}