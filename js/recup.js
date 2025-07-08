let mouseName = localStorage.getItem("nom de la souris");
let mousePrize = localStorage.getItem("prix de la souris");
let mouseAmount = localStorage.getItem("quantité de souris");

console.log("nom:", mouseName);
console.log("prix:", mousePrize);
console.log("quantité:", mouseAmount);

document.getElementById("mouseNameRecup").innerHTML = mouseName;
document.getElementById("mousePrizeRecup").innerHTML = mousePrize;
document.getElementById("mouseAmountRecup").innerHTML = mouseAmount;


mousePrize = Number(mousePrize);
mouseAmount = Number(mouseAmount);

let total = mousePrize * mouseAmount;
document.getElementById("totalPrize").innerHTML = total;
console.log(total);
