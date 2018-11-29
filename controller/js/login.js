function login (){
    var login = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    fetch('http://localhost:8081/login', {
        method: 'POST',
        mode: 'CORS',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        "email": login,
        "senha": password
        })
    }).then(response => response.json())
    .then(body => {
        if(body.codigo != undefined){
            swal({
                title: "Logou",
                text: "Seu id "+body.codigo,
                icon: "success",
                button: "Ok!",
            })
        }else{
            swal({
                title: "Dados Incorretos",
                text: "Por favor verifique seus dados e tente novamente",
                icon: "error",
                button: "Ok!",
            })
        }
    })
}

$(document).ready(function(){
$("#open").click(login)
})