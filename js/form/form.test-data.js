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

function getTestData() {
    const testData = [
        {date: '25.02.23', product: 'course-html', name: 'Никита Жвалик', email: 'Nikita@mail.ru', phone: '123', status: 'new'},
        {date: '20.02.23', product: 'course-js', name: 'Вася Пупкин', email: 'Vasya@mail.ru', phone: '+94328', status: 'new'},
        {date: '14.02.23', product: 'course-vue', name: 'Иван Иванов', email: 'Ivan@mail.ru', phone: '784256', status: 'new'},
        {date: '08.02.23', product: 'course-php', name: 'Петя Петров', email: 'Petya@mail.ru', phone: '-531', status: 'new'},
        {date: '01.02.23', product: 'course-wordpress', name: 'Елена Полено', email: 'Elena@mail.ru', phone: '=75423', status: 'new'},
    ];
    //! рандомный индекс
    function getRandomInt(max) {
      return Math.floor(Math.random() * max)
    }
    const randomIndex = getRandomInt(testData.length);
    return testData[randomIndex];
}

// function getMonthYear() {
//     const now = new Date();
//     const year = now.getFullYear();
//     const timeFormatter = new Intl.DateTimeFormat('ru-RU', {
//         month: 'long',
//     })
//     const month = timeFormatter.format(now);
//     return {month, year};
// }

export {createRecord, getTestData}