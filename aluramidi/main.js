function tocaSom (selectorAudio) {

    const elemento = document.querySelector(selectorAudio);
    //verifica elemento
    if (elemento === null) {
        console.log('Elemento não existe!');
    }
    //verifica a tag do elemento
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        console.log('Elemento ou seletor inválido')
    }
}
const listadeTeclas = document.querySelectorAll('.tecla');

//iterando teclas
for (let contador = 0; contador < listadeTeclas.length; contador++) {

    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string
    
    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event) {

        if (event.code === 'Space' || 'Enter');
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
    
}
