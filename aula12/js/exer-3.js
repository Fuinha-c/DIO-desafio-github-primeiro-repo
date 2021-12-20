var corpo = document.body.style;

var idade = 12;

function trocaFundo () {
    corpo.background = '#FF9755'
    corpo.fontFamily = 'Arial'
    corpo.color = 'White'
}

function trocaFundoBranco() {
    corpo.background = '#FF00FF'
    corpo.fontFamily = 'Arial'
    corpo.color = 'White'
}

var titulo = document.getElementById('titulo');

function mostra() { 
    titulo.style.border = '3px solid red';
titulo.style.height = '40px';
titulo.innerHTML = 'Texto em JS'
}