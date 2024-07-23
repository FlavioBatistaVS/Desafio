document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (value.length <= 11) {
        if (value.length > 2) {
            value = value.replace(/(\d{2})(\d)/, '($1)$2');
        }
        if (value.length > 7) {
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
        }
    } else {
        value = value.substring(0, 11); // Limita a entrada a 11 dígitos
    }
    e.target.value = value;
});

document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    if (value.length <= 11) {
        if (value.length > 3) {
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
        }
        if (value.length > 6) {
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
        }
        if (value.length > 9) {
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        }
    } else {
        value = value.substring(0, 11);
    }
    e.target.value = value;
});

document.getElementById('birthDateForm').addEventListener('submit', function (e) {
    const dataNasc = document.getElementById('dataNasc').value;
    const [day, month, year] = dataNasc.split('/');
    const yearInt = parseInt(year, 10);
    if (!day || !month || !year || day.length !== 2 || month.length !== 2 || year.length !== 4 || yearInt > 2024) {
        alert('Por favor, insira uma data válida no formato DD/MM/YYYY e com ano até 2024.');
        e.preventDefault();
    }
});

var nome = document.getElementById('nome');
var cpf = document.getElementById('cpf');
var dataNasc = document.getElementById('dataNasc');
var sexo = document.getElementById('sexo');
var telefone = document.getElementById('telefone');
var login = document.getElementById('login');
var password = document.getElementById('password');

nome.addEventListener('focus',()=>{
    nome.style.borderColor = "#357982";
});
nome.addEventListener('blur',()=>{
    nome.style.borderColor = "#ccc";
});
cpf.addEventListener('focus',()=>{
    cpf.style.borderColor = "#357982";
});
cpf.addEventListener('blur',()=>{
    cpf.style.borderColor = "#ccc";
}); 

dataNasc.addEventListener('focus',()=>{
    dataNasc.style.borderColor = "#357982";
});
dataNasc.addEventListener('blur',()=>{
    dataNasc.style.borderColor = "#ccc";
});
sexo.addEventListener('focus',()=>{
    sexo.style.borderColor = "#357982";
});
sexo.addEventListener('blur',()=>{
    sexo.style.borderColor = "#ccc";
});
telefone.addEventListener('focus',()=>{
    telefone.style.borderColor = "#357982";
});
telefone.addEventListener('blur',()=>{
    telefone.style.borderColor = "#ccc";
});
login.addEventListener('focus',()=>{
    login.style.borderColor = "#357982";
});
login.addEventListener('blur',()=>{
    login.style.borderColor = "#ccc";
});
password.addEventListener('focus',()=>{
    password.style.borderColor = "#357982";
});
password.addEventListener('blur',()=>{
    password.style.borderColor = "#ccc";
});
