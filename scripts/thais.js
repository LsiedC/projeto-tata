const fotos = document.querySelectorAll(".foto-thais");

const modal = document.getElementById("textModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

fotos.forEach(foto => {

    foto.addEventListener("click", () => {

        modalTitle.textContent = foto.dataset.title;
        modalText.textContent = foto.dataset.text;

        modal.classList.add("active");
    });

});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {

    if(e.target === modal){
        modal.classList.remove("active");
    }

});