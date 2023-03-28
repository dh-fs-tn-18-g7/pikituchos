

// "use strict";
/* [ properties ]
    =========================================================================== */
const $ = ( l, y ) => !y ? document.querySelector( l ) : y.querySelector( l ),
	$$ = ( l, y ) => !y ? document.querySelectorAll( l ) : y.querySelectorAll( l ),
	log = v => console.log( v );
    
// let titleTemplate = `
// <style>
//     h2#outline {
//         position: relative;
//         top: 0; left: 0;
//         color: var(--cp00);
//         -webkit-text-stroke: 10px var(--cp00);
//         filter: drop-shadow(0px 4px #0005);
//         font-family: Baloo Da;
//         font-size: 2.5rem;
//     }
//     h2#text {
//         position: absolute;
//         top: 0; left: 0;
//         color: var(--cp05);
//         font-family: Baloo Da;
//         font-size: 2.5rem;
//     }
// </style>
// <h2 id="outline"></h2>
// <h2 id="text"></h2>
// `,
    
let titleTemplate = `
<style>
    p[title-pk] {
        margin: 0;
    }
</style>
<p title-pk="">
</p>
`,
	cardTemplate = `
<style>  
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        font-family: 'Baloo Da 2', cursive;
        margin: 0; padding: 0;
        position: relative;
        outline: none;
    }
    picture {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 57%;
        border-radius: 18px 18px 0 0;
        overflow: hidden;
        transition: 0s ease; /*
        background-image: url( "../public/img/globals/card-backgrounds/background-liquid.svg" ); */
        background-size: cover;
    }
    picture:hover {
        overflow: visible;
        transition: 0s ease;
    }
    
    picture img {
        filter: drop-shadow(#0008 0 5px 3px);
        cursor: pointer;
        transition: .15s ease-in;
    }
    picture img:hover {
        transform: translateY(-55px) scale(1.1);
        transition: .3s cubic-bezier(0.99, -0.74, 0, 2.2);
        transform: translateY(-55px) scale(1.3);
        filter: drop-shadow(#000c 0 5px 3px);
    }
    
    card-base {
        display: block;
        width: 100%;
        position: relative;
        transition: .5s ease-in-out;
        transform-style: preserve-3d;
    }
    
    card-front {
        display: block;
        width: 100%;
        padding: 8px;
        position: absolute;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        background: var(--cp04);
        box-shadow: #0002 0 5px 13px;
        border-radius: 18px;
        border: var(--cp07) solid 2px;
        z-index: 2;
    }

    card-back {
        display: block;
        width: 100%;
        min-height: 181px;
        padding: 8px;
        position: absolute;
        transform: rotateY(180deg);
        transform-style: preserve-3d;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        background: var(--cp04);
        box-shadow: #0002 0 5px 13px;
        border-radius: 18px;
        border: var(--cp07) solid 2px;
        z-index: 0;
    }

    .turnCard {
        transform: rotateY(180deg);
    }
    
    card-front bottom-bg {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 8px;
        border: var(--cp00) dashed 4px;
        border-radius: 18px;
        color: var(--cp08);
    }
    card-front bottom-bg:hover {
        border: var(--cp08) dashed 4px;
    }
    
    card-front bottom-bg #outline {
        position: absolute;
        color: var(--cp07);
        -webkit-text-stroke: 10px var(--cp00);
        filter: drop-shadow(0px 4px #0005);
        font-family: Baloo Da;
        white-space: nowrap;
    }
    card-front bottom-bg #text-bg {
        position: relative;
        color: var(--cp08);
        font-family: Baloo Da;
        white-space: nowrap;
    }
    
    card-front valor {
        display: flex;
        justify-content: end;
        font-size: 1.6rem;
        font-weight: bolder;
        color: var(--cp08);
    } 
    
    card-front valor :nth-child(1):before {
        content: "R$";
    }
    
    card-front valor :nth-child(1):after {
        content: ",";
    }
    
    card-front valor :nth-child(2) {
        font-size: 1rem;
        margin-top: 0.5ch;
    }
    
    card-front bottom-bg button {
        border-radius: 7px;
        border: none;
        box-shadow: var(--cp08) 0 3px 2px;
        outline: none;
        background: var(--cp07);
        padding: .5ch 0;
        color: var(--cp00);
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        outline-offset: 4px;
        transition: filter 250ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }
    card-front bottom-bg button:hover {
        background: var(--cp09);
        text-shadow: #00f7 0 0 10px;
        box-shadow: var(--cp08) 0 6px 2px;
        transform: translateY(-3px);
        transition:
            transform
            250ms
            cubic-bezier(.3, .7, .4, 1.5);
    }

    /* ------------------------------ */
    
    card-back bottom-bg {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 8px;
        border: var(--cp00) dashed 4px;
        border-radius: 18px;
        color: var(--cp08);
    }
    card-back bottom-bg:hover {
        border: var(--cp08) dashed 4px;
    }
    
    card-back bottom-bg #outline {
        color: var(--cp07);
        -webkit-text-stroke: 10px var(--cp00);
        filter: drop-shadow(0px 4px #0005);
        font-family: Baloo Da;
    }
    card-back bottom-bg #text-bg {
        position: absolute;
        color: var(--cp08);
        font-family: Baloo Da;
    }
    
    card-back valor {
        display: flex;
        justify-content: end;
        font-size: 1.6rem;
        font-weight: bolder;
        color: var(--cp08);
    } 
    
    card-back valor :nth-child(1):before {
        content: "R$";
    }
    
    card-back valor :nth-child(1):after {
        content: ",";
    }
    
    card-back valor :nth-child(2) {
        font-size: 1rem;
        margin-top: 0.5ch;
    }
    
    card-back bottom-bg button {
        border-radius: 7px;
        border: none;
        box-shadow: var(--cp08) 0 3px 2px;
        outline: none;
        background: var(--cp07);
        padding: .5ch 0;
        color: var(--cp00);
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        outline-offset: 4px;
        transition: filter 250ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }
    card-back bottom-bg button:hover {
        background: var(--cp09);
        text-shadow: #00f7 0 0 10px;
        box-shadow: var(--cp08) 0 6px 2px;
        transform: translateY(-3px);
        transition:
            transform
            250ms
            cubic-bezier(.3, .7, .4, 1.5);
    }

    card-base > card-front > bottom-bg > p {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    card-back > bottom-bg > p {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>
<picture>
    <img src="" alt="">
</picture>
<card-base>
    <card-front>
        <bottom-bg>
            <h3 id="outline"></h3>
            <h3 id="text-bg"></h3>
            <p id="short-description"></p>
            <valor>
                <p></p>
                <p></p>
            </valor>
            <button title="ver mais detalhes deste produto">
            </button>
        </bottom-bg>
    </card-front>
    <card-back>
        <bottom-bg>
            <p id="description">
                Lorem ipsum sit amet consectetur elit. 
                Accusamus recusandae, vel. Quae sit non eius!
            </p>
            <button title="ver mais detalhes deste produto">
                adicionar ao carrinho
            </button>
        </bottom-bg>
    </card-back>
</card-base>
`;
/* --------------------------------------------------------------------------- */


