/* 
O código implementa uma função de login em uma página web, onde os dados de usuário e senha 
são verificados em relação aos dados armazenados localmente, caso esteja tudo correto
vai para a pagina inicial, caso não esteja uma mensagem de erro aparece 
*/
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar() {
  let usuario = document.querySelector('#email')
  let senha = document.querySelector('#senha')
  let msgError = document.querySelector('#msgError')
  let listaUser = []

  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  if (listaUser != null) {
    listaUser.forEach((item) => {
      if ((usuario.value == item.email) && (senha.value == item.senha)) {
        userValid = {
          nome: item.nome,
          user: item.email,
          senha: item.senha
        }
  
      }
    })
  }

  if (usuario.value == userValid.user && senha.value == userValid.senha) {
    window.location.href = '../../index.html';

    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;

    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(userValid));
  } else {
    usuario.setAttribute('style', 'border-color: red');
    senha.setAttribute('style', 'border-color: red');
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = 'Usuário ou senha incorretos';
    usuario.focus();
  }
}
