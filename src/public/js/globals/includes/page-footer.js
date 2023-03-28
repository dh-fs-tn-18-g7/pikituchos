

"use strict";
window.addEventListener( "load", ev => {
	let bottomClouds = document.querySelector( "#bottom-clouds" ),
		DH = document.querySelector( "img#footer-DH" ),
		observer = new IntersectionObserver( function( entries ) {
			entries[0].isIntersecting === true ? 
				bottomClouds.style.backgroundPositionX = "right" : 
				console.log( "Ha-ha-ha, você não disse a palavra mágica!" );
		}, { threshold: [ 0 ] } );
                
	DH.addEventListener( "click", ev => window.open( DH.getAttribute( "href" ), "_blank" ) );
	DH.addEventListener( "mouseenter", ev => DH.style.cursor = "pointer" );
    
	observer.observe( bottomClouds );
} );