document.querySelector("#menu-open-button").addEventListener("click", () =>{
    const navLinks = document.querySelector(".nav-links")
    navLinks.classList.add("hide")
})
document.querySelector("#menu-close-button").addEventListener("click", () =>{
    const navLinks = document.querySelector(".nav-links")
    navLinks.classList.remove("hide")
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        }
    });
});