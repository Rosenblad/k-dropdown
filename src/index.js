// Styles
import './K_Dropdown.css'

// Modules
import Dropdown from './K_Dropdown'//.init()

//Dropdown.init()

// Dropdowns
const triggerDropdown = document.querySelector('#triggerMe')
Dropdown.init(triggerDropdown, {})

const loginDropdown = document.querySelector('#loginDropdown')
Dropdown.init(loginDropdown, {})

const languageDropdown = document.querySelector('#languageDropdown')
Dropdown.init(languageDropdown, {})
