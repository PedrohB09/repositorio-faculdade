for (let i = 0; i <= 10; i++){
    console.log(i);
    
}

let listaProdutos = ['Computador', 'Notebook', 'Teclado', 'Mouse']

for (let i = 0; i < listaProdutos.length; i++){
    console.log(listaProdutos[i]);
}

//Percorrer Array - forEach
listaProdutos.forEach((produto) => {
    console.log(produto);  
})