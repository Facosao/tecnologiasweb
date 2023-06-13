let btn = document.querySelector('#verSenha');
let btnConfirm = document.querySelector('#verConfirmSenha');

// TODO: Nome deveria ser validado
let nome = document.querySelector('#nome');

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');
let validConfirmSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

email.addEventListener('keyup', () => {
  /*
  if (validateEmail(email.value)) {
    // Deveria verificar se o e-mail usado já existe
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'Email'
    email.setAttribute('style', 'border-color: green')
    validEmail = true
  } else {
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'Email *Insira um email válido'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  }
  */

  switch (validateEmail(email.value)) {
    case "email-valido":
      labelEmail.setAttribute('style', 'color: green');
      labelEmail.innerHTML = 'Email';
      email.setAttribute('style', 'border-color: green');
      validEmail = true;
      break;

    case "email-em-uso":
      labelEmail.setAttribute('style', 'color: red');
      labelEmail.innerHTML = 'Email *Este email já está em uso';
      email.setAttribute('style', 'border-color: red');
      validEmail = false;
      break;

    case "email-invalido":
      labelEmail.setAttribute('style', 'color: red');
      labelEmail.innerHTML = 'Email *Insira um email válido';
      email.setAttribute('style', 'border-color: red');
      validEmail = false;
      break;
  }
})

senha.addEventListener('keyup', () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if (senha.value !== confirmSenha.value) {
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

function cadastrar() {
  if (validEmail && validSenha && validConfirmSenha) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    listaUser.push({
      nome: nome.value,
      email: email.value,
      senha: senha.value
    });

    localStorage.setItem('listaUser', JSON.stringify(listaUser));

    msgSuccess.setAttribute('style', 'display: block');
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
    msgError.setAttribute('style', 'display: none');
    msgError.innerHTML = '';

    setTimeout(() => {
      window.location.href = '../html/signin.html';
    }, 2000);
  } else {
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';
    msgSuccess.innerHTML = '';
    msgSuccess.setAttribute('style', 'display: none');
  }
}

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha');

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
})

btnConfirm.addEventListener('click', () => {
  let inputConfirmSenha = document.querySelector('#confirmSenha');

  if (inputConfirmSenha.getAttribute('type') == 'password') {
    inputConfirmSenha.setAttribute('type', 'text');
  } else {
    inputConfirmSenha.setAttribute('type', 'password');
  }
})

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;

  if (re.test(email)) {
    let returnMessage = "email-valido";
    let listaUser = JSON.parse(localStorage.getItem('listaUser'));
    
    if (listaUser != null) {
      listaUser.forEach((item) => {
        if (item.email == email){
          returnMessage = "email-em-uso";
          return;
        }
      })
    }
    
    return returnMessage;
  } else {
    return "email-invalido";
  }

}
