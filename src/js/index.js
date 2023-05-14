/* 
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da pagina para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para a lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema para a lua

    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verificar se o body já tem a classe modo-escuro
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

// passo 1
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
// passo 2
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// passo 3
botaoAlterarTema.addEventListener("click", () => {
  // passo 6
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
  // passo 4 e passo 7
  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    // passo 8
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    // passo 5
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
