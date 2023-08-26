function createCard(name, description, price, currency, image) {

    const card = document.createElement("div");
    card.className = "card";

    const icon = document.createElement("div");
    icon.className = "icon";
    console.log(card)

    const img = document.createElement("img");
    img.src = image;

    const text1 = document.createElement("div");
    text1.className = "text";
    text1.textContent = price + currency


    const text2 = document.createElement("div");
    text2.className = "text";
    const span = document.createElement("span");
    span.textContent = name;
    text2.appendChild(span)

    const text = document.createElement("div");
    text.className = "text";
    text.textContent = description;

    const icon_fa_start = document.createElement("div");
    icon_fa_start.className = "icon";
    const firstI = document.createElement("i");
    firstI.className = "fa fa-star";
    const secendI = document.createElement("i");
    secendI.className = "fa fa-star";
    const thirdI = document.createElement("i");
    thirdI.className = "fa fa-star";
    const fourthI = document.createElement("i");
    fourthI.className = "fa fa-star";

    icon_fa_start.appendChild(firstI)
    icon_fa_start.appendChild(secendI)
    icon_fa_start.appendChild(thirdI)
    icon_fa_start.appendChild(fourthI)

    const button = document.createElement("button");
    button.textContent = "Buy Now"

    card.appendChild(img)
    card.appendChild(button)
    card.appendChild(text1)
    card.appendChild(text2)
    card.appendChild(text)
    card.appendChild(icon_fa_start)

    icon.appendChild(button)
    card.appendChild(text1)
    card.appendChild(icon)

    return card;
}
// -------------------------search bar--------------
function btnSearch() {
    let text = search.value.toLowerCase();
    let tasks = document.querySelectorAll(".card");
    for (let task of tasks) {
        let taskTitle = task.children[1].textContent.toLowerCase();
        if (taskTitle.indexOf(text) === -1) {
            task.style.display = "none";
        } else {
            task.style.display = "block";
        }
    }
}
let search = document.querySelector("#search");
search.addEventListener("keyup", btnSearch);

function displayProduct() {
    let products = JSON.parse(localStorage.getItem("product-name")) ?? [];
    const main = document.createElement("div");
    main.className = "main";
    for (let product of products) {
        let card = createCard(product.name, product.description, product.currency, product.price, product.img);
        main.appendChild(card)
    }
    container.appendChild(main)
}

const container = document.querySelector(".container");
document.addEventListener('DOMContentLoaded', () => { displayProduct(); })