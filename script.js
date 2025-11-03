const botao = document.getElementById("botao-tema");

botao.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); //ao clicar, alterna entre os modos claro e escuro

  // salva a preferência no navegador
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// aplica o tema salvo ao recarregar a página
const temasalvo = localStorage.getItem("theme");
if (temasalvo === "dark") {
  document.body.classList.add("dark-mode");
}

const form = document.getElementById("form");
const btn = document.getElementById("btn");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // impede o envio padrão do formulário
})

btn.addEventListener("click", () => {
  if (emailInput.validity.valid) {
    alert("Mensagem enviada com sucesso!"); // ao clicar no botão enviar, exibe o alerta
    form.reset(); // reseta o formulário após o envio
  }
  else {
    alert("Email inválido! Por favor, verifique o campo de email."); // alerta de email inválido
  }
})
