const container = document.querySelector('.sky'),
containerHeigth = container.clientHeight,
containerWidth = container.clientWidth,
stars = document.querySelectorAll('.star'),
clouds = document.querySelectorAll('.cloud')

function randon(){
    stars.forEach(elem => {
        elem.style.top = `${Math.floor(Math.random() * containerHeigth)}px`;
        elem.style.left = `${Math.floor(Math.random() * containerWidth)}px`
    })
}

function randonClouds(){
    clouds.forEach(elem => {
        elem.style.top = `${Math.floor(Math.random() * containerHeigth)}px`;
        elem.style.left = `${Math.floor(Math.random() * containerWidth)}px`
    })
}

randon()
randonClouds();

let font = 2;

const toggle = document.getElementById('toggle')
.addEventListener('click', function(){
    container.classList.toggle('is-day')
})

const display = document.querySelector('.calc_display');

const buttons = document.querySelectorAll('.btnc')
.forEach(elem => elem.addEventListener('click', function(){
    if (display.value.length >= 8) {
        return;
    }
    display.value += this.innerText;
    wow(display.value)  
}))

const res = document.querySelector('.calc_res')
.addEventListener('click', function(){
    display.value = eval(display.value)
})

const del = document.querySelector('.calc_del')
.addEventListener('click', function(){
    display.value = '';
})

display.addEventListener('keydown', (e)=>{
    wow(display.value)
    if (e.key == 'Enter') {
        display.value = eval(display.value)
    }
})

function wow(text){
    if (text == '75244' || text == 'plagg') {
        const sky = document.querySelector('.sky');
        sky.style.filter = 'invert(100%)'
    }
}
