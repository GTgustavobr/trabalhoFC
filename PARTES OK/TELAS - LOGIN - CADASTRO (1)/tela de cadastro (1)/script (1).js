// Espera a página carregar totalmente antes de rodar o JS
document.addEventListener("DOMContentLoaded", () => {
  // Pega a tag <form> do HTML
  const form = document.querySelector("form");

  // Escuta o evento de "submit" (quando o usuário clica no botão CADASTRAR-SE)
  form.addEventListener("submit", function (event) {
    // Impede que o formulário recarregue a página automaticamente
    event.preventDefault();

    // Pega o valor digitado no campo "Nome e Sobrenome"
    const nome = document.getElementById("Nome").value;

    // Pega o valor digitado no campo "Número de Contato"
    const telefone = document.getElementById("telefone").value;

    // Pega o valor digitado no campo "Email"
    const email = document.getElementById("email").value;

    // Pega o valor digitado no campo "Senha"
    const senha = document.getElementById("senha").value;

    // Cria um objeto JavaScript com os dados digitados
    const usuario = {
      nome, // mesmo que "nome: nome"
      telefone, // mesmo que "phone: phone"
      email, // mesmo que "email: email"
      senha, // mesmo que "senha: senha"
    };

    // Converte o objeto para texto (JSON) e salva no navegador
    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro salvo com sucesso!");
    console.log("Login-container", usuario);
  });
});
