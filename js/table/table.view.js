const elements = {
    containerForms: document.querySelector('#tbody'),
    select: document.querySelector('#productSelect'),
    topStatusBar: document.querySelector('#topStatusBar'),
}

function renderAllRequest(records) {
    elements.containerForms.innerHTML = '';

    const statusObj = {
        new: "Новая",
        inwork: "В работе",
        complete: "Завершенная",
    }

    const statusClassObj = {
        new: "badge-danger",
        inwork: "badge-warning",      
        complete: "badge-success",
    }

    const productObj = {
        'course-html': "Курс по верстке",
        'course-js': "Курс по JavaScript",
        'course-vue': "Курс по VUE JS",
        'course-php': "Курс по PHP",
        'course-wordpress': "Курс по WordPress",
    }

    for (const record of records) {
        const html = `
        <tr>
            <th scope="row">${record.id}</th>
            <td>${record.date}</td>
            <td>${productObj[record.product]}</td>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>${record.phone}</td>
            <td>
                <div class="badge badge-pill ${statusClassObj[record.status]}">${statusObj[record.status]}</div>
            </td>
            <td>
                <a href="edit.html?id=${record.id}">Редактировать</a>
            </td>
        </tr>
    `
    elements.containerForms.insertAdjacentHTML("beforeend", html)
    }
}

function updateStatusBar(value) {
    elements.topStatusBar.querySelectorAll('a').forEach((link) => link.classList.remove('active'));
    elements.topStatusBar.querySelector(`a[data-value="${value}"]`).classList.add('active');
}

export {elements, renderAllRequest, updateStatusBar}