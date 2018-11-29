function retrieveCompany(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
fetch("http://localhost:8081/company/"+id)
    .then(response => response.json())
    .then(body => showInfoCompany(body))
    .then(()=> retrieveCompanyVacancy(id))
}

function retrieveCompanyVacancy(id){
    fetch("http://localhost:8081/company/"+id+"/vacancys")
        .then(response => response.json())
        .then(body => showVacancys(body))

}

function showInfoCompany(body){
        nomeEmpresa(body.nome),
        videoEmpresa('Video Institucional', body.videoYoutube),
        porqueTrabalhar('Porque trabalhar na '+body.nome+'?',body.descricao),
        avaliacoes(80, 40, 15, 5, 13, 7),
        notaCategoria('Equilíbrio profissional','4.1'),
        logoEmpresa(body.nome,body.imagem),
        Avaliacao(4,"Ótimo Trabalho","Analista de Sistemas (Ex-Funcinário)","RIO DE JANEIRO","9 de Outubro de 2018","É ótimo em um dia típico de trabalho.Eu aprendi que todos nós vivemos em uma constante ansiedade do saber.Na Solutis a uma ótima Direção e uma ótima Gerência.Quanto aos colegas de trabalho não tem o que falar todos agem como uma verdadeira família, tentam lhe ajudar de tudo que é forma.A parte mais difícil do trabalho é ter que terminar no prazo o serviço que nem sempre tem como.A parte mais agradável do trabalho é quando todos se reúnem para comemorar alguma coisa.")
}

function showVacancys(body){
     body.forEach(element => {
        oportinidade (element.titulo, '#', element.endereco.cidade, element.descricao, '01/10/2018')
     });
    }

$(document).ready(function(){
        retrieveCompany()
    })