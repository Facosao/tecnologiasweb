/* 
O código verifica se o token de autenticação do usuário está armazenado no localStorage. 
Se não estiver, uma mensagem de alerta é exibida e o usuário é redirecionado para a página de login. 
*/ 
if (localStorage.getItem("token") == null) { 
    alert("Você precisa estar logado para acessar essa página"); 
    window.location.href = "./assets/html/signin.html";
} else {
  // TODO: Adequar estilo para o nome em HTML
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  const logado = document.querySelector("#logado");
  logado.innerHTML = "Olá, " + userLogado.nome + ".";
}

function Sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./assets/html/signin.html";
}
