<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'];
  $senha = $_POST['senha'];
  
  // Realize as operações de cadastro aqui, como inserir os dados em um banco de dados, por exemplo
  
  // Exemplo de inserção de dados em um banco de dados MySQL usando MySQLi
  $servername = "localhost";
  $username = "seu_usuario";
  $password = "sua_senha";
  $dbname = "seu_banco_de_dados";
  
  // Conecte ao banco de dados
  $conn = new mysqli($servername, $username, $password, $dbname);
  
  // Verifique a conexão
  if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
  }
  
  // Insira os dados na tabela de usuários (supondo que exista uma tabela chamada "usuarios" com colunas "email" e "senha")
  $sql = "INSERT INTO usuarios (email, senha) VALUES ('$email', '$senha')";
  
  if ($conn->query($sql) === TRUE) {
    echo "Cadastro realizado com sucesso!";
  } else {
    echo "Erro ao cadastrar: " . $conn->error;
  }
  
  $conn->close();
}
?>
