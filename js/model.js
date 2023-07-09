const formsAdd = loadRequests();

function createRecord(formData) {
    //! расчет id
    let id = 1;
    if (formsAdd.length > 0) {
      const lastElement = formsAdd[formsAdd.length - 1];
      const lastElId = lastElement.id;
      id = lastElement.id + 1;
    }
  
    //! формируем заявку
    const formAdd = {
      id: id,
      product: formData.product,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    formsAdd.push(formAdd);

    saveRequests();

    console.log(formAdd);
    console.log(formsAdd);
    // return formAdd;
}
console.log(formsAdd);

function saveRequests(){
  localStorage.setItem('formsAdd', JSON.stringify(formsAdd))
}

function loadRequests(){
  return localStorage.getItem('formsAdd') ? JSON.parse(localStorage.getItem('formsAdd')) : [];
}

export {formsAdd, createRecord}