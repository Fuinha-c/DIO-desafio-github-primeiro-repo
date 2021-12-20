var nome = 'Guilherme';
var idade = 17;
var salario = 5236.29;
var casado = true;



// alert(nome);

// % => modulo e retorna o RESTO de uma divisao, sendo muito usado em algoritmos de Num. pares / impares

var x = 10;
var y = 20;
var resultado = x + y;
var media = (x + y) / 2;
var modulo = x % 2; 

// condicionais
//  operadores: >, >=, <, <=, ==, !=

if (idade >= 18) {
    alert('Pode dirigir!')
} else {
    alert ('Não pode dirigir');
}

// estruturas de repetição
// enquanto (while)
var cont = 1;

while (cont < 4){
    alert('Michel');

    // cont = cont + 1;
    cont++; // incrementa APENAS 1 unidade na variavel cont
}


// repita => (do / while)
var cont2 = 1;
do {
    alert('Carla')

    cont2++;
} while (cont < 4)
//  inicio       condição  oque faz
for (cont3 = 1; cont3 < 4; cont3++) {
    alert('Victoria')
}
