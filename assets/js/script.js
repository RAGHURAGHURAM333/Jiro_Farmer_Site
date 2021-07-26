// nav_menu
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
    $('.globalMenuSp a[href^="#"]').on('click', function() {
        $('.hamburger').click();
        return false;
    });
});

// Smooth Scroll
$(function(){
    $('a[href^="#"]').click(function() {
        var speed = 400; //ここはお好きな数値に変えてください
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// scroll effect1
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });
});

// scroll effect2
$(function(){
    $(window).scroll(function (){
        $('.fadein2').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });
});

window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('.fadein').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
     $(this).addClass('scrollin');
    }
   });
  }
};
window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('.fadein2').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
     $(this).addClass('scrollin');
    }
   });
  }
};

// opening
$(function() {
  setTimeout(function(){
    $('.start p').fadeIn(1600);
  },500); //0.5秒後にロゴをフェードイン!
  setTimeout(function(){
    $('.start').fadeOut(1600);
  },4000); //4.0秒後にロゴ含め真っ白背景をフェードアウト！
});

// introduction swiper
window.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
    },
  });
}, false);
