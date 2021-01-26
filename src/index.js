'use strict';

import Timer from './timer.js';

const btn = document.querySelector('.btn');
const txt = 'Yes!';

btn.addEventListener('click', () => {
    document.querySelector('.text').innerHTML = txt;
    let timer = new Timer(document.querySelector('.timer'), 100);
});

console.log(123123123);

// window.addEventListener('load', function () {
//     let timer1 = new Timer(document.querySelector('.timer1'), 100);
// });

