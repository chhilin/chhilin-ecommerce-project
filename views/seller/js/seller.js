function addProductToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getProductFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
}
function createNewRecord(index, name, description, price, currency, img) {

    const tr = document.createElement('tr');
    tr.dataset.index = index;
    const tdName = document.createElement('td');
    const tdDescription = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdcurrency = document.createElement('td');
    const tdDelete = document.createElement('td');
    const tdEdite = document.createElement('td');
    tdName.textContent = name;
    tdDescription.textContent = description;
    tdPrice.textContent = price;
    tdcurrency.textContent = currency;

    let deletProduct = document.createElement("img")
    deletProduct.className = "my_image"
    deletProduct.src = "../seller/images/delete.png"

    //            -----------delete-----------

    deletProduct.addEventListener("click", (e) => {
        let index = e.target.parentElement.parentElement.dataset.index;
        productList.splice(index, 1);
        addProductToLocalStorage("product-name", JSON.stringify(productList));
        displayProduct();
    })

    // ------------edit------------------

    let editeProduct = document.createElement("img")
    editeProduct.className = "edite"
    editeProduct.src = "../seller/images/edite.png"

    editeProduct.addEventListener("click", (e) => {
        let index = e.target.parentElement.parentElement.dataset.index
        document.querySelector("#product_name").value = name;
        document.querySelector("#product_descrition").value = description;
        document.querySelector("#product_price").value = price;
        document.querySelector("#product_currency").value = currency;
        document.querySelector("#product_image").value = img;

        productList.splice(index, 1);
        displayProduct()
    })

    tdDelete.appendChild(deletProduct)
    tdEdite.appendChild(editeProduct)
    tr.appendChild(tdName);
    tr.appendChild(tdDescription);
    tr.appendChild(tdPrice);
    tr.appendChild(tdcurrency);
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
    const thDelete = document.createElement('th');
    const thEdite = document.createElement('th');

    thName.textContent = "name";
    thDescription.textContent = "description";
    thPrice.textContent = "price";
    thcurrency.textContent = "currency";
    thDelete.textContent = "delete";
    thEdite.textContent = "edite";

    headerRow.appendChild(thName);
    headerRow.appendChild(thDescription);
    headerRow.appendChild(thPrice);
    headerRow.appendChild(thcurrency);
    headerRow.appendChild(thDelete);
    headerRow.appendChild(thEdite);

    return headerRow;
}

function displayProduct() {
    if (tableData.firstElementChild !== null) {
        document.querySelector('table').remove();
    }
    const newTable = document.createElement('table');
    newTable.appendChild(createTableHeader());
    let products = getProductFromLocalStorage('product-name');
    console.log(products)
    for (let index = 0; index < products.length; index++) {
        let product = products[index]

        let row = createNewRecord(index, product.name, product.description, product.price, product.currency, product.img);
        newTable.appendChild(row)
    }
    tableData.appendChild(newTable);
}

const tableData = document.querySelector(".table_data")
const my_product = document.querySelector("#my_product");
const button_save = document.querySelector("#save")

const product_name = document.querySelector("#product_name")
const product_descrition = document.querySelector("#product_descrition");
const product_currency = document.querySelector("#product_currency");
const product_image = document.querySelector("#product_image")
const product_price = document.querySelector("#product_price")

let productList = JSON.parse(localStorage.getItem('product-name')) ?? [];

button_save.addEventListener("click", (e) => {
    e.preventDefault();
    if (product_name.value == "" || product_descrition.value == "" || product_currency.value == "" || product_image.value == "" || product_price.value == "") {
        window.confirm("You must select all")
        return;
    }
    let productObject = { name: product_name.value, description: product_descrition.value, price: product_price.value, currency: product_currency.value, img: product_image.value }
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

















