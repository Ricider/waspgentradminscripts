var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

$('name_').checked=true;
input = $('nick').value=dd+"_"+mm+"_"+yyyy;
search_admins();
