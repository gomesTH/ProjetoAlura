let mensagem = document.getElementById('enviar').addEventListener('click', clicar);


function clicar (e) {
    e.preventDefault()
    let nome = document.getElementById('nome').value;
    if (confirm(`Seja Bem vindo: ${nome} - Clique em OK para ver nosso Cardápio `)) {
        /* window.location.href = window.location.origin + '' */
        
        let url = window.location.pathname.split('/') // home thiago_gomes ProjetoAlura index.html?
        url.pop(); // home thiago_gomes ProjetoAlura
        url = url.join('/') // home/thiago_gomes/ProjetoAlura
        
        window.location.href = window.location.origin  + url + '/cardapio.html'
    }
    
}

