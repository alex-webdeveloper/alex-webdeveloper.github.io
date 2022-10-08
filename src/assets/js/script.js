window.addEventListener('DOMContentLoaded', () => {
	let hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		close = document.querySelector('.menu__close');
	const list = document.querySelectorAll(".menu__list .menu__link");

	list.forEach(item => {
		item.onclick = () => menu.classList.remove('active');
	})

	hamburger.onclick = function () {
		menu.classList.add('active');
	};

	close.onclick = function () {
		menu.classList.remove('active');
	};

	new WOW().init();


	// range
	let lines = document.querySelectorAll('.skills__ratings-line span');
	let counters = document.querySelectorAll('.skills__ratings-counter');

	// counters.forEach((item, index) => {
	//     lines[index].style.width = item.textContent;
	// })

	lines.forEach((item, index) => {
		item.style.width = counters[index].textContent;
	})
})

// smoth scroll
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) $(".pageup").fadeIn();
		else $(".pageup").fadeOut();
	})

	$("a[href='#up']").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	})
});

//   Initialize Swiper
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	freeMode: true,

	// optional parameters
	speed: 400,
	// spaceBetween: 100,
	// effect: "flip",
	autoplay: {
		delay: 2000,
	},
	// If we need pagination
	// pagination: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		// type: "fraction",
		// dynamicBullets: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	// scrollbar: {
	//     el: '.swiper-scrollbar',
	// },
	breakpoints: {
	// 	// when window width is >= 320px
	// 	320: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 20
	// 	},
	// 	// when window width is >= 480px
	// 	576: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 30
	// 	},
	// 	// when window width is >= 640px
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
			// pagination: false,
		}
	},
});