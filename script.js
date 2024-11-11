document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        const confirmacao = document.getElementById("confirmacao");
        confirmacao.style.display = "block";
        setTimeout(() => confirmacao.style.display = "none", 3000);
        document.getElementById("form-contato").reset();
    } else {
        alert("Preencha todos os campos.");
    }
});
