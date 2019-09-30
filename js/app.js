// Using ES6
// UI vars
const form = document.querySelector('#todo-form')
const todoList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-todos')
const filter = document.querySelector('#filter')
const todoInput = document.querySelector('#todo')

// load the listener
loadEventListeners();

function loadEventListeners() {
    // console.log("check function")
    // DOM Load event for getting an item
    document.addEventListener('DOMContentLoaded', getTasks)
    // DOM load event for add todo
    document.addEventListener('submit', addTask)
    // DOM load event for delete todo
    document.addEventListener('click', removeTodo)
    // DOM load event for filter todo
    document.addEventListener('keyup', filterTodos)
    // DOM load ever for clear todo
    document.addEventListener('click', clearTodos)
}

// Get Task from LocalStorage
function getTasks() {
    // if (localStorage.getItem('todos') === null) {
    //     tasks = [];
    // } else {
    //     tasks = JSON.parse(localStorage.getItem('todos'))
    // }
    // decalare var todos must be an empty array
    let todos = [];

    todos.forEach(todo => {
        // create li element
        const li = document.createElement('li')
        // add class
        li.className = 'collection-item'
        // Create text node and append 
        li.appendChild(document.createTextNode(todo))
        // create new link element
        const link = document.createElement('a')
        // add class
        link.className = 'delete-item secondary-content'
        // add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>'

        console.log(link)
        // Append the link to link 
        link.appendChild(link);

        // append li to ul
        todoList.appendChild(li);
        console.log(todoList, "the todo List")
    });
}

// Add Task
function addTask(e) {
    // console.log('test method function')
    if (todoInput.value === '') {
        alert('add a Todo')
    }

    // Create li element
    const li = document.createElement('li')
    // Add class
    li.className = 'collection-item'
    // create text node and append to li
    li.appendChild(document.createTextNode(todoInput.value));
    // create new link element
    const link = document.createElement('a')
    // adding class for deleting item
    link.className = 'delete-item secondary-content'
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append the link to li
    li.appendChild(link)
    // Append li to ul
    todoList.appendChild(li);

    // store in localstorage    

    // clear input 
    todoInput.value = '';

    e.preventDefault();

}

// Remove todo
function removeTodo(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('You are about to delete item, Are you sure?')) {
            // selecting 2 times of its their own parentElements
            e.target.parentElement.parentElement.remove();
        }
    }
}
// Clear todos
function clearTodos() {
    // loop over the firstElement to lastElement
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild)
    }
}

// Filter task
function filterTodos(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(todo => {
        const item = todo.firstChild.textContent
        // console.log(item, 'check todo')
        if (item.toLocaleLowerCase().indexOf(text) != -1) {
            todo.style.display = 'block'
        } else {
            todo.style.display = 'none'
        }
    })
}
