let alunos = [];

function salvarMedia(){

    
    const aluno = (document.getElementById('aluno').value.trim());
    const nota = parseFloat(document.getElementById('nota').value);
    
    if (isNaN(nota) || aluno === ''){
        resultado.innerHTML = 'Erro, prencha o campo com as devidas informações.'
        resultado.style.color = 'red'
        return;
    }

    const nome ={aluno, nota};
    alunos.push(nome);

    document.getElementById('aluno').value ='';
    document.getElementById('nota').value ='';

    exibirAlunos(alunos);
}

function exibirAlunos(lista){
    const ul = document.getElementById('resultado')
    ul.innerHTML = ''

    lista.forEach(aluno => {
        const li = document.createElement('li');
        li.textContent = `${aluno.aluno} - Nota: ${aluno.nota}`;
        
        if (aluno.nota >= 7){
            li.classList.add("Aprovado");
            li.style.color = 'green'
        } else{
            li.classList.add("Reprovado");
            li.style.color = 'red'
        }
        
        ul.appendChild(li);
    });
}

function mostrarTodos(){
    exibirAlunos(alunos)
}

function mostrarAprovados(){
    const aprovados = alunos.filter(aluno => aluno.nota >=7);
    exibirAlunos(aprovados);
}



let colorir = document.getElementsByClassName('formarContainer')
