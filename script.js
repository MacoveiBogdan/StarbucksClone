const btn = document.getElementById('menuBtn');
const nav = document.getElementById('menu');

function navToogle() {
    btn.classList.toggle('Open');
    nav.classList.toggle('Hidden');
    document.body.classList.toggle('NoScroll')
}

btn.addEventListener('click', navToogle);

// Footer Script
// 1
let $button = document.getElementById('btn');
let $span = document.getElementById('btnSpan');

$button.addEventListener('click', () => {
    $span.classList.toggle('Active');
},true);
// Rotate Arrow
let $arrow = document.getElementById('rotate');
$button.addEventListener('click', () => {
    $arrow.classList.toggle('Active');
}, true);

// 2
let $button2 = document.getElementById('btn2');
let $span2 = document.getElementById('btnSpan2');

$button2.addEventListener('click', () => {
    $span2.classList.toggle('Active');
},true);
// Rotate Arrow
let $arrow2 = document.getElementById('rotate2');
$button2.addEventListener('click', () => {
    $arrow2.classList.toggle('Active');
}, true);

// 3
let $button3 = document.getElementById('btn3');
let $span3 = document.getElementById('btnSpan3');

$button3.addEventListener('click', () => {
    $span3.classList.toggle('Active');
},true);
// Rotate Arrow
let $arrow3 = document.getElementById('rotate3');
$button3.addEventListener('click', () => {
    $arrow3.classList.toggle('Active');
}, true);

// 4
let $button4 = document.getElementById('btn4');
let $span4 = document.getElementById('btnSpan4');

$button4.addEventListener('click', () => {
    $span4.classList.toggle('Active');
},true);
// Rotate Arrow
let $arrow4 = document.getElementById('rotate4');
$button4.addEventListener('click', () => {
    $arrow4.classList.toggle('Active');
}, true);

// 5
let $button5 = document.getElementById('btn5');
let $span5 = document.getElementById('btnSpan5');

$button5.addEventListener('click', () => {
    $span5.classList.toggle('Active');
},true);
// Rotate Arrow
let $arrow5 = document.getElementById('rotate5');
$button5.addEventListener('click', () => {
    $arrow5.classList.toggle('Active');
}, true);
