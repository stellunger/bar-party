$('#form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
        method: 'POST',
        url: 'mail.php',
        data: $(this).serialize(),
        error: function () {
            alert('Произошла ошибка');
        },
        success: function () {
            $('#form').html('<h1>Спасибо! Мы свяжемся с вами!</h1>');
        }
    });
});