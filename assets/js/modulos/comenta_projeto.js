export function comentarProjeto (projetoId, arrDados) {

    if(arrDados) {

        if(!dadosUsuario) {
          alert("Usuário não logado!");
          App.logar();
          return false;
        }

        let novoValor = document.querySelector("#newComment"+projetoId).value;
  
        if(!arrDados.commentList) arrDados.commentList = [];
  
        arrDados.commentList.push({
          "avatar": dadosUsuario.avatar_url,
          "nome": dadosUsuario.name,
          "login": dadosUsuario.login,
          "urlgit": dadosUsuario.html_url,
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