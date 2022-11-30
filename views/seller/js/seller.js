let product_name = document.querySelector("#product_name")
let product_descrition = document.querySelector("#product_descrition");
let product_price = document.querySelector("#product_price");
let product_currency = document.querySelector("#product_currency");
let product_image = document.querySelector("#product_image")
let productBtn = document.querySelector("#btn_save");

let my_product = document.querySelector("#my_product");

productList = []
productBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    // console.log(product_name.value)
    let productObject = {name:product_name.value, description:product_descrition.value, price:product_price.value, currency:product_currency.value, image:product_image.value}
    productList.push(productObject)
    console.log(productList)

    localStorage.setItem("product_name", JSON.stringify(productList))
    // produceList.push(productObject)
   
})

let product = JSON.parse(localStorage.getItem("product_name"));
let outPut = ""
for (let val of product){
    outPut += val.name + " " + val.description + " " + val.price + " " + val.currency + " " + val.image
}
// my_product.textContent = outPut
console.log(my_product)

















