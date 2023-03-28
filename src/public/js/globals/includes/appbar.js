

"use strict";




window.addEventListener( "load", ev => {
	let pageHeader = document.querySelector( "page-header" ),
		btnMenu = document.querySelector( "h2#btn-mobile-nav-menu span" ),
		headerNavMobile = document.querySelector( "nav#header-nav-mobile" ),
		urls = document.querySelectorAll( "[url]" );

	btnMenu.addEventListener( "click", ev => {
		pageHeader.classList.toggle( "open-mobile-nav-menu" );
		pageHeader.classList.contains( "open-mobile-nav-menu" ) ?
			headerNavMobile.style.display = "flex" :
			headerNavMobile.style.display = "none";
	} );
    
	for( let url of urls ) {
		url.addEventListener( "click", ev => {
			window.open( url.getAttribute( "url" ), "_self" );
		} );
	}

	const typeTarget = document.querySelector( "input#searchbar" ),
		frases = [
			" procure aqui. . .",
			" conjunto para menino. . .",
			" conjunto para menina. . .",
			" blusa para menina. . .",
		];
	const StartWrite = function( i ) {
			typeof frases[i] == "undefined" ?
				setTimeout( () => StartWrite( 0 ), 1000 ) :
				i < frases[i].length + 1 ?
					writer( frases[i], 0, () => StartWrite( i + 1 ) ) : console.log( "" );
		},

		writer = function( text, i, call ) {
			var typing = 250 - Math.random() * 100;
			if( i < text.length + 1 ) {
				typeTarget.placeholder = text.substring( 0, i++ );
				setTimeout( () => writer( text, i++, call ), typing );
			} else if( i === text.length + 1 ) {
				setTimeout( () => backspace( text, i, call ), 1000 );
			}
		},

		backspace = function( text, i, call ) {
			let back = 10 + Math.random() * 100;
			if( i >= 0 ) {
				typeTarget.placeholder = text.substring( 0, i-- );
				setTimeout( () => backspace( text, i, call ), back ); 
			} else if( typeof call == "function" ) {
				setTimeout( call, 1000 );
			}
		};

	setTimeout( () => StartWrite( 0 ), 1000 );
	console.log( "appbar" );
} );