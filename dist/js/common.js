function randomHexColor(){
//随机生成十六进制颜色
return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}
$("#fakeLoader").fakeLoader({
timeToHide:180000,
bgColor:randomHexColor(),
spinner:"spinner1"
});
if(window.top==window.self){
document.body.style.backgroundColor="#FFCC80";
document.body.style.backgroundImage="url('/uploads/1507074542.jpg')";
}
function kloader(){
$("#fakeLoader").hide();
}
window.onload=function(){
setTimeout(kloader(),1500);
};
