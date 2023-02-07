var carousel = document.createElement('div');
carousel.style.width = '100%';
carousel.style.height = '100%';
carousel.style.position = 'relative';
carousel.style.overflow = 'hidden';
document.body.appendChild(carousel);
var carouselInner = document.createElement('div');
carouselInner.style.width = '200%';
carouselInner.style.height = '100%';
carouselInner.style.position = 'absolute';
carouselInner.style.top = '0';
carouselInner.style.left = '0';
carouselInner.style.transition = 'left 0.5s ease-in-out';
carousel.appendChild(carouselInner);
var image1 = document.createElement('img');
image1.src = 'http://www.planwallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg';
image1.style.width = '50%';
image1.style.height = '100%';
image1.style.float = 'left';
carouselInner.appendChild(image1);
var image2 = document.createElement('img');
image2.src = 'http://www.planwallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg';
image2.style.width = '50%';
image2.style.height = '100%';
image2.style.float = 'left';
carouselInner.appendChild(image2);
var leftButton = document.createElement('div');
leftButton.style.width = '50px';
leftButton.style.height = '50px';
leftButton.style.background = 'black';
leftButton.style.borderRadius = '50%';
leftButton.style.position = 'absolute';
leftButton.style.top = '50%';
leftButton.style.left = '5%';
leftButton.style.marginTop = '-25px';
leftButton.style.cursor = 'pointer';
carousel.appendChild(leftButton);
var rightButton = document.createElement('div');
rightButton.style.width = '50px';
rightButton.style.height = '50px';
rightButton.style.background = 'black';
rightButton.style.borderRadius = '50%';
rightButton.style.position = 'absolute';
rightButton.style.top = '50%';
rightButton.style.right = '5%';
rightButton.style.marginTop = '-25px';
rightButton.style.cursor = 'pointer';
carousel.appendChild(rightButton);
var currentImage = 0;
leftButton.addEventListener('click', function() {
  if (currentImage === 0) {
    currentImage = 1;
    carouselInner.style.left = '-100%';
  } else {
    currentImage = 0;
    carouselInner.style.left = '0';
  }
});
rightButton.addEventListener('click', function() {
  if (currentImage === 0) {
    currentImage = 1;
    carouselInner.style.left = '-100%';
  } else {
    currentImage = 0;
    carouselInner.style.left = '0';
  }
});