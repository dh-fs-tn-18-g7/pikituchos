

/* #### Dispara evento quando a pagina carregar, quando a pagina carregar vai disparar a funtion window.addEventListener( "load", ev => {####*/
"use strict";
window.addEventListener( "load", ev => {


	/* [ properties ] Variaveis criadas com o mesmo let 
	================================= */
	let slidesBaby = document.querySelectorAll( "baby-section slider card" ),
		slidesKids = document.querySelectorAll( "kids-section slider card" ),
		currentSlideBaby = 0,
		currentSlideKids = 0,
		maxSlideBaby = slidesBaby.length - 1,
		maxSlideKids = slidesKids.length - 1,
		prevSlideBaby = document.querySelector( "baby-section slider .slider-btn-prev" ),
		nextSlideBaby = document.querySelector( "baby-section slider .slider-btn-next" ),
		prevSlideKids = document.querySelector( "kids-section slider .slider-btn-prev" ),
		nextSlideKids = document.querySelector( "kids-section slider .slider-btn-next" );
	/* ------
	
	
	------------------------ */

	/* [ events ] Evento do Carrossel

	
	=============================== */
	slidesBaby.forEach( ( slide, index ) => {
		// slide.style.transform = `translateX( ${index * 100}% )`;
		slide.style.transform = `translateX( ${( index + 1 ) * 30 + 160}% )`;
	} );
	prevSlideBaby.addEventListener( "click", function() {
		currentSlideBaby === 0 ? currentSlideBaby = maxSlideBaby : currentSlideBaby--;

		slidesBaby.forEach( ( slide, index ) => {
			// slide.style.transform = `translateX(${100 * ( index - currentSlideBaby )}%)`;
			slide.style.transform = `translateX(${( index + 1 - currentSlideBaby ) * 30 - 160}%)`;
		} );
	} );
	nextSlideBaby.addEventListener( "click", function() {
		currentSlideBaby === maxSlideBaby ? currentSlideBaby = 0 : currentSlideBaby++;

		slidesBaby.forEach( ( slide, index ) => {
			// slide.style.transform = `translateX( ${100 * ( index - currentSlideBaby )}% )`;
			// slide.style.transform = `translateX( ${30 * ( index - currentSlideBaby )}% )`;
		} );
	} );

	slidesKids.forEach( ( slide, index ) => {
		slide.style.transform = `translateX( ${index * 100}% )`;
	} );
	prevSlideKids.addEventListener( "click", function() {
		currentSlideKids === 0 ? currentSlideKids = maxSlideKids : currentSlideKids--;

		slidesKids.forEach( ( slide, index ) => {
			slide.style.transform = `translateX(${100 * ( index - currentSlideKids )}%)`;
		} );
	} );
	nextSlideKids.addEventListener( "click", function() {
		currentSlideKids === maxSlideKids ? currentSlideKids = 0 : currentSlideKids++;

		slidesKids.forEach( ( slide, index ) => {
			slide.style.transform = `translateX( ${100 * ( index - currentSlideKids )}% )`;
		} );
	} );




} );

