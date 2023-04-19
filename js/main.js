$(function () {
  $('.slide-chain').owlCarousel({
    items: 1,
    dots: 0,
    nav: 1,
    margin: 10,
    smartSpeed: 1000,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
  });
  $('.slide-certificate').owlCarousel({
    items: 6,
    dots: 0,
    nav: 1,
    margin:0,
    smartSpeed: 1000,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
  });
  $('.slide-about').owlCarousel({
    loop: 1,
    items: 1,
    center: 1,
    dots: 0,
    nav: 1,
    margin:50,
    smartSpeed: 1000,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
  });
  $('.slide-achievement').owlCarousel({
    loop: 0,
    items: 4,
    center: 0,
    dots: 0,
    nav: 1,
    margin:10,
    smartSpeed: 1000,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
  });

  let sync1 = $('.slide-index');
  let sync2 = $('.slide-index-2');
  let slidesPerPage = 6; //globaly define number of elements per page
  let syncedSecondary = true;

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: 1,
      autoplay: 0,
      dots: 0,
      loop: 0,
      smartSpeed: 1000,
      responsiveRefreshRate: 200,
      navText: [
        '<i class="fa-solid fa-angle-left"></i>',
        '<i class="fa-solid fa-angle-right"></i>',
      ],
    })
    .on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find('.owl-item').eq(0).addClass('current');
    })
    .owlCarousel({
      items: slidesPerPage,
      dots: 0,
      nav: 0,
      smartSpeed: 1000,
      mouseDrag: 0,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100,
    })
    .on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    var current = el.item.index;

    //if you disable loop you have to comment this block
    // var count = el.item.count - 1;
    // var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    // if (current < 0) {
    //   current = count;
    // }
    // if (current > count) {
    //   current = 0;
    // }

    //end block

    sync2
      .find('.owl-item')
      .removeClass('current')
      .eq(current)
      .addClass('current');
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }

  sync2.on('click', '.owl-item', function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });

  $('.about-index .right .icon').click(function () {
    $('.popup-video-index').addClass('active');
  });

  $('.about-index .right .icon-close').click(function () {
    $('.popup-video-index').removeClass('active');
  });

  resizeImage('.slide-index .item', 560 / 1366);
  resizeImage('.slide-certificate .item .img', 195 / 136);
  resizeImage('.product-item .img', 263 / 375);
  resizeImage('.project-index .item', 1);
  resizeImage('.news-index .right .item .img', 131/189);
  resizeImage('.banner', 467/1365);

  // if ($(window).width() > 992) {
  //     resizeImage(".service .list-service .item .img", 330 / 570);
  //     bodyVideoIndex.css('height', heightVideo - heightTitleVideo);
  // }
  // if ($(window).width() < 767) {
  //     resizeImage(".video-news-index .container .left .body .img", 92 / 162);
  //     resizeImage(".service .list-service .item .img", 1);
  // }

  // if (technologyItem.length > 0) {
  //     technologyItem.click(function () {
  //         var $tag = $(this).children('.description').slideToggle();
  //         $('.list-technology .item .description').not($tag).slideUp();

  //         if (!$(this).hasClass('active')) {
  //             $(this).addClass('active');
  //         }
  //         else {
  //             $(this).removeClass('active');
  //         }
  //         technologyItem.not($(this)).removeClass('active');
  //     })
  // }

  $('.backtotop').click(function () {
      let body = $("html, body");
      body.stop().animate({ scrollTop: 0 }, 1000, 'swing', function () {
      });
  })

  // moduleProductDetailItem.click(function () {
  //     let dataIndex = $(this).data('index');
  //     moduleProductDetailItem.not($(this)).removeClass('active');
  //     contentItemProductDetail.not($('#content-' + dataIndex)).removeClass('active')
  //     if (!$(this).hasClass('active')) {
  //         $(this).addClass('active')
  //     }
  //     if (!$('#content-' + dataIndex).hasClass('active')) {
  //         $('#content-' + dataIndex).addClass('active');
  //     }
  // });

  // btnReset.click(function () {
  //     $('input, textarea').each(function () {
  //         $(this).val('')
  //     })
  // });

  // touchMenu.click(function () {
  //     $(this).toggleClass('active');
  //     $('.menu').toggleClass('active');
  //     $('.bg-black').toggleClass('show');
  // });

  // bgBlack.click(function () {
  //     $('.menu').removeClass('active');
  //     touchMenu.removeClass('active');
  //     $('.bg-black').removeClass('show');
  // })

  // iconShowSubMenu.click(function () {
  //     $(this).toggleClass('active');
  //     $(this).prev('.sub-menu').slideToggle();
  // });

  // iconShowSubMenu2.click(function () {
  //     console.log($(this))
  //     $(this).toggleClass('active');
  //     $(this).prev('.list-product').slideToggle();
  // });

  // $(window).scroll(function () {
  //     if ($(window).scrollTop() > 100) {
  //         if (!headerElement.hasClass('fixed')) {
  //             headerElement.addClass('fixed');
  //         }
  //     } else {
  //         if (headerElement.hasClass('fixed')) {
  //             headerElement.removeClass('fixed');
  //         }
  //     }
  // })
});

const resizeImage = (e, s) => {
  s = parseInt($(e).width()) * s;
  $(e).css({ height: s + 'px' });
};
