import * as model from './../model.js';
import * as view from './table.view.js';

function renderAllRequest() {
    const records = model.getForms();
    view.renderAllRequest(records);
    addEventListeners();
}

function addEventListeners() {
    view.elements.select.addEventListener('change', filterProducts)
}

function filterProducts() {
    const filter = model.changeFilter('products', this.value);
    const filterRequests = model.filterRequests(filter);
    view.renderAllRequest(filterRequests);
}

renderAllRequest();