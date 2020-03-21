

const $divMenuBG = document.querySelector('header');
const $divMenu = document.querySelector('.menu');

window.addEventListener('scroll', ()=>{

    if(window.pageYOffset >= 3 &&  $divMenu.classList.contains('menu')){
        
        $divMenu.classList.add('scroll-menu');
        $divMenu.classList.remove('menu');
        
        
    }else if(window.pageYOffset <= 3 &&  $divMenu.classList.contains('scroll-menu')){
        $divMenu.classList.add('menu');
        $divMenu.classList.remove('scroll-menu');
    }

});

const $logoMenu = document.querySelector('menu-logo');

$logoMenu.addEventListener('mouseover', ()=>{

    setInterval(()=>{
        $logoMenu.classList.add('animated',   'bounce');
    }, 1000)

    

})
