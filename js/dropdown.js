// Dropdown Menu
var dropdown = document.querySelectorAll('.ford-dropdown__item');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.ford-dropdown__menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('ford-show')) {
			menu.classList.add('ford-show');
			menu.classList.remove('ford-hide');
			arrow.classList.add('ford-open');
			arrow.classList.remove('ford-close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('ford-show');
			menu.classList.add('ford-hide');
			arrow.classList.remove('ford-open');
			arrow.classList.add('ford-close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};