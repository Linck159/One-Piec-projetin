window.alert("Atenção produto em fase de testes !") /* aqui serve para aletar , aquela abinha q abr  em alguns sites */

/* O1 -objetivo 1  quando clicar n obotao do personagem , marca ele como selecionado: passo 1 - pegar os botoes no JS pra poder verificar quando o usuário clicar em cima de um deles : */

const botoes = document.querySelectorAll('.botao'); /* aqui ele seleciona todos os class botao , sem precisar que eu selecione um por um */

//Objteivo 2 - quando clicar no botao do personagem mostrar as info deles  passo 1 - pegar os pj no JS pra poder mostrar ou esconder
const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        // O1 -passo 3 - verificar se ja existe um botão selecionado, se sim , devemos remover sua seleçã 
        botaoSelecionado.classList.remove("selecionado")

        /* O1- Passo 2 - adicionar a classe ''selecionao'' no botao que o usuario clicou , tipo um missdirection */

        botao.classList.add("selecionado");

        //O2 -passo 3  verificar se ja existe um persoangem selecionado e  se sim tirar ele . 

        const persoangemSelecionado = document.querySelector(".personagem.selecionado");
        persoangemSelecionado.classList.remove("selecionado");
        //O2 -passo 2 - adicionar a classe "selecionado " no personagem que o usuario selecionou 
        personagens[indice].classList.add("selecionado");

    });
});




