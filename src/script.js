/*
Plugin Name: K-Dropdown
Plugin Author: Webbyrån Konsulterna
Author URL: webbyrankonsulterna.se
*/

(function() {

  // Selectors
  var dropdownActiveClass = 'k-dropdown__content--visible'
  var triggerActiveClass = 'k-dropdown__trigger--active'
  var dropdownClass = 'k-dropdown'

  // Elements
  var triggers = document.querySelectorAll('[data-dropdown]')
  var body = document.querySelector('body')
  var dropdowns = document.querySelectorAll('.k-dropdown__content')

  this.Dropdown = {
    init: function(options) {
      bindEvents(triggers)
    }
  }
  
  function toggleDropdown(trigger) {
    var dropdownId = trigger.getAttribute('data-dropdown')
    var dropdown = document.querySelector('#' + dropdownId)

    if (dropdown.classList.contains(dropdownActiveClass)) {
      closeDropdowns()
    } else {
      openDropdown(dropdown, trigger)
    }
  }

  function openDropdown(dropdown, trigger) {
    closeDropdowns()
    trigger.classList.add(triggerActiveClass)
    dropdown.classList.add(dropdownActiveClass)
  }

  function closeDropdowns() {

    // Remove active class from dropdowns
    for (var i = 0; i < dropdowns.length; ++i) {
      dropdowns[i].classList.remove(dropdownActiveClass)
    }

    // Remove active class from dropdown triggers
    for (var i = 0; i < triggers.length; ++i) {
      triggers[i].classList.remove(triggerActiveClass)
    }
  }

  function bindEvents() {
    if (triggers) {
      for (var i = 0; i < triggers.length; ++i) {
        triggers[i].addEventListener('click', function(e) {
          e.preventDefault()
          toggleDropdown(this)
        }, false)
      }
    }

    window.addEventListener('click', function(e) {
      var target = e.target
      var parent = target.parentNode

      while (parent) {
        if (parent.classList && parent.classList.contains(dropdownActiveClass) ||
            parent.classList && parent.classList.contains(dropdownClass)) {
          return
        }
        parent = parent.parentNode
      }

      closeDropdowns()
    }, false)
  }

})()

Dropdown.init({})