let mouseName = document.getElementById("mouseName");
let mousePrize = document.getElementById("mousePrize");
let mouseAmount = document.getElementById("mouseAmount");



document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(mouseName.textContent);
    console.log(mousePrize.textContent);
    console.log(mouseAmount.value);

    localStorage.setItem("nom de la souris",mouseName.textContent);
    localStorage.setItem("prix de la souris",mousePrize.textContent);
    localStorage.setItem("quantité de souris",mouseAmount.value);

    window.open("cart.html", "_blank");
});