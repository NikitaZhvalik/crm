import * as model from './../model.js';
import * as view from './form.view.js';
import * as test from './form.test-data.js';

function insertTestData() {
    view.renderTestData(test.getTestData());
    checkSubmit();
}
insertTestData();

function checkSubmit (){
    view.elements.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = view.elementsData();
        console.log(formData);
        model.createRecord(formData);
        view.clearForm();
        view.renderTestData(test.getTestData());
    })
}
