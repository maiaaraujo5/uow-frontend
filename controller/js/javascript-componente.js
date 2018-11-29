// javascript

/*Video - div*/
function videoEmpresa(titulo,urlVideo){
    var div = document.getElementById("componente-video");

    var componente = '<h3>'+titulo+'</h3>'+
                     '<hr>'+
                     '<div class="video-container">'+
                        '<iframe width="853" height="480" src="//www.youtube.com/embed/'+urlVideo+'" frameborder="0" allowfullscreen></iframe>'+
                     '</div>'

    $(div).append(componente);
}

/*Porque trabalhar - div*/
function porqueTrabalhar(Titulo,Texto){
    var div = document.getElementById('componente-porque-trabalhar')

    var componente = '<h3>'+Titulo+'</h3>'+
                     '<hr>'+
                     '<p>'+Texto+'</p>'

    $(div).append(componente);
}

/*Calcula notas em estrelas*/
function notaEstrela(nota){
    var star = ''; 
    var inteiro = Math.trunc(nota);
    var metadinha = (nota-inteiro).toFixed(1);

    if(metadinha > 0.7){
        inteiro++;
    }

    console.log(inteiro)
    console.log(metadinha)
    console.log(Math.round(nota))
    for(var i=0; i<inteiro ;i++){
        star += '<i class="fas fa-star uow-color-star"></i>';
    }

    if((metadinha) >= 0.4 && (metadinha) <= 0.7){
       star += '<i class="fas fa-star-half-alt uow-color-star"></i>';
       inteiro++;
    }

    for(var i=0; i<(5-(inteiro)) ;i++){
        star += '<i class="far fa-star uow-color-star"></i>';
    }

    return star;
}

function porcentagem(total,valor){
    var porcentagem;

    porcentagem = ((valor * 100)/total);

    return porcentagem;
}

function mediaAvaliacao(total,nota5,nota4,nota3,nota2,nota1){

    var nota = 0;

    nota = ((nota5*5 + nota4*4 + nota3*3 + nota2*2 + nota1*1)/total);

    nota = nota.toFixed(1);
    
    return nota;
}

function avaliacoes(qtdAvaliacoes, qtd5, qtd4, qtd3, qtd2, qtd1){
    var div = document.getElementById("componente-nota-geral");
    var nota = 0;

    try { 
        if((qtd5+qtd4+qtd3+qtd2+qtd1) != qtdAvaliacoes){
            throw "quantidadeAvaliacoesErr";
        } 
        else{

            nota = mediaAvaliacao(qtdAvaliacoes, qtd5, qtd4, qtd3, qtd2, qtd1);
            
            notaEmpresa(qtdAvaliacoes,nota);

            star = notaEstrela(nota);

            star5 = porcentagem(qtdAvaliacoes,qtd5);
            star4 = porcentagem(qtdAvaliacoes,qtd4);
            star3 = porcentagem(qtdAvaliacoes,qtd3);
            star2 = porcentagem(qtdAvaliacoes,qtd2);
            star1 = porcentagem(qtdAvaliacoes,qtd1);
            
            var componente = '<div class="card-panel">'+
                        '<h6>Classificação geral</h6>'+
                        '<h5>'+
                            '<label style="font-size:26px; color: #5e5e5e">'+nota+'</label>'+
                            '<label style="font-size:26px;">'+
                                 star+
                            '</label>'+
                        '</h5>'+
                        '<small>Informações baseadas em '+qtdAvaliacoes+' avaliações</small>'+
                        '<table class="">'+
                            '<tbody>'+
                                '<tr>'+
                                    '<td style="padding: 0px">'+
                                        '<h6>'+
                                            '5<i class="fas fa-star uow-color-star"></i>'+
                                        '</h6>'+
                                    '</td>'+
                                    '<td style="width: 82%; padding: 0px">'+
                                        '<div class="progress tooltipped" data-position="right" data-tooltip="'+qtd5+' avaliações" style="margin-top: 22px">'+
                                            '<div class="determinate" style="width: '+star5+'%"></div>'+
                                        '</div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td style="padding: 0px">'+
                                        '<h6>'+
                                            '4<i class="fas fa-star uow-color-star"></i>'+
                                        '</h6>'+
                                    '</td>'+
                                    '<td style="padding: 0px">'+
                                        '<div class="progress tooltipped" data-position="right" data-tooltip="'+qtd4+' avaliações" style="margin-top: 22px">'+
                                            '<div class="determinate" style="width: '+star4+'%"></div>'+
                                        '</div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td style="padding: 0px">'+
                                        '<h6>'+
                                            '3<i class="fas fa-star uow-color-star"></i>'+
                                        '</h6>'+
                                    '</td>'+
                                    '<td style="padding: 0px">'+
                                        '<div class="progress tooltipped" data-position="right" data-tooltip="'+qtd3+' avaliações" style="margin-top: 22px">'+
                                            '<div class="determinate" style="width: '+star3+'%"></div>'+
                                        '</div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td style="padding: 0px">'+
                                        '<h6>'+
                                            '2<i class="fas fa-star uow-color-star"></i>'+
                                        '</h6>'+
                                    '</td>'+
                                    '<td style="padding: 0px">'+
                                        '<div class="progress tooltipped" data-position="right" data-tooltip="'+qtd2+' avaliações" style="margin-top: 22px">'+
                                            '<div class="determinate" style="width: '+star2+'%"></div>'+
                                        '</div>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td style="padding: 0px">'+
                                        '<h6>'+
                                            '1<i class="fas fa-star uow-color-star"></i>'+
                                        '</h6>'+
                                    '</td>'+
                                    '<td style="padding: 0px">'+
                                        '<div class="progress tooltipped" data-position="right" data-tooltip="'+qtd1+' avaliações" style="margin-top: 22px">'+
                                            '<div class="determinate" style="width: '+star1+'%"></div>'+
                                        '</div>'+
                                    '</td>'+
                                '</tr>'+
                            '</tbody>'+
                        '</table>'+
                    '</div>'
            
            $(div).append(componente);
        }
    }
    catch(err) {
        console.log("Input is " + err);
    }
}

