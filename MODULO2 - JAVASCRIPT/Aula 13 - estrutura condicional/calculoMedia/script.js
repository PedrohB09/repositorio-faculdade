function calcularMedia(){
    
    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)
    let nota3 = parseFloat(document.getElementById('nota3').value)
    let resultado = document.getElementById('resultado')
    let media = (nota1 + nota2 + nota3)/3

    if (nota1 > 10 || nota2 > 10 || nota3 >10){
        resultado.innerHTML = 'Erro, por favor preencha o campo nota de 0 até 10'
        resultado.style.color = 'red'
    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0){
        resultado.innerHTML = 'Erro, por favor preencha o campo nota de 0 até 10'
        resultado.style.color = 'red'
    } else if (isNaN(nota1)|| isNaN(nota2)|| isNaN(nota3)){
        resultado.innerHTML = 'Erro, por favor preencha o campo nota'
        resultado.style.color = 'red'
    }else if (media >= 7){
        resultado.innerHTML = 'APROVADO'
        resultado.style.color = 'green'
    } else if (media >=5){
        resultado.innerHTML = 'RECUPERAÇÃO'
    } else {
        resultado.innerText = 'REPROVADO'
        resultado.style.color = 'red'
    }
    
    

}