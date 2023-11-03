//carousel products array
const carouselProducts = [{
    title: "The Micro Bag Collection",
    img: "./assets/mini-alexa@2x.png"
}, {
    title: "Micro Bags",
    img: "./assets/micro-bags@2x.png"
}, {
    title: "Small Check Merino Wool Scarf",
    img: "./assets/mens-scarf-and-briefcase@2x.png"
}, {
    title: "Mini Alexa in Amethyst",
    img: "./assets/mini-alexa@2x.png"
}, {
    title: "Medium Lily in Sapphire",
    img: "./assets/lily@2x.png"
}]

//selecting HTML elements + saving them to variables
const slideImg = document.querySelector('#slide-img');
const slideText = document.querySelector('#slide-text');
const nextBtn = document.querySelector('#arrow-right');
const prevBtn = document.querySelector('#arrow-left');

//carousel functionality
let currentSlide = 0;
let autoPlayInterval;

function changeSlide(slideIndex) {

  currentSlide = (slideIndex + carouselProducts.length) % carouselProducts.length;
  const newSlide = carouselProducts[currentSlide];

  // Fade out the current img + title, change the src and innerHTML attributes, then fade them in
  gsap.to([slideImg, slideText], {
    opacity: 0,
    duration: 0.75,
    onComplete: () => {
      slideImg.src = newSlide.img;
      slideText.innerHTML = newSlide.title;
      gsap.to([slideImg, slideText], {
        opacity: 1,
        duration: 0.75,
      });
    },
  });
}

// carousel auto-play
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    changeSlide(currentSlide + 1);
  }, 1500);
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// carousel manual navigation
nextBtn.addEventListener('click', () => {
  changeSlide(currentSlide + 1);
  resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
  changeSlide(currentSlide - 1);
  resetAutoPlay();
});


// Initialize the carousel
startAutoPlay();