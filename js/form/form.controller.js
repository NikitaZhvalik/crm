import * as model from './../model.js';
import * as view from './form.view.js';
import * as test from './form.test-data.js';

function insertTestData() {
    const randomData = test.getTestData();
    view.renderTestData(randomData);
}
insertTestData();

function setupEventListeners (){
    view.elements.form.addEventListener('submit', (e) => {
        e.preventDefault();
    })
}