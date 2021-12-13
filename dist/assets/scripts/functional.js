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