

"use strict";
/* [ properties ]
    ================================= */
let /* appbar = document.querySelector( "page-header" ), */
	pageHeaderTemplate = document.createElement( "template" ),
	/* footer = document.querySelector( "page-footer" ), */
	pageFooterTemplate = document.createElement( "template" ),
	scriptTag = document.querySelector( "script" ),
	stack = document.createElement( "script" );
/* ------------------------------ */
    
/* [ events ]
    ================================= */
stack.src = "src/public/scripts/globals/stack.js";
document.body.append( stack );

for( let v of [ stack ] ) {
	v.async = true;
}

// document.body.prepend( appbar );
// document.body.insertBefore( footer, scriptTag );

var appbarTemplate = `
<article class="appbar-left">
    <svg id="baby-logo" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" >
        <defs>
            <style type="text/css">
                .pikituchos-class0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .pikituchos-class1{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
            </style>
        </defs>
            <path style="stroke: #000000; vector-effect: non-scaling-stroke; fill: #fed9cf;" d="M 5.353 20.096 C 4.505 19.884 3.569 19.281 3.144 18.43 C 2.954 18.051 3.076 17.268 3.076 16.799 C 3.076 16.578 2.932 16.066 3.042 15.847 C 3.131 15.668 3.393 15.519 3.518 15.269 C 3.582 15.14 3.601 14.921 3.79 14.827 C 4.237 14.603 4.89 14.441 5.251 14.079 C 5.908 13.423 5.864 12.31 6.577 11.598 C 6.871 11.304 6.968 10.731 7.257 10.442 C 7.397 10.301 7.355 9.934 7.563 9.83 C 7.813 9.705 8.394 9.237 8.583 9.048 C 8.766 8.865 8.865 8.533 9.127 8.402 C 9.408 8.261 9.769 7.998 10.011 7.756 C 10.166 7.601 10.552 7.623 10.69 7.484 C 11.176 6.999 12.085 6.781 12.832 6.532 C 13.353 6.359 13.801 6.473 14.294 6.226 C 14.683 6.032 15.37 6.09 15.858 6.09 C 17.134 6.09 18.2 6.157 19.325 6.532 C 19.655 6.642 19.848 6.911 20.141 7.008 C 20.478 7.121 20.85 7.108 21.195 7.28 C 21.649 7.507 21.907 7.874 22.419 8.13 C 22.796 8.319 23.01 8.833 23.302 8.98 C 23.508 9.083 23.87 9.276 24.05 9.456 C 24.631 10.037 25.067 10.915 25.682 11.53 C 25.773 11.62 25.661 11.861 25.716 11.971 C 25.87 12.28 26.067 12.47 26.192 12.719 C 26.36 13.056 26.254 13.632 26.532 13.909 C 26.92 14.298 27.443 14.596 27.892 14.895 C 28.356 15.205 28.537 15.642 28.878 15.983 C 28.956 16.061 28.825 16.354 28.878 16.459 C 28.987 16.678 28.946 17.119 28.946 17.445 C 28.946 18.255 28.337 19.329 27.62 19.688 C 27.271 19.863 26.805 19.789 26.532 20.062 C 26.29 20.304 26.193 20.706 26.022 21.048 C 25.852 21.387 25.911 22.043 25.648 22.306 C 25.578 22.376 25.194 22.648 25.138 22.816 C 25.062 23.044 25.066 23.398 24.9 23.564 C 24.395 24.069 23.867 24.699 23.37 25.195 C 22.529 26.037 21.446 26.27 20.617 27.099 C 20.433 27.283 20.019 27.219 19.767 27.303 C 19.245 27.477 18.231 27.547 17.863 27.915 C 17.769 28.009 16.915 27.983 16.776 27.983 C 15.711 27.983 14.425 28.133 13.58 27.711 C 13.249 27.545 12.803 27.667 12.424 27.541 C 11.96 27.386 11.459 27.313 11.03 27.099 C 9.89 26.529 9.025 25.536 8.141 24.651 C 7.811 24.322 7.307 24.003 7.087 23.564 C 6.96 23.31 6.666 22.82 6.476 22.63 C 6.339 22.492 6.418 22.196 6.288 22.066 C 6.275 22.053 6.239 21.915 6.137 21.813 C 5.85 21.526 5.659 21.128 5.659 20.606" />
            <path class="pikituchos-class0" d="M11.9,6.8c-3.2,1.3-5.6,4-6.5,7.3C4,14.3,3,15.5,3,17c0,1.5,1,2.7,2.4,2.9C6.7,24.6,10.9,28,16,28 s9.3-3.4,10.6-8.1C28,19.7,29,18.5,29,17c0-1.5-1-2.7-2.4-2.9c-0.9-3.3-3.3-6-6.5-7.3" style="stroke-width: 1px; fill-rule: nonzero; fill-opacity: 0; stroke: #464646;" />
            <path style="fill: #d8d8d8; stroke-linecap: round; stroke-miterlimit: 1; stroke-dashoffset: -50px; paint-order: fill; fill-rule: nonzero; fill-opacity: 0; stroke: #464646;" d="M 11.943 6.766 C 11.882 6.793 15.17 5.09 20.216 6.858" transform="matrix(0.999987, -0.005147, 0.005147, 0.999987, -0.03276, 0.082916)" />
            <path class="pikituchos-class0" d="M 18.615 5.13 C 17.944 4.57 17.051 4.243 16.351 4.243 C 15.651 4.243 14.74 4.508 14.148 5.005" style="stroke-width: 1px; stroke-linecap: square; stroke: #464646;" transform="matrix(0.906308, -0.422618, 0.422618, 0.906308, -0.445783, 7.362205)" />
            <path class="pikituchos-class0" d="M 18.209 20.926 C 17.538 21.486 16.645 21.813 15.945 21.813 C 15.245 21.813 14.334 21.548 13.742 21.051" style="stroke-width: 1px; stroke-linecap: square; stroke: #464646;" />
        <g id="babys-eyes">
            <path class="pikituchos-class0" d="M 13.757 16.921 C 13.086 16.361 12.193 16.034 11.493 16.034 C 10.793 16.034 9.882 16.299 9.29 16.796" style="stroke-width: 1px; stroke-linecap: square; stroke: #464646;" />
            <path class="pikituchos-class0" d="M 22.931 16.921 C 22.26 16.361 21.367 16.034 20.667 16.034 C 19.967 16.034 19.056 16.299 18.464 16.796" style="stroke-width: 1px; stroke-linecap: square; stroke: #464646;" />
        </g>
    </svg> 
    <img id="logos-desc" src="src/public/images/home/pikituchos-logo-txt.png" alt="">
</article>
<nav class="appbar-nav">
    <li url="#" data-title="Home">Home</li>
    <li url="#" data-title="Produtos">Produtos</li>
    <li url="#" data-title="Contatos">Contato</li>
    <li url="#" data-title="ver carrinho"><img src="src/public/images/home/shopping-cart.svg" alt=""></li>
</nav>
<article class="appbar-right">
<label for="searchbar" class="searchbar">
    <input id="searchbar" type="text" placeholder=" procure aqui. . .">
    <!-- <button id="searchbar-btn"><txt>buscar</txt></button> -->
    <input id="searchbar-btn" type="button" value="🔎 buscar">
</label>
    <a id="btn-signin">Entre</a>
    <span>ou</span>
    <a id="btn-signup">Cadastre-se</a>
</article>
<script>
    window.addEventListener( "load", ev => {
        /* [ properties ]
        =================================== */
        let baby = document.querySelector( "svg#baby-logo" ),
            babysEyes = document.querySelector( "#babys-eyes" );
        /* -------------------------------- */
    
        baby.addEventListener( "mouseenter", ev => {
            babysEyes.innerHTML = pikituchoHoverin;
        } );
        baby.addEventListener( "mouseleave", ev => {
            babysEyes.innerHTML = pikitucho;
        } );
    } );
</script>
`;

