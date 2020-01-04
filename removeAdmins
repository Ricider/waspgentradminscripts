var i=-1;
while (true){
i+=2;
var removalStr=document.getElementById('banlist').getChildren()[0].rows[i].cells[0].innerHTML;
removalStr=removalStr.split("advSearch=");
removalStr=removalStr[1].split("&amp");
var id=removalStr[0];
alert(id);
xajax_RemoveAdmin(id);
}
