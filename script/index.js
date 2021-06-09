//Маска для поля телефона
$("#tell").mask("+38 (999) 999-9999");


//изменения header
function toggleHeader(){

    let scrollStatus = $(document).scrollTop();

        if (scrollStatus > 80) {
            $("#header-menu").addClass("display-none");
            $("#main-header").addClass("shadow");
        }
            
        else{
            $("#header-menu").removeClass("display-none");
            $("#main-header").removeClass("shadow");
        }
        
}

$(document).scroll( function(){ toggleHeader();});



//Первый слайдер
$('#slider').owlCarousel({

    nav: true,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,

    responsive: {
        0: {
            dots: false
        },
        768: {
            dots: true
        }
    }
});


 $('#slider-testimonials').owlCarousel({

    loop:true,
    margin:20,
    nav:false,
    dots: true,

    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        992:{
            items:3
        }
        }
});

$('#projects-slider').owlCarousel({

    loop:true,
    margin:20,
    nav:false,
    dots: false,

    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        992:{
            items:3
        }
        }
});


let btn = $('#btn-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
