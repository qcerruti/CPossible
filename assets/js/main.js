console.log("JS chargé depuis main.js");

document.addEventListener("DOMContentLoaded", () => {
    // Exemple : changer le titre de la page
    const h1 = document.querySelector("h1");
    if (h1) {
        h1.style.textTransform = "uppercase";
    }
});
