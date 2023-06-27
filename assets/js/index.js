/* 
O código verifica se o token de autenticação do usuário está armazenado no localStorage. 
Se não estiver, uma mensagem de alerta é exibida e o usuário é redirecionado para a página de login. 
*/

var signin_str = "./assets/html/signin.html"; 

if (window.location.href.endsWith("vagas.html") 
 || window.location.href.endsWith("quemsomos.html")) {
  signin_str = "./signin.html";
}

if (localStorage.getItem("token") == null) { 
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = signin_str;
} else {
  // TODO: Adequar estilo para o nome em HTML
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  const logado = document.querySelector("#logado");
  logado.innerHTML = "Olá, " + userLogado.nome + ".";
}

function Sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = signin_str;
}

function vagas() {
  window.location.href = "./assets/html/vagas.html";
}