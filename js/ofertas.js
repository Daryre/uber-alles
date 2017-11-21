'use strict';

/* -------------------- *\
    Helpers
\* -------------------- */


function q(s, p) {
  return p
    ? p.querySelector(s)
    : document.querySelector(s);
}

function qa(s, p) {
  return p
    ? p.querySelectorAll(s)
    : document.querySelectorAll(s);
}

/* -------------------- *\
    Component
\* -------------------- */

var $slider = q('.js-slider');
var $sliderContents = q('.js-slider-contents', $slider);
var $sliderItems = qa('.js-slider-item', $slider);
var $sliderNav = q('.js-slider-nav', $slider);
var $sliderPrev = q('.js-slider-prev', $slider);
var $sliderNext = q('.js-slider-next', $slider);
var $sliderNavItems = [];

var n = $sliderItems.length;
var small = (n * 20) + '%';
var big = (n * 20) + '%';
var w;
var active = 0;

init();

function init() {
  setSliderWrapperWidth(window.innerWidth);
  buildSliderNav();
  attachEvents();
  show();
}

function setSliderWrapperWidth(windowSize) {
  if (windowSize < 600 && (!w || w === small)) {
    w = big;
    $sliderContents.style.width = w;
  }
  
  if (windowSize >= 600 && (!w || w === big)) {
    w = small;
    $sliderContents.style.width = w;
  }
}

function buildSliderNav() {
  for (var i = 0; i < n; i++) {
    (function(i) {
      var el = document.createElement('a');
      el.classList.add('Slider-nav-item');
      el.classList.add('js-slider-nav-item');
      el.setAttribute('data-index', i);
      
      if (i === 0) {
        el.classList.add('is-active');
      }
      
      $sliderNavItems.push(el);
      $sliderNav.appendChild(el);
    })(i);
  }
}

function attachEvents() {
  $sliderNav.addEventListener('click', function(e) {
    e.preventDefault();
    
    var $target = e.target;
    
    if ($target.classList.contains('js-slider-nav-item')) {
      var index = parseInt($target.getAttribute('data-index'));
      
      goToSlide(index);
    }
  });
  
  $sliderPrev.addEventListener('click', function(e) {
    e.preventDefault();
    
    goToPreviousSlide();
  });
  
  $sliderNext.addEventListener('click', function(e) {
    e.preventDefault();
    
    goToNextSlide();
  });
  
  window.addEventListener('resize', function(e) {
    setSliderWrapperWidth(window.innerWidth);
  });
}

function goToNextSlide() {
  if (active !== n - 1) {
    goToSlide(active + 1);
  }
}

function goToPreviousSlide() {
  if (active !== 0) {
    goToSlide(active - 1);
  }
}

function goToSlide(index) {
  var d = (-index/n)*100 + '%';
  $sliderContents.style.transform = 'translateX(' + d + ')';
  
  updateNav(active, index);
  active = index;
}

function updateNav(oldIndex, newIndex) {
  $sliderNavItems[oldIndex].classList.remove('is-active');
  $sliderNavItems[newIndex].classList.add('is-active');
}

function show() {
  $slider.classList.add('is-active');
}