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


	// smoth scroll
	let btn = document.querySelector('.pageup');
	let up = document.getElementById('up');
	window.addEventListener('scroll', smothScroll);
	window.addEventListener('resize', smothScroll);

	function smothScroll() {
		let height = window.pageYOffset;
		if (height > 1600) btn.style.display = 'block';
		else btn.style.display = 'none';
	}
	btn.onclick = (e) => {
		e.preventDefault();
		up.scrollIntoView({
			block: 'center',
			behavior: 'smooth'
		})
	};

	// $(document).ready(function () {
	// 	$(window).scroll(function () {
	// 		// console.log($(this).scrollTop());
	// 		if ($(this).scrollTop() > 1600) $(".pageup").fadeIn();
	// 		else $(".pageup").fadeOut();
	// 	})

	// 	$("a[href='#up']").click(function () {
	// 		const _href = $(this).attr("href");
	// 		$("html, body").animate({
	// 			scrollTop: $(_href).offset().top + "px"
	// 		});
	// 		return false;
	// 	})
	// });

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
		}
	});

	// Contact form
	(function () {
		emailjs.init("MOtDxdKpHnI--3GJw");
	})();

	document.getElementById('contact-form').addEventListener('submit', function (event) {
		event.preventDefault();
		// generate a five digit number for the contact_number variable
		// console.log(this.contact_number.value);
		this.contact_number.value = Math.random() * 100000 | 0;
		// console.log(this.contact_number.value);
		// these IDs from the previous steps
		emailjs.sendForm('service_l90mbbp', 'template_ym21evh', this)
			.then((res) => {
				console.log('SUCCESS!', res.text);
				document.forms[0].elements.user_name.value = "";
				document.forms[0].elements.user_email.value = "";
				document.forms[0].elements.message.value = "";
				if (res.status === 200 && res.text === "OK") myAlert(this);
			}, function (error) {
				console.log('FAILED...', error);
			});

		function myAlert(block) {
			let p = document.createElement("p");
			p.textContent = "Сообщение отправлено";
			p.style.cssText = "border-radius: 5%; color: #fff; text-align: center; width: max-content; padding: 10px 20px; background: green";
			block.appendChild(p);
			setTimeout(() => p.remove(), 4000);
		};
	});
	// end form
	let descr = document.querySelector("meta[name='description']");
	console.log(descr.content.length)

})
