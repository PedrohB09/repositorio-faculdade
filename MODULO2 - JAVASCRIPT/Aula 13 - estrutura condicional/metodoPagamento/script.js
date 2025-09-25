function calcularPagamento(){
    let valorGasto = document.getElementById('valorCompra').value
    let formaPagamento = document.getElementById('formaPagamento').value
    let resultado = document.querySelector('#resultado')
    let valorFinal

    switch (formaPagamento) {
        case 'pix':
            valorFinal = valorGasto * 0.9
            resultado.innerHTML = 'Valor a ser pago: R$' + valorFinal.toFixed(2)
            break
        case 'debito':
            valorFinal = valorGasto * 0.95
            resultado.innerHTML = 'Valor a ser pago: R$' + valorFinal.toFixed(2)
            break
        case 'credito':
            resultado.innerHTML = 'Valor a ser pago: R$' + valorGasto.toFixed(2)
            break
        default:
            resultado.innerHTML = 'VALOR INVÁLIDO'
            break
    }
}