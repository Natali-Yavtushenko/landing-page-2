import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';

const reviewsWrapper = document.querySelector('.reviews-swiper-wrapper');
const prevBtn = document.querySelector('.reviews-prev-btn');
const nextBtn = document.querySelector('.reviews-next-btn');
const triggerSection = document.querySelector('.faq');

const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';
let swiperInstance;
let hasLoadedReviews = false;

async function fetchReviews() {
  try {
    const response = await axios.get(BASE_URL);
    const reviews = response.data;

    if (!reviews) {
      reviewsWrapper.innerHTML =
        '<li class="swiper-slide reviews-swiper-slide">Not Found</li>';
      disableButtons();
      return;
    }

    const reviewsMarkup = reviews
      .map(
        review => `
   <li class="swiper-slide reviews-swiper-slide">
              <p class="reviews-text">${review.review}</p>
            </div>
            <div class="reviews-info-author">
                <img 
                  src="${review.avatar_url}" 
                  loading="lazy" 
                  alt="${review.author}" 
                  class="reviews-img" 
                  width="48" 
                  height="48">
                   <h3 class="reviews-item-subtitle">${review.author}</h3>
            </div>
          </li>
        `
      )
      .join('');

    reviewsWrapper.innerHTML = reviewsMarkup;
    initSwiper();
    hasLoadedReviews = true;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    reviewsWrapper.innerHTML = `<li class="swiper-slide reviews-swiper-slide">
    <div class="error">
    <p>Not Found</p>
    <p>Failed to load reviews. Please try again later.</p>
    </div>
    </li>`;

    disableButtons();
  }
}

function initSwiper() {
  swiperInstance = new Swiper('.swiper-reviews', {
    modules: [Navigation, Keyboard],
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: '.reviews-next-btn',
      prevEl: '.reviews-prev-btn',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    allowTouchMove: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 2,
      },
    },
    on: {
      slideChange: checkButtonsState,
    },
  });
  checkButtonsState();
}

function checkButtonsState() {
  if (swiperInstance.isBeginning) {
    prevBtn.classList.add('disabled');
    prevBtn.setAttribute('disabled', true);
  } else {
    prevBtn.classList.remove('disabled');
    prevBtn.removeAttribute('disabled');
  }

  if (swiperInstance.isEnd) {
    nextBtn.classList.add('disabled');
    nextBtn.setAttribute('disabled', true);
  } else {
    nextBtn.classList.remove('disabled');
    nextBtn.removeAttribute('disabled');
  }
}

function disableButtons() {
  prevBtn.classList.add('disabled');
  prevBtn.setAttribute('disabled', true);
  nextBtn.classList.add('disabled');
  nextBtn.setAttribute('disabled', true);
}

function observeTriggerSection() {
  const options = {
    root: null,
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasLoadedReviews) {
        fetchReviews();
        observer.unobserve(entry.target);
      }
    });
  }, options);

  if (triggerSection) {
    observer.observe(triggerSection);
  } else {
    console.warn('Trigger section not found.');
  }
}

observeTriggerSection();
