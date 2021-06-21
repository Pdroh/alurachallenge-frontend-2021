(() => {
  const listaProjetos = document.querySelector("[data-lista-projetos]");

  listaProjetos.addEventListener("click", (e) => {
    const alvo = e.target;

    let alvoId = -1;

    if (alvo.classList.contains("btnLike")) {
      alvoId = alvo.getAttribute("idPost");
      somaLike(alvoId);
    }
  });

  function somaLike(id) {
    const dadosSalvos = JSON.parse(localStorage.getItem(id));
    dadosSalvos.descricaoProjeto.likes += 1;

    const elementSpan = document.querySelector("#qtdLike"+id);
    elementSpan.innerText = dadosSalvos.descricaoProjeto.likes;

    localStorage.setItem(id, JSON.stringify(dadosSalvos));
  }

})();
