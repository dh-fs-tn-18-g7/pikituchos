

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

