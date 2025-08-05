var mensagem = "Olá, Mundo!";
console.log("Mostrando o valor da variável mensagem: "+mensagem+'\n');
var a = 2;
var b = 3;
var c = "Olá, Mundo"

var soma =  a + b;
var sub =  a - b;
var multi = "Resultado da multiplicação de A ( 2 ) e B ( 3 ) é "+ a * b;
var div = "Resultado da divisão de A ( 2 ) e B ( 3 ) é "+ a / b;
var resto = "Resultado do resto da divisão de A ( 2 ) e B ( 3 ) é "+ a % b;

console.log("Resultado da soma de A ( 2 ) e B ( 3 ) é " + soma+"\n");
console.log("Resultado da subtração de A ( 2 ) e B ( 3 ) é "+ sub+"\n");
console.log(multi+"\n");
console.log(div)+"\n";
console.log(resto)+"\n";


if ( c % 2 == 1 ){
    console.log("Cláusula if verdadeiro, O número "+ c +" é impar"+"\n");
} else if (c % 2 == 0){
    console.log("Cláusula else if verdadeiro, O número "+ c +" é par"+"\n");
} else {
    console.log("Cláusula else, Valor inválido"+"\n");
}

var i = 0;
console.log("Usando a estrutura de repetição ou laço WHILE, mostrando o valor do índice"+"\n");
while (i < 3){
    console.log(i+"\n");
    i = i + 1;  
}
console.log("Usando a estrutura de repetição ou laço for, mostrando o valor do índice"+"\n");
for ( var j = 0; j < 3; j++){
    console.log(j+"\n");
}

var inteiro = 2;
var flutuante = 2.60;
var texto = "Olá, Mundo";
var caractere = "o";
var carro = {
    "modelo": "gm",
    "ano": 2009
}
console.log("mostrando array de frutas"+"\n");
var lista = ["laranja","maça","pera"];
console.log(lista+"\n");
console.log("mostrando array de números e objeto"+"\n");
lista = [inteiro,flutuante,texto, caractere,carro.modelo,carro.ano];
console.log(lista+"\n");

console.log("mostrando array de frutas item por item com base na posição"+"\n");
var lista2 = ["laranja","maça","pera"];
console.log(lista2[0])+"\n";
console.log(lista2[1])+"\n";
console.log(lista2[2])+"\n";

console.log("mostrando array de frutas item por item com base na posição usando o laço for (para cada ( posição dentro de lista2 valor do item da lista com base na posição) -> for (p in lista2) console.log(lista2[p]) )"+"\n");

for (p in lista2){
    console.log(lista2[p])+"\n";
}


var lista2 = ["laranja","maça","pera"];
for (p in lista2){
    console.log(lista2[p])+"\n";
}