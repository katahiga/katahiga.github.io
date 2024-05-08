
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


const words = [{KR:'한국',JP:'ぜろ'},{KR:'1',JP:'いち'},{KR:'2',JP:'に'},{KR:'3',JP:'さん'},{KR:'4',JP:'よん'},{KR:'5',JP:'ご'}]

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


