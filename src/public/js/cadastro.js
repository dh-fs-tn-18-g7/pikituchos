console.log("Start JS");


/* Função de esconder senha */

const btn = document.querySelector(".esconde-senha");
const btnvalidar = document.querySelector(".esconde-senha")

//busca na api de cep

const inputCep = document.querySelector("#cep")
const inputNumber = document.querySelector("#number")
const inputRua = document.querySelector("#endereco")
const inputCidade = document.querySelector("#cidade")
const inputEstado = document.querySelector("#estado")

//validar se as senhas são identicas

const senha = document.querySelector('#senha');
const senhaC = document.querySelector('#validar');

//loading spinner
const loadingSpinner = document.querySelector('.c-loader')
let loading = false
//função de busca do cep

function verificarTamanhoDoCep(event) {
    console.log(event.target.value.length)
    if(event.target.value.length > 7) {
        event.preventDefault()
    }
}

async function fetchData() {
    const numero = inputCep.value
    loading = true
    handleLoading()
    
    const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${numero}`, {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const data = await response.json()
    console.log(data)

    const { state, city, neighborhood, street } = data

    inputEstado.value = state
    inputCidade.value = city
    inputRua.value = street
    
    loading = false
    handleLoading()
}

inputCep.addEventListener('keypress', verificarTamanhoDoCep)
inputCep.addEventListener('blur', fetchData)


//função de validação de senha

function validarSenha() {
    if (senha.value != senhaC.value) {
      senhaC.setCustomValidity("Senhas diferentes!");
      senhaC.reportValidity();
      return false;
    } else {
        senhaC.setCustomValidity("")
        return true;
    }
  }

  senhaC.addEventListener('mousedown', validarSenha)

//função do loading spinner


function handleLoading() {
    if(loading) {
        loadingSpinner.classList.add('active')
    }
    else {
        loadingSpinner.classList.remove('active')
    }
}


btn.addEventListener("click", () => {

    let input = document.querySelector("#senha")

    if (input.getAttribute("type") == "password") {
        input.setAttribute("type", "text")


    } else {
        input.setAttribute("type", "password");

    }

});



btnvalidar.addEventListener("click", () => {

    let input = document.querySelector("#validar");

    if (input.getAttribute("type") == "password") {
        input.setAttribute("type", "text");

    } else {
        input.setAttribute("type", "password");

    }

});