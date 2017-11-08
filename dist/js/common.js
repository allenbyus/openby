function Path(){
    const script=document.getElementById('cmScript')
    let uri=script.attributes.src.nodeValue.split('/'),
    path = ''
    for(let i = 0; i < uri.length - 1; i++) {
      path += uri[i] + '/'
    }
    return path
  }
//dist/js/k.js
function uprefiexes(){
var js = document.scripts;
var url =js[js.length - 1].src;
url=url.substring(0,url.indexOf('/',8));
//url=url.substring(0, url.lastIndexOf('/'));
return url;
}
//http://xxx.com/
function randomHexColor(){
//随机生成十六进制颜色
return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}
NProgress.start();
$("#fakeLoader").fakeLoader({
timeToHide:180000,
bgColor:randomHexColor(),
spinner:"spinner1"
});
if(window.top==window.self){
document.body.style.backgroundColor="#FFCC80";
document.body.style.backgroundImage="url(uprefiexes+'/uploads/1507074542.jpg')";
}
function kloader(){
$("#fakeLoader").hide();
NProgress.done();
NProgress.remove();
}
function addLoadListener(fn){
    if (typeof window.addEventListener != 'undefined'){
        window.addEventListener('load',fn,false);
    }else if(typeof document.addEventListener != 'undefined'){
        document.addEventListener('load',fn,false);
    }else if (typeof window.attachEvent != 'undefined'){
        window.attachEvent('onload',fn);
    }else{
        var oldfn = window.onload;
        if(typeof window.onload != 'function'){
            window.onload = fn;
        }else{
            window.onload = function(){
                oldfn();
                fn();
            };
        }
    }
}
addLoadListener(kloader);
