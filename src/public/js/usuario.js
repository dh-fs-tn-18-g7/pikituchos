// Botões

const btnInicio = document.querySelector("#inicio");

const btnDadosPessoais = document.querySelector("#dadosPessoais");

const btnMeusPedidos = document.querySelector("#meusPedidos");

const btnMeusFavoritos = document.querySelector("#meusFavoritos");

const btnInformacoes = document.querySelector("#informacoes");

const btnTroca = document.querySelector("#trocarDevolver");

const btnCartoes = document.querySelector("#cartoes");

// Displays

const homeInicio = document.querySelector(".boxCard");

const dadosPessoais = document.querySelector(".dadosPessoais");

const meusPedidos = document.querySelector(".meusPedidos");

const meusFavoritos = document.querySelector(".meusFavoritos");

const informacoes = document.querySelector(".informacoesDaConta");

const trocarDevolver = document.querySelector(".trocarDevolver");

const cartoes = document.querySelector(".cartoes");

//Eventos

btnInicio.addEventListener("click", inicio);
btnDadosPessoais.addEventListener("click", dadosPessoal);
btnMeusPedidos.addEventListener("click", meuPedido);
btnMeusFavoritos.addEventListener("click", meuFavorito);
btnInformacoes.addEventListener("click", informacao);
btnTroca.addEventListener("click", troca);
btnCartoes.addEventListener("click", cartao);

/* Funções */

function inicio() {
    let displayUsuario = 'flex';
    let displayNone = 'none';

    homeInicio.style.display = displayUsuario;

    dadosPessoais.style.display = displayNone;
    meusFavoritos.style.display = displayNone;
    meusPedidos.style.display = displayNone;
    informacoes.style.display = displayNone;
    trocarDevolver.style.display = displayNone;
    cartoes.style.display = displayNone;

    console.log("disparou");
}

function dadosPessoal() {
    const displayUsuario = "flex";
    const displayNone = "none";

    dadosPessoais.style.display = displayUsuario;

    homeInicio.style.display = displayNone;
    meusFavoritos.style.display = displayNone;
    meusPedidos.style.display = displayNone;
    informacoes.style.display = displayNone;
    trocarDevolver.style.display = displayNone;
    cartoes.style.display = displayNone;

    console.log("disparou");
}
function meuFavorito() {
    let displayUsuario = "flex";
    let displayNone = "none";

    meusFavoritos.style.display = displayUsuario;

    homeInicio.style.display = displayNone;
    dadosPessoais.style.display = displayNone;
    meusPedidos.style.display = displayNone;
    informacoes.style.display = displayNone;
    trocarDevolver.style.display = displayNone;
    cartoes.style.display = displayNone;

    console.log("disparou");
}
function meuPedido() {
    let displayUsuario = "flex";
    let displayNone = "none";

    meusPedidos.style.display = displayUsuario;

    homeInicio.style.display = displayNone;
    dadosPessoais.style.display = displayNone;
    meusFavoritos.style.display = displayNone;
    informacoes.style.display = displayNone;
    trocarDevolver.style.display = displayNone;
    cartoes.style.display = displayNone;

    console.log("disparou");
}
function informacao() {
    let displayUsuario = "flex";
    let displayNone = "none";


    informacoes.style.display = displayUsuario;

    homeInicio.style.display = displayNone;
    dadosPessoais.style.display = displayNone;
    meusFavoritos.style.display = displayNone;
    meusPedidos.style.display = displayNone;
    trocarDevolver.style.display = displayNone;
    cartoes.style.display = displayNone;

    console.log("disparou");
}
function troca() {
    let displayUsuario = "flex";
    let displayNone = "none";

    trocarDevolver.style.display = displayUsuario;

    homeInicio.style.display = displayNone;
    dadosPessoais.style.display = displayNone;
    meusFavoritos.style.display = displayNone;
    meusPedidos.style.display = displayNone;
    informacoes.style.display = displayNone;
    cartoes.style.display = displayNone;

    console.log("disparou");
}
function cartao() {
    let displayUsuario = "flex";
    let displayNone = "none";

    cartoes.style.display = displayUsuario;

    homeInicio.style.display = displayNone;
    dadosPessoais.style.display = displayNone;
    meusFavoritos.style.display = displayNone;
    meusPedidos.style.display = displayNone;
    informacoes.style.display = displayNone;
    trocarDevolver.style.display = displayNone;

    console.log("disparou");
}