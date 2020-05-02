let i = 0;

gsap.set('.line',  {attr:{'stroke':'hsl(1,100%, 50%)', 'stroke-width':4, 'stroke-linecap':'round'}});
gsap.set('.line2', {attr:{'stroke-width':6}, opacity:0.4});
gsap.set('.line3', {attr:{'stroke-width':2}, opacity:0.15});

[].forEach.call(document.getElementsByClassName('line'), (el) => {
  gsap.timeline({defaults:{duration:1}, repeat:-1, repeatDelay:(27-i)/50})
      .to(el, {duration:2, attr:{'stroke':'hsl(360, 100%, 50%)', ease:'power2.inOut'}}, 0)
      .fromTo(el, {drawSVG:0}, {drawSVG:'35% 70%', ease:'sine.in'}, i/50)
      .to(el, {drawSVG:'100% 100%', ease:'sine.out'}, 1+i/50)
      .progress(i/20);
  i++;
});