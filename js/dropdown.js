/**
 * Function: Dropdown footer Main
 * Event: Dropdown when respond &  when click button 
 * Author: Do Minh Vuong
 */
var dropdown = document.querySelectorAll('.ford-dropdown__item');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.ford-dropdown__menu'),
			arrow = button.querySelector('i.icon-arrow');
	// when click button 
	button.onclick = function(event) {
		if(!menu.hasClass('ford-show')) {
			// show hide content 
			menu.classList.add('ford-show');
			menu.classList.remove('ford-hide');
			// button 
			arrow.classList.add('ford-open');
			arrow.classList.remove('ford-close');
			event.preventDefault();
		}
		else {
			// show hide content 
			menu.classList.remove('ford-show');
			menu.classList.add('ford-hide');
			// button 
			arrow.classList.remove('ford-open');
			arrow.classList.add('ford-close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};


/**
 * Function: Dropdown  For gallery brand
 * Event: Dropdown when respond
 * Author: Do Minh Vuong
 */
var galleryBrandDropdown = document.querySelectorAll(".galleryBrand__dropdown");
var galleryArray = Array.prototype.slice.call(galleryBrandDropdown,0);
var buttonViewAll = document.querySelector(".view-all__box p span");
var iconViewAll = document.querySelector(".view-all__box p i");
console.log(iconViewAll);
buttonViewAll.addEventListener("click", function(event){
	galleryArray.map(el => {
		if(!el.hasClass('galleryBrand__show')) {
			// show hide content 
			el.classList.add('galleryBrand__show');
			el.classList.remove('galleryBrand__hide');
			event.preventDefault();
			// button & icon
			buttonViewAll.innerHTML = "View Less";
			iconViewAll.classList.add('fa-minus-circle');
			iconViewAll.classList.remove('fa-plus-circle');
		}
		else {
			// show hide content 
			el.classList.remove('galleryBrand__show');
			el.classList.add('galleryBrand__hide');
			event.preventDefault();
			// button & icon
			buttonViewAll.innerHTML = "View All";
			iconViewAll.classList.add('fa-plus-circle');
			iconViewAll.classList.remove('fa-minus-circle');

		}
	})
	
	
})

