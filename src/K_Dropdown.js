/**
 * Module Name: K-Dropdown
 * Module Author: Webbyrån Konsulterna
 * Author URL: webbyrankonsulterna.se
 */

 class K_Dropdown {

  constructor(dropdown, options) {
    this.dropdown = dropdown
    this.dropdownTrigger = dropdown.querySelector('.k-dropdown__trigger')

    this.els = {
      triggers: document.querySelectorAll('[data-dropdown]'),
      body: document.querySelector('body'),
      dropdownContent: document.querySelectorAll('.k-dropdown__content'),
    }

    this.selectors = {
      triggerActive: 'k-dropdown__trigger--active',
      dropdownOpen: 'k-dropdown--open',
      dropdown: 'k-dropdown',
      dropdownBg: 'k-dropdown__bg',
      dropdown
    }

    this.build()

    this.els.dropdownBgs = document.querySelectorAll('.k-dropdown__bg')

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
    const { triggerActive, dropdownActive, dropdownOpen } = this.selectors
    const dropdownTrigger = this.dropdownTrigger

    dropdownTrigger.classList.add(triggerActive)
    parentNode.classList.add(dropdownOpen)
  }

  closeDropdown() {
    const { dropdownOpen, triggerActive } = this.selectors
    const dropdown = this.dropdown
    const dropdownTrigger = this.dropdownTrigger

    // Remove active class from dropdown
    dropdown.classList.remove(dropdownOpen)

    // Remove active class from dropdown triggers
    dropdownTrigger.classList.remove(triggerActive)
  }

  build() {
    const dropdown = this.dropdown
    const { dropdownBg } = this.selectors

    const bg = document.createElement('div')
    bg.classList.add(dropdownBg)
    dropdown.appendChild(bg)
  }

  bindEvents() {
    const { triggers, body, dropdowns, dropdownBgs } = this.els

    const dropdown = this.dropdown
    const dropdownTrigger = this.dropdownTrigger

    dropdownTrigger.addEventListener('click', this.toggleDropdown.bind(this), false)

    if (dropdownBgs) {
      dropdownBgs.forEach(el => {
        el.addEventListener('click', this.closeDropdown.bind(this), false)
      })
    }

  }

  static init(dropdown, options) {
    new K_Dropdown(dropdown, options)
  }

}

export default K_Dropdown