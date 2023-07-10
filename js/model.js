const formsAdd = loadRequests();

  //! работа с временем
function formatCommentDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = (date.getFullYear() - 2000).toString();
  return `${day}.${month}.${year}`;
}

function createRecord(formData) {
    //! расчет id
    let id = 1;
    if (formsAdd.length > 0) {
      const lastElement = formsAdd[formsAdd.length - 1];
      const lastElId = lastElement.id;
      id = lastElement.id + 1;
    }

    //! работа с временем
    let date = new Date();
    date = formatCommentDate(date);
  
    //! формируем заявку
    const formAdd = {
      id: id,
      date: date,
      product: formData.product,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
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

export {formsAdd, createRecord, getForms}