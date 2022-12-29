// Popup de entrada
if (!localStorage.getItem('newsletter-popup')) {
  $("body").addClass("on-popup")
}

$(".popup__close, #popup").on("click", function (e) {
  if (e.target == e.currentTarget) {
    window.localStorage.setItem("newsletter-popup", "true")
    $("body").removeClass("on-popup")
  }
})

// Adicionando uma classe ao body quando o dom estiver em movimento
var lastScrollTop = 0;
$(window).on("scroll", function (event) {
  var st = $(this).scrollTop();

  if (st > 50) {
    $('body').addClass('moving');
    if (st > lastScrollTop) {
      $('body').addClass('moving--down');
    } else {
      $('body').removeClass('moving--down');
    }
    lastScrollTop = st;
  } else {
    $('body').removeClass('moving');
  }
});

// Carrossel do fullbanner
if ($(".fullbanner__wrapper").not('.slick-initialized')) {
  $(".fullbanner__wrapper").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true
  })
}

// Carrossel da regua de vantagens
if ($(".ruler__list").not('.slick-initialized')) {
  $(".ruler__list").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
}

// Carrossel da marcas
if ($(".brands__list").not('.slick-initialized')) {
  $(".brands__list").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
}

// Carrossel da vitrine
if ($(".showcase__wrapper").not('.slick-initialized')) {
  $(".showcase__wrapper").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  })
}

// Adicionando as variantes na vitrine automaticamente
$.each($(".spot"), function (indexInArray, valueOfElement) {
  $.each($(this).find(".spot__variant--item"), function (indexInArray, valueOfElement) {
    var color = $(this).attr("data-color")
    $(this).css({ "background": color })
  })
});

if (window.innerWidth < 991) {
  // Footer mobile
  $(".footer__title").on("click", function () {
    $(this).toggleClass("open")
    $(this).next().slideToggle()
  })

  // Menu mobile
  $(".menu__mobile").on("click", function () {
    $("body").addClass("on-menu")
  });

  // Fechar menu mobile
  $(".menu, .menu__close").on("click", function (e) {
    if (e.target == e.currentTarget) {
      $("body").removeClass("on-menu")
    }
  });

  // Busca mobile
  $(".search__mobile").on("click", function (e) {
    $("body").addClass("on-search")
  });

  // Fechar busca mobile
  $(".search").on("click", function (e) {
    if (e.target == e.currentTarget) {
      $("body").removeClass("on-search")
    }
  });
}