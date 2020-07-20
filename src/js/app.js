import 'slick-carousel';
import '@fancyapps/fancybox';
import animation from './components/animation.js';

animation();

$('.js-slider').slick({
  centerMode: true,
  centerPadding: '140px',
  slidesToShow: 3,
  nextArrow: '.js-slider-next',
  prevArrow: '.js-slider-prev',
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        centerPadding: 0,
    	}
    },
    {
      breakpoint: 1024,
      settings: {
      	slidesToShow: 1,
        centerPadding: '250px',
    	}
    },
    {
      breakpoint: 1024,
      settings: {
      	slidesToShow: 1,
        centerPadding: '150px',
    	}
    },
    {
      breakpoint: 768,
      settings: {
      	slidesToShow: 1,
        centerPadding: '70px'
    	}
    },
    {
      breakpoint: 500,
      settings: {
      	slidesToShow: 1,
        centerPadding: '30px'
    	}
    }
  ]
});
$.fancybox.defaults.fullScreen = true;
$().fancybox({
  selector : '.js-slider .slick-slide:not(.slick-cloned) a',
  loop: true
  // fullScreen : {
  //   autoStart: true
  // }
});

$().fancybox({
  selector : '.picture',
  loop: true
  // fullScreen : {
  //   autoStart: true
  // }
});

function Parallax(options) {

  options = options || {};

  this.nameSpaces = {
    wrapper: options.wrapper || '.out',
    layers: options.layers || '.cloud',
    deep: options.deep || 'data-parallax-deep'
  };

  this.init = function() {
    var self = this,
      parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
    console.log(parallaxWrappers);
      
      	for(var i = 0; i < parallaxWrappers.length; i++) {
      (function(i) {
        parallaxWrappers[i].addEventListener('mousemove', function(e) {
          var x = e.clientX,
            y = e.clientY,
            layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
          for(var j = 0; j < layers.length; j++) {
            (function(j) {
              var deep = layers[j].getAttribute(self.nameSpaces.deep),
                disallow = layers[j].getAttribute('data-parallax-disallow'),
                itemX = (disallow && disallow === 'x') ? 0 : x / deep,
                itemY = (disallow && disallow === 'y') ? 0 : y / deep;
              if(disallow && disallow === 'both') return;
              
              layers[j].style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
            })(j);  
          }
          // console.log(x);
          // console.log(y);
          
        });
      })(i);
      	}
  };
  this.init();
  return this;
}
let burger = $('.js-burger');
let mainNav = $('.js-menu');

window.addEventListener('load', function() {
  new Parallax();
});

$('.js-hero-arrow').click(function(e) {
  $('html, body').animate({
    scrollTop: $('#about').offset().top
  }, 2000);
});

$('.nav a').click(function(e) {
  $(burger).removeClass('is-active');
  	$(mainNav).removeClass('is-active');
  	$('body').removeClass('is-fixed');
  $('html, body').animate({
    scrollTop: $($(e.target).attr('href')).offset().top
  }, 2000);
});


$(burger).on('click', function() {
  	$(burger).toggleClass('is-active');
  	$(mainNav).toggleClass('is-active');
  	$('body').toggleClass('is-fixed');
});
