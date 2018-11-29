function showAllCompanies(){
    fetch("http://localhost:8081/company")
        .then(response => response.json())
        .then(body => 
            body.forEach(element => {
                addPartner(element.imagem, element.descricao,"/view/candidate/perfil-empresa?id="+element.codigo)
            }))
    }


$(document).ready(function(){
    showAllCompanies()
})