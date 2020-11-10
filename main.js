const listElement = document.querySelector('ul')
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')

const tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || []

function mostraTarefas() {

    listElement.innerHTML = ''

    for (item of tarefas) {

        const itemList = document.createElement('li')
        const itemText = document.createTextNode(item)

        itemList.setAttribute('class', 'mdl-list__item')

        const linkElement = document.createElement('a')
        linkElement.setAttribute('class', 'material-icons')

        const linkText = document.createTextNode('delete')
        linkElement.appendChild(linkText)

        const pos = tarefas.indexOf(item)
        linkElement.setAttribute('onclick', `removeTarefa(${pos})`)

        itemList.appendChild(itemText)
        itemList.appendChild(linkElement)

        listElement.appendChild(itemList)
    }
}

mostraTarefas()

function addTerefa() {
    const tarefa = inputElement.value

    tarefas.push(tarefa)

    inputElement.value = ''
    mostraTarefas()
    salvarNoLocalStorage()
}

buttonElement.setAttribute('onclick', 'addTerefa()')

function removeTarefa(pos) {
    tarefas.splice(pos, 1)
    mostraTarefas()
    salvarNoLocalStorage()
}

function salvarNoLocalStorage() {
    localStorage.setItem('list_tarefas', JSON.stringify(tarefas))
}