var footerTemplate = `
<article class="newsletter">
    <h2 id="outline">Assine a nossa newsletter</h2>
    <h2 class="text-bg">Assine a nossa newsletter</h2>
    <txt>receba ofertas exclusivas para o seu pikitucho <br> diretamente no seu e-mail.</txt>
    <label for="subscribe">
        <input type="text" placeholder="digite seu melhor e-mail...">
        <input type="button" value="Assine agora!">
    </label>
</article>

<article class="footer-top">
    <section class="socials">
        <header>
            <img src="src/public/images/home/pikituchos-logo.svg" id="logo" alt=""> 
            <img src="src/public/images/home/pikituchos-logo-txt.png" id="logo-txt" alt="">
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <footer>
            <img src="src/public/images/home/socials/facebook-svgrepo-com.svg" alt="">
            <img src="src/public/images/home/socials/instagram-svgrepo-com.svg" alt="">
            <img src="src/public/images/home/socials/twitter-svgrepo-com.svg" alt="">
            <img src="src/public/images/home/socials/youtube-svgrepo-com.svg" alt="">
        </footer>
    </section>
    <section class="support">
        <header>
            <h3 class="outline">Support</h3>
            <h3 class="h3">Support</h3>
        </header>
        <nav>
            <l href="#">Link text 1</l>
            <l href="#">Link text 2</l>
            <l href="#">Link text 3</l>
            <l href="#">Link text 4</l>
        </nav>
    </section>
    <section class="about">
        <header>
            <h3 class="outline">Sobre nós</h3>
            <h3 class="h3">Sobre nós</h3>
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
            <h3 class="outline">Contact info</h3>
            <h3 class="h3">Contact info</h3>
        </header>
        <nav>
            <li>Av. hifsoioios - hiosoif ojodf, 1230 LF.</li>
            <li>( 99 ) 9 9999-9999</li>
        </nav>
    </section>
</article>

<article class="footer-bottom">
    <section id="bottom-clouds"></section>
    <txt>copyright © 2022 - Present | PIKITUCHOS LTDA.</txt>
    <txt>Made with 
        <!-- ❤️ -->
        <img id="footer-heart" src="src/public/images/home/love_icon.svg" alt="">
        by <a href="#">fs-tn-18</a> <strong>grupo 7</strong>
        <img id="footer-DH" href="https://www.digitalhouse.com/br" src="src/public/images/home/DH-Logo.svg" alt="" data-title="www.digitalhouse.com/br">
    </txt>
</article>
<script>
    window.addEventListener( "load", ev => {
        /* [ properties ]
        =================================== */
        let bottomClouds = document.querySelector( "#bottom-clouds" ),
            DH = document.querySelector( "img#footer-DH" ),
            observer = new IntersectionObserver( function( entries ) {
                entries[0].isIntersecting === true ? 
                    bottomClouds.style.backgroundPositionX = "right" : 
                    console.log( "Ha-ha-ha, você não disse a palavra mágica!" );
            }, { threshold: [ 0 ] } );
        /* -------------------------------- */


        DH.addEventListener( "click", ev => window.open( DH.getAttribute( "href" ), "_blank" ) );
        DH.addEventListener( "mouseenter", ev => DH.style.cursor = "pointer" );

        
        observer.observe( bottomClouds );

        
        
    } );
</script>
`;

