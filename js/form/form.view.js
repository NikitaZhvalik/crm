//! DOM
const elements = {
    form: document.getElementById("#form-group"),
    name: document.getElementById("#name"),
    phone: document.getElementById("#phone"),
    email: document.getElementById("#email"),
    product: document.getElementById("#product"),
}

function renderTestData(randomData) {
    elements.name.value = randomData.name;
    elements.phone.value = randomData.phone;
    elements.email.value = randomData.email;
    // elements.product.value = randomData.value;
}

console.log(elements.form);
console.log(elements.name);
console.log(elements.phone);
console.log(elements.email);
console.log(elements.product);

{/* <label>Ваши данные:</label>
<div class="form-group">
    <input id="name" type="text" name="name" autocomplete="on" class="form-control" placeholder="Имя и Фамилия" required>
</div>
<div class="form-group">
    <input id="phone" type="text" name="phone" autocomplete="on" class="form-control" placeholder="Телефон">
</div>
<div class="form-group">
    <input id="email" type="email" name="email" autocomplete="on" class="form-control" placeholder="Email" required>
</div>
<div class="form-group">
    <label for="exampleFormControlSelect1">Продукт:</label>
    <select id="product" name="product" class="form-control" id="exampleFormControlSelect1">
        <option value="course-html">Курс по верстке</option>
        <option value="course-js">Курс по JavaScript</option>
        <option value="course-vue">Курс по VUE JS</option>
        <option value="course-php">Курс по PHP</option>
        <option value="course-wordpress">Курс по WordPress</option>
    </select>
</div> */}