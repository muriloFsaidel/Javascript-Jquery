/*DECLARAÇÕES*/
var resultado = 0;
var digito = "0";
var operacao;
var temp = "0";

const displayNumber = document.querySelector('#display-number');

const soma = document.querySelector('#soma');
const sub = document.querySelector('#sub');
const div = document.querySelector('#div');
const multi = document.querySelector('#multi');
const opModulo = document.querySelector('#modulo');

const d1 = document.querySelector('#d1');
const d2 = document.querySelector('#d2');
const d3 = document.querySelector('#d3');
const d4 = document.querySelector('#d4');
const d5 = document.querySelector('#d5');
const d6 = document.querySelector('#d6');
const d7 = document.querySelector('#d7');
const d8 = document.querySelector('#d8');
const d9 = document.querySelector('#d9');
const d0 = document.querySelector('#d0');

const igual = document.querySelector('#igual');
const remover = document.querySelector('#remover');
const limpar = document.querySelector('#limpar');

/*EVENTOS DE CLIQUE NO BOTÃO*/
d1.addEventListener("click", function () {
    if (digito == '0') {
        digito = d1.value;
        displayNumber.value = digito;
    } else {
        digito = digito.concat(d1.value);
        displayNumber.value = digito;
    }
});

d2.addEventListener("click", function () {
    if (digito == '0') {
        digito = d2.value;
        displayNumber.value = digito;
    } else {
        digito = digito.concat(d2.value);
        displayNumber.value = digito;
    }
});

d3.addEventListener("click", function () {
    if (digito == '0') {
        digito = d3.value;
        displayNumber.value = digito;
    } else {
        digito = digito.concat(d3.value);
        displayNumber.value = digito;
    }
});

d4.addEventListener("click", function () {
    if (digito == '0') {
        digito = d4.value;
        displayNumber.value = digito;
    } else {
        digito = digito.concat(d4.value);
        displayNumber.value = digito;
    }
});

d5.addEventListener("click", function () {
    if (digito == '0') {
        digito = d5.value;
        displayNumber.value = digito;
    } else {
        digito = digito.concat(d5.value);
        displayNumber.value = digito;
    }
});

d6.addEventListener("click", function () {
    if (digito == '0') {
        digito = d6.value;
        displayNumber.value = digito;
    } else {
        digito = digito.concat(d6.value);
        displayNumber.value = digito;

    }
});

d7.addEventListener("click", function () {
    if (digito == '0') {
        digito = d7.value;
        displayNumber.value = digito;
    } else {
        digito = digito.concat(d7.value);
        displayNumber.value = digito;
    }
});

d8.addEventListener("click", function () {
    if (digito == '0') {
        digito = d8.value;
        displayNumber.value = digito;
    } else {
        digito = digito.concat(d8.value);
        displayNumber.value = digito;
    }
});

d9.addEventListener("click", function () {
    if (digito == '0') {
        digito = d9.value;
        displayNumber.value = digito;
    } else {
        digito = digito.concat(d9.value);
        displayNumber.value = digito;
    }
});

d0.addEventListener("click", function () {
    if (digito == '0') {
        digito = d0.value;
        displayNumber.value = digito;
    } else {
        digito = digito.concat(d0.value);
        displayNumber.value = digito;
    }
});

soma.addEventListener("click", function () {
    operacao = "soma";
    if (resultado == 0) {
        temp = digito;
    }
    digito = '0';
});
sub.addEventListener("click", function () {
    operacao = "subtrair";
    if (resultado == 0) {
        temp = digito;
    }
    digito = '0';
});
div.addEventListener("click", function () {
    operacao = "dividir";
    if (resultado == 0) {
        temp = digito;
    }
    digito = '0';
});

multi.addEventListener("click", function () {
    operacao = "multiplicar";
    if (resultado == 0) {
        temp = digito;
    }
    digito = '0';
});

opModulo.addEventListener("click", function () {
    operacao = "modulo";
    if (resultado == 0) {
        temp = digito;
    }
    digito = '0';
});

igual.addEventListener("click", function () {
    switch (operacao) {

        case "soma":
            somar();
            break;

        case "subtrair":
            subtrair();
            break;

        case "dividir":
            dividir();
            break;

        case "multiplicar":
            multiplicar();
            break;

        case "modulo":
            modulo();
            break;
    }
});

remover.addEventListener("click", function () {
    let temp2 = '';
    for (i = 0; i < digito.length - 1; i++) {
        if (i != digito.length - 1) {
            temp2 += digito[i];
        }
    }
    digito = temp2;
    displayNumber.value = digito;
    operacao = "";
    resultado = 0;
});

limpar.addEventListener("click", function () {
    displayNumber.value = digito;
    operacao = "";
    resultado = 0;
});

/* OPERAÇÕES*/
function somar() {
    if (resultado == 0) {
        resultado += parseInt(temp) + parseInt(digito);
        displayNumber.value = resultado;
        digito = "0";
        temp = "0";
    } else {
        resultado = resultado + parseInt(digito);
        displayNumber.value = resultado;
    }

}

function subtrair() {

    if (resultado == 0) {
        resultado += parseInt(temp) - parseInt(digito);
        displayNumber.value = resultado;
        digito = "0";
        temp = "0";
    } else {
        resultado = resultado - parseInt(digito);
        displayNumber.value = resultado;
    }
}

function dividir() {
    if (resultado == 0) {
        resultado = parseInt(temp) / parseInt(digito);
        displayNumber.value = resultado;
        digito = "0";
        temp = "0";
    } else {
        resultado = resultado / parseInt(digito);
        displayNumber.value = resultado;
    }

}

function multiplicar() {
    if (resultado == 0) {
        resultado = parseInt(temp) * parseInt(digito);
        displayNumber.value = resultado;
        digito = "0";
        temp = "0";
    } else {
        resultado = resultado * parseInt(digito);
        displayNumber.value = resultado;
    }

}

function modulo() {
    if (resultado == 0) {
        resultado = parseInt(temp) % parseInt(digito);
        displayNumber.value = resultado;
        digito = "0";
        temp = "0";
    } else {
        resultado = resultado % parseInt(digito);
        displayNumber.value = resultado;
    }
}