/* [ title text template ]
=============================================================================== */
const titleTemplate = document.createElement( "template" );
titleTemplate.innerHTML = `<style>
    div#template {
        display: flex;
        align-items: center;
        text-align: center;
    }
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
</>
<div id="template">
    <h2 id="outline"></h2>
    <h2 id="text"></h2>
</div>
`;

class Title extends HTMLElement {
	constructor() {
		super();
		this.attachShadow( { mode: "open" } );
		this.shadowRoot.append( titleTemplate.content.cloneNode( true ) );
		this.shadowRoot.querySelector( "h2#outline" ).innerHTML = this.getAttribute( "name" );
		this.shadowRoot.querySelector( "h2#text" ).innerHTML = this.getAttribute( "name" );
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
window.customElements.define( "title-text", Title );

/* [ card template ]
===============================================================================*/
const cardTemplate = document.createElement( "template" );
cardTemplate.innerHTML = `<style>  
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
    }
    
    picture img {
        transform: translateY(-55px) scale(1.1);
        filter: drop-shadow(#0008 0 5px 3px);
        cursor: pointer;
        transition: .15s ease-in;
    }
    picture img:hover {
        transition: .3s cubic-bezier(0.99, -0.74, 0, 2.2);
        transform: translateY(-55px) scale(1.3);
        filter: drop-shadow(#000c 0 5px 3px);
    }
    
    bottom {
        display: block;
        background: var(--cp04);
        box-shadow: #0002 0 5px 13px;
        border-radius: 18px;
        border: var(--cp07) solid 2px;
        padding: 8px;
    }
    
    bottom bottom-bg {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 8px;
        border: var(--cp00) dashed 4px;
        border-radius: 18px;
        color: var(--cp08);
    }
    bottom bottom-bg:hover {
        border: var(--cp08) dashed 4px;
    }
    
    bottom bottom-bg #outline {
        color: var(--cp07);
        -webkit-text-stroke: 10px var(--cp00);
        filter: drop-shadow(0px 4px #0005);
        font-family: Baloo Da;
    }
    bottom bottom-bg #text-bg {
        position: absolute;
        color: var(--cp08);
        font-family: Baloo Da;
    }
    
    bottom valor {
        display: flex;
        justify-content: end;
        font-size: 1.6rem;
        font-weight: bolder;
        color: var(--cp08);
    } 
    
    bottom valor :nth-child(1):before {
        content: "R$";
    }
    
    bottom valor :nth-child(1):after {
        content: ",";
    }
    
    bottom valor :nth-child(2) {
        font-size: 1rem;
        margin-top: 0.5ch;
    }
    
    bottom bottom-bg button {
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
    }
    bottom bottom-bg button:hover {
        background: var(--cp06);
    }
</style>
<picture>
    <img src="" alt="">
</picture>
<bottom>
    <bottom-bg>
        <h3 id="outline"></h3>
        <h3 id="text-bg"></h3>
        <p></p>
        <valor>
            <p></p>
            <p></p>
        </valor>
        <button title="ver mais detalhes deste produto">
        </button>
    </bottom-bg>
</bottom>
`;

class Card extends HTMLElement {
	constructor() {
		super();
		this.attachShadow( { mode: "open" } );
		this.shadowRoot.append( cardTemplate.content.cloneNode( true ) );
		this.shadowRoot.querySelector( "img" ).src = this.getAttribute( "src" );
		this.shadowRoot.querySelector( "img" ).alt = this.getAttribute( "alt" );
		this.shadowRoot.querySelector( "h3#outline" ).innerHTML = this.getAttribute( "name" );
		this.shadowRoot.querySelector( "h3#text-bg" ).innerHTML = this.getAttribute( "name" );
		this.shadowRoot.querySelector( "p" ).innerHTML = this.getAttribute( "desc" );
		this.shadowRoot.querySelector( "valor :nth-child(1)" ).innerText = this.getAttribute( "real" );
		this.shadowRoot.querySelector( "valor :nth-child(2)" ).innerText = this.getAttribute( "cents" );
		this.shadowRoot.querySelector( "button" ).innerText = this.getAttribute( "btn" );
	} 
	connectedCallback() {
		this.render();
	}
	render() {
	}
}
window.customElements.define( "card-pk", Card );

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
	}
	render() {
	}
}
window.customElements.define( "page-header", Appbar );

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
	}
	render() {
	}
}
window.customElements.define( "page-footer", Footer );



window.addEventListener( "load", ev => {
/* [ properties ]
    =================================== */
	let baby = document.querySelector( "svg#baby-logo" ),
		babysEyes = document.querySelector( "#babys-eyes" ),
		bottomClouds = document.querySelector( "#bottom-clouds" ),
		DH = document.querySelector( "img#footer-DH" ),
		observer = new IntersectionObserver( function( entries ) {
			entries[0].isIntersecting === true ? 
				bottomClouds.style.backgroundPositionX = "right" : 
				console.log( "Ha-ha-ha, você não disse a palavra mágica!" );
		}, { threshold: [ 0 ] } );
	/* -------------------------------- */

	baby.addEventListener( "mouseenter", ev => {
		babysEyes.innerHTML = pikituchoHoverin;
	} );
	baby.addEventListener( "mouseleave", ev => {
		babysEyes.innerHTML = pikitucho;
	} );


	DH.addEventListener( "click", ev => window.open( DH.getAttribute( "href" ), "_blank" ) );
	DH.addEventListener( "mouseenter", ev => DH.style.cursor = "pointer" );

    
	observer.observe( bottomClouds );

    
    
} );

