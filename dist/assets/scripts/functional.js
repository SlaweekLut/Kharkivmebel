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
				dropdownValue.innerText = item.innerText
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