<?php
    //Validar se o $_POST["id"] está vazio
    if(isset($_POST["id"])){


        //Conexão com banco de dados
        include("../conexao/conexao.php");

        //Criação da variavel
        $id = $_POST["id"];

        //Prepara a consulta SQL para excluir cadastro
        $sql = "DELETE FROM alunos WHERE id = ?";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            $stmt->bind_param("i", $id);
            
            //executa query
            $stmt->execute();

            //direciona para página específica
            header("Location: verificar.php");

            //encerra a consulta
            $stmt->close();
        } else {
            echo" <div calss= 'mensagem erro'>Erro na consulta</div>";
        }
    }

?>