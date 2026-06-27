// Obtém o formulário de contato pelo ID
const form = document.getElementById("contato-form");

// Adiciona um evento ao enviar o formulário
form.addEventListener("submit", function(event) {

    // Impede o envio padrão da página
    event.preventDefault();

    // Captura os valores digitados e remove espaços extras
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Expressão regular para validar o formato do e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o e-mail informado é válido
    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    // Exibe mensagem de sucesso
    alert("Mensagem enviada com sucesso!");

    // Limpa os campos do formulário
    form.reset();

});

// Obtém o botão responsável por alternar o tema
const botao = document.getElementById("modo");

// Adiciona o evento de clique ao botão
botao.addEventListener("click", () => {

    // Alterna entre os temas claro e escuro
    document.body.classList.toggle("dark");

    // Altera o texto do botão de acordo com o tema atual
    if (document.body.classList.contains("dark")) {
        botao.textContent = "Modo Claro";
    } else {
        botao.textContent = "Modo Escuro";
    }
});