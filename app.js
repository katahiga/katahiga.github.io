

document.addEventListener("DOMContentLoaded", function() {
    loadWords();

    // 読み上げ
    const divs = document.querySelectorAll('#wordList > div');
    divs.forEach(function(div) {
        div.addEventListener('click', function() {
            const play = div.querySelector('.word').textContent;
            const uttr = new SpeechSynthesisUtterance(play);
            uttr.lang = 'ko-KR';
            speechSynthesis.speak(uttr);
        });
    });
    
});

// Enterで登録
mean.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') registration();});
word.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') registration();});


function registration() {
    const wordval = word.value;
    const meanval = mean.value;

    if (wordval === '' || meanval === '') return;

    addWord(wordval, meanval);
    saveWords();

    word.value = '';
    mean.value = '';
}

// 単語をリストに追加
function addWord(wordval, meanval) {
    const listItem = document.createElement("div");
    listItem.innerHTML = '<span class="word">' + wordval + '</span><span class="mean">' + meanval + '</span> <button class="deleteButton">×</button>';
    wordList.appendChild(listItem);

    const totalval = total.textContent.replace(/[^0-9]/g, '');
    const totalnow = parseInt(totalval) + 1;
    total.textContent = "total：" + totalnow;

    // 削除ボタン
    const deleteButton = listItem.querySelector(".deleteButton");
    deleteButton.addEventListener("click", function() {
        listItem.remove();
        saveWords();
    
        const totalval = total.textContent.replace(/[^0-9]/g, '');
        const totalnow = parseInt(totalval) - 1;
        total.textContent = "total：" + totalnow;
    });
}

// 単語sをローカルに保存
function saveWords() {
    let words = [];
    let listItems = document.querySelectorAll("#wordList div");
    listItems.forEach(function(item) {
        let word = item.querySelector(".word").textContent;
        let mean = item.querySelector(".mean").textContent;
        words.push({ word: word, mean: mean });
    });
    localStorage.setItem("words", JSON.stringify(words));
}

// 単語sをローカルから読み込み
function loadWords() {
    let wordsString = localStorage.getItem("words");
    if (wordsString) {
        let words = JSON.parse(wordsString);
        words.forEach(function(word) {
            addWord(word.word, word.mean);
        });

        total.textContent = "total：" + words.length;
    }
}

// チェックされたら非表示
check.addEventListener('change', function() {
    const means = document.querySelectorAll('.mean');
    if (check.checked) {    
        means.forEach((val) => {
            val.style.opacity = '1';
        });
    }else {
        means.forEach((val) => {
            val.style.opacity = '0';
        });
    }
});
