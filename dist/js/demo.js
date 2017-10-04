var playlist=[
  {
    'title': 'Another World',
    'artist': 'A応P',
    'cover': '/uploads/1506255575.jpg',
    'file': '/uploads/1506746043.mp3',
    'lrc': '/uploads/1506252456.lrc'
  },
{
    'title': 'only my railgun',
    'artist': 'fripSide',
    'cover': '/uploads/1506256002.jpg',
    'file': '/uploads/1506746017.mp3',
    'lrc': '/uploads/1506745992.lrc'
  },
{
    'title': 'メグメル',
    'artist': 'riya',
    'cover': '/uploads/1506746393.jpg',
    'file': '/uploads/1506746461.mp3',
    'lrc': '/uploads/1506745863.lrc'
  },
{
    'title': '影二つ',
    'artist': 'Riya(日中)',
    'cover': '/uploads/1506746191.jpg',
    'file': '/uploads/1506746773.mp3',
    'lrc': '/uploads/1506747009.lrc'
  },
];
var cm1 = new cPlayer({
  'element': document.getElementById('cm1'),
  'autoplay': false,
  'mode': 'default',
  'skin': 'vertical',
  'playlist': playlist
});
