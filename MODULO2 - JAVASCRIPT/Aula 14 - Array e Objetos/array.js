let listaTimes = ['Santos', 'São Paulo', 'Palmeiras', 'Corinthians']

console.log(listaTimes[0]);
console.log(listaTimes[1]);
console.log(listaTimes[2]);
console.log(listaTimes[3]);

//Adicionar itens em um array
listaTimes.push = ('Ponte preta');
listaTimes.push = ('Flamengo');
console.log(listaTimes);

//Verificar o tamanho da lista
//console,log(listaTimes.length);

//Adicionar um item na primeiara posição (posição 0 no caso)
listaTimes.unshift("Fluminense");
listaTimes.unshift("Vasco");

//Remover primeiro item da lista (posição 0)
listaTimes.shift();
console.log(listaTimes);

//Remover último elemento da lista
listaTimes.pop();
console.log(listaTimes);


//encontrar posição de um elemento
console.log(listaTimes.indexOf('Santos'));


let listaNomes = ['Marcos', 'Diego', 'Camila', 'Matheus']

//Removendo itens
listaNomes.splice(3,1)
console.log(listaNomes);

//Alterando os itens
listaNomes.splice(1,2, 'Robson')
console.log(listaNomes);

//Adicionando itens
listaNomes.splice(2,0, 'Gabriel', 'Diogo')
console.log(listaNomes);