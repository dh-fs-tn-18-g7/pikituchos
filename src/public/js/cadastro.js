console.log("Start JS");


/* Função de esconder senha */

const btn = document.querySelector(".esconde-senha");
const btnvalidar = document.querySelector(".esconde-senha")



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