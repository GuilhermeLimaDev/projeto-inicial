var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var log = document.getElementById("log");
var num = document.getElementById("num");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

var saida = document.getElementById("saida-de-dados");

function alertar(event){
    //alert("Você clicou no botão!!!" + nome.value);


    const url = `https://viacep.com.br/ws/${cep.value}/json`;
     
    fetch(url)
    .then(resposta=>resposta.json())
    .then(dados=>{

        log.value= dados.logradouro;
        bairro.value= dados.bairro;
        cidade.value= dados.localidade;
        estado.value= dados.uf;

        saida.innerText= "Nome: " + nome.value +
    "\n Email: " + email.value +
    "\n Telefone: " + telefone.value +
    "\n CEP: " + cep.value +
    "\n Logradouro: " + log.value +
    "\n Número: " + num.value +
    "\n Complemento: " + complemento.value +
    "\n Bairro: " + bairro.value +
    "\n Cidade: " + cidade.value +
    "\n Estado: " + estado.value;

    })
    

    
}