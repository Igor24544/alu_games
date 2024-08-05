function alterarStatus(id) {
    let gameClicado = document.querySelector(`#game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");

if (imagem.classList.contains("dashboard__item__img--rented")){
    imagem.classList.remove("dashboard__item__img--rented");
    botao.classList.remove("dashboard__item__button--return");
    botao.textContent = "alugar";
} else {
    imagem.classList.add("dashboard__item__img--rented");
    botao.textContent = "Devolver";
    botao.classList.add("dashboard__item__button--return");
}


}