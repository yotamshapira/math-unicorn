/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
var getParams = function (url) {
  var params = {};
  var parser = document.createElement('a');
  parser.href = url;
  var query = parser.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
};
const params = getParams(window.location.href);
console.log(params);
let successImageUrls = [
  "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F550276%2Funicorn-wearing-i-love-unicorns-sweater-standing-in-front-of-a-rainbow.jpg&w=700&op=resize",
  "https://www.partyrama.co.uk/wp-content/uploads/2018/05/rainbow-unicorn-163cm-lifesize-cardboard-cutout-product-image.jpg",
  "https://image.freepik.com/free-vector/unicorn_23-2148174709.jpg",
  "https://www.popcornopolis.com/media/catalog/product/cache/1/image/650x/7b8fef0172c2eb72dd8fd366c999954c/u/n/unicornpopcorn_logo.webp",
  "https://cdn.europosters.eu/image/750webp/58516.webp",
  "https://static.theworks.co.uk/images/9781782439073_L.jpg",
  "https://t1.pixers.pics/img-c676e9e9/posters-i-m-a-unicorn-handwriting-text-drawing-isolated-on-white.jpg?H4sIAAAAAAAAA42PW07EMAxFt9NKae2kzaNdwPzOEqo08QyFPqIkwIjVkwLiDwn5w9eW77EuvO7J3ggc7ZkibIv3K8FtWcuUxkhp-aBKSs2wHst2rRCLOt4ouniEqpE9a1TPFComB1WP77YYNxtfqqecQxoBUteG5VFopbkEbksgkGtAA3Iw1pEYBHneTWFtUra7t9E3Ch8S27DfGZ71f64BjiBnz2c1G4_9bCYhTljzS_jCdoNgkosT_RNSIzJ9hstx2aqS9ijXuXoO9xr--PmtobjgcgWuwEjoBWgO-lxOlytXRvZCcz3N1uuOvO9Jo5JkXXcb0EptEGdLzrXl0SfLCEl_jQEAAA==",
  "https://cdn.wimmel-napkins.com/F/1/PT/gPT-86736.webp",
  "https://images-na.ssl-images-amazon.com/images/I/81Ikr2kpKgL._SX1000_.jpg",
  "https://cdn.shopify.com/s/files/1/2362/8001/products/rainbow-unicorn-paint-with-diamonds-bfcm-fall-sale-fantasy-november-2018-round_648.jpg",
  "https://images.squarespace-cdn.com/content/v1/5c7e08b3ab1a6237c52789a1/1554737397826-4ET3JQEOX8QFGJO3U471/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/Unicorn-Cafe_Banner.jpg?format=2500w",
  "https://previews.123rf.com/images/hanet/hanet1809/hanet180900030/107706159-cute-unicorn.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71nW6yN7ALL.jpg",
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/unicorns-are-born-in-december-cute-unicorn-rainbow-grace-collett.jpg",
  "https://image.posterlounge.com/images/big/1860592.jpg",
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cute-unicorn-lady-tom-cage.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScMWpwgVCrdnu4oXx_ZSgAhDLknrqqk8SUtKjxF0s7CPIw9kfm",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAyRawB_6GnmtfueOZbEHfCgfY3tuosZCpuZBmaavfuEW_Q9MI",
  "https://media.customon.com/unsafe/600x600/img.customon.com//design/600/600/ffffff/65038/a29315ef4180983623df7f45ffcbe6cf.png.jpg",
  "https://ecdn.teacherspayteachers.com/thumbitem/Cute-unicorn-clipart-4455469-1552974777/original-4455469-1.jpg"
];
if (params["2"]) {
  successImageUrls = [
    "https://www.timrylands.com/wp-content/uploads/2020/03/Beyblade-Characters.jpg",
    "https://i.pinimg.com/originals/75/4a/fd/754afd43197107b67ec5c409b5bf06df.jpg",
    "https://i.pinimg.com/originals/d4/2d/de/d42ddedf8a896ec32a047239588289e4.jpg",
    "https://photos1.blogger.com/blogger/6198/2250/1600/kaiPDVD_003.jpg",
    "https://m.media-amazon.com/images/M/MV5BNGIzNDViMjAtYzYwZS00MzJlLTkyZTUtYzZlOWFkYmEyMTdlXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_UY1200_CR93,0,630,1200_AL_.jpg",
    "https://w7.pngwing.com/pngs/849/720/png-transparent-ray-kon-kai-hiwatari-tyson-beyblade-metal-fusion-others-black-hair-cartoon-fictional-character.png",
    "https://i.pinimg.com/originals/16/ae/ec/16aeec16629cabe6728a06b84a523a32.jpg",
    "https://vignette.wikia.nocookie.net/beyblade/images/3/31/RAY_KON_2000_PROMO.png/revision/latest?cb=20160411033253",
    "https://vignette.wikia.nocookie.net/p__/images/7/77/Kai_Hiwatari_BB.jpg/revision/latest?cb=20180514004559&path-prefix=protagonist",
    "https://wallpapercave.com/wp/XD1DTMx.jpg",
    "https://e7.pngegg.com/pngimages/927/797/png-clipart-beyblade-shogun-steel-anime-character-drawing-holi-manga-computer-wallpaper.png",
    "https://pm1.narvii.com/6437/6e6212074bea5a8eb5ef191d8a8f4733269284a9_hq.jpg",
    "https://i.pinimg.com/originals/89/10/e8/8910e857004e12453677c77e67f41420.jpg"
  ];
}
let topNum = 20;
if (params['2']) {
  topNum = 10;
}
const failImageUrl = "";
let firstNumber;
let secondNumber;
let action;
let randomize = () => {
  action = params['2'] ? true : Math.round(Math.random()) !== 0;
  if (action) {
    $('#action').text('+');
  } else {
    $('#action').text('-');
  }
  firstNumber = Math.round(Math.random() * topNum);
  secondNumber = Math.round(Math.random() * 10);
  if (!action && firstNumber < secondNumber) {
    firstNumber += secondNumber;
    secondNumber = firstNumber - secondNumber;
  }
  $('#firstNumber').text('' + firstNumber);
  $('#secondNumber').text('' + secondNumber);
};
randomize();

$("#answer").keyup(function(event) {
  if (event.keyCode === 13) {
    answerSubmitted();
  }
});

answerSubmitted = () => {
  let asText = $('#answer').val();
  let answer = parseInt(asText, 10);
  $('#answer').val("");
  if (isNaN(answer)) {
    return;
  }
  let correctAnswer = action ? firstNumber + secondNumber : firstNumber - secondNumber;
  let success = correctAnswer === answer;
  setSuccessImage(success)
  if (success) {
    randomize();
  }
};

setSuccessImage = (result) => {
  if (result) {
    let imageNum = Math.round((Math.random() * successImageUrls.length)) - 1;
    $('#answerImage').attr("src", successImageUrls[imageNum]);
  } else {
    $('#answerImage').attr("src", failImageUrl);
  }
};
