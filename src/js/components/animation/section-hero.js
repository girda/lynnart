import {gsap} from 'gsap';

const tlPreloader = gsap.timeline();
const $preloaderBg = $('.js-preloader-bg');
const $preloader = $('.js-preloader');

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

tlPreloader
  .fromTo($preloader, 1, {x:'-100%', opacity:0}, {x:'100%', opacity:0.5})
  .set($preloaderBg, {x: '100%'});
  

tlHero
  .add(tlPreloader)
  .from($heroBgRight, {x: '100%', duration: 2}, -0.1)
  .from($heroBgLeft, {x: '-100%', duration: 2, delay: -2})
  .from($heroBg, {opacity: 0, duration: 1})
  .from($heroOverlay, {opacity: 0, duration: 1, delay: -1})
  .fromTo($heroBgRight, {opacity: 0.8}, {opacity: 0}, 2.1)
  .fromTo($heroBgLeft, {opacity: 0.8}, {opacity: 0}, 2.1)
  .from($logo, {marginLeft: -1000, duration: 2, delay: -1.5})
  .from($title, {marginLeft: -2000, opacity: 1, duration: 3, delay: -1.5})
  .from($autor, {y: 200, opacity: 0, duration: 2, delay: -1.5})
  .to($navLink, {marginTop: 0, opacity: 1, stagger: 0.3, delay: -2.5})
  .to($socialLink, {marginRight: 20, marginTop: 0, stagger: 0.3, delay: -1.5})
  .from($heroArrow, {y: 200, duration: 2, delay: -2.5})
  .set($heroArrow, {css:{className: 'hero__arrow js-hero-arrow is-animation'}});