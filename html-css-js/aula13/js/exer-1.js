

function calculaMedia() {
   var nota1 = document.getElementById('nota1').value;
   var nota2 = document.getElementById('nota2').value;
   var nota3 = document.getElementById('nota3').value;
  
var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;


if (media >= 7) {
    var aviso = document.getElementById('aviso');

    aviso.style.border = '2px solid green';
    aviso.style.height = '40px';
    aviso.style.fontFamily = 'Arial';
    aviso.style.fontSize = '30px';
    aviso.innerHTML = 'Você foi aprovado!';
} else {
    var aviso = document.getElementById('aviso');
    
    aviso.style.border = '2px solid red';
    aviso.style.height = '40px';
    aviso.style.fontFamily = 'Arial';
    aviso.style.fontSize = '30px';
    aviso.innerHTML = 'Você foi reprovado!';
   }

}