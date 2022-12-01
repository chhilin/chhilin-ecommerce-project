function addProductToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getProductFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
}

function createNewRecord(name, description, price,currency,img) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdDescription = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdcurrency = document.createElement('td');
    const tdImage = document.createElement('td');
    const tdDelete = document.createElement('td');
    const tdEdite = document.createElement('td');

    tdName.textContent = name;
    tdDescription.textContent = description;
    tdPrice.textContent = price;
    tdcurrency.textContent = currency;
    tdImage.textContent = img;
   

    let deletProduct = document.createElement("img")
    deletProduct.className = "my_image"
    deletProduct.src = "https://o.remove.bg/downloads/b499bf42-757a-4815-b0a1-add64b537d7f/download-removebg-preview.png"



    let editeProduct = document.createElement("img")
    editeProduct.className = "my_image"
    editeProduct.src = "https://o.remove.bg/downloads/bae8c632-8c1c-4202-8b5d-21c663a79533/user-edit-icon-edit-icon-white-11553486095hpvoxaoebd-removebg-preview.png";


    tdDelete.appendChild(deletProduct)
    tdEdite.appendChild(editeProduct)
    tr.appendChild(tdName);
    tr.appendChild(tdDescription);
    tr.appendChild(tdPrice);
    tr.appendChild(tdcurrency);
    tr.appendChild(tdImage);
    tr.appendChild(tdDelete);
    tr.appendChild(tdEdite);
    

    return tr;


}

function createTableHeader() {
    const headerRow = document.createElement('tr');
    const thName = document.createElement('th');
    const thDescription = document.createElement('th');
    const thPrice = document.createElement('th');
    const thcurrency = document.createElement('th');
    const thImage = document.createElement('th');
    const thDelete = document.createElement('th');
    const thEdite = document.createElement('th');

    thName.textContent = "name";
    thDescription.textContent = "description";
    thPrice.textContent = "price";
    thcurrency.textContent = "currency";
    thImage.textContent = "img";
    thDelete.textContent = "delete";
    thEdite.textContent = "edite";

    headerRow.appendChild(thName);
    headerRow.appendChild(thDescription);
    headerRow.appendChild(thPrice);
    headerRow.appendChild(thcurrency);
    headerRow.appendChild(thImage);
    headerRow.appendChild(thDelete);
    headerRow.appendChild(thEdite);
    

    return headerRow;
}
function displayProduct() {

    if(tableData.firstElementChild !== null ) {
        document.querySelector('table').remove();
    }
    const  newTable = document.createElement('table');
    newTable.appendChild(createTableHeader());
    let products = getProductFromLocalStorage('product-name');

    for (let product of products) {
        let row = createNewRecord(product.name, product.description, product.price, product.currency, product.img);
        newTable.appendChild(row)
    }
    tableData.appendChild(newTable);

}


const tableData = document.querySelector(".table_data")
const my_product = document.querySelector("#my_product");
const btn_save = document.querySelector("#btn_save")

const product_name = document.querySelector("#product_name")
const product_descrition = document.querySelector("#product_descrition");
const product_currency = document.querySelector("#product_currency");
const product_image = document.querySelector("#product_image")

let productList = JSON.parse(localStorage.getItem('product-name')) ?? [];
btn_save.addEventListener("click",(e)=>{
    e.preventDefault();
    if (product_name.value == "" || product_descrition.value == "" || product_currency.value == "" || product_image.value == "" || product_price.value == ""){
        window.confirm("You didn't select all")
        return;
    }
    let productObject = {name: product_name.value, description:product_descrition.value, price:product_price.value, currency:product_currency.value, img:product_image.value }
    productList.push(productObject);

    product_name.value = ""
    product_descrition.value = ""
    product_price.value = ""
    product_currency.value = ""
    product_image.value = ""

    addProductToLocalStorage('product-name', JSON.stringify(productList))
    displayProduct();


})
document.addEventListener('DOMContentLoaded', () => { displayProduct() })

















