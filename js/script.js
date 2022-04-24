new WOW({
    mobile: false
}).init();

$(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 1000 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 5000
            });

            show = false;
        }
    });

});

$(document).ready(function () {
    $(".question__subtitle, .question__icon").click(function (event) {
        if ($(".question__content").hasClass("one")) {
            $(".question__subtitle").not($(this)).removeClass("active");
            $(".question__box").not($(this).next()).slideUp(300);
        }
        $(this).toggleClass("active").next().slideToggle(300)
    })
})

$(document).ready(function() {
    $(".burger__menu, .nav__link").click(function(event) {
      $(".burger__menu, .nav__list").toggleClass("active");
    });
  });
  
 
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });