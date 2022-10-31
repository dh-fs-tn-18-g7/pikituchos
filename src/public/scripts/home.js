

"use strict";
window.addEventListener( "load", ev => {
	/* [ properties ]
    ================================= */
	let stack = document.createElement( "script" ),
		baby = document.querySelector( "#baby-logo" ),
		babysEyes = document.querySelector( "#babys-eyes" ),
		slides = document.querySelectorAll( "banner-section slider slide" ),
		currentSlide = 0,
		maxSlide = slides.length - 1,
		nextSlide = document.querySelector( "banner-section slider .slider-btn-next" ),
		prevSlide = document.querySelector( "banner-section slider .slider-btn-prev" );
	/* ------------------------------ */
    
	/* [ events ]
    =============================== */
	stack.src = "src/public/scripts/stack.js";
	stack.async = true;
	document.body.appendChild( stack );

	baby.addEventListener( "mouseenter", ev => {
		babysEyes.innerHTML = pikituchoHoverin;
	} );
	baby.addEventListener( "mouseleave", ev => {
		babysEyes.innerHTML = pikitucho;
	} );

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

    

    
} );

