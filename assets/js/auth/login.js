const dadosUsuario = JSON.parse(sessionStorage.getItem('userdata'));

(() => {

    document.addEventListener("DOMContentLoaded", function(){

      if(!dadosUsuario) {

        //App.logar();

        return;

      }

      App.carregaLogin(dadosUsuario);

    });

})();

const App = {
    carregaLogin: (arrDados) => {
        document.querySelector(".user__thumb").style.backgroundImage = "url("+ arrDados.avatar_url + ")";
        document.querySelector(".user__name").innerHTML = '<span onclick="App.sair();">' + (arrDados.name ? arrDados.name : arrDados.login) + ' - sair </span>';
    },
    logar: () => {

        Swal.fire({
            title: 'Digite seu usuário do github:',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Procurar',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .catch(error => {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {

                sessionStorage.setItem("userdata", JSON.stringify(result.value));
                window.location.reload();

            }
        }).catch((err) => {

        })

    },
    sair: () => {
        Swal.fire({
            title: 'Realmente quer sair?',
            text: "Não será mais possivel postar projetos ou comentar!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, sair!',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.removeItem("userdata");
                window.location.reload();
            }
        })
    }
}
