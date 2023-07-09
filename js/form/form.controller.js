import * as model from './model.js';
import * as view from './form.view.js';
import * as test from './form.test-data.js';

//! Function

function insertTestData() {
    const randomData = test.getTestData();
    view.renderTestData(randomData);
}
insertTestData();

console.log(elements.form);
console.log(elements.name);
console.log(elements.phone);
console.log(elements.email);
console.log(elements.product);