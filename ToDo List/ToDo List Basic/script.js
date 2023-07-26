/*
const todo = [{
    text = string,
    completed = boolean | false
    id = string
}] 
*/
const todoContainer = document.querySelector('ul');
const input = document.querySelector('input')
const button = document.querySelector('button')

const todos = []

const renderList = () => {
    todoContainer.innerHTML = ''
    todos.forEach((todo)=>{
        const li = document.createElement('li')
        const deleteButton = document.createElement('button')
        deleteButton.addEventListener('click', ()=> handleDelete(li, todo))
        deleteButton.innerHTML = 'Delete'
        deleteButton.style = `
        background-color:  rgb(255, 50, 50);
        margin: 3px;
        padding: 3px;
        border-radius: 10%`
        const editButton = document.createElement('button')
        editButton.addEventListener('click', ()=> handleEdit(li, todo.id))
        editButton.innerHTML = 'Edit'
        editButton.style = `
        background-color: orange;
        margin: 3px;
        padding: 3px;
        border-radius: 10%`
        li.innerHTML = `${todo.text}`
        li.appendChild(editButton)
        li.appendChild(deleteButton)
        todoContainer.appendChild(li)
        li.style = `
        font-size: 20px`
    })

    console.log(todos)
}

const handleAdd = (e)=>{
    const itemToAdd = input.value
    if(itemToAdd!==null && itemToAdd!==''){
        todos.push({
            text: itemToAdd,
            completed: false,
            id: Date.now()
        })
        input.value = ''
        renderList()
        return
    }else{
        return window.alert('Nothing To Add')
    }
}

const handleDelete = (li,todo)=>{
    li.remove()
    const id = todo.id
    const index = todos.findIndex((todo)=>todo.id===id)
    todos.splice(index,1)
}

const handleEdit = (li, id)=>{
    const newInput = document.createElement('input')
    const saveButton = document.createElement('button')
    saveButton.innerHTML = 'Save'
    saveButton.style = `
    background-color: lightgreen;
    margin: 3px;
    padding: 3px;
    border-radius: 10%`
    li.appendChild(newInput)
    li.appendChild(saveButton)
    const ele = todos.find((todo)=>todo.id===id)
    saveButton.addEventListener('click', ()=> {
        ele.text = newInput.value
        renderList()
    })
}

button.addEventListener('click',handleAdd)