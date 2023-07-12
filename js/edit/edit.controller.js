import * as model from './../model.js';
import * as view from './edit.view.js';


//! Получаем id завки при нажатии на ссылку 'редактировать' 
function init() {
    const id = getRequestId();
    const request = model.getRequestById(id);
    view.renderRequest(request);
}
init();

function getRequestId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}