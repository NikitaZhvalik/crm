const elements = {
    containerForms: document.querySelector('#tbody'),
}

function renderAllForm(records) {
    for (const record of records) {
        const html = `
        <tr>
            <th scope="row">${record.id}</th>
            <td>${record.date}</td>
            <td>${record.product}</td>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>${record.phone}</td>
            <td>
                <div class="badge badge-pill badge-danger">Новый</div>
            </td>
            <td>
                <a href="edit.html">Редактировать</a>
            </td>
        </tr>
    `
    elements.containerForms.insertAdjacentHTML("beforeend", html)
    }
}

export {elements, renderAllForm}