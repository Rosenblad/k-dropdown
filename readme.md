# Installation

Include the script

```html
<script src="k-dropdown.min.js"></script>

or

<script src="k-dropdown.js"></script>
```

Include the stylesheet

```html
<link rel="stylesheet" type="text/css" href="k-dropdown.min.css">

or

<link rel="stylesheet" type="text/css" href="k-dropdown.css">
```

# Usage

## Commands

Minify

```bin
$ npm run compile
```

Development with watch mode

```bin
npm run dev
```

# Examples

```html

<div id="dropdown" class="k-dropdown">
	<div class="k-dropdown__trigger">Open Dropdown</div>
	<div class="k-dropdown__content">
		<!-- your content -->
	</div>
</div>

<script>
var dropdown = document.querySelector('#dropdown')
Dropdown.init(dropdown, {options})
</script>

<!-- dropdown trigger -->
<a href="#" data-dropdown="dropdown__languagePicker">

<!-- dropdown -->
<div id="dropdown__languagePicker" class="k-dropdown">
	<!-- dropdown content goes here -->
</div>

```

# TODO

