

// "use strict";
/* [ properties ]
    =========================================================================== */
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
    
let pageHeader = document.createElement( "page-header" ),
	pageFooter = document.createElement( "page-footer" ),
	appbarTemplate = `
<appbar>
    <appbar-home>
        <article class="appbar-left">
            <img class="babyPikituchos" src="../public/img/pikitucho.svg" alt="logo image">
            <img id="logos-desc" src="../public/img/home/pikituchos-logo-txt.png" alt="">
        </article>
        <nav class="appbar-nav">
            <li url="#" data-title="Home">Home</li>
            <li url="#highlights" data-title="Produtos">Produtos</li>
            <li url="#" data-title="Contatos">Contato</li>
            <li url="#" data-title="ver carrinho"><img src="../public/img/home/shopping-cart.svg" alt=""></li>
        </nav>
        <article class="appbar-right">
            <label for="searchbar" class="searchbar">
                <input id="searchbar" type="text" placeholder="">
                <!-- <button id="searchbar-btn"><txt>buscar</txt></button> -->
                <input id="searchbar-btn" type="button" value="🔎 buscar">
            </label>

            <button class="button-pk" role="button" type="submit">
                <btn-shadow class=""></btn-shadow>
                <btn-edge class=""></btn-edge>
                <btn-front class=" text">
                    Cadastre-se
                </btn-front>
            </button>

        </article>
        <h2 id="btn-mobile-nav-menu">
            <span>&#9776;</span>
        </h2>
    </appbar-home>
</appbar>
<nav id="header-nav-mobile">
    <label for="searchbar" class="searchbar">
        <input id="searchbar" type="text" placeholder="">
        <input id="searchbar-btn" type="button" value="🔎 buscar">
    </label>
    <menu>
        <li url="#" data-title="Home">
            <div class="title-pk">
                <h3 class="outline">Home</h3>
                <h3 class="h3">Home</h3>
            </div>
        </li>
        <li url="#highlights" data-title="Produtos">
            <div class="title-pk">
                <h3 class="outline">Produtos</h3>
                <h3 class="h3">Produtos</h3>
            </div>
        </li>
        <li url="#" data-title="Contatos">
            <div class="title-pk">
                <h3 class="outline">Contato</h3>
                <h3 class="h3">Contato</h3>
            </div>
        </li>
        <li url="#" data-title="ver carrinho">
            <div class="title-pk" id="carrinho">
                <h3 class="outline">Carrinho</h3>
                <h3 class="h3">Carrinho</h3>
            </div>
        </li>
    </menu> 
</nav>
`,
	footerTemplate = `
<footer-overlay>
<article class="newsletter"> <!---
    <h2 id="outline">Assine a nossa newsletter</h2>
    <h2 class="text-bg">Assine a nossa newsletter</h2> --->
    <h2 id="outline">GANHE 20% DE DESCONTO</h2>
    <h2 class="text-bg">GANHE 20% DE DESCONTO</h2> <!---
    <txt>receba ofertas exclusivas para o seu pikitucho <br> diretamente no seu e-mail.</txt> --->
    <txt>Assine nossa newsletter ganhe 20% de desconto 
    <br> em sua primeira compra e fique por dentro das nossas novidades.</txt>
    <p>*Aplicável apenas para pedidos acima de R$ 149,90.</p>
    <form>
        <p error>error message</p>
        <p success>success message</p>
        <label for="subscribe">
            <input type="text" placeholder="digite seu melhor e-mail...">
            <button class="button-pk" role="button" type="submit">
                <btn-shadow class=""></btn-shadow>
                <btn-edge class=""></btn-edge>
                <btn-front class=" text">
                    Assine agora!
                </btn-front>
            </button>
        </label>
    </form>
</article>

<article class="footer-top">
    <section class="socials">
        <header>
            <img class="babyPikituchos" src="../public/img/pikitucho.svg" alt="logo image">
            <!-- <img src="../public/img/home/pikituchos-logo.svg" id="logo" alt=""> -->
            <img src="../public/img/home/pikituchos-logo-txt.png" id="logo-txt" alt="">
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <footer>
            <img src="../public/img/home/socials/facebook-svgrepo-com.svg" alt="">
            <img src="../public/img/home/socials/instagram-svgrepo-com.svg" alt="">
            <img src="../public/img/home/socials/twitter-svgrepo-com.svg" alt="">
            <img src="../public/img/home/socials/youtube-svgrepo-com.svg" alt="">
        </footer>
    </section>
    <section class="support">
        <header>
            <div class="title-pk">
                <h3 class="outline">Mapa do site</h3>
                <h3 class="h3">Mapa do site</h3>
            </div>
        </header>
        <nav>
            <l href="#">Meninas</l>
            <l href="#">Meninos</l>
            <l href="#">Brinquedos</l>
            <l href="#">Promoção</l>
            <l href="#">Eletrônicos</l>
        </nav>
    </section>
    <section class="about">
        <header>
            <div class="title-pk">
                <h3 class="outline">Sobre nós</h3>
                <h3 class="h3">Sobre nós</h3>
            </div>
        </header>
        <nav>
            <l href="#">Quem Somos</l>
            <l href="#">Atendimento</l>
            <l href="#">Compra Segura</l>
            <l href="#">Política de Entrega</l>
            <l href="#">Política de Trocas e Devoluções</l>
            <l href="#">Política de Privacidade</l>
        </nav>
    </section>
    <section class="contact-info">
        <header>
            <div class="title-pk">
                <h3 class="outline">Atendimento</h3>
                <h3 class="h3">Atendimento</h3>
            </div>
        </header>
        <nav>
            <li>Seg à Sex: 8:00h às 12h | 13h às 17:30h</li>
            <li>( 99 ) 9 9999-9999</li>
            <li>sac@pikituchos.com.br</li>
        </nav>
    </section>
</article>

<article class="footer-bottom">
    <section id="bottom-clouds"></section>
    <txt>copyright © 2022 - Present | PIKITUCHOS LTDA.</txt>
    <txt>Made with 
        <!-- ❤️ -->
        <img id="footer-heart" src="../public/img/home/love_icon.svg" alt="">
        by <a href="#">fs-tn-18</a> <strong>grupo 7</strong>
        <img id="footer-DH" href="https://www.digitalhouse.com/br" src="../public/img/home/DH-Logo.svg" alt="" data-title="www.digitalhouse.com/br">
    </txt>
</article>
</footer-overlay>
`,
	titleTemplate = `
<style>
    h2#outline {
        position: relative;
        top: 0; left: 0;
        color: var(--cp00);
        -webkit-text-stroke: 10px var(--cp00);
        filter: drop-shadow(0px 4px #0005);
        font-family: Baloo Da;
        font-size: 2.5rem;
    }
    h2#text {
        position: absolute;
        top: 0; left: 0;
        color: var(--cp05);
        font-family: Baloo Da;
        font-size: 2.5rem;
    }
</style>
<h2 id="outline"></h2>
<h2 id="text"></h2>
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


/* [ page-header template ]
============================================================================== */
class Appbar extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = appbarTemplate;
		// this.attachShadow( { mode: "open" } );
		// this.shadowRoot.append( pageHeaderTemplate.content.cloneNode( true ) );
		// this.id = ( "appbar" );
	} 
	connectedCallback() {
		this.render();
		let pageHeader = $( "page-header" ),
			btnMenu = $( "h2#btn-mobile-nav-menu span" ),
			headerNavMobile = $( "nav#header-nav-mobile" );

		btnMenu.addEventListener( "click", ev => {
			pageHeader.classList.toggle( "open-mobile-nav-menu" );
			pageHeader.classList.contains( "open-mobile-nav-menu" ) ?
				headerNavMobile.style.display = "flex" :
				headerNavMobile.style.display = "none";
		} );

		const typeTarget = $( "input#searchbar" ),
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
	}
	render() {
	}
}
window.customElements.define( "page-header", Appbar );

/* [ page-footer template ]
===============================================================================*/
class Footer extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = footerTemplate;
		// this.attachShadow( { mode: "open" } );
		// this.shadowRoot.append( pageFooterTemplate.content.cloneNode( true ) );
		// this.id = ( "footer" );
	} 
	connectedCallback() {
		this.render();
		let bottomClouds = $( "#bottom-clouds" ),
			DH = $( "img#footer-DH" ),
			observer = new IntersectionObserver( function( entries ) {
				entries[0].isIntersecting === true ? 
					bottomClouds.style.backgroundPositionX = "right" : 
					console.log( "Ha-ha-ha, você não disse a palavra mágica!" );
			}, { threshold: [ 0 ] } );
                
		DH.addEventListener( "click", ev => window.open( DH.getAttribute( "href" ), "_blank" ) );
		DH.addEventListener( "mouseenter", ev => DH.style.cursor = "pointer" );
    
		observer.observe( bottomClouds );
	}
	render() {
	}
}
window.customElements.define( "page-footer", Footer );

/* [ title-pk template ]
===============================================================================*/
class Title extends HTMLElement {
	constructor() {
		super();
		let title = document.createElement( "template" );
		title.innerHTML = titleTemplate;
		this.attachShadow( { mode: "open" } );
		this.shadowRoot.append( title.content.cloneNode( true ) );
		this.shadowRoot.querySelector( "h2#outline" ).innerHTML = this.getAttribute( "name" );
		this.shadowRoot.querySelector( "h2#text" ).innerHTML = this.getAttribute( "name" );
		this.shadowRoot.querySelector( "h2#outline" ).style.fontSize = this.getAttribute( "font-size" );
		this.shadowRoot.querySelector( "h2#text" ).style.fontSize = this.getAttribute( "font-size" );
		this.shadowRoot.querySelector( "h2#outline" ).style.margin = this.getAttribute( "margin" );
		this.shadowRoot.querySelector( "h2#text" ).style.margin = this.getAttribute( "margin" );
		this.shadowRoot.querySelector( "h2#text" ).style.color = this.getAttribute( "color" );
	} 
	connectedCallback() {
		this.outline = this.getAttribute( "name" );
		this.text = this.getAttribute( "name" );
		this.render();
	}
	render() {
		this.outline;
		this.text;
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

