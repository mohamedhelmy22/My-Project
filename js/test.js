
var searchInp = document.getElementById("searchInp");
var searchRow = document.getElementById("searchRow");
var cuurentIndex = 0;
var productNameInp = document.getElementById("productName");
var productPriceInp = document.getElementById("productPrice");
var productCompanyInp = document.getElementById("productCompany");
var productDescInp = document.getElementById("productDesc");
var btn = document.getElementById("myBtn");

var productsContainer ;

if(localStorage.getItem("productsContainer")==null)
    {
        productsContainer =[];
    }
else
    {
        productsContainer =JSON.parse( localStorage.getItem("productsContainer"));
        displayData();

    }


searchInp.onkeyup = function()
{
    searchProducts(searchInp.value);
}

function updateProduct()
{
    productsContainer[cuurentIndex].name = productNameInp.value;
    productsContainer[cuurentIndex].price = productPriceInp.value;
    productsContainer[cuurentIndex].company = productCompanyInp.value;
    productsContainer[cuurentIndex].desc = productDescInp.value;
    document.getElementById("myBtn").innerHTML = "add product";
        localStorage.setItem("productsContainer" ,JSON.stringify(productsContainer) );


}

function searchProducts(term)
{
    searchCols = "";
    for(var i = 0 ; i<productsContainer.length ; i++)
        {
            if(productsContainer[i].name.includes(term))
                {
                    searchCols += '<div class="col-md-3"><div class="product"><h3>'+productsContainer[i].name+'</h3><p>'+productsContainer[i].price+'</p><p>'+productsContainer[i].company+'</p><p>'+productsContainer[i].desc+'</p><p></p><button class="btn btn-outline-danger" onclick="deleteProduct('+i+')">delete</button></div></div>'

                }
        }
    document.getElementById("searchRow").innerHTML = searchCols; 
    
}

btn.onclick = function()
{
    if(myBtn.innerHTML == "Add Product")
        {
            addProduct();
            displayData();
            clearForm();
            
        }
    else
        {
                updateProduct();
                displayData();
                clearForm();
  
        }

}

function addProduct()
{
    var product=
        {
            name: productNameInp.value,
            price: productPriceInp.value,
            company: productCompanyInp.value,
            desc: productDescInp.value
        }
        productsContainer.push(product);
    localStorage.setItem("productsContainer" ,JSON.stringify(productsContainer) );

}

function displayData()
{
    var cols = "";
    for (var i=0 ; i<productsContainer.length ; i++)
        {
            cols += '<div class="col-md-3"><div class="product"><h3>'+productsContainer[i].name+'</h3><p>'+productsContainer[i].price+'</p><p>'+productsContainer[i].company+'</p><p>'+productsContainer[i].desc+'</p><p></p><button class="btn btn-outline-danger" onclick="deleteProduct('+i+')">delete</button><button class="btn btn-outline-info ml-2" onclick="setForm('+i+')">update</button></div></div>'

        }
    document.getElementById("rowData").innerHTML = cols;
}

function setForm(i)
{
    productNameInp.value = productsContainer[i].name;                   
    productPriceInp.value = productsContainer[i].price;
    productCompanyInp.value = productsContainer[i].company;
    productDescInp.value = productsContainer[i].desc;
document.getElementById("myBtn").innerHTML = "update product";
    cuurentIndex = i ;
}

function clearForm()
{
    var inputs = document.getElementsByClassName("form-control");
    for (var i =0 ; i<inputs.length ; i++)
        {
            inputs[i].value = "";
        }
}

function deleteProduct(id)
{
    productsContainer.splice(id , 1);
    localStorage.setItem("productsContainer" ,JSON.stringify(productsContainer) );
    displayData();
}
























































































































