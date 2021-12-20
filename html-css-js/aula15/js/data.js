function reloginho() {
    
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    

    // concatenação usando os pontos para 'enganar' o js

    // solucionando o bug das duas casas
    if (hora < 10) {
        hora = '0' + hora;
    }        
             
    if (min < 10){
    min = '0' + min;   
    }
    
    if (seg < 10) {
    seg = '0' + seg;
    }
    
    var horaCompleta = hora + ':' + min + ':' + seg;
    var relogio = document.getElementById('relogio');

    relogio.innerHTML = horaCompleta;
}


setInterval(reloginho, 1000);