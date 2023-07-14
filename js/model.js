const formsAdd = loadRequests();

const filter = {
	products: 'all',
	status: 'all',
}

function changeFilter(prop, value) {
	filter[prop] = value;
	return filter
}

function filterRequests(filter) {
	let filterRequests;

	//! фильтр по продукту
	if (filter.products !== 'all') {
		filterRequests = formsAdd.filter((request) => request.product === filter.products);
	} else {
		filterRequests = [...formsAdd];
	}

	//! фильтр по статусу
	if (filter.status !== 'all') {
		filterRequests = filterRequests.filter((request) => request.status === filter.status);
	}

	return filterRequests;
}

function countNewRequest() {
	const newRequests = formsAdd.filter((request) => request.status === 'new');
	return newRequests.length;
}

function countAllRequest() {
  	return formsAdd.length;
}

function countCompleteRequest() {
	const completeRequest = formsAdd.filter((request) => request.status === 'complete');
	return completeRequest.length;
}

function countInWorkRequest() {
	const inWorkRequest = formsAdd.filter((request) => request.status === 'inwork');
	return inWorkRequest.length;
}

function createRecord(formData) {
    //! расчет id
    let id = 1;
    if (formsAdd.length > 0) {
		const lastElement = formsAdd[formsAdd.length - 1];
		id = lastElement.id + 1;
    }

    //! работа с временем
    let date = new Date().toLocaleDateString();
    let dateTime = new Date().toLocaleTimeString();
  
    //! формируем заявку
    const formAdd = {
		id: id,
		date: date,
		dateTime: dateTime,
		status: 'new', 
		...formData,
    };

    formsAdd.push(formAdd);

    saveRequests();
}

function saveRequests(){
 	localStorage.setItem('formsAdd', JSON.stringify(formsAdd))
}

function loadRequests(){
  	return localStorage.getItem('formsAdd') ? JSON.parse(localStorage.getItem('formsAdd')) : [];
}

function getForms(){
  	return formsAdd
}

function getRequestById(id) {
	const request = formsAdd.find((item) => item.id == id);
	request.dateDate = new Date(request.date).toLocaleDateString();
	return request;
}

function updateRequest(formData) {
	const request = getRequestById(formData.get('id'));
	request.name = formData.get('name');
	request.email = formData.get('email');
	request.phone = formData.get('phone');
	request.product = formData.get('product');
	request.status = formData.get('status');
	saveRequests();
}

export {formsAdd, changeFilter, filterRequests, createRecord, getForms, getRequestById, updateRequest, countNewRequest
,countAllRequest, countCompleteRequest, countInWorkRequest, }