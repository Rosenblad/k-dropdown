/**
 * Module Name: K-Dropdown
 * Module Author: Webbyrån Konsulterna
 * Author URL: webbyrankonsulterna.se
 */

 class K_Dropdown {

  constructor(options) {
    const dropdown = 'k-dropdown'
    const dropdowns = document.querySelectorAll('.' + dropdown)

    this.els = {
      triggers: document.querySelectorAll('[data-dropdown]'),
      body: document.querySelector('body'),
      dropdownContent: document.querySelectorAll('.k-dropdown__content'),
      dropdowns
    }

    this.selectors = {
      triggerActiveClass: 'k-dropdown__trigger--active',
      dropdownOpen: 'k-dropdown--open',
      dropdownClass: 'k-dropdown',
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
    const dropdown = document.querySelector('#' + dropdownId)

    if (dropdown.classList.contains(dropdownOpen)) {
      this.closeDropdowns()
    } else {
      this.openDropdown(dropdown, trigger, parentNode)
    }

  }

  openDropdown(dropdown, trigger, parentNode) {
    const { triggerActiveClass, dropdownActiveClass, dropdownOpen } = this.selectors

    trigger.classList.add(triggerActiveClass)
    parentNode.classList.add(dropdownOpen)
  }

  closeDropdowns() {
    const { dropdowns, triggers } = this.els
    const { dropdownOpen, triggerActiveClass } = this.selectors

    // Remove active class from dropdown
    dropdowns.forEach(el => {
      el.classList.remove(dropdownOpen)
    })

    // Remove active class from dropdown triggers
    for (var i = 0; i < triggers.length; ++i) {
      triggers[i].classList.remove(triggerActiveClass)
    }
  }

  build() {
    const { dropdowns } = this.els
    const { dropdownBg } = this.selectors

    dropdowns.forEach(el => {
      const bg = document.createElement('div')
      bg.classList.add(dropdownBg)
      el.appendChild(bg)
    })
  }

  bindEvents() {
    const { triggers, body, dropdowns, dropdownBgs } = this.els

    if (triggers) {
      for (var i = 0; i < triggers.length; ++i) {
        triggers[i].addEventListener('click', this.toggleDropdown.bind(this), false)
      }
    }

    if (dropdownBgs) {
      dropdownBgs.forEach(el => {
        el.addEventListener('click', this.closeDropdowns.bind(this), false)
      })
    }

  }

  static init(options) {
    new K_Dropdown(options)
  }

}

export default K_Dropdown