document.getElementById('form-mudar-senha').addEventListener('submit', function(event) {
    var novaSenha = document.getElementById('nova-senha').value;
    var repitaSenha = document.getElementById('repita-senha').value;
    
    if (novaSenha !== repitaSenha) {
        alert('As senhas não correspondem!');
        event.preventDefault(); // Impede o envio do formulário
    }
});