'use strict';

const slider = document.querySelector('.slider');
const button = document.querySelector('#slider-button');
const picture = document.querySelector('.slider-img');

button.onclick = () => {
	slider.scrollLeft += picture.offsetWidth;
};

