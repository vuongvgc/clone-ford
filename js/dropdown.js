/**
 * For Footer main
 */
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

/**
 * For gallery brand
 */
var galleryBrandDropdown = document.querySelectorAll(".galleryBrand__dropdown");
var galleryArray = Array.prototype.slice.call(galleryBrandDropdown,0);
var buttonViewAll = document.querySelector(".view-all__box p span");
var iconViewAll = document.querySelector(".view-all__box p i");
console.log(iconViewAll);
buttonViewAll.addEventListener("click", function(event){
	galleryArray.map(el => {
		if(!el.hasClass('galleryBrand__show')) {
			el.classList.add('galleryBrand__show');
			el.classList.remove('galleryBrand__hide');
			event.preventDefault();
			buttonViewAll.innerHTML = "View Less";
			iconViewAll.classList.add('fa-minus-circle');
			iconViewAll.classList.remove('fa-plus-circle');
		}
		else {
			el.classList.remove('galleryBrand__show');
			el.classList.add('galleryBrand__hide');
			event.preventDefault();
			buttonViewAll.innerHTML = "View All";
			iconViewAll.classList.add('fa-plus-circle');
			iconViewAll.classList.remove('fa-minus-circle');

		}
	})
	
	
})

