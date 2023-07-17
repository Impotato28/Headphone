const h1 = document.getElementById('red_h');
const h2 = document.getElementById('purple_h');
const h3 = document.getElementById('blue_h');
const sp = document.getElementById('span-value');
const img = document.getElementById('img');
const container = document.getElementById('container');
const home = document.getElementById('home');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

setTimeout(() => {
    text1.style.setProperty('opacity','1');
    text1.style.setProperty('transform','translateY(0rem)')
},250);
setTimeout(() =>{
    sp.style.setProperty('opacity','1');
    sp.style.setProperty('transform','translateY(0rem)');
},450);
setTimeout(() => {
    text2.style.setProperty('opacity','1');
    text2.style.setProperty('transform','translateY(0rem)')
},650);


setTimeout(() => {
    img.style.setProperty('opacity','1');
    img.style.setProperty('transform','translateY(0rem)');
},500)

h1.addEventListener('click' , () => {
    text1.style.setProperty('opacity','0');
    text1.style.setProperty('transform','translateY(2rem)');
    setTimeout( () => {
        text1.style.setProperty('opacity','1');
        text1.style.setProperty('transform','translateY(0rem)')
    },250)
    sp.style.setProperty('opacity','0');
    sp.style.setProperty('transform','translateY(2rem)');
    setTimeout( () => {
        sp.style.setProperty('opacity','1');
        sp.style.setProperty('transform','translateY(0rem)')
    },450)
    text2.style.setProperty('opacity','0');
    text2.style.setProperty('transform','translateY(2rem)');
    setTimeout( () => {
        text2.style.setProperty('opacity','1');
        text2.style.setProperty('transform','translateY(0rem)')
    },650)
    img.style.setProperty('opacity','0');
    img.style.setProperty('transform','translateY(6rem)');
    setTimeout( () => {
        img.src='./headphone1.png';
        img.style.setProperty('opacity','1');
        container.style.setProperty('background','linear-gradient(144deg, rgba(255,255,255,1) 62%, rgba(255,0,0,0.74) 62%)');
        img.style.setProperty('transform','translateY(0rem)')
    },500)
    h1.classList.add('active');
    h2.classList.remove('active');
    h3.classList.remove('active');
    home.style.setProperty('color','rgba(255,0,0,0.7483368347338936)');
    sp.style.setProperty('-webkit-text-stroke','0.125rem red');
})
h2.addEventListener('click' , () => {
    text1.style.setProperty('opacity','0');
    text1.style.setProperty('transform','translateY(2rem)');
    setTimeout( () => {
        text1.style.setProperty('opacity','1');
        text1.style.setProperty('transform','translateY(0rem)')
    },250)
    sp.style.setProperty('opacity','0');
    sp.style.setProperty('transform','translateY(2rem)');
    setTimeout( () => {
        sp.style.setProperty('opacity','1');
        sp.style.setProperty('transform','translateY(0rem)')
    },450)
    text2.style.setProperty('opacity','0');
    text2.style.setProperty('transform','translateY(2rem)');
    setTimeout( () => {
        text2.style.setProperty('opacity','1');
        text2.style.setProperty('transform','translateY(0rem)')
    },650)
    img.style.setProperty('opacity','0');
    img.style.setProperty('transform','translateY(6rem)');
    setTimeout( () => {
        img.src='./headphone4.png';
        img.style.setProperty('opacity','1');
        container.style.setProperty('background','linear-gradient(144deg, rgba(255,255,255,1) 62%, rgba(74,207,180,1) 62%)');
        img.style.setProperty('transform','translateY(0rem)')
    },500)
    h2.classList.add('active');
    h1.classList.remove('active');
    h3.classList.remove('active');
    home.style.setProperty('color','#4ACFB4');
    sp.style.setProperty('-webkit-text-stroke','0.125rem #4ACFB4');  
})
h3.addEventListener('click' , () => {
    text1.style.setProperty('opacity','0');
    text1.style.setProperty('transform','translateY(2rem)');
    setTimeout( () => {
        text1.style.setProperty('opacity','1');
        text1.style.setProperty('transform','translateY(0rem)')
    },250)
    sp.style.setProperty('opacity','0');
    sp.style.setProperty('transform','translateY(2rem)');
    setTimeout( () => {
        sp.style.setProperty('opacity','1');
        sp.style.setProperty('transform','translateY(0rem)')
    },450)
    text2.style.setProperty('opacity','0');
    text2.style.setProperty('transform','translateY(2rem)');
    setTimeout( () => {
        text2.style.setProperty('opacity','1');
        text2.style.setProperty('transform','translateY(0rem)')
    },650)
    img.style.setProperty('opacity','0');
    img.style.setProperty('transform','translateY(6rem)');
    setTimeout( () => {
        img.src='./headphone5.png';
        img.style.setProperty('opacity','1');
        container.style.setProperty('background','linear-gradient(144deg, rgba(255,255,255,1) 62%, rgba(193,206,68,1) 62%)');
        img.style.setProperty('transform','translateY(0rem)')
    },500)
    h3.classList.add('active');
    h2.classList.remove('active');
    h1.classList.remove('active');
    home.style.setProperty('color','#C1CE44');
    sp.style.setProperty('-webkit-text-stroke','0.125rem #C1CE44');
})