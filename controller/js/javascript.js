// javascript

function showPass(){
    var inputPass = document.getElementById('password');
    var eye = document.getElementById('visible-pass');

    if(inputPass.type == 'password'){
        eye.innerHTML = 'visibility_off';
        inputPass.type = "text";
    }
    else  if(inputPass.type == 'text'){
        eye.innerHTML = 'visibility';
        inputPass.type = "password";
    }
}

function addPartner(image,text,href){

    var partner = 
    "<div class=\"col s3\">"+
       "<div class=\"card\" style=\"max-width: 300px; min-height: 356px\">"+
           "<div class=\"card-image\">"+
               " <img src=\""+image+"\">"+
                "<a href=\""+href+"\" class=\"btn-floating halfway-fab waves-effect waves-light red tooltipped\" data-position=\"bottom\" data-tooltip=\"Ver vagas\"><i class=\"material-icons\">add</i></a>"+
           "</div>"+
           "<div class=\"card-content\">"+
               "<p class=\"\">"+text+"</p>"+
           "</div>"+
       "</div>"+
   "</div>"

   $('#addPartner').append(partner);
   $('.tooltipped').tooltip();
}

function login(){
    var login = document.getElementById("email");
    var password = document.getElementById("password");
    
    if(login != 'teste@teste.com' && password != '123456'){
        swal({
            title: "Ooops!",
            text: "Email ou senha incorretos.",
            icon: "error",
            button: "Voltar!",
        });
    }
}

function chat(){
    var chat = document.getElementById('chat');
    var trigger = document.getElementById('triggerChat');
    
    if(trigger.checked == false){
        trigger.checked = true
    }
    else if(trigger.checked == true){
        trigger.checked = false
    }

    if(trigger.checked == false){
        $(chat).addClass("uow-chat-inactive");
        $(chat).removeClass("uow-chat-active");
    }
    else if(trigger.checked == true){
        $(chat).addClass("uow-chat-active");
        $(chat).removeClass("uow-chat-inactive");     
    }
}

function cleanSearch(){
    var inputSearch = document.getElementById('search');

    inputSearch.value = '';
}

function followCompany(){
    var button = document.getElementById("follow");
    var tagName = document.getElementById("componente-nome-empresa");
    var name = tagName.innerText

    if(button.value == "follow"){
        M.toast({html: 'Seguindo '+name});
        button.innerText = "Deixar de seguir"
        button.value = "unfollow"
    }
    else if(button.value == "unfollow"){
        swal("Atenção!","Deixar de seguir "+name,{
             buttons: {
                cancel: "Voltar", 
                catch: {
                    text: "Deixar de seguir",
                    value: "unfollow"
                }
            }    
        })
        .then((value) => {
            switch (value) {
                case "unfollow":
                    button.innerText = "Seguir"
                    button.value = "follow"
                break;
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    //conteúdo que será compartilhado: Título da página + URL
    var conteudo = encodeURIComponent(document.title + ": " + 'bom dia!');
    //altera a URL do botão
    document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);

$(document).ready(function(){
    /*Initialize*/
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();

    $('.modal').modal();
    $('.fixed-action-btn').floatingActionButton( {direction: 'left',hoverEnabled: false});
    $('.tooltipped').tooltip();
    $('.tabs').tabs();
    $('.collapsible').collapsible();
    $('.materialboxed').materialbox();
    $('select').formSelect();
    
    /*Components*/
    $("#header").load("../../view/components/header.html");
    $("#header2").load("../../view/components/header_2.html");
    $("#footer").load("../../view/components/footer.html");
    $("#modal").load("../../view/components/modal.html");
    
    /*Functions*/
    $("#visible-pass").click(showPass);
   // $("#open").click(login);
    $("#question").click(chat);
    $("#cleanSearch").click(cleanSearch);
    $("#follow").click(followCompany);
    
});