
const right = document.getElementById('right');
const wrong = document.getElementById('wrong');
const hng = document.getElementById('hng');
const jpn = document.getElementById('jpn');
const btn = document.querySelector('.btn');


right.addEventListener('click', clicksound);
hng.addEventListener('click', function () {
    Reading(hng.textContent);
});

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

const words = [ {KR:'깨끗해',JP:'綺麗'},
                {KR:'도전',JP:'挑戦'},
                {KR:'끈',JP:'紐'},
                {KR:'바꿔',JP:'変える'},
                {KR:'터치',JP:'タッチ'},
                {KR:'듣다',JP:'効く'},
                {KR:'멍　때리다',JP:'ボーっとする'},
                {KR:'동안',JP:'間'},
                {KR:'눈을 뜨다',JP:'目を開ける'},
                {KR:'눈을 감다',JP:'目を閉じる'},
                {KR:'눈이 마주치다',JP:'目が合う'},
                {KR:'눈을 돌리다',JP:'目をそらす'},
                {KR:'목 막혀',JP:'喉詰まる'},
                {KR:'여우',JP:'きつね'},
                {KR:'놔두다',JP:'置いとく'},
                {KR:'당황스럽다',JP:'うろたえる'},
                {KR:'다리',JP:'橋、足'},
                {KR:'등',JP:'背'},
                {KR:'승모근',JP:'僧帽筋'},
                {KR:'떨어지다',JP:'落ちる'},
                {KR:'끈적끈적',JP:'べたべた、ねばねば'},
                {KR:'망했다',JP:'終わった、詰んだ'},
                {KR:'당했다',JP:'やられた'},
                {KR:'아찔하다',JP:'危ない'},
                {KR:'가운데',JP:'真ん中'},
                {KR:'정획히',JP:'ぴったり'},
                {KR:'치우다',JP:'どける、取り除く'},
                {KR:'주실수 있을까요',JP:'いただけますか'},
                {KR:'공룡',JP:'恐竜'},
                {KR:'알',JP:'卵'},
                {KR:'정도',JP:'程度'},
                {KR:'완숙',JP:'完熟'},
                {KR:'굽다',JP:'焼く'},
                {KR:'쏟아지다',JP:'こぼれる'},
                {KR:'탱글탱글',JP:'ぷりぷり'},]



let index = 0;
hng.textContent = words[index].KR;
jpn.addEventListener('click', function() {
    jpn.textContent = words[index].JP;
});

function order() {
    index = (index + 1) % words.length;
    hng.textContent = words[index].KR;
    Reading(hng.textContent);
    jpn.textContent = words[index].JP;
    jpn.textContent = "表示";

    if (this === right && words.length > 0) {
        words.splice(index-1 , 1);
        index--;
        index = index < 0 ? 0 : index;
    }

    if (words.length === 0) {
        hng.textContent = "완료";
        jpn.textContent = "";
        btn.style.display = 'none';
    }
}
right.addEventListener('click', order);
wrong.addEventListener('click', order);


