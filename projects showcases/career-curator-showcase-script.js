// Back to Top Button
window.addEventListener("scroll", function() {
    let button = document.getElementById("back-to-top");

    if (window.scrollY > 300) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
});