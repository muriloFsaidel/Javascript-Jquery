$(document).ready(function () {
    $('button').click(function () {
        $('h1').hide();
        $('#unico').css("color", "red");
    });

    $('#azul').click(function () {
        $('.msg')
        .css("color", "blue")
        .fadeOut()
        .delay(3000)
        .fadeIn(5000);
    })
    $('#vermelho').click(function () {
        $('.msg')
        .css("color", "red")
        .fadeOut('slow')
        .delay(3000)
        .fadeIn('fast');
        $('#msg_gravada')
        .text("Cor alterada com sucesso")
        .css({"color": "red", "border": "1px solid red"})
        .addClass('green')
        .delay(3000)
        .fadeOut('fast');

        $('#vermelho').removeClass('red');
    })

    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    })

    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    })

    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
    })

    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    })

});