function notaCategoria(categoria,nota){
    var div = document.getElementById('componente-nota-categoria');

    var star = notaEstrela(nota);

    var componente = '<h6>'+categoria+'</h6>'+
                    '<h6>'+
                        nota+star+
                    '</h6>'

    $(div).append(componente);
}

function galeria(Parceiro,Imagem){
    var div = document.getElementById('componente-galeria');

    var componente = '<div class="col s4">'+
                        '<div class="row">'+
                            '<div class="col s12 m12">'+
                                '<div class="card-panel uow-card-gallery">'+
                                    '<img class="materialboxed" src="/publico/imagem/Partner/'+Parceiro+'/Galeria/'+Imagem+'" style="width:100%">'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'                 
                    
    $(div).append(componente);
}

function nomeEmpresa(nome){
    var div = document.getElementById('componente-nome-empresa');

    var componente = '<h5 style="margin-top:0px">'+nome+'</h5>'

    $(div).append(componente);
}

function notaEmpresa(qtdAvaliacoes,nota){
    var div = document.getElementById('componente-nota-empresa');

    var componente = '<h6>'+
                        '<i class="fas fa-star uow-color-star"></i>'+
                        '<label class="tooltipped" data-position="right" data-tooltip="'+qtdAvaliacoes+' avaliações" style="margin-left:10px; font-size:20px">'+nota+'</label>'+
                    '</h6>'

    $(div).append(componente);
}

function logoEmpresa(empresa,imagem){
    var div = document.getElementById('componente-logo-empresa');

    var componente = '<img src="'+imagem+'" alt="" class="circle uow-img-perfil-empresa z-depth-2">' 

    $(div).append(componente);
}

function Avaliacao(Nota,Title,Profissao,Local,Data,Message){
    var div = document.getElementById('componente-avaliacoes');

    var star = notaEstrela(Nota);
    var small = Profissao+" - "+Local+" - "+Data;

    var componente = '<div class="card-panel">'+
                    '<span class="card-title">'+
                        star+
                        '<label style="font-size:20px; color: #5e5e5e; margin-left: 10px">'+Title+'</label>'+
                    '</span>'+
                    '<br>'+
                    '<small>'+small+'</small>'+
                    '<p>'+Message+'</p>'+
                    '<div class="row">'+
                        '<div class="col s12 m12 l12" style="position: relative">'+
                            '<label style="font-size: 20px; color: #565656; margin-right: 10px">Esta avaliação foi útil?</label>'+
                            '<button class="btn uow-btn-primary-pimary waves-effect" style="margin-right: 10px"><i class="fas fa-arrow-up"></i> Sim</button>'+
                            '<button class="btn uow-btn-quaternary waves-effect"><i class="fas fa-arrow-down"></i> Não</button>  '+
                            '<div class="fixed-action-btn uow-btn-share">'+
                                '<a class="btn-floating uow-background-primary">'+
                                    '<i class="material-icons">share</i>'+
                                '</a>'+
                                '<ul>'+
                                    '<li><a class="btn-floating uow-background-messenger"><i class="fab fa-facebook-messenger uow-icon-center"></i></a></li>'+
                                    '<li><a href="" rel="nofollow" target="_blank" id="whatsapp-share-btn" class="btn-floating uow-background-whatsapp share-whatsapp"><i class="fab fa-whatsapp uow-icon-center"></i></a></li>'+
                                    '<li><a class="btn-floating uow-background-twitter"><i class="fab fa-twitter uow-icon-center"></i></a></li>'+
                                '</ul>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'

    $(div).append(componente);            
}

