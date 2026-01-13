const form = document.getElementById("form")
const nomeInput = document.getElementById("nome")
const emailInput = document.getElementById("email")
const mensagemInput = document.getElementById("mensagem")
const listacomentario= document.getElementById("listacomentario")

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = nomeInput.value.trim()
    const email = emailInput.value.trim()
    const comentario = mensagemInput.value.trim()
})