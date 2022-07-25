'use strict';

window.addEventListener('DOMContentLoaded', () => {

  const dom = document;

  // スクロールアニメーション
  function callback(entries) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('.active');
      }
    });
  }

  const option = {
    threshold: .5
  }

  const io = new IntersectionObserver(callback, option);

  const targets = dom.querySelectorAll('.io_target');
  targets.forEach(elem => {
    io.observe(elem);
  });
  // スクロールアニメーション


  // ナビゲーション
  const navIcon = dom.getElementById('nav_icon');
  const nav = dom.getElementById('nav');
  const navBack = dom.getElementById('nav_background');

  function navRemoveClass() {
    navIcon.classList.remove('active');
    nav.classList.remove('active');
    navBack.classList.remove('active');
  }

  navIcon.addEventListener('click', () => {
    if(navIcon.classList.contains('active') && nav.classList.contains('active') && navBack.classList.contains('active')) {
      navRemoveClass();
    } else {
      navIcon.classList.add('active');
      nav.classList.add('active');
      navBack.classList.add('active');
    }
  });

  navBack.addEventListener('click', () => {
    navRemoveClass();
  });
  // ナビゲーション

  // スライダー
  const slides = dom.querySelectorAll('.slider_main > a');
  let currentIndex = 0;
  slides[currentIndex].classList.add('current');

  let timeId;

  function autoSlider() {
    timeId = setTimeout(() => {
      slides[currentIndex].classList.remove('current');
      currentIndex++;
      if(currentIndex === slides.length) {
        currentIndex = 0;
      }
      slides[currentIndex].classList.add('current');
      autoSlider();
    }, 5000);
  }
  autoSlider();

  const prev = dom.getElementById('prev');
  prev.addEventListener('click', () => {
    clearTimeout(timeId);
    slides[currentIndex].classList.remove('current');
    currentIndex--;
    if(currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    slides[currentIndex].classList.add('current');
    autoSlider();
  });

  const next = dom.getElementById('next');
  next.addEventListener('click', () => {
    clearTimeout(timeId);
    slides[currentIndex].classList.remove('current');
    currentIndex++;
    if(currentIndex > slides.length - 1) {
      currentIndex = 0;
    }
    slides[currentIndex].classList.add('current');
    autoSlider();
  });
  // スライダー

});