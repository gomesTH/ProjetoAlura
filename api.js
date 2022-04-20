
fetch(`https://raw.githubusercontent.com/gomesTH/ProjetoAlura/f41fc1cb866676a091fb5c267d15515ff0910e2f/data.json`)
 .then((response) => {
     return response.json();
 }).then((jsonParsed) => {
     const divBurger =  document.querySelector('#xtudo');

     jsonParsed.burgers.forEach((element, index) => {
         const nameBurger = element.name
         const srcImage = element.thumbnail.path
         const ingreD = element.ingredientes
         const preco = element.preco;
         
        
         createDivBurger(srcImage, nameBurger, ingreD, preco, divBurger, index);
        });

    console.log(jsonParsed);   
 })

 function createDivBurger(srcImage, nameBurger, ingreD, preco, divToAppend, index){
     
 // criando 

     // divs
     const divPai = document.createElement('div')
     const divFilho = document.createElement('div')
     //css
         divPai.className = 'burgers';
         
         divFilho.className = 'items';

        // dados de produto

     const title = document.createElement('h2');
     //css
        title.className = 'title';

     
     const img = document.createElement('img');
     //css
        img.className = 'imagem';


     const textIngre = document.createElement('p');
     //css
        textIngre.className = 'indredientes';


     const textPreco = document.createElement('p');
     //css
        textPreco.className = 'preco';




     const buttonMais = document.createElement('button');
     //css 
        buttonMais.className = 'qnt';

        const valorUnidade = document.createElement('span');
        //css 
            valorUnidade.className = 'quantidade';
    
     
     const buttonMenos = document.createElement('button');
     //css 
        buttonMenos.className = 'qnt';


     const btnEnviar = document.createElement('button')
     //css   
        btnEnviar.className = 'botao';


    // trantando as consts 

     title.textContent = nameBurger

     buttonMais.innerHTML = '+'
     buttonMais.onclick = () => {
        const span = document.getElementById('spanValor-' + index);

        span.innerHTML = Number(span.innerHTML)+1
     }
     buttonMenos.innerHTML = '-'
     buttonMenos.onclick = () => {
        {
            const span = document.getElementById('spanValor-' + index);
    
            if (Number(span.innerHTML) > 0) {
                span.innerHTML = Number(span.innerHTML)-1
            }
         }
     }
     valorUnidade.innerHTML = '0'
     valorUnidade.id = 'spanValor-' + index;
     
     img.src = srcImage 
     
     textIngre.textContent = ingreD
     textPreco.textContent = preco

      btnEnviar.innerHTML = 'enviar'
      btnEnviar.onclick = () => {
       {
         
         quantidade = document.getElementById('spanValor-0');
         titulo = document.getElementById('#title');
         preco = document.getElementById('spanValor-0');
         console.log(quantidade.innerHTML);
        }
     } 
     

     // adicionando elementos

     divPai.appendChild(divFilho)

     divFilho.appendChild(title)

     divFilho.appendChild(img)

     divFilho.appendChild(textIngre)
     divFilho.appendChild(textPreco)

     divFilho.appendChild(buttonMenos) 
     divFilho.appendChild(valorUnidade)
     divFilho.appendChild(buttonMais)

     divFilho.appendChild(btnEnviar)
     

     divToAppend.appendChild(divPai)

     divPai.classList.add("burgers");
     
     
}

function alteraValor(spanId) {
    const span = document.getElementById(spanId);

    span.innerHTML = '1';
}