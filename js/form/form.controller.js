import * as model from './model.js';
import * as view from './form.view.js';
import * as test from './form.test-data.js';

//! Function

function insertTestData() {
    const randomData = test.getTestData();
    view.renderTestData(randomData);
}
insertTestData();