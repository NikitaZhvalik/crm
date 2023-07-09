//! DOM
const elements = {
    form: document.querySelector("#form"),
    name: document.querySelector("#name"),
    phone: document.querySelector("#phone"),
    email: document.querySelector("#email"),
    product: document.querySelector("#product"),
    btnAddForm: document.querySelector(".btn-lg") 
}

function renderTestData(randomData) {
    elements.name.value = randomData.name;
    elements.phone.value = randomData.phone;
    elements.email.value = randomData.email;
    elements.product.value = randomData.product;
}

function elementsData() {
    return {
        name: elements.name.value,
        phone: elements.phone.value,
        email: elements.email.value,
        product: elements.product.value,
    }
}

function clearForm (){
    elements.form.reset();
}

export {elements, renderTestData, clearForm, elementsData}