let listaProdutos = [
    {nome: 'Computador', fabricante: 'Dell', valor: 5000},
    {nome: 'Notebook', fabricante: 'Dell', valor: 3000},
    {nome: 'Monitor', fabricante: 'Samsung', valor: 1000},
    {nome: 'Teclado', fabricante: 'Dell', valor: 300},
    {nome: 'Mouse', fabricante: 'Logitech', valor: 400},
]

listaProdutos.forEach((produtos) => {
    console.log(`O ${produtos.nome} da marca ${produtos.fabricante} está em um valor de R$ ${produtos.valor}`);
})

let listaProdutosCaros = listaProdutos.filter(produto => produto.valor > 1000)
console.log(listaProdutosCaros);

listaProdutosCaros.forEach(produtoCaro => {
    console.log(`Produto acima de R$1000: ${produtoCaro.nome} marca ${produtoCaro.fabricante} está em um valor de R$ ${produtoCaro.valor}`);
    
}) 

