function verificarLogin(){
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
    let mensagem = document.getElementById('mensagem')

    if (usuario == 'admin' && senha == '123'){
        mensagem.innerHTML = 'Foi'
    } else {
        mensagem.innerHTML = 'nao foi'
    }
}