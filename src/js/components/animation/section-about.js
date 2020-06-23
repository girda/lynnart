import { TimelineMax, TweenMax, gsap} from 'gsap';

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