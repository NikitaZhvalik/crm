const containerForms = document.querySelector('#tbody');
console.log(containerForms);

function renderAllForm() {
    const html = `
            <tr>
                <th scope="row">1</th>
                <td>01.04.2020</td>
                <td>Курс по верстке</td>
                <td>Петр Сергеевич</td>
                <td>info@inbox.ru</td>
                <td>+7 (909) 77-55-777</td>
                <td>
                    <div class="badge badge-pill badge-danger">Новый</div>
                </td>
                <td>
                    <a href="edit.html">Редактировать</a>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>01.04.2020</td>
                <td>Курс по верстке</td>
                <td>Василий Петрович</td>
                <td>info@gmail.ru</td>
                <td>+7 (909) 77-55-777</td>
                <td>
                    <div class="badge badge-pill badge-warning">В работе</div>
                </td>
                <td>
                    <a href="edit.html">Редактировать</a>
                </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>01.04.2020</td>
                <td>Курс по верстке</td>
                <td>Николай Владимирович</td>
                <td>info@mail.ru</td>
                <td>+7 (909) 77-55-777</td>
                <td>
                    <div class="badge badge-pill badge-success">Завершенный</div>
                </td>
                <td>
                    <a href="edit.html">Редактировать</a>
                </td>
            </tr>
    `
    containerForms.insertAdjacentHTML("beforeend", html)
}

export {renderAllForm}

// renderAllForm();