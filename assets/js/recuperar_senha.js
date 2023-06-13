// Função chamada quando o botão "Enviar Email de Recuperação" é clicado
function enviarEmailRecuperacao() {
    // Obter o valor do campo de e-mail
    var email = document.getElementById("email").value;
  
    // Realizar validação de e-mail (pode ser personalizado de acordo com suas necessidades)
    if (validarEmail(email)) {
      // Aqui você pode adicionar sua lógica para enviar um e-mail de recuperação com o e-mail fornecido
      // console.log("E-mail de recuperação enviado para: " + email);

      alert("E-mail de recuperação enviado para: " + email);
      window.location.href = "./signin.html";

      // Exibir mensagem de sucesso
      //exibirMensagemSucesso("E-mail de recuperação enviado com sucesso!");
    } else {
      // Exibir mensagem de erro se o e-mail não for válido
      alert("Por favor, insira um endereço de e-mail válido.");
      //exibirMensagemErro("Por favor, insira um endereço de e-mail válido.");
    }
  }
  
  // Função para validar o formato do e-mail usando uma expressão regular simples
  function validarEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
/*

----- Estas funções não servem um propósito
----- sem os elementos que tentam acessar.

// Função para exibir uma mensagem de erro
function exibirMensagemErro(mensagem) {
  var msgError = document.getElementById("msgError");
  msgError.innerText = mensagem;
  msgError.style.display = "block";
}

// Função para exibir uma mensagem de sucesso
function exibirMensagemSucesso(mensagem) {
  var msgSuccess = document.getElementById("msgSuccess");
  msgSuccess.innerText = mensagem;
  msgSuccess.style.display = "block";
}
*/
