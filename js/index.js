$('.button').click(function() {
    $('.list').hide();
    $('.all').hide();
    $('.' + $(this).data('role')).show();
});

$('.button2').click(function() {
    $('.area').hide();
    $('.all').hide();
    $('.' + $(this).data('role')).show();
});

$('.button3').click(function() {
    $('.area').hide();
    $('.all').hide();
    $('.' + $(this).data('role')).show();
});

$('.rst').click(function() {
    $("input:radio").attr("checked", false);
    $('.list').hide();
    $('.all').show();
});