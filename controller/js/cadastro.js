function cadastrar(){
    var nome = document.getElementById('first_name').value;
    var sobreNome = document.getElementById('first_name').value;
    var sexo = document.getElementsByName('group3').value;
    var cpf = document.getElementById('cpf').value
    var telefone = document.getElementById('tel').value
    var email = document.getElementById('email').value
    var cep = document.getElementById('cep').value
    var estado = document.getElementById('Estado').value
    var cidade = document.getElementById('Cidade').value
    var bairro = document.getElementById('Bairro').value
    var numero = document.getElementById('Numero').value
    var complemento = document.getElementById('Complemento').value
    var senha = document.getElementById('senha').value;

   try{
    fetch('http://localhost:8081/candidate/register', {
    method: 'POST',
    mode: 'CORS',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    "nome": nome,
	"cpf": cpf,
	"email": email,
	"senha": senha,
	"telefone": telefone,
	"endereco": {
		"cep": cep,
		"estado": estado,
		"cidade": cidade,
		"bairro": bairro,
		"numero": numero,	
		"complemento": complemento
		},
	"status": 1
    })
  }).then(() =>
  swal({
    title: "Cadastro Realizado",
    text: "Bem vindo ao Uow",
    icon: "success",
    button: "ok!",
})
)
}catch(e){
    console.log("Error: "+e)
}
}

$(document).ready(function(){

    $('#cadastrar').click(cadastrar)
});