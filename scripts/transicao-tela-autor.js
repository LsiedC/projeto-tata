document.addEventListener("click", () => {
    const page = document.getElementById("page-transition");
    page.classList.add("enter-next-page");
    setTimeout(() => {
        window.location.href = "home.html";
    }, 1200);
});