/* [ title-pk template ]
===============================================================================*/
class Title extends HTMLElement {
	constructor() {
		super();
		let title = document.createElement( "template" );
		title.innerHTML = titleTemplate;
		this.attachShadow( { mode: "open" } );
		this.shadowRoot.append( title.content.cloneNode( true ) );
		this.shadowRoot.querySelector( "[title-pk]" ).innerHTML = this.getAttribute( "title-pk" );
		this.shadowRoot.querySelector( "[title-pk]" ).style.fontSize = this.getAttribute( "font-size" );
		// this.shadowRoot.querySelector( "[title-pk]" ).style.margin = this.getAttribute( "margin" );
		this.shadowRoot.querySelector( "[title-pk]" ).style.color = this.getAttribute( "color" );
	} 
	connectedCallback() {
		console.log( this.getAttribute( "title-pk" ) );
		this.render();
	}
	render() {
	}
}
window.customElements.define( "title-pk", Title );

/* [ card-pk template ]
===============================================================================*/
class Card extends HTMLElement {
	constructor() {
		super();
		let card = document.createElement( "template" );
		card.innerHTML = cardTemplate;
		this.attachShadow( { mode: "open" } );
		this.shadowRoot.append( card.content.cloneNode( true ) );
		this.shadowRoot.querySelector( "img" ).src = this.getAttribute( "src" );
		this.shadowRoot.querySelector( "img" ).alt = this.getAttribute( "alt" );
		this.shadowRoot.querySelector( "h3#outline" ).innerHTML = this.getAttribute( "name" );
		this.shadowRoot.querySelector( "h3#text-bg" ).innerHTML = this.getAttribute( "name" );
		this.shadowRoot.querySelector( "p#short-description" ).innerHTML = this.getAttribute( "desc" );
		this.shadowRoot.querySelector( "p#description" ).innerHTML = this.getAttribute( "desc" );
		this.shadowRoot.querySelector( "valor :nth-child(1)" ).innerText = this.getAttribute( "real" );
		this.shadowRoot.querySelector( "valor :nth-child(2)" ).innerText = this.getAttribute( "cents" );
		this.shadowRoot.querySelector( "button" ).innerText = this.getAttribute( "btn" );
		this.style.hover = "filter: drop-shadow(2px 4px 6px #0005); z-index: 3;";
	} 
	connectedCallback() {
		this.render();
		let btn = this.shadowRoot.querySelector( "button" ),
			cardBase = this.shadowRoot.querySelector( "card-base" ),
			cardBack = this.shadowRoot.querySelector( "card-back" );
		btn.addEventListener( "click", ev => {
			cardBase.style.transform = "rotateY( 180deg )";
		} );
		cardBack.addEventListener( "click", ev => {
			cardBase.style.transform = "rotateY( 0deg )";
		} );
	}
	render() {
	}
}
window.customElements.define( "card-pk", Card );

/* [ card-pk template ]
===============================================================================*/
class Button extends HTMLElement {
	constructor() {
		super();
		let button = document.createElement( "template" );
		button.innerHTML = ` <style>
            @import url('https://fonts.googleapis.com/css2?family=Baloo+Da&family=Baloo+Da+2&family=Baloo+Da+2:wght@400;500;600;700;800&family=Baloo+Paaji&family=Londrina+Sketch&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Rajdhani:wght@400;500;600;700&display=swap');
            .button-pk {
                position: relative;
                border: none;
                background: transparent;
                width: 100%;
                padding: 0;
                cursor: pointer;
                outline-offset: 4px;
                transition: filter 250ms;
                user-select: none;
                -webkit-user-select: none;
                touch-action: manipulation;
            }

            btn-shadow {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 12px;
                background: #00000040;
                background: #0005;
                will-change: transform;
                transform: translateY(2px);
                transition:
                    transform
                    600ms
                    cubic-bezier(.3, .7, .4, 1);
            }

            btn-edge {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 12px;
                background: linear-gradient(
                    to left,
                    #52001b 0%,
                    #a30036 8%,
                    #a30036 92%,
                    #52001b 100%
                );
            }

            btn-front {
                display: block;
                position: relative;
                padding: 6px 27px;
                border-radius: 12px;
                font-family: 'Baloo Da 2';
                font-size: 1.1rem;
                font-weight: 700;
                color: white;
                background: var( --cp09 );
                will-change: transform;
                transform: translateY(-4px);
                transition:
                    transform
                    600ms
                    cubic-bezier(.3, .7, .4, 1);
            }

            @media (min-width: 768px) {
                btn-front {
                    padding: 6px 42px;
                }
            }

            .button-pk:hover {
                filter: brightness(110%);
                -webkit-filter: brightness(110%);
            }

            .button-pk:hover btn-front {
                transform: translateY(-6px);
                transition:
                    transform
                    250ms
                    cubic-bezier(.3, .7, .4, 1.5);
            }

            .button-pk:active btn-front {
                transform: translateY(-2px);
                transition: transform 34ms;
            }

            .button-pk:hover btn-shadow {
                transform: translateY(4px);
                transition:
                    transform
                    250ms
                    cubic-bezier(.3, .7, .4, 1.5);
            }

            .button-pk:active btn-shadow {
                transform: translateY(1px);
                transition: transform 34ms;
            }

            .button-pk:focus:not(:focus-visible) {
                outline: none;
            }
            </style>
            <button class="button-pk" role="button">
                <btn-shadow></btn-shadow>
                <btn-edge></btn-edge>
                <btn-front class=" text">
                </btn-front>
            </button> `;
		this.attachShadow( { mode: "open" } );
		this.shadowRoot.append( button.content.cloneNode( true ) );
		this.style.cssText = " display: center; align-items: center; ";
		this.style.width = this.getAttribute( "width" );
		this.shadowRoot.querySelector( "btn-front" ).innerText = this.getAttribute( "name" );
		this.shadowRoot.querySelector( "btn-front" ).style.color = this.getAttribute( "text-color" );
		this.shadowRoot.querySelector( "btn-front" ).style.backgroundColor = this.getAttribute( "btn-color" );
		this.shadowRoot.querySelector( "btn-edge" ).style.background = this.getAttribute( "btn-shadow" );
	} 
	connectedCallback() {
		this.render();
	}
	render() {
	}
}
window.customElements.define( "button-pk", Button );



window.addEventListener( "load", ev => {
/* [ properties ]
    =================================== */

    
} );

