

"use strict";
window.addEventListener( "load", ev => {
	/* [ properties ]
    ================================= */
	const $ = function( l, y ) {
			if( !y ) {
				return document.querySelector( l );
			} else {
				return y.querySelector( l );
			}
		},
		$$ = function( l, y ) {
			if( !y ) {
				return document.querySelectorAll( l );
			} else {
				return y.querySelectorAll( l );
			}
		};
        
	let slides = $$( "banner-section slider slide" ),
		currentSlide = 0,
		maxSlide = slides.length - 1,
		nextSlide = $( "banner-section slider .slider-btn-next" ),
		prevSlide = $( "banner-section slider .slider-btn-prev" ),
		formNewsletter = $( "form[newsletter]" ),
		email = $( "#email" );
	/* ------------------------------ */
    
	/* [ events ] 
    =============================== */

	/* [ banner slider ]
    ---------------------------------- */
	slides.forEach( ( slide, index ) => {
		slide.style.transform = `translateX( ${index * 100}% )`;
	} );
	nextSlide.addEventListener( "click", function() {
		currentSlide === maxSlide ? currentSlide = 0 : currentSlide++;
            
		slides.forEach( ( slide, index ) => {
			slide.style.transform = `translateX( ${100 * ( index - currentSlide )}% )`;
		} );
	} );
	prevSlide.addEventListener( "click", function() {
		currentSlide === 0 ? currentSlide = maxSlide : currentSlide--;
            
		slides.forEach( ( slide, index ) => {
			slide.style.transform = `translateX(${100 * ( index - currentSlide )}%)`;
		} );
	} );



	/* ==[ sliders ]================================ 
	  * [ swiperjs ] 
	  * https://swiperjs.com/get-started
        https://www.jsdelivr.com/package/npm/swiper
        https://swiperjs.com/demos
      * ============================================ */

	var swiper = new Swiper( "[slider-heighlights]", {
		slidesPerView: 4,
		spaceBetween: 55,
		loop: true,
		centerSlide: "true",
		fade: "true",
		grabCursor: "true",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			nextEl: "[swiper='h-n']",
			prevEl: "[swiper='h-p']",
		},
        
		breakpoints:{
			0: { slidesPerView: 1, },
			520: { slidesPerView: 2, },
			830: { slidesPerView: 3, },
			950: { slidesPerView: 3, },
			1120: { slidesPerView: 4, },
		},
	} );

	var swiper = new Swiper( "[slider-0-1anos]", {
		slidesPerView: 4,
		spaceBetween: 55,
		loop: true,
		centerSlide: "true",
		fade: "true",
		grabCursor: "true",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			nextEl: "[swiper='01-n']",
			prevEl: "[swiper='01-p']",
		},
        
		breakpoints:{
			0: { slidesPerView: 1, },
			520: { slidesPerView: 2, },
			830: { slidesPerView: 3, },
			950: { slidesPerView: 3, },
			1120: { slidesPerView: 4, },
		},
	} );

	var swiper = new Swiper( "[slider-2-3anos]", {
		slidesPerView: 4,
		spaceBetween: 55,
		loop: false,
		centerSlide: "true",
		fade: "true",
		grabCursor: "true",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			nextEl: "[swiper='23-n']",
			prevEl: "[swiper='23-p']",
		},
        
		breakpoints:{
			0: { slidesPerView: 1, },
			520: { slidesPerView: 2, },
			830: { slidesPerView: 3, },
			950: { slidesPerView: 3, },
			1120: { slidesPerView: 4, },
		},
	} );

	var swiper = new Swiper( "[slider-testimonials]", {
		slidesPerView: 3,
		spaceBetween: 30,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints:{
			0: { slidesPerView: 1, },
			520: { slidesPerView: 2, },
			830: { slidesPerView: 3, },
			950: { slidesPerView: 3, },
			1120: { slidesPerView: 3, },
		},
	} );



	/* ==[ testimonials slider ]================================ */
	var items = document.querySelectorAll( "[test-item]" );
	var cards = [ ...items ];

	cards[1].setAttribute( "destaque", "card" );
	cards[1].firstElementChild.setAttribute( "destaque", "home" );
	console.log( cards[1].firstElementChild );

	startAnim( cards );
    
	function startAnim( list ) {
		setTimeout( () => {
			if( list.length >= 3 ) {
				list[0].style.gridArea = "c";
				list[0].removeAttribute( "destaque" );
				list[0].firstElementChild.removeAttribute( "destaque" );
                
				list[1].style.gridArea = "a";
				list[1].removeAttribute( "destaque" );
				list[1].firstElementChild.removeAttribute( "destaque" );
                
				list[2].style.gridArea = "b";
				list[2].setAttribute( "destaque", "card" );
				list[2].firstElementChild.setAttribute( "destaque", "home" );
			}
			sortList( list );
		}, 3000 );
	}
    
	function sortList( list ) {
		clearTimeout( delay );
		var delay = setTimeout( () => {
			var firstElem = list.shift();
			list.push( firstElem );
			return startAnim( list );
		}, 3000 );
	}
    
	/* [ check email ]
    ------------------------------------------------ */
	/* 	formNewsletter.addEventListener( "submit", ev => {
		ev.preventDefault();
		checkInputs();
	} );

	function checkInputs() {
		const emailValue = email.value;

		emailValue === "" ?
			setErrorFor( email, "O email é obrigatório." ) :
			!checkEmail( emailValue ) ?
				setErrorFor( email, "Por favor, insira um email válido." ) :
				setSuccessFor( email, "Parabéns!" );
	}

	function setErrorFor( input, message ) {
		const errorTarget = $( "p[error]" );

		errorTarget.style.display = "block";
		errorTarget.innerText = message;
	}

	function setSuccessFor( input, message ) {
		const successTarget = $( "p[success]" );

		successTarget.style.display = "block";
		successTarget.innerText = message;
	}

	function checkEmail( email ) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	} */


} );

