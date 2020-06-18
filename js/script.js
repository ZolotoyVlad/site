$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.popular__inner').click(function() {
        $('.popular__block-one,.popular__block-two').toggleClass('active');
    });
    $('#best-one').click(function() {
        $('.best__text').html('Шейн Калпеппер — разум всегда сдается первым, не тело. Секрет в том, чтобы заставить твой разум работать на тебя, а не против тебя.')
    });
    $('#best-two').click(function() {
        $('.best__text').html('Наливайко Андрий— Ты можешь сказать, что у тебя плохая генетика, плохой обмен веществ, а можешь просто поднять свою задницу с дивана и начать работать над собой, задаться целью и верить в себя. В этом случае ты обязательно добьёшься успеха.')
    });
    $('#best-three').click(function() {
        $('.best__text').html('Шейн Калпеппер — разум всегда сдается первым, не тело. Секрет в том, чтобы заставить твой разум работать на тебя, а не против тебя.')
    });
});