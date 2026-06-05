const albums = document.querySelectorAll(".album");
const vinil = document.querySelector(".vinil");

albums.forEach(album => {

    album.addEventListener("click", () => {

        vinil.classList.add("tocando");

        // trocar música
        // trocar capa
        // atualizar nome

    });

});