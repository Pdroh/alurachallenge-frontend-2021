export function comentarProjeto (projetoId, arrDados) {

    if(arrDados) {

        let novoValor = document.querySelector("#newComment"+projetoId).value;
  
        if(!arrDados.commentList) arrDados.commentList = [];
  
        arrDados.commentList.push({
          "nome": "Pedro Henrique",
          "data": moment().format('DD/MM/YYYY h:mm:ss a'),
          "comentario": novoValor
        })
  
        let qtdComentarios = arrDados.commentList.length;
        arrDados.descricaoProjeto.comments = qtdComentarios;
        document.querySelector("#qtdComment"+projetoId).innerHTML = qtdComentarios;
        
        localStorage.setItem(projetoId, JSON.stringify(arrDados));
        document.querySelector("#newComment"+projetoId).value = "";

    }

}