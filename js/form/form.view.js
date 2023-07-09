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

export {elements, renderTestData}