import * as model from './../model.js';
import * as view from './table.view.js';

function renderAllRequest() {
    const records = model.getForms();
    view.renderAllRequest(records);
}

renderAllRequest();