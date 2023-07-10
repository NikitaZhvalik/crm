function getTestData() {
    const testData = [
        {date: '25.02.23', product: 'course-html', name: 'Никита Жвалик', email: 'Nikita@mail.ru', phone: '+875422', status: 'new'},
        {date: '20.02.23', product: 'course-js', name: 'Вася Пупкин', email: 'Vasya@mail.ru', phone: '+94328', status: 'new'},
        {date: '14.02.23', product: 'course-vue', name: 'Иван Иванов', email: 'Ivan@mail.ru', phone: '+8953042', status: 'new'},
        {date: '08.02.23', product: 'course-php', name: 'Петя Петров', email: 'Petya@mail.ru', phone: '+8452098', status: 'new'},
        {date: '01.02.23', product: 'course-wordpress', name: 'Елена Полено', email: 'Elena@mail.ru', phone: '+8542738', status: 'new'},
    ];
    
    //! рандомный индекс
    function getRandomInt(max) {
      return Math.floor(Math.random() * max)
    }
    const randomIndex = getRandomInt(testData.length);
    return testData[randomIndex];
}

export {getTestData}