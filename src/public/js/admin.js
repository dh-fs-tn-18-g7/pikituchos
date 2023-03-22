console.log('start js')

/* Botões */

const produtos = document.querySelector('#btn-produtos');

const litasProdutos = document.querySelector("#btn-listaProdutos");
const cadastrarProdutos = document.querySelector("#btn-cadastrarPordutos");
const pedidos = document.querySelector("#btn-pedidos");
const config = document.querySelector("#btn-config");

/* display */

const displayProdutos = document.querySelector('#displayProdutos')

console.log(displayProdutos)


/* Eventos */

produtos.addEventListener('click',exibirProduto)
litasProdutos.addEventListener('click',exibirListaProduto)


/* Funções */


function exibirElemento(elemento) {
    elemento.style.display = "flex";
  }
  
  function ocultarElemento(elemento) {
   
    elemento.style.display = 'none';

  }
  
  function exibirProduto() {
   exibirElemento(displayProdutos)

   

}
  
  function exibirListaProduto() {
    ocultarElemento(displayProdutos)

   
  }
  
  