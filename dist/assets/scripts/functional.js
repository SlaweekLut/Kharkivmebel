export const dropdownFn = () => {
	const dropdowns = [...document.querySelectorAll('.-hm-dropdown')]
	dropdowns.forEach(dropdown => {
		const dropdownOpener = dropdown.querySelector('.-hm-dropdown__opener')
		const dropdownValue = dropdown.querySelector('.-hm-dropdown__value')
		const dropdownItem = dropdown.querySelectorAll('.-hm-dropdown__item')

		dropdownOpener.addEventListener('click', () => {
			dropdownOpener.classList.toggle('active')
		})

		dropdownItem.forEach(item => {
			item.addEventListener('click', () => {
				dropdownOpener.classList.remove('active')
				dropdownValue.innerHTML = item.innerHTML
			})
		})


	})
}

export const popupFn = () => {
	const popupOpener = (popup, open, close, closeopen) => {
		if(open != null) {
			let openArr = open
			openArr.forEach((item) => {
				item.addEventListener('click', () => {
					popup.classList.add('active')
				}) 
			})
		}
		if(close != null) {
			let closeArr = close
			closeArr.forEach((item) => {
				item.addEventListener('click', () => {
					popup.classList.remove('active')
				}) 
			})
		}
		if(closeopen != null) {
			let closeopenArr = closeopen
			closeopenArr.forEach((item) => {
				item.addEventListener('click', () => {
					popup.classList.toggle('active')
				}) 
			})
		}
	}	

	const catalog = popupOpener (
		document.querySelector('.-hm-header-catalog'), 
		null, 
		[...document.querySelectorAll('.-hm-header-catalog-close')], 
		[...document.querySelectorAll('.-hm-header-catalog-open')]
		)
		
	const menu = popupOpener (
		document.querySelector('.-hm-nav-mobile-wrapper'), 
		[...document.querySelectorAll('.-hm-header-nav__menu')],
		[...document.querySelectorAll('.-hm-nav-mobile-header__close')], 
		null
		)

	const filter = popupOpener (
		document.querySelector('.-hm-mobile-filter-wrapper'), 
		[...document.querySelectorAll('.-hm-mobile-filter-open')],
		[...document.querySelectorAll('.-hm-mobile-filter-close')], 
		null
		)

	const register = popupOpener (
		document.querySelector('.-hm-popup-auth-wrapper'), 
		[...document.querySelectorAll('.-js-register-open')],
		[...document.querySelectorAll('.-hm-popup-auth__close')], 
		null
		)
	const order = popupOpener (
		document.querySelector('.-hm-popup-order-wrapper'), 
		[...document.querySelectorAll('.-js-order-open')],
		[...document.querySelectorAll('.-hm-popup-order__close')], 
		null
		)
}

export const collectionFn = () => {
	const hints = document.querySelectorAll('.-hm-collection-swiper-slide__hint')
	hints.forEach(hint => {
		let x = 0
		let y = 0

		if(window.innerWidth < 767) {
			x = hint.dataset.x / 2 + 'px'
			y = hint.dataset.y / 2 + 'px'
		} else {
			x = hint.dataset.x / 1879 * 100 + '%'
			y = hint.dataset.y / 751 * 100 + '%'
		}
		
		const title = hint.dataset.title
		const price = hint.dataset.price
		const blockElement = document.createElement('div')
		const titleElement = document.createElement('p')
		const priceElement = document.createElement('p')

		blockElement.classList.add('-hm-collection-swiper-slide__hint-block')
		titleElement.classList.add('-hm-collection-swiper-slide__title')
		priceElement.classList.add('-hm-collection-swiper-slide__price')

		titleElement.innerHTML = title
		priceElement.innerHTML = price
		blockElement.appendChild(titleElement)
		blockElement.appendChild(priceElement)

		hint.appendChild(blockElement)

		hint.style.left = x
		hint.style.top = y

		hint.addEventListener('click', () => {
			if(!hint.classList.contains('active')) {
				hints.forEach(close => close.classList.remove('active'))
				hint.classList.add('active')
			} else {
				hint.classList.remove('active')
			}
		})
	})
}

export const choiceMulti = () => {

	const choiceMultiFn = (items) => {
		items.forEach(item => {
			item.addEventListener('click', () => {
				item.classList.toggle('active')
			})
		})
	}

	const choiceOneFn = (items, addiction) => {
		items.forEach((item, index) => {
			item.addEventListener('click', () => {
				items.forEach(item => item.classList.remove('active'))
				item.classList.add('active')
				if(addiction !== undefined) {
					addiction.forEach(item => item.classList.remove('active'))
					if(addiction[index]) addiction[index].classList.add('active')
				}
			})
		})
	}

	const color = choiceOneFn(document.querySelectorAll('.-hm-product-info__color')) 

	const complement = choiceOneFn(document.querySelectorAll('.-hm-product-info-complement-item')) 
	
	const materials = choiceMultiFn(document.querySelectorAll('.-hm-product-grid-aside-dropdown__materials'))
	
	const userAsideItemDesktop = document.querySelectorAll('.-hm-user-aside-item--desktop')
	const userAsideItemMobile = document.querySelectorAll('.-hm-user-aside-item--mobile')
	const userMainItem = document.querySelectorAll('.-hm-user-tab')
	const userTitle = document.querySelector('.-hm-user__title')

	const userAsideDesktop = choiceOneFn(userAsideItemDesktop, userMainItem) 
	const userAsideMobile = choiceOneFn(userAsideItemMobile, userMainItem) 
	const setUserTitle = () => {
		userAsideItemDesktop.forEach(item => {
			item.addEventListener('click', () => {
				userTitle.innerText = item.innerText.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
			})
		})
		userAsideItemMobile.forEach(item => {
			item.addEventListener('click', () => {
				userTitle.innerText = item.innerText.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
			})
		})
	} 
	setUserTitle()

	const auth = choiceOneFn(document.querySelectorAll('.-hm-popup-auth__button'), document.querySelectorAll('.-hm-popup-auth-form')) 
}

export const choiceColor = () => {
	const color = document.querySelectorAll('.-hm-product-info__color')
	if(color.length > 0) {
		color.forEach(color => {
			color.style.background = color.dataset.color
		});
	}
}

export const cart = () => {
	const cartItemCount = document.querySelectorAll('.-hm-cart-main-item-count')
	cartItemCount.forEach(count => {
		const plus = count.querySelector('.plus')
		const minus = count.querySelector('.minus')
		const input = count.querySelector('.-hm-cart-main-item-count__input')

		plus.addEventListener('click', () => {
			input.value = +input.value + 1
		})
		minus.addEventListener('click', () => {
			if(input.value - 1 >= 0) input.value = +input.value - 1
		})

	})
}