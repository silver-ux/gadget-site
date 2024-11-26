'use strict';

const loading = document.querySelector('#loading');

window.addEventListener("load", () => {
    //3秒後にローディング画面を非表示にする
    setTimeout(() => {
        loading.classList.add("loaded");
    }, 1000);
});

const text = document.querySelector('#loading-text');

const texts = text.textContent,
    textsArray = [];

text.textContent = "";

for (let i = 0; i < texts.split("").length; i++) {
    textsArray.push('<span style="animation-delay: ' + (i * 0.1) + 's;">' + texts.split("")[i] + '</span>')
}

for (let i = 0; i < textsArray.length; i++) {
    text.innerHTML += textsArray[i];
}