const body = document.querySelector('body')
const button = body.querySelector('button')
const container = body.querySelector('#container')
const input = body.querySelector('#addTask')

function cardTask() {
    container.appendChild(createDiv());
}

const createP = (() => {
    let p = document.createElement('p')
    p.innerText = `${input.value}`

    return p;
})

const createCheckbox = (() => {
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')

    return checkbox;
})

const createBtn = (() => {
    let button = document.createElement('button')
    button.setAttribute('onClick', 'deleteTask()')
    button.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`

    return button;
})

const createDiv = (() => {
    let div = document.createElement('div');
    div.classList.add('task')

    div.appendChild(createP())
    div.appendChild(createCheckbox())
    div.appendChild(createBtn())

    return div;
})

button.addEventListener('click', () => {
    cardTask();

    input.value = '';
})

function deleteTask() {
    container.removeChild(body.querySelector('.task'));
}
