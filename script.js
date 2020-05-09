var productNameInp = document.getElementById("productNameInp");
var productPriceInp = document.getElementById("productPriceInp");
var productCategoryInp = document.getElementById("productCategoryInp");
var productDescInp = document.getElementById("productDescInp");
var imgLink = document.getElementById("imgLink");
var productBox = document.getElementById("product-box");
var searchRes = document.getElementById("searchRes");
var productImg = document.getElementsByClassName("productImg"); //the imge

var productImgArr = [];
for (var i = 0; i < productImg.length; i++) {

    productImgArr.push(productImg);

}

var productsList;
if (localStorage.getItem("productStorage") != null) {
    productsList = JSON.parse(localStorage.getItem("productStorage"));
    display();
} else {
    productsList = [];
}

function addProduct() {
    var newPro = {
        name: productNameInp.value,
        price: productPriceInp.value,
        category: productCategoryInp.value,
        desc: productDescInp.value,
        img: imgLink.value
    }
    productsList.push(newPro);
    localStorage.setItem("productStorage", JSON.stringify(productsList));
    display();
    clearForm();
}

function display() {
    var addNewPro = ``;
    for (var i = 0; i < productsList.length; i++) {
        addNewPro += `
        <div class="col-md-2 p-2  ">
        <div class="px-1 pb-2 pt-1 overflow-hidden box rounded">
            <img class="w-100 mb-4 productImg" src="` + productsList[i].img + `" height="100px">
            <span>name</span>
            <span class="float-right">` + productsList[i].name + `</span><br>
            <span>rating </span>
            <span class="float-right">` + productsList[i].desc + ` </span><br>
            <span>price </span>
            <span class="float-right mb-1">` + productsList[i].price + ` </span><br>
            <div class="d-flex flex-column w-100  ">
            <button onclick="updateProduct(` + i + `)" class="upBtn  btn btn-info">update</button>
            <button class="delBtn btn btn-danger">delete</button>
            </div>
        </div>
    </div>
        `;
    }
    document.getElementById("product-box").innerHTML = addNewPro;
}





function searchProduct(searchText){
  let search='';
  let x=``;
  for(let i=0;i<productsList.length; i++){
      if(productsList[i].name.includes(searchText.trim())==true){
        search+=`<div class='rounded border bg-light p-1 w-100 '>${productsList[i].name}</div>`
        x=productsList[i].name.replace(searchText  , ` <span class="text-danger">${searchText}</span>` )
      }
  }document.getElementById("searchRes").innerHTML=x;
}


[].splice



function clearForm() {
    productNameInp.value = "";
    productPriceInp.value = "";
    productCategoryInp.value = "";
    productDescInp.value = "";
}
function deleteProduct(index) {
    var answer = window.confirm("Are you sure you want to delete site");
    if (answer) {
        productsContainer.splice(index, 1);
        localStorage.setItem("myProducts", JSON.stringify(productsContainer));
        displayProduct();
    }
}

function updateProduct(index) {
    productsList.splice(index, 1);
    var addNewName = prompt("please add the product name");
    var addNewPrice = prompt("please add the product price");
    var addNewCategory = prompt("please add the product category")
    var addNewImg = prompt("please add the product link photo");
    var addNewDescription = prompt("please add the product Description");
    var newProObject = {
        name: addNewName,
        price: addNewPrice,
        category: addNewCategory,
        desc: addNewDescription,
        img: addNewImg
    }
    productsList.splice(index, 0, newProObject);

    localStorage.setItem("productStorage", JSON.stringify(productsList));
    addNewProduct = `
            `;
    for (var i = 0; i < productsList.length; i++) {
        if (index == i) {
            addNewProduct +=
                ` <
            div class = "col-md-2  p-2  " >
                <
                div class = "px-1 pb-5 pt-1  box rounded" >
                <
                img class = "w-100 mb-4 productImg"
            src = "` + addNewImg.value + `"
            height = "100px" >
                <
                span > name < /span> <
            span class = "float-right" > ` + addNewName.value + ` < /span><br> <
            span > rating < /span> <
            span class = "float-right" > ` + addNewDescription.value + ` < /span><br> <
            span > price < /span> <
            span class = "float-right mb-1" > ` + addNewPrice.value + ` < /span><br> <
            button onclick = "updateProduct(` + i + `)"
            class = "upBtn  btn btn-info" > update < /button> <
            button class = "delBtn btn btn-danger" > delete < /button> < /
            div > <
                /div>
            `

            display();
            clearForm();
        }
    }
}