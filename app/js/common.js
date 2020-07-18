$(document).ready(function () {
    $('[data-fancybox="images"]').fancybox();

		$("body").on("click", ".top", function () {
			$("html, body").animate({
					scrollTop: 0
			}, "slow")
	});

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });


    $(".go_to").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top - 40}, 500);
    });

    $("[name='phone']").mask("+7(999) 999-9999");


    $("form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("form").trigger("reset");
        });
        return false;
    });



// show list all
    $('.btn-all').on('click', function(e){
        e.preventDefault();

        $('.services__content > .item').fadeIn();
        $(this).fadeOut();
    });
// show list all

ymaps.ready(function () {
	var map = new ymaps.Map("map", {
			center: [55.75399399999374, 37.62209300000001],
			zoom: 9
	});

	var place = new ymaps.Placemark(
			[55.697890392690915, 37.4114910109405], {
					hintContent: 'г. Москва, ул. Бутлерова, д.17, БЦ NEO GEO',
			}, {
					iconImageHref: '',
					iconImageSize: [25, 38],
					iconLayout: 'default#image',
			}
	);
	map.geoObjects.add(place);
});
});
