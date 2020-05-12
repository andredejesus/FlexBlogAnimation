/*Interações do header*/

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

const $introducao = document.querySelector('.introducao').innerText;

function maquinaEscrever(elemento){

   const listaDePalavras =  elemento.split('');

   document.querySelector('.introducao').innerHTML = '';

   listaDePalavras.forEach((letra, i)=>{
        setTimeout(()=>{
            document.querySelector('.introducao').innerHTML += letra;
        }, 80 * i);
   });
    

}

maquinaEscrever($introducao);

const $teste = document.querySelector('.header-preco-item');

const $teste2 = document.querySelector('.preco');

$teste.addEventListener('mouseover', ()=>{

    $teste2.classList.add('preco-teste');

    //$teste2.appendChild
    
});

const sheet = window.document.styleSheets[0];

sheet.insertRule()