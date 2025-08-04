$(function () {
    var resultado = 0;
    var digito = "0";
    var operacao = "";
    var temp = "0";

    $('#jD1').click(function () {
        if (digito == '0') {
            digito = $(this).val();
            $('#jDisplay-number').val(digito);
        } else {
            digito = digito.concat($(this).val());
            $('#jDisplay-number').val(digito);
        }
    });

    $('#jD2').click(function () {
        if (digito == '0') {
            digito = $(this).val();
            $('#jDisplay-number').val(digito);
        } else {
            digito = digito.concat($(this).val());
            $('#jDisplay-number').val(digito);
        }
    });

    $('#jD3').click(function () {
        if (digito == '0') {
            digito = $(this).val();
            $('#jDisplay-number').val(digito);
        } else {
            digito = digito.concat($(this).val());
            $('#jDisplay-number').val(digito);
        }
    });

    $('#jD4').click(function () {
        if (digito == '0') {
            digito = $(this).val();
            $('#jDisplay-number').val(digito);
        } else {
            digito = digito.concat($(this).val());
            $('#jDisplay-number').val(digito);
        }
    });

    $('#jD5').click(function () {
        if (digito == '0') {
            digito = $(this).val();
            $('#jDisplay-number').val(digito);
        } else {
            digito = digito.concat($(this).val());
            $('#jDisplay-number').val(digito);
        }
    });

    $('#jD6').click(function () {
        if (digito == '0') {
            digito = $(this).val();
            $('#jDisplay-number').val(digito);
        } else {
            digito = digito.concat($(this).val());
            $('#jDisplay-number').val(digito);
        }
    });

    $('#jD7').click(function () {
        if (digito == '0') {
            digito = $(this).val();
            $('#jDisplay-number').val(digito);
        } else {
            digito = digito.concat($(this).val());
            $('#jDisplay-number').val(digito);
        }
    });

    $('#jD8').click(function () {
        if (digito == '0') {
            digito = $(this).val();
            $('#jDisplay-number').val(digito);
        } else {
            digito = digito.concat($(this).val());
            $('#jDisplay-number').val(digito);
        }
    });

    $('#jD9').click(function () {
        if (digito == '0') {
            digito = $(this).val();
            $('#jDisplay-number').val(digito);
        } else {
            digito = digito.concat($(this).val());
            $('#jDisplay-number').val(digito);
        }
    });

    $('#jD0').click(function () {
        if (digito == '0') {
            digito = $(this).val();
            $('#jDisplay-number').val(digito);
        } else {
            digito = digito.concat($(this).val());
            $('#jDisplay-number').val(digito);
        }
    });

    $('#jSoma').click(function () {
        operacao = "soma";
        if (resultado == 0) {
            temp = digito;
        }
        digito = '0';

    })

    $('#jSub').click(function () {
        operacao = "subtrair";
        if (resultado == 0) {
            temp = digito;
        }
        digito = '0';
    });

    $('#jDiv').click(function () {
        operacao = "dividir";
        if (resultado == 0) {
            temp = digito;
        }
        digito = '0';
    });

    $('#jMulti').click(function () {
        operacao = "multiplicar";
        if (resultado == 0) {
            temp = digito;
        }
        digito = '0';
    });

    $('#jModulo').click(function () {
        operacao = "modulo";
        if (resultado == 0) {
            temp = digito;
        }
        digito = '0';
    });

    $('#jIgual').click(function () {
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

    $('#jRemover').click(function () {
        let temp2 = '';
        for (i = 0; i < digito.length - 1; i++) {
            if (i != digito.length - 1) {
                temp2 += digito[i];
            }
        }
        digito = temp2;
        $('#jDisplay-number').val(digito);
    });

    $('#jLimpar').click(function () {
        digito = '0';
        $('#jDisplay-number').val(digito);
    });

    function somar() {
        if (resultado == 0) {
            resultado += parseInt(temp) + parseInt(digito);
            $('#jDisplay-number').val(resultado);
            digito = "0";
            temp = "0";
        } else {
            resultado = resultado + parseInt(digito);
            $('#jDisplay-number').val(resultado);
        }

    }
    
    function subtrair() {

        if (resultado == 0) {
            resultado += parseInt(temp) - parseInt(digito);
            $('#jDisplay-number').val(resultado);
            digito = "0";
            temp = "0";
        } else {
            resultado = resultado - parseInt(digito);
            $('#jDisplay-number').val(resultado);
        }
    }

    function dividir() {
        if (resultado == 0) {
            resultado = parseInt(temp) / parseInt(digito);
            $('#jDisplay-number').val(resultado);
            digito = "0";
            temp = "0";
        } else {
            resultado = resultado / parseInt(digito);
            $('#jDisplay-number').val(resultado);
        }

    }

    function multiplicar() {
        if (resultado == 0) {
            resultado = parseInt(temp) * parseInt(digito);
            $('#jDisplay-number').val(resultado);
            digito = "0";
            temp = "0";
        } else {
            resultado = resultado * parseInt(digito);
            $('#jDisplay-number').val(resultado);
        }

    }

    function modulo() {
        if (resultado == 0) {
            resultado = parseInt(temp) % parseInt(digito);
            $('#jDisplay-number').val(resultado);
            digito = "0";
            temp = "0";
        } else {
            resultado = resultado % parseInt(digito);
            $('#jDisplay-number').val(resultado);
        }
    }
});