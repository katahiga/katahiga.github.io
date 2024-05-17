
const words1 = [
    {KR:'자연',JP:'自然'},
    {KR:'치다',JP:'打つ'},
    {KR:'누르다',JP:'押す'},
    {KR:'만약',JP:'もし'},
    {KR:'띠',JP:'帯'},
    {KR:'예를 들면',JP:'例えば'},
    {KR:'편',JP:'ほう'},
    {KR:'흩어져',JP:'散らばる'},
    {KR:'원하',JP:'願う'},
    {KR:'데',JP:'所'},
    {KR:'면서',JP:'ながら'},
    {KR:'배워',JP:'習う'},
    {KR:'음료수',JP:'飲料水'},
    {KR:'세다',JP:'強い、きつい'},
    {KR:'당연',JP:'当然'},
    {KR:'알려',JP:'知らせる'},
    {KR:'깝죽대다',JP:'そそっかしく'},
    {KR:'낮춰',JP:'下げる'},
    {KR:'애초',JP:'最初'},
    {KR:'자체',JP:'自体'},
    {KR:'아래',JP:'下げる'},
    {KR:'꽂다',JP:'差し込む'},
    {KR:'넣어',JP:'入れる'},
    {KR:'뻔해',JP:'ところだった'},
    {KR:'미음대로',JP:'勝手に'},
    {KR:'실수',JP:'失敗'},
    {KR:'살살해',JP:'優しく、手加減する'},
    {KR:'얍삽해',JP:'ずるい'},
    {KR:'갖다',JP:'持つ　가지다'},
    {KR:'집중',JP:'集中'},
    {KR:'정도',JP:'程度'},
    {KR:'신중',JP:'慎重'},
    {KR:'살짝',JP:'こっそり'},
    {KR:'기회',JP:'機械、チャンス'},
    {KR:'촬영',JP:'撮影'},
    {KR:'중요',JP:'重要'},
    {KR:'아쉽다',JP:'残念だ'},
    {KR:'맞히다',JP:'当てる'},
    {KR:'멀다',JP:'遠い'},
    {KR:'가깝다',JP:'近い'},
    {KR:'의문',JP:'疑問'},
    {KR:'놓쳐',JP:'逃す'},
    {KR:'따위',JP:'なんて'},
    {KR:'주황색',JP:'オレンジ'},
    {KR:'신기술',JP:'新技術'},
    {KR:'박제',JP:'恥ずかしい行為'},
    {KR:'추하',JP:'みっともない'},
    {KR:'얇게',JP:'薄く'},
    {KR:'볓 바퀴',JP:'何周'},
    {KR:'벌써',JP:'すでに'},
    {KR:'어떻게든',JP:'どうにかして'},
    {KR:'보라색',JP:'紫'},
    {KR:'보내다',JP:'送る'},
    {KR:'거봐',JP:'ほら'},
    {KR:'놔두',JP:'おいとく'},
    {KR:'깔끔해',JP:'さっぱり'},
    {KR:'줄',JP:'こと'},
    {KR:'조용히',JP:'静かに'},
    {KR:'권한',JP:'権限'},
    {KR:'테',JP:'はず'},
    {KR:'대신',JP:'代わり'},
]

const words2 = [
]


const right = document.getElementById('right');
const wrong = document.getElementById('wrong');
const hng = document.getElementById('hng');
const jpn = document.getElementById('jpn');
const btn = document.querySelector('.btn');
const disp = document.getElementById('disp');
const wd1 = document.getElementById('wd1');
const wd2 = document.getElementById('wd2');

let index = 0;
let thisWords = words1;
let now;

// クリック音
function clicksound() {
    const audio = new Audio('./assets/click.mp3')
    audio.currentTime = 0;
    audio.play();
}
// 読み上げ
function Reading(text) {
    const uttr = new SpeechSynthesisUtterance(text);
    uttr.lang = 'ko-KR';
    speechSynthesis.speak(uttr);
}
// 初期表示
function init(thisWords) {
    index = 0;
    disp.textContent = '1/' + thisWords.length;
    hng.textContent = thisWords[index].KR;
    jpn.textContent = "表示";
}
init(thisWords);

function order(words, action) {
    index = (index + 1) % words.length;
    hng.textContent = words[index].KR;
    Reading(hng.textContent);
    jpn.textContent = "表示";
    
    if (action === 'right' && words.length > 0) {
        words.splice(index-1 , 1);
        index--;
        index = index < 0 ? 0 : index;
        disp.textContent = (index + 1) + '/' + words.length;
    }
    if (words.length === 0) {
        hng.textContent = "완료";
        jpn.textContent = "";
        btn.style.display = 'none';
        disp.textContent = '0/0';
    }
    if (action === 'wrong') {
        disp.textContent = (index + 1) + '/' + words.length;
    }
}


hng.addEventListener('click', function () {
    Reading(hng.textContent);
});
jpn.addEventListener('click', function() {
    jpn.textContent = thisWords[index].JP;
});

right.addEventListener('click', function() {
    order(thisWords, 'right');
    clicksound();
});
wrong.addEventListener('click', function() {
    order(thisWords, 'wrong');
});

wd1.addEventListener('click', function() {
    thisWords = words1;
    init(thisWords);
});
wd2.addEventListener('click', function() {
    thisWords = words2;
    init(thisWords);
});


