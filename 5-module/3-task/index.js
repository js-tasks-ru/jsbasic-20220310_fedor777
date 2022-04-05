function initCarousel() {

  let carouselBlock = document.body.querySelector('.carousel__inner');
  let rightArrow = document.body.querySelector('.carousel__arrow_right');
  let leftArrow = document.body.querySelector('.carousel__arrow_left');
  let numberOfSlides = 4;
  let currentSlideNumber = 0;
  let carouselSlideWidth = carouselBlock.offsetWidth;

  arrowHide();

  rightArrow.addEventListener ('click', function(event) {
    slideIncrement();
    slideChange();
    arrowHide();
  });
  leftArrow.addEventListener ('click', function(event) {
    slideDecrement();
    slideChange();
    arrowHide();
  });

  function slideIncrement () {
    currentSlideNumber += 1;
  };

  function slideDecrement () {
    currentSlideNumber -= 1;
  };

  function slideChange () {
    let transformMove = - currentSlideNumber * carouselSlideWidth;
    carouselBlock.style.transform = `translateX(${transformMove}px)`;
  };

  function arrowHide () {
    if (currentSlideNumber === 0) {
    leftArrow.style.display = 'none';  
    } else if (currentSlideNumber === (numberOfSlides -1) ) {
      rightArrow.style.display = 'none';
    } else {
      leftArrow.style.display = '';
      rightArrow.style.display = '';
    };

  };
}