function montaOpcaoSelect(arr){
    var option = '';

    for(i=0; i<arr.length; i++){
        option += '<option value="'+i+'">'+arr[i]+'</option>'
    }

    return option;
}

function filtroAvaliação(arrVagas,arrLocais,total){
    var div = document.getElementsByClassName('componente-filtro-avaliacoes');
    var vagas = '';
    var locais = '';

    vagas = montaOpcaoSelect(arrVagas);
    locais = montaOpcaoSelect(arrLocais); 

    for(i=0;i<div.length;i++){
        var componente = '<div class="col s12 m12">'+
        '<div class="card-panel" style="padding: 5px 20px">'+
            '<div class="row">'+
                '<div class="input-field col s6">'+
                    '<select>'+
                        '<option value="" disabled selected>Vagas</option>'+
                        vagas+
                    '</select>'+
                '</div>'+
                '<div class="input-field col s6">'+
                    '<select>'+
                        '<option value="" disabled selected>Local</option>'+
                        locais+
                    '</select>'+
                '</div>'+
                '<p id="componente-total-avaliacoes" style="margin-left:10px">Encontramos '+total+' avaliações relacionadas à sua busca.</p>'+
            '</div>'+
        '</div>'+
    '</div>'

    $(div[i]).append(componente);   
    }
    
}

function difenrencaDatas(date1, date2){
     //formato do brasil 'pt-br'
     moment.locale('pt-br');
     //setando data1
     var data1 = moment(date1,'DD/MM/YYYY');
     //setando data2
     var data2 = moment(date2,'DD/MM/YYYY');
     //tirando a diferenca da data2 - data1 em dias
     var diff  = data2.diff(data1, 'days');
     
     return diff;
}

function dataHoje(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    today = dd + '/' + mm + '/' + yyyy;
    
    return today;
}

function oportinidade(Titulo,link,Local,mensagem,data){
    var div = document.getElementById('componente-oportunidade');
    var hoje = dataHoje();
    var dias = difenrencaDatas(data, hoje);

    var componente = '<div class="card ">'+
                        '<div class="card-content ">'+
                            '<span class="card-title">'+
                                '<div><a href="'+link+'">'+Titulo+'</a></div>'+
                                '<small>'+Local+'</small>'+
                            '</span>'+
                            '<p>'+mensagem+'</p>'+
                            '<br>'+
                            '<p>Há '+dias+' dias</p>'+
                        '</div>'+
                    '</div>'

    $(div).append(componente);                   
}

$(document).ready(function(){

   /*Componentes*/ 
//    videoEmpresa('Bilhete Premiável Capemisa','AobVYa0yhSw');
//    porqueTrabalhar('Porque trabalhar na Capemisa?','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.');
//    avaliacoes(80, 40, 15, 5, 13, 7);
//    notaCategoria('Equilíbrio profissional','4.1');
//    galeria('Capemisa','seguras-felizes.png');
//    nomeEmpresa('Capemisa Seguradora');
//    logoEmpresa('Capemisa','capemisa-quadrada.png');
//    Avaliacao(4,"Ótimo Trabalho","Analista de Sistemas (Ex-Funcinário)","RIO DE JANEIRO","9 de Outubro de 2018","É ótimo em um dia típico de trabalho.Eu aprendi que todos nós vivemos em uma constante ansiedade do saber.Na Solutis a uma ótima Direção e uma ótima Gerência.Quanto aos colegas de trabalho não tem o que falar todos agem como uma verdadeira família, tentam lhe ajudar de tudo que é forma.A parte mais difícil do trabalho é ter que terminar no prazo o serviço que nem sempre tem como.A parte mais agradável do trabalho é quando todos se reúnem para comemorar alguma coisa.");
//    filtroAvaliação(['Analista Sênior','Analista Júnior'],['Rio de janeiro','São Paulo'],400);
//    oportinidade('Analista de sistemas Sênior','#','Rio de Janeiro','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum','01/10/2018')
});