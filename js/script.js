// 1. Efeito de rolagem suave para voltar ao topo
function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

// Suporte alternativo ao botão
function voltarAoTopo() {
    topo();
}

// 2. Validação de Login
function login() {
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();

    if (usuario == "admin" && senha == "123456") {
        window.location = "index.html";
        logado = 1;
    }

    if (logado == 0) {
        alert("Acesso Negado. Dados incorretos");
    }
}

// 3. Alerta de Confirmação de Cadastro
function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}

// 4. Efeito Jquery para alternar entre Login e Cadastro
$(document).ready(function () {
    $("#botao-cadastrar").click(function () {
        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();
    });
});