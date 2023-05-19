"use strict";
const activeButton = document.querySelectorAll('.rateButtons .indivButton');
const submitButton = document.querySelector('.submitButton');
const main = document.querySelector('#mainContent');
const sub = document.querySelector('#subContent');
const rateResult = document.querySelector('.rateResult');
let selectedRate = '0';
activeButton.forEach((element, index) => {
    element.addEventListener('click', function () {
        activeButton.forEach(btn => {
            btn.classList.remove('active');
            btn.classList.remove('closeToActive');
        });
        element.classList.add('active');
        if (index - 1 !== -1) {
            activeButton[index - 1].classList.add('closeToActive');
        }
        selectedRate = element.children[0].outerText;
    });
});
submitButton.addEventListener('click', () => {
    main.classList.add('hidden');
    main.classList.remove('visible');
    sub.classList.remove('hidden');
    sub.classList.add('visible');
    rateResult.innerHTML = `you selected ${selectedRate} out of ${rating.length}`;
});
