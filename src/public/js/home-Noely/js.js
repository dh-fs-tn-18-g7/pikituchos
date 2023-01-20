

// function validaEmail( email ) {
// 	var regex = /\S+@\S+\.\S+/;
// 	return regex.test( email );
// }

// function validarEmail( emailCapturadoDoFormulario ) {
// 	var validarRegExNoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// 	if( emailCapturadoDoFormulario.match( validarRegExNoEmail ) ) {
// 		return true; 
// 	} else {
// 		return false; 
// 	}
// }

// var emailCapturado = "email@gmail.com";
// console.log( validarEmail( emailCapturado ) );

window.addEventListener( "load", ev => {
	/* [ properties ]
    ================================= */
	let cardSlides = document.querySelectorAll( ".slider .slide" ),
		currentSlide = 0,
		maxSlide = cardSlides.length - 1,
		nextSlide = document.querySelector( ".slider .slider-btn-next" ),
		prevSlide = document.querySelector( ".slider .slider-btn-prev" );
	/* ------------------------------ */
        
	/* [ events ] 
        =============================== */
    
	/* [ banner slider ]
        ---------------------------------- */
	// cardSlides.forEach( ( slide, index ) => {
	// 	slide.style.transform = `translateX( ${index * 100}% )`;
	// } );

	// nextSlide.addEventListener( "click", function() {
	// 	currentSlide === maxSlide ? currentSlide = 0 : currentSlide++;
                
	// 	cardSlides.forEach( ( slide, index ) => {
	// 		slide.style.transform = `translateX( ${100 * ( index - currentSlide )}% )`;
	// 	} );
	// } );

	// prevSlide.addEventListener( "click", function() {
	// 	currentSlide === 0 ? currentSlide = maxSlide : currentSlide--;
                
	// 	cardSlides.forEach( ( slide, index ) => {
	// 		slide.style.transform = `translateX(${100 * ( index - currentSlide )}%)`;
	// 	} );
	// } );

	console.log( cardSlides.length );

} );