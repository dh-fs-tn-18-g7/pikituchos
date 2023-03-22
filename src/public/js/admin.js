/* 

const btnInicio = document.querySelector("#inicio");
const btnDadosPessoais = document.querySelector("#dadosPessoais");
const btnMeusPedidos = document.querySelector("#meusPedidos");
const btnMeusFavoritos = document.querySelector("#meusFavoritos");
const btnInformacoes = document.querySelector("#informacoes");
const btnTroca = document.querySelector("#trocarDevolver");
const btnCartoes = document.querySelector("#cartoes");

const homeInicio = document.querySelector(".boxCard");
const dadosPessoais = document.querySelector(".dadosPessoais");
const meusPedidos = document.querySelector(".meusPedidos");
const meusFavoritos = document.querySelector(".meusFavoritos");
const informacoes = document.querySelector(".informacoesDaConta");
const trocarDevolver = document.querySelector(".trocarDevolver");
const cartoes = document.querySelector(".cartoes");

function exibirElemento(elemento) {
    elemento.style.display = "flex";
  }
  
  function ocultarElemento(elemento) {
    elemento.style.display = "none";
  }
  
  function exibirInicio() {
    exibirElemento(homeInicio);
    ocultarElemento(dadosPessoais);
    ocultarElemento(meusFavoritos);
    ocultarElemento(meusPedidos);
    ocultarElemento(informacoes);
    ocultarElemento(trocarDevolver);
    ocultarElemento(cartoes);
  }
  
  function exibirDadosPessoais() {
    ocultarElemento(homeInicio);
    exibirElemento(dadosPessoais);
    ocultarElemento(meusFavoritos);
    ocultarElemento(meusPedidos);
    ocultarElemento(informacoes);
    ocultarElemento(trocarDevolver);
    ocultarElemento(cartoes);
  }
  
  function exibirMeusPedidos() {
    ocultarElemento(homeInicio);
    ocultarElemento(dadosPessoais);
    ocultarElemento(meusFavoritos);
    exibirElemento(meusPedidos);
    ocultarElemento(informacoes);
    ocultarElemento(trocarDevolver);
    ocultarElemento(cartoes);
  }
  
  function exibirMeusFavoritos() {
    ocultarElemento(homeInicio);
    ocultarElemento(dadosPessoais);
    exibirElemento(meusFavoritos);
    ocultarElemento(meusPedidos);
    ocultarElemento(informacoes);
    ocultarElemento(trocarDevolver);
    ocultarElemento(cartoes);
  }
  
  function exibirInformacoes() {
    ocultarElemento(homeInicio);
    ocultarElemento(dadosPessoais);
    ocultarElemento(meusFavoritos);
    ocultarElemento(meusPedidos);
    exibirElemento(informacoes);
    ocultarElemento(trocarDevolver);
    ocultarElemento(cartoes);
  }
  
  function exibirTroca() {
    ocultarElemento(homeInicio);
    ocultarElemento(dadosPessoais);


*/