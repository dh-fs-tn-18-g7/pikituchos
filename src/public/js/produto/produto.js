

"use strict";
/* [ properties ]
=========================================================================================== */

/* ---------------------------------------------------------------------------------------- */





/* [ events ]
=========================================================================================== */
window.addEventListener( "load", ev => {
	const $ = v => document.querySelector( v ),
		$$ = v => document.querySelectorAll( v );

	let descToggle = $( "h4[desc-toggle]" ),
		devoluçõesToggle = $( "h4[devoluções-toggle]" ),
		desc = $( "footer[desc]" ),
		devoluções = $( "footer[devoluções]" ),
		detailsSizesItems = $$( "details-sizes > footer > label" ),
		quantityLabel = $( "label[quantity-label]" ),
		quantity = $( "input[quantity]" ),
		quantityDecrement = $( "input[quantity-decrement]" ),
		quantityIncrement = $( "input[quantity-increment]" ),
		sidebarItems = $$( "label[sidebar-item]" ),
		sidebarItemTarget = $( "picture[sidebar-item-target]" );

	/* [ descrição do produto: toggle ] */
	descToggle.addEventListener( "click", ev => {
		if( desc.style.display == "none" || desc.style.display == "" ) {
			desc.style.display = "block";
			devoluções.style.display = "none";
		}
	} );
    
	/* [ devoluções: toggle ] */
	devoluçõesToggle.addEventListener( "click", ev => {
		if( devoluções.style.display == "none" || devoluções.style.display == "" ) {
			devoluções.style.display = "block";
			desc.style.display = "none";
		}
	} );

	/* [ miniaturas do produto: ] */
	for( let item of sidebarItems ) {
		item.addEventListener( "mouseenter", ev => {
			sidebarItemTarget.innerHTML = `<img src="${item.lastElementChild.getAttribute( "src" )}" alt="">`;
			sidebarItems.forEach( i => i.removeAttribute( "active" ) );
			item.setAttribute( "active", "" );
		} );
		item.addEventListener( "mouseleave", ev => {
		} );
	}

	/* [ tamanhos: ] */
	for( let item of detailsSizesItems ) {
		item.addEventListener( "click", ev => {
			detailsSizesItems.forEach( i => i.removeAttribute( "active" ) );
			item.setAttribute( "active", "" );
		} );
		item.addEventListener( "mouseleave", ev => {
		} );
	}

	/* [ quantity inputs ] */
	[ quantityDecrement, quantityIncrement ].forEach( q => q.addEventListener( "click", ev => {
		if( q == quantityDecrement ) {
			quantity.value >= 2 ?
				quantity.value-- : console.log( "oi" );
		} else if( q == quantityIncrement ) {
			quantity.value <= 29 ?
				quantity.value++ : console.log( "oi" );
		}
	} ) );



} );