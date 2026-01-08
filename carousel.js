document.addEventListener('DOMContentLoaded', function(){
  // find carousel inside optional wrapper
  var carousel = document.querySelector('.carousel-wrap .carousel') || document.querySelector('.carousel');
  var prev = document.querySelector('.carousel-prev');
  var next = document.querySelector('.carousel-next');
  if(!carousel || !prev || !next) return;

  function getStep(){
    var item = carousel.querySelector('.item');
    if(!item) return Math.round(carousel.clientWidth * 0.8);
    var style = window.getComputedStyle(carousel);
    var gap = parseFloat(style.getPropertyValue('gap')) || 16;
    return Math.round(item.getBoundingClientRect().width + gap);
  }

  prev.addEventListener('click', function(){
    carousel.scrollBy({ left: -getStep(), behavior: 'smooth' });
  });
  next.addEventListener('click', function(){
    carousel.scrollBy({ left: getStep(), behavior: 'smooth' });
  });

  // keyboard support when carousel is focused
  carousel.addEventListener('keydown', function(e){
    if(e.key === 'ArrowRight') next.click();
    if(e.key === 'ArrowLeft') prev.click();
  });
});
