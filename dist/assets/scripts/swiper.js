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
				spaceBetween: 30
			},
			767.89: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			1023.89: {
				slidesPerView: 3,
				spaceBetween: 40
			},
			1439.89: {
				slidesPerView: 4,
				spaceBetween: 40
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

	const collectionSwiper = new Swiper('.-hm-collection-swiper', {
		loop: true,
	
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		allowTouchMove: false,
		
		slidesPerView: 1,
		spaceBetween: 24,

	});

	let thumbProductSwiper = new Swiper(".-hm-product-gallery--thumb", {
		loop: false,
		allowTouchMove: false,
		spaceBetween: 15,
		speed: 0,
		longSwipesMs: 0,
		slidesPerView: 5,
		direction: 'vertical'
	});

	if(window.innerWidth < 1023.98 && document.querySelector('.-hm-product-gallery--thumb') != null) {
		thumbProductSwiper.destroy(false, true)
		thumbProductSwiper = new Swiper(".-hm-product-gallery--thumb", {
			loop: false,
			allowTouchMove: false,
			spaceBetween: 15,
			speed: 0,
			longSwipesMs: 0,
			slidesPerView: 5,
			direction: 'horizontal'
		});
	} else if (document.querySelector('.-hm-product-gallery--thumb') != null){
		thumbProductSwiper.destroy(false, true)
		thumbProductSwiper = new Swiper(".-hm-product-gallery--thumb", {
			loop: false,
			allowTouchMove: false,
			spaceBetween: 15,
			speed: 0,
			longSwipesMs: 0,
			slidesPerView: 5,
			direction: 'vertical'
		});
	}

	window.addEventListener('resize', () => {
		if(window.innerWidth < 1023.98 && document.querySelector('.-hm-product-gallery--thumb') != null) {
			thumbProductSwiper.destroy(false, true)
			thumbProductSwiper = new Swiper(".-hm-product-gallery--thumb", {
				loop: false,
				allowTouchMove: false,
				spaceBetween: 15,
				speed: 0,
				longSwipesMs: 0,
				slidesPerView: 5,
				direction: 'horizontal'
			});
		} else if (document.querySelector('.-hm-product-gallery--thumb') != null) {
			thumbProductSwiper.destroy(false, true)
			thumbProductSwiper = new Swiper(".-hm-product-gallery--thumb", {
				loop: false,
				allowTouchMove: false,
				spaceBetween: 15,
				speed: 0,
				longSwipesMs: 0,
				slidesPerView: 5,
				direction: 'vertical'
			});
		}
	})

	const mainProductSwiper = new Swiper(".-hm-product-gallery--main", {
		loop: true,
		allowTouchMove: false,
		spaceBetween: 35,
		speed: 0,
		longSwipesMs: 0,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: thumbProductSwiper,
		},
	});

	const thumbInteriorProductSwiper = new Swiper(".-hm-interior-product-gallery--thumb", {
		loop: false,
		allowTouchMove: false,
		// spaceBetween: 15,
		speed: 0,
		longSwipesMs: 0,
		slidesPerView: 5,
		direction: 'horizontal'
	});

	const mainInteriorProductSwiper = new Swiper(".-hm-interior-product-gallery--main", {
		loop: true,
		allowTouchMove: false,
		spaceBetween: 35,
		speed: 0,
		longSwipesMs: 0,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: thumbInteriorProductSwiper,
		},
	});
	
	const contactsProductSwiper = new Swiper(".-hm-contacts-swiper", {
		loop: true,
	
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		slidesPerView: 1,
		spaceBetween: 60,

	});
	const aboutProductSwiper = new Swiper(".-hm-about-swiper", {
		loop: true,
	
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		slidesPerView: 1,
		spaceBetween: 60,

	});

	const interiorSwiper = new Swiper('.-hm-interior-swiper', {
		loop: true,
		spaceBetween: 44,
		slidesPerView: 1,
		centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			767.89: {
				slidesPerView: 3,
				centeredSlides: false,
			}
		}
	});
} 