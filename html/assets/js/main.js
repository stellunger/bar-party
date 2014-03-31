$('#form').on('submit', function(event) {
    event.preventDefault();

    $.post('/mail.php', {
        name: $('#name').val(),
        phone: $('#phone').val(),        
    }, function(){
        $('#form').html('<h1>Спасибо! Мы свяжемся с вами!</h1>');    
    });
});