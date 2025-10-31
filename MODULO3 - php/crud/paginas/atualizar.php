<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atualizar Dados</title>
    <link rel="stylesheet" href="../estilos/styleCadastrar.css">
    <link rel="stylesheet" href="../estilos/styleAtualizar.css">
</head>
<body>
    
    <header>
        <nav>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="../paginas/cadastro.php">Cadastrar Usuário</a></li>
                <li><a href="../paginas/verificar.php">Procurar Usuário</a></li>
            </ul>
        </nav>
    </header>

    <main>
    <section id="containerSection">
            <form action="verificar.php" method="post">
                <input type="email" name="email" id="email" placeholder="Informe o e-mail">
                <input type="submit" value="Buscar">
            </form>
        </section>

        <form action="cadastro.php" method="POST">
            <h2>Cadastro de Aluno</h2>
            <label for="nome">Nome:</label>
            <Input type="text" name="nome" id="nome">

            <label for="sobrenome">Sobrenome:</label>
            <input type="text" name='sobrenome' id='sobrenome'>

            <label for="email">E=mail:</label>
            <input type="email" name="email" id="email">

            <label for="curso">Selecione o curso:</label>
            <select name="curso" id="curso">
                <option value="ads">Análise e Desenvolvimento de Sistemas</option>
                <option value="es">Engenharia de Software</option>
                <option value="si">Sistema da Informação</option>
                <option value="cc">Ciências da Computação</option>
            </select>
    </main>

</body>
</html>