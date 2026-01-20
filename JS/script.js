/**
 * Sinais de Comparações
 * "==" -> Igualdade. Ex x == y, faz uma comparação se x é iguall a y
 */

const form = document.getElementById("form")
const nomeInput = document.getElementById("nome")
const emailInput = document.getElementById("email")
const mensagemInput = document.getElementById("mensagem")
const listacomentario= document.getElementById("listacomentario")

function validarEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = nomeInput.value.trim()
    const email = emailInput.value.trim()
    const comentario = mensagemInput.value.trim()

    if(!nome || !email || !comentario){
        alert("Preencha todos os campos.")
        nomeInput.focus()
        return
    }

    if(nome.length < 3){
        alert("O nome deve ter pelo menos 3 caracteres")
        nomeInput.focus()
        return
    }

    if(!validarEmail(email)){
        alert("Insira um email válido")
        emailInput.focus()
        return
    }

    if(comentario.length < 10){
        alert("Comentario deve ter pelo menos 10 caracteres")
        mensagemInput.focus()
        return
    }
    
})