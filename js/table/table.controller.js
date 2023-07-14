import * as model from './../model.js';
import * as view from './table.view.js';

function renderAllRequest() {
    const records = model.getForms();
    view.renderAllRequest(records);
    addEventListeners();

    const countNewRequest = model.countNewRequest();
    const countAllRequest = model.countAllRequest();
    const countCompleteRequest = model.countCompleteRequest();
    const countInWorkRequest = model.countInWorkRequest();
    view.renderBadgeNew(countNewRequest);
    view.renderBadgeAll(countAllRequest);
    view.renderBadgeComplete(countCompleteRequest);
    view.renderBadgeInWork(countInWorkRequest);
}

function addEventListeners() {
    view.elements.select.addEventListener('change', filterProducts);
    view.elements.topStatusBar.addEventListener('click', filterByStatus);
    view.elements.leftStatusLinks.forEach((link) => {
        link.addEventListener('click', filterByStatus )
    })
}

function filterProducts() {
    const filter = model.changeFilter('products', this.value);
    const filterRequests = model.filterRequests(filter);
    view.renderAllRequest(filterRequests);
}

function filterByStatus(e) {
    const filter = model.changeFilter('status', e.target.dataset.value);
    const filterRequestsStatus = model.filterRequests(filter);
    view.renderAllRequest(filterRequestsStatus);
    view.updateStatusBar(e.target.dataset.value);
} 

renderAllRequest();