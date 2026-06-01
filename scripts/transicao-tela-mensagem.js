document.addEventListener("click", () => {
    const page = document.getElementById("page-transition");
    page.classList.add("enter-next-page");
    setTimeout(() => {
        window.location.href = "tela-autor.html";
    }, 1200);
});