/**
 * Module Name: K-Dropdown
 * Module Author: Webbyrån Konsulterna
 * Author URL: webbyrankonsulterna.se
 */

 class K_Dropdown {

  constructor(dropdown, options) {
    this.dropdown = dropdown
    this.dropdownOpen = dropdown.querySelector('.k-dropdown__open')
    this.dropdownClose = dropdown.querySelector('.k-dropdown__close')

    this.selectors = {
      triggerActive: 'k-dropdown__open--active',
      dropdown__open: 'k-dropdown--open',
      dropdown: 'k-dropdown',
      dropdownBg: 'k-dropdown__bg',
      dropdown
    }

    this.build()

    this.dropdownBg = document.querySelector('.k-dropdown__bg')

    this.bindEvents()
  }
  
  toggleDropdown(e) {
    e.preventDefault()

    const { dropdownOpen } = this.selectors

    const trigger = e.target
    const parentNode = trigger.parentNode

    const dropdownId = trigger.getAttribute('data-dropdown')
    const dropdown = this.dropdown

    if (dropdown.classList.contains(dropdownOpen)) {
      this.closeDropdowns()
    } else {
      this.openDropdown(dropdown, trigger, parentNode)
    }

  }

  openDropdown(dropdown, trigger, parentNode) {
    const { triggerActive, dropdownActive, dropdown__open } = this.selectors
    const dropdownOpen = this.dropdownOpen

    dropdownOpen.classList.add(triggerActive)
    parentNode.classList.add(dropdown__open)
  }

  closeDropdown() {
    const { dropdown__open, triggerActive } = this.selectors
    const dropdown = this.dropdown
    const dropdownOpen = this.dropdownOpen

    // Remove active class from dropdown
    dropdown.classList.remove(dropdown__open)

    // Remove active class from dropdown triggers
    dropdownOpen.classList.remove(triggerActive)
  }

  build() {
    const dropdown = this.dropdown
    const { dropdownBg } = this.selectors

    const bg = document.createElement('div')
    bg.classList.add(dropdownBg)
    dropdown.appendChild(bg)
  }

  bindEvents() {
    const dropdownOpen = this.dropdownOpen
    const dropdownClose = this.dropdownClose
    const dropdownBg = this.dropdownBg
    console.log(dropdownClose)

    // Open dropdown
    dropdownOpen.addEventListener('click', this.toggleDropdown.bind(this), false)

    // Close dropdown
    if (dropdownClose) {
      dropdownClose.addEventListener('click', this.closeDropdown.bind(this), false)
    }

    dropdownBg.addEventListener('click', this.closeDropdown.bind(this), false)

  }

  static init(dropdown, options) {
    new K_Dropdown(dropdown, options)
  }

}

export default K_Dropdown