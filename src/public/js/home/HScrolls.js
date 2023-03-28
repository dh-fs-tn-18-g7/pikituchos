function print( v ) { console.log( v ); }

"use strict";
window.addEventListener( "load", ev => {
	/* [ properties ]
    ================================= */
	let prevScrollBtns = document.querySelectorAll( "slider[scroll] img.slider-btn-prev" ),
		nextScrollBtns = document.querySelectorAll( "slider[scroll] img.slider-btn-next" );
	/* ----------------------------------------------- */
    
	/* [ events ] 
    =============================== */
	for( let nextScrollBtn of nextScrollBtns ) {
		nextScrollBtn.parentNode.querySelector( "slider-modules" ).setAttribute( "var", "0" );
		// nextScrollBtn.parentNode.querySelector( "slider-modules" ).children[0].style.transform = "translateX( 150px )";
		print( nextScrollBtn.parentNode.querySelector( "slider-modules" ) );
	}
	


	for( let nextScrollBtn of nextScrollBtns ) {
		let sliderModule = nextScrollBtn.parentNode.querySelector( "slider-modules" ),
			maxScroll = nextScrollBtn.parentNode.querySelector( "slider-modules" ).children.length;
            
		nextScrollBtn.addEventListener( "click", () => {
			let current = sliderModule.getAttribute( "var" );

			print( `\x1b[33m--------------------\nparent next\x1b[0m\nmaxScroll: ${maxScroll}\ncurrent: ${current}\x1b[33m\n--------------------` );
			
			if( nextScrollBtn.parentNode.querySelector( "slider-modules" ).getAttribute( "var" ) == ( maxScroll - 4 ) ) {
				current = 0;
				sliderModule.setAttribute( "var", current );

				for( child of nextScrollBtn.parentNode.querySelector( "slider-modules" ).children ) {
					child.style.transform = "translateX( 0 )";
				} 
				print( "\x1b[35mmaOi" );
			} else {
				current++;
				sliderModule.setAttribute( "var", current );
                
				print( `\x1b[33m--------------------\nelse next\x1b[0m\nmaxScroll: ${maxScroll}\ncurrent: ${current}\x1b[33m\n--------------------` );
				
				for( child of nextScrollBtn.parentNode.querySelector( "slider-modules" ).children ) {
					child.style.transform = `translateX( -${310 * ( current )}px )`;
				}
			}
            
		} );
	}
	for( let prevScrollBtn of prevScrollBtns ) {
		let sliderModule = prevScrollBtn.parentNode.querySelector( "slider-modules" ),
			maxScroll = prevScrollBtn.parentNode.querySelector( "slider-modules" ).children.length;

		prevScrollBtn.addEventListener( "click", () => {
			let current = sliderModule.getAttribute( "var" );
            
			print( `\x1b[33m--------------------\nparent prev\x1b[0m\nmaxScroll: ${maxScroll}\ncurrent: ${current}\x1b[33m\n--------------------` );
			
			if( prevScrollBtn.parentNode.querySelector( "slider-modules" ).getAttribute( "var" ) == 0 ) {
				current = maxScroll - 4;
				sliderModule.setAttribute( "var", maxScroll - 4 );
				for( child of prevScrollBtn.parentNode.querySelector( "slider-modules" ).children ) {
					child.style.transform = `translateX( -${310 * ( current )}px )`;
				} 
				print( "\x1b[35mmaOi" );
			} else {
				current--;
				sliderModule.setAttribute( "var", current );
                
				print( `\x1b[33m--------------------\nelse prev\x1b[0m\nmaxScroll: ${maxScroll}\ncurrent: ${current}\x1b[33m\n--------------------` );
				
				for( child of prevScrollBtn.parentNode.querySelector( "slider-modules" ).children ) {
					child.style.transform = `translateX( ${ ( 310 * ( current ) ) * -1 }px )`;
				} 
			}
            
		} );
	}

    

    
} );

