import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

export const swiperFn = () => {
	const swiper = new Swiper('.-hm-simple-swiper', {
		loop: true,
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		
		breakpoints: {
			// when window width is >= 320px
			319.89: {
				slidesPerView: 1,
				spaceBetween: 60
			},
			1023.89: {
				slidesPerView: 2,
				spaceBetween: 60
			},
			1439.89: {
				slidesPerView: 3,
				spaceBetween: 60
			},
			1919.89: {
				slidesPerView: 4,
				spaceBetween: 120
			}
		}
	});
	
	const heroSwiper = new Swiper('.-hm-hero-swiper', {
		loop: true,
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		
		slidesPerView: 1,
		spaceBetween: 24,

		autoplay: {
			delay: 5000,
		},
	});
} 