$("#fakeLoader").fakeLoader({
timeToHide:180000,
bgColor:"#2ecc71",
spinner:"spinner1"
});
if(window.top==window.self){
document.body.style.backgroundColor="#FFCC80";
document.body.style.backgroundImage="url('/uploads/1507074542.jpg')";
}
function kloader(){
$("#fakeLoader").hide();
}
$(document).ready(function(){
kloader();
});
