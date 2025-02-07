let text = document.getElementById('text');
let lh4 = document.getElementById('lh4');
let lh3 = document.getElementById('lh3');
let lh6 = document.getElementById('lh6');
let lh5 = document.getElementById('lh5');
let lh55 = document.getElementById('lh55');



window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    lh6.style.left = value * -1.5 + 'px';
    lh5.style.left = value * 1.5 + 'px';
    lh4.style.left = value * -1.5 + 'px';
    lh3.style.left = value * 1.5 + 'px';
    lh55.style.left = value * 1.5 + 'px';
    
})