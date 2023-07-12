import * as model from './../model.js';
import * as view from './table.view.js';

function renderAllRequest() {
    const records = model.getForms();
    view.renderAllRequest(records);
    addEventListeners();
}

function addEventListeners() {
    view.elements.select.addEventListener('change', filterProducts);
    view.elements.topStatusBar.addEventListener('click', filterByStatus);
}

function filterProducts() {
    const filter = model.changeFilter('products', this.value);
    const filterRequests = model.filterRequests(filter);
    view.renderAllRequest(filterRequests);
}

function filterByStatus(e) {
    const filter = model.changeFilter('status', e.target.dataset.value);
    const filterRequestsStatus = model.filterRequestsStatus(filter);
    view.renderAllRequest(filterRequestsStatus);
}

renderAllRequest();