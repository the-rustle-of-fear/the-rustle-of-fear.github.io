$(window).on('load', function() {
    // Vide.js - video background

    $('#main-screen').vide(
            {mp4: './video/main_page'},
            {bgColor: '#0d294d'}
            )
})

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

function scroll_to(mark){
    $(document).ready(function(){
        $(mark).on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            let id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
}

scroll_to("#header");
scroll_to("#main-screen");


    