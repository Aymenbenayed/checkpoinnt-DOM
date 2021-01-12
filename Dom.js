let favs = Array.from(document.querySelectorAll(".fa-heart"));
let rmvs = Array.from(document.querySelectorAll(".fa-trash-alt"));
let cards = Array.from(document.querySelectorAll(".card"));
//favourite button
for (let fav of favs) {
    fav.addEventListener("click", function () {
        fav.style.color === "black" ? fav.style.color = "red" : fav.style.color = "black"
    })
}
//delete button
for (let i in rmvs) {
    rmvs[i].addEventListener("click", function () {
        cards[i].remove()
        total()
    })
}
let btnplus = Array.from(document.querySelectorAll(".fa-plus-circle"));
//btnplus.GetElement
let btnminus = Array.from(document.querySelectorAll(".fa-minus-circle"));
//bntminus.GetElement
let qnt = Array.from(document.querySelectorAll(".qnt"));
//quantity.getElement

for (let i in btnplus) {
    btnplus[i].addEventListener("click", function (){
        qnt[i].innerHTML = Number(qnt[i].innerHTML) +1;
        total()
    })
}
for (let i in btnminus) {
    btnminus[i].addEventListener("click", function (){
        
        qnt[i].innerHTML = Number(qnt[i].innerHTML) > 0 ?  qnt[i].innerHTML = Number(qnt[i].innerHTML) - 1 : null;
        total()
    })
}
// Total price
let totalPrice = document.querySelector(".total-price")
function total() {
    let quantities = Array.from(document.querySelectorAll(".qnt"))
    let unitPrices = Array.from(document.querySelectorAll(".unit-price"))
    let s = 0;
    for (let i in unitPrices) {
        s = s + Number(unitPrices[i].innerHTML) * Number(quantities[i].innerHTML)
    }
     console.log(s)
    totalPrice.innerHTML = s
     console.log(totalPrice.innerHTML)
    return (totalPrice.innerHTML)
}





