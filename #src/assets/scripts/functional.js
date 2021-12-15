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
		console.log(open, close, closeopen);
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