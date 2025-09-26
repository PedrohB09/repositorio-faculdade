let produto = {
    nome: 'Computador',
    fabricante: 'Positivo',
    preco: 2000,
    processador: 'I3-2100'
}

console.log(produto.nome);

//Adicionar item no objeto
produto.armazenamento = "256 Gb"
produto['memoria-RAM'] = '8 Gb'

//Remover produto
delete produto.memoria-ram
delete produto['memoria-RAM']
console.log(produto)