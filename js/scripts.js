/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const parallaxContainers = document.querySelectorAll('.parallax-container');

parallaxContainers.forEach((container) => {
  const parallaxContent = container.querySelector('.parallax-content');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const parallaxOffset = scrollPosition * -0.07;

    parallaxContent.style.transform = `translateX(-50%) translateY(${parallaxOffset}px)`;
  });
});