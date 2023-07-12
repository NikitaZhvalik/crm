const formsAdd = loadRequests();

function createRecord(formData) {
    //! расчет id
    let id = 1;
    if (formsAdd.length > 0) {
      const lastElement = formsAdd[formsAdd.length - 1];
      id = lastElement.id + 1;
    }

    //! работа с временем
    let date = new Date().toLocaleDateString();
  
    //! формируем заявку
    const formAdd = {
      id: id,
      date: date,
      status: 'new', 
      ...formData,
    };

    formsAdd.push(formAdd);

    saveRequests();

    console.log(formsAdd);
}
console.log(formsAdd);

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
  return formsAdd.find((item) => item.id == id)
}

export {formsAdd, createRecord, getForms, getRequestById}