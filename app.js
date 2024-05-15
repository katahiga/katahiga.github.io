
const words1 = [
    {KR:'도전',JP:'挑戦'},
    {KR:'끈',JP:'紐'},
    {KR:'듣다',JP:'効く'},
    {KR:'동안',JP:'間'},
    {KR:'눈을 뜨다',JP:'目を開ける'},
    {KR:'눈을 감다',JP:'目を閉じる'},
    {KR:'눈을 돌리다',JP:'目をそらす'},
    {KR:'놔두다',JP:'置いとく'},
    {KR:'당황스럽다',JP:'うろたえる'},
    {KR:'떨어지다',JP:'落ちる'},
    {KR:'망했다',JP:'終わった、詰んだ'},
    {KR:'당했다',JP:'やられた'},
    {KR:'아찔하다',JP:'危ない'},
    {KR:'정획히',JP:'ぴったり'},
    {KR:'치우다',JP:'どける、取り除く'},
    {KR:'주실수 있을까요',JP:'いただけますか'},
    {KR:'정도',JP:'程度'},
    {KR:'완숙',JP:'完熟'},
    {KR:'쏟아지다',JP:'こぼれる'},
    {KR:'탱글탱글',JP:'ぷりぷり'},
]

const words2 = [
    {KR:'질투 심해',JP:'嫉妬深い'},
    {KR:'넓은',JP:'広い'},
    {KR:'가지고',JP:'ので'},
    {KR:'수정',JP:'修正'},
    {KR:'금방',JP:'たった今'},
    {KR:'찰영',JP:'撮影'},
    {KR:'안아',JP:'抱く'},
    {KR:'비상사태',JP:'非常事態'},
    {KR:'확',JP:'ぱっと'},
    {KR:'다치다',JP:'怪我する'},
    {KR:'아예',JP:'ハナから'},
    {KR:'등을 돌리다',JP:'背を向ける'},
    {KR:'살포시',JP:'そっと'},
    {KR:'바로',JP:'すぐ'},
    {KR:'넘어가다',JP:'過ぎる'},
    {KR:'스러워',JP:'な感じ、ぽい'},
    {KR:'진',JP:'～くなった'},
    {KR:'모습',JP:'姿'},
    {KR:'가성',JP:'裏声'},
    {KR:'그런데',JP:'なのに'},
    {KR:'안무',JP:'振付'},
    {KR:'똑',JP:'ぴったっと'},
    {KR:'체념해',JP:'諦める'},
    {KR:'듯이',JP:'ように'},
    {KR:'절규',JP:'絶叫'},
    {KR:'답게',JP:'らしく'},
    {KR:'표현',JP:'表現'},
    {KR:'때마다',JP:'たびに'},
    {KR:'부담',JP:'負担'},
    {KR:'주문',JP:'呪文'},
    {KR:'외워',JP:'覚える'},
    {KR:'운전',JP:'運転'},
    {KR:'유리',JP:'ガラス'},
    {KR:'깨부수다',JP:'砕く'},
    {KR:'만화',JP:'漫画'},
    {KR:'돌진',JP:'突進'},
    {KR:'향해',JP:'向かう'},
    {KR:'찾아가다',JP:'訪ねに行く'},
    {KR:'동작',JP:'動作'},
    {KR:'단순',JP:'単純'},
    {KR:'선',JP:'線'},
    {KR:'이어지다',JP:'続く'},
    {KR:'강조',JP:'強調'},
    {KR:'사료',JP:'餌'},
    {KR:'모래',JP:'砂'},
    {KR:'장난감',JP:'おもちゃ'},
    {KR:'느끼게 해',JP:'感じさせる'},
    {KR:'자식',JP:'子'},
    {KR:'끊임없이',JP:'絶え間なく'},
]


const right = document.getElementById('right');
const wrong = document.getElementById('wrong');
const hng = document.getElementById('hng');
const jpn = document.getElementById('jpn');
const btn = document.querySelector('.btn');
const disp = document.getElementById('disp');
const nyan = document.getElementById('nyan');
const mk = document.getElementById('mk');

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

nyan.addEventListener('click', function() {
    thisWords = words1;
    init(thisWords);
});
mk.addEventListener('click', function() {
    thisWords = words2;
    init(thisWords);
});


