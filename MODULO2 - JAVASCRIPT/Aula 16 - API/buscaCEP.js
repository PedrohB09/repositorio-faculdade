//https://viacep.com.br/ws/08780911/json

const cep = document.getElementById('cep')

cep.addEventListener('change', (evento) => {
    let cepUsuario = evento.target
    buscarCEP(cepUsuario.value)
})

async function buscarCEP(cepUsuario){

let erroCep = document.getElementById('erro')
erroCep .innerHTML = ''

    try{
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cepUsuario}/json`)
        let consultaCEPJson = await consultaCEP.json()

        if (consultaCEPJson.erro){
            throw Error ('CEP INEXISTENTE')
        }

        preencheCampos(consultaCEPJson)
        
    }
    catch{
        erroCep.innerHTML = 'CEP inválido! Tente novamente.'
        apagarCampos()
    }
}

function preencheCampos(consultaCEP){

    document.getElementById('rua').value = consultaCEP.logradouro
    document.getElementById('bairro').value = consultaCEP.bairro
    document.getElementById('cidade').value = consultaCEP.localidade
    document.getElementById('estado').value = consultaCEP.uf
    
    
}

function apagarCampos(){
    document.getElementById('rua').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''

}