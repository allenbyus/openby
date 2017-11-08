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
var upre=uprefiexes();
var playlist=[
  {
    'title': 'Another World',
    'artist': 'A応P',
    'cover': upre+'/uploads/1506255575.jpg',
    'file': upre+'/uploads/1506746043.mp3',
    'lrc': upre+'/uploads/1506252456.lrc'
  },
{
    'title': 'only my railgun (3D)',
    'artist': 'fripSide',
    'cover': upre+'/uploads/1506256002.jpg',
    'file': upre+'/uploads/1510153113.mp3',
    'lrc': upre+'/uploads/1506745992.lrc'
  },
{
    'title': 'メグメル',
    'artist': 'riya',
    'cover': upre+'/uploads/1506746393.jpg',
    'file': upre+'/uploads/1506746461.mp3',
    'lrc': upre+'/uploads/1506745863.lrc'
  },
{
    'title': '影二つ',
    'artist': 'Riya(日中)',
    'cover': upre+'/uploads/1506746191.jpg',
    'file': upre+'/uploads/1506746773.mp3',
    'lrc': upre+'/uploads/1506747009.lrc'
  },
 {
    'title': 'Masquerade kiss',
    'artist': '田村ゆかり',
    'cover': upre+'/uploads/1508322205.jpg',
    'file': upre+'/uploads/1508321457.mp3',
    'lrc': upre+'/uploads/1508322416.lrc'
  },
];
var cm1 = new cPlayer({
  'element': document.getElementById('cm1'),
  'autoplay': true,
  'mode': 'default',
  'skin': 'vertical',
  'playlist': playlist
});
