let caixa = document.getElementById('mouse')


function mouseInput(){
    caixa.style.background = 'red'
}

function mouseOutput() {
    caixa.style.backgroundColor = 'white'
}

function changeHtml(){
    let nome = document.getElementById('nome').value
    caixa.textContent = nome
}