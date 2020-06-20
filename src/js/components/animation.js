import ScrollMagic from 'scrollmagic';
import { TimelineMax, TweenMax} from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';


ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


const controller = new ScrollMagic.Controller();
const triggerHook = 0.7;



const tlHero = new TimelineMax();
const $navLink = $('.js-nav li a');
const $socialLink = $('.js-socials li');
const $logo = $('.js-logo h1');
const $title = $('.js-title');
const $autor = $('.js-autor');
tlHero
  .from($logo, {marginLeft: -1000, duration: 2})
  .from($title, {marginLeft: -2000, opacity: 1, duration: 3, delay: -1.5})
  .from($autor, {y: 200, opacity: 0, duration: 2, delay: -1.5})
  .to($navLink, {marginTop: 0, opacity: 1, stagger: 0.3, delay: -2.5})
  .to($socialLink, {marginRight: 20, marginTop: 0, stagger: 0.3, delay: -1.5});

const tlAbout = new TimelineMax();
const aboutTitle = $('.js-about-title');
const aboutContent = $('.js-about-content');
const aboutErfolgLeft = $('.js-about-erfolg-left');
const aboutErfolgRight = $('.js-about-erfolg-right');

tlAbout
  .from(aboutTitle, {scale: 0, duration: 2})
  .from(aboutContent, {y: 500, opacity: 0, duration: 3, delay: -1.5})
  .from(aboutErfolgLeft, {y: 200, opacity: 0, duration: 2, delay: -1.5})
  .from(aboutErfolgRight, {x: 600, opacity: 0, duration: 2, delay: -1.9})
  .fromTo('.cloud', 3, {scale:0, opacity: 0}, {scale: 1, opacity: 1}, 1 );


const tlSlider  = new TimelineMax();
const slider = $('.js-slider');
tlSlider
  .from(slider, {y: 250, opacity: 0, duration: 2});

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
