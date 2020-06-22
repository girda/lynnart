import ScrollMagic from 'scrollmagic';
import { TimelineMax, TweenMax, gsap} from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';


ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
gsap.registerPlugin(TweenMax, TimelineMax);
console.log(gsap);

const controller = new ScrollMagic.Controller();
const triggerHook = 0.7;


const tlPreloader = gsap.timeline();
const $preloaderBg = $('.js-preloader-bg');
const $preloader = $('.js-preloader');
const $texture = $('.js-texture');


tlPreloader
  .fromTo($preloader, 1, {x:'-100%', opacity:0}, {x:'100%', opacity:0.5})
  .set($preloaderBg, {x: '100%'});
// .from($preloaderBg, {x: '100%', duration: 2});
  

const tlHero = new TimelineMax();
const $heroOverlay = $('.js-hero-overlay');
const $navLink = $('.js-nav li a');
const $socialLink = $('.js-socials li');
const $logo = $('.js-logo h1');
const $title = $('.js-title');
const $autor = $('.js-autor');
const $heroBgLeft = $('.js-hero-bg-left');
const $heroBgRight = $('.js-hero-bg-right');
const $heroBg = $('.js-hero-bg');
const $heroArrow = $('.js-hero-arrow');

tlHero
  .add(tlPreloader)
  .from($heroBgRight, {x: '100%', skewY: '-90deg', skewX: '-180deg', duration: 2}, -0.1)
  .from($heroBgLeft, {x: '-100%', skewY: '90deg', skewX: '180deg', duration: 2, delay: -2})

  .from($heroBg, {opacity: 0, duration: 1})
  .from($heroOverlay, {opacity: 0, duration: 1, delay: -1})

  .fromTo($heroBgRight, {opacity: 1}, {opacity: 0}, 2.1)
  .fromTo($heroBgLeft, {opacity: 1}, {opacity: 0}, 2.1)
  .from($logo, {marginLeft: -1000, duration: 2, delay: -1.5})
  .from($title, {marginLeft: -2000, opacity: 1, duration: 3, delay: -1.5})
  .from($autor, {y: 200, opacity: 0, duration: 2, delay: -1.5})
  .to($navLink, {marginTop: 0, opacity: 1, stagger: 0.3, delay: -2.5})
  .to($socialLink, {marginRight: 20, marginTop: 0, stagger: 0.3, delay: -1.5})
  .from($heroArrow, {y: 200, duration: 2, delay: -2.5})
  .set($heroArrow, {css:{className: 'hero__arrow js-hero-arrow is-animation'}});

const tlAbout = new TimelineMax();
const $aboutTitle = $('.js-about-title');
const $aboutContent = $('.js-about-content');
const $aboutErfolgLeft = $('.js-about-erfolg-left');
const $aboutErfolgRight = $('.js-about-erfolg-right');

tlAbout
  .from($aboutTitle, {scale: 0, duration: 2})
  .from($aboutContent, {y: 500, opacity: 0, duration: 3, delay: -1.5})
  .from($aboutErfolgLeft, {y: 200, opacity: 0, duration: 2, delay: -1.5})
  .from($aboutErfolgRight, {x: 600, opacity: 0, duration: 2, delay: -1.9})
  .fromTo('.cloud', 3, {scale:0, opacity: 0}, {scale: 1, opacity: 1}, 1 );


const tlSlider  = new TimelineMax();
const $slider = $('.js-slider');
const $sliderNext = $('.js-slider-next');
const $sliderPrev = $('.js-slider-prev');
tlSlider
  .from($slider, {y: 250, opacity: 0, duration: 2});
// .from($sliderNext, {x: 650, opacity: 0, duration: 4, delay: -1.9})
// .from($sliderPrev, {x: -650, opacity: 0, duration: 4, delay: -3.9});

export default function animation() {


  const sceneHero = new ScrollMagic.Scene({
    triggerElement: '.header',
    triggerHook: 1,
    reverse: false
  }).setTween(tlHero);

  const sceneAbout = new ScrollMagic.Scene({
    triggerElement: '.about__text',
    triggerHook: 1,
    reverse: false
  }).setTween(tlAbout);

  const sceneSlider = new ScrollMagic.Scene({
    triggerElement: '.js-slider',
    triggerHook: 1,
    reverse: false
  }).setTween(tlSlider);
    
  controller.addScene([
    sceneHero,
    sceneAbout,
    sceneSlider
  ]);

}
