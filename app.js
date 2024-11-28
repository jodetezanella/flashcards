function criaCartao(categoria, pergunta, resposta) {
   let container = document.getElementById ('container')
   let cartao = document. createElement ('article')
   cartao.className = 'cartao'

   cartao.innerHTML = `
<div class="cartao__conteudo">
<h3>${categorias}</h3>
<div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
</div>
<div class="cartao__conteudo__resposta">
   <p>${resposta}</p>

</div>
`


let respostaestainvisivel = false 

function viraCartao () {
    respostaestainvisivel = !respostaestainvisivel 
    cartao.classList.toggle('active', respostaestainvisivel)
}
cartao.addEventListener ('click', viraCartao )

container.appendChild (cartao) 

}