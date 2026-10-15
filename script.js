const formulario = document.querySelector("#form-login");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const erroEmail = document.querySelector("#erro-email");
const erroSenha = document.querySelector("#erro-senha");
const mensagem = document.querySelector("#mensagem");

function limparMensagens() {
  erroEmail.textContent = "";
  erroSenha.textContent = "";
  mensagem.textContent = "";
  mensagem.className = "mensagem";
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  limparMensagens();

  let dadosValidos = true;

  if (email.value.trim() === "") {
    erroEmail.textContent = "Informe seu e-mail.";
    dadosValidos = false;
  }

  if (senha.value === "") {
    erroSenha.textContent = "Informe sua senha.";
    dadosValidos = false;
  } else if (senha.value.length < 6) {
    erroSenha.textContent = "A senha deve possuir pelo menos 6 caracteres.";
    dadosValidos = false;
  }

  if (!dadosValidos) {
    mensagem.textContent = "Revise os campos indicados.";
    mensagem.classList.add("falha");
    return;
  }

  // Esta é apenas uma simulação no navegador; ainda não há servidor ou banco.
  mensagem.textContent = "Dados válidos! Na próxima etapa, enviaremos ao servidor.";
  mensagem.classList.add("sucesso");

  // TODO 4: na próxima aula, substituir a simulação por uma requisição ao back-end.
});
