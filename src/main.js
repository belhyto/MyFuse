import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/cgTMmW2XbUamH-wX/scene.splinecode');

document.addEventListener('DOMContentLoaded', function() {
    var parallaxElements = document.querySelectorAll('.parallax');
    var scrollPosition = 0;
  
    function updateParallax() {
      scrollPosition = window.pageYOffset;
      parallaxElements.forEach(function(element) {
        var parallaxSpeed = element.getAttribute('data-parallax-speed') || 0.5;
        var backgroundPosition = scrollPosition * parallaxSpeed * -1;
        element.style.backgroundPosition = 'center ' + backgroundPosition + 'px';
      });
    }
  
    window.addEventListener('scroll', function() {
      updateParallax();
    });
  });

  // Add a parallax effect to the background
const parallaxContainer = document.querySelector('.parallax-container');
const parallaxBackground = document.querySelector('.parallax-background');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  parallaxBackground.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});