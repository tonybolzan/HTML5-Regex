/* Tonin R. Bolzan - Testador de Patterns HTML5 */
$(document).ready(function() {
    $('.input').delegate('input','change keyup',function(){
        $('input.test').attr('pattern',$('input#regex').val());
    });

    $('.btn.more').click(function(){
        $('.input li').last().after('<li><input class="test" type="text" required pattern=""></li>');
    });
});
