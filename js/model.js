const formAdd = [];

function createRecord(formData) {
    //! расчет id
    let id = 1;
    if (formAdd.length > 0) {
      const lastElement = formAdd[formAdd.length - 1];
      const lastElId = lastElement.id;
      id = lastElement.id + 1;
    }
  
    //! формируем заявку
    const record = {
      id: id,
      date: date,
      product: product,
      name: name,
      email: email,
      phone: phone,
      status: 'new',
    };
  
    //! добавляем заявку в массив
    formAdd.push(record);
    return record;
}

export {formAdd, createRecord}