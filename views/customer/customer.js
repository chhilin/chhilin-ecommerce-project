function createCard(name,description,price, currency,image){
    
  

    const card = document.createElement("div");
    card.className = "card";

    const icon = document.createElement("div");
    icon.className = "icon";

    const img = document.createElement("img");
    img.src = image;
 
    // const productName = document.createElement("div")

    const text1 = document.createElement("div");
    text1.className = "text";
    text1.textContent = price+currency
    
    const text2 = document.createElement("div");
    text2.className = "text";
    text2.textContent = name +  ": " + description;
    // text2.textContent = "text"
    // console.log(text1)



    // const icon_fa_start = document.createElement("div");
    // icon_fa_start.className = "fa fa-star";

    const button = document.createElement("button");
    button.textContent = "Buy Now"


    card.appendChild(img)
    card.appendChild(button)
    card.appendChild(text1)
    card.appendChild(text2)

    // icon.appendChild(icon_fa_start)
    icon.appendChild(button)
 

  

    card.appendChild(text1)
    card.appendChild(icon)
  
    

    return card;
}
function displayProduct(){
    let products = JSON.parse(localStorage.getItem("product-name")) ?? [];
    const main = document.createElement("div");
    main.className = "main";
    for (let product of products) {
        let card = createCard(product.name, product.description ,product.currency,product.price , product.img);
        main.appendChild(card)
    }
    container.appendChild(main)
    
}

const container = document.querySelector(".container");
document.addEventListener('DOMContentLoaded', () => { displayProduct(); })












// let product_name = document.querySelector("#product_name")
// let product_descrition = document.querySelector("#product_descrition");
// let product_price = document.querySelector("#product_price");
// let product_currency = document.querySelector("#product_currency");
// let product_image = document.querySelector("#product_image")
// let productBtn = document.querySelector("#btn_save");

// let my_product = document.querySelector("#my_product");

// productList = []
// productBtn.addEventListener("click",(e)=>{
//     e.preventDefault()
//     let productObject = {name:product_name.value, description:product_descrition.value, price:product_price.value, currency:product_currency.value, image:product_image.value}
//     productList.push(productObject)
//     console.log(productList)

//     localStorage.setItem("product_name", JSON.stringify(productList))
   
// })

// let product = JSON.parse(localStorage.getItem("product_name"));
// let outPut = ""
// for (let val of product){
//     outPut += val.name + " " + val.description + " " + val.price + " " + val.currency + " " + val.image
// }
// my_product.textContent = outPut
// console.log(my_product)