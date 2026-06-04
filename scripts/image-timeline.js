document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    document.querySelectorAll(".timeline-icon").forEach(icon => {

        icon.addEventListener("click", () => {


            const photoStack = icon.parentElement.querySelector(".photo-stack img");
modalImage.src = photoStack.src;
            modal.classList.add("active");

        });

    });

    modal.addEventListener("click", () => {
        modal.classList.remove("active");
    });

});