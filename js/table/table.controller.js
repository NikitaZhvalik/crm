import * as model from './../model.js';
import * as view from './table.view.js';

function renderAllForms() {
    const records = model.getForms();
    view.renderAllForm(records);
}

renderAllForms();