jQuery ( document ).ready(function() {

    var titulo = jQuery('title h2').text();

    var preco = jQuery('preco p').text();
    
    var quantidade = jQuery('spanValor-0 span').text();

    var url = window.location.href;

    var texto = encodeURIComponent

                        (`\u{2705} *Novo Pedido*

                            Boa noite, quero:

                            *${titulo}*
                            *${preco}*
                            *${quantidade}*
                            \u{27A1} *Link* ${url}

                        `);

    var link = 'https://api.whatsapp.com/send/?phone=5521997475330&text&app_absent=0'+texto;

    jQuery('botao').prop('href',link);
})