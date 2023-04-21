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
  $('.slide-project-detail').owlCarousel({
    loop: 0,
    items: 1,
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
  $('.slide-project-orther').owlCarousel({
    loop: 0,
    items: 3,
    center: 0,
    dots: 0,
    nav: 1,
    margin:20,
    smartSpeed: 1000,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
  });
  $('.silde-project').owlCarousel({
    loop: 0,
    items: 1,
    center: 0,
    dots: 1,
    nav: 0,
    margin:10,
    smartSpeed: 1000,
    // navText: [
    //   '<i class="fa-solid fa-angle-left"></i>',
    //   '<i class="fa-solid fa-angle-right"></i>',
    // ],
  });
  $('.slide-news-orther').owlCarousel({
    loop: 1,
    items: 3,
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

  if ($('#lightSlider').length > 0) {
    $('#lightSlider').lightSlider({
        loop: 0,
        gallery: true,
        item: 1,
        vThumbWidth: 100,
        thumbItem: 4,
        thumbMargin: 10,
        slideMargin: 0,
        controls: true,
        prevHtml: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>',
        nextHtml: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg>',
    });
}

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


  $('.backtotop').click(function () {
      let body = $("html, body");
      body.stop().animate({ scrollTop: 0 }, 1000, 'swing', function () {
      });
  })

  $('.list-module-product .item').click(function() {
    $('.list-module-product .item').not($(this)).removeClass('active');
    $(this).addClass('active');

    let id = $(this).attr('data-index');

    $('.list-content-product .item').not($('#content-' + id)).removeClass('active');
    $('#content-' + id).addClass('active');
  })


});

const resizeImage = (e, s) => {
  s = parseInt($(e).width()) * s;
  $(e).css({ height: s + 'px' });
};
