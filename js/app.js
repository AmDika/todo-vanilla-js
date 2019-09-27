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
    // DOM load event for add task
    document.addEventListener('submit', addTask)
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
    console.log('test method function')
    if (todoInput.value === '') {
        alert('add a task')
    }

    // // Create li element
    // const li = document.createElement('li')
    // // Add class
    // li.className = 'collection-item'
    // // create text node and append to li
    // li.appendChild(document.createTextNode(taskInput.value));
    // // create new link element
    // const link = document.createElement('a')
    // // adding class for deleting item
    // link.className = 'delete-item secondary-content'
    // // add icon html
    // link.innerHTML = '<i class="fa fa-remove"></i>'
    // // Append the link to li
    // li.appendChild(link)

    // store in localstorage

    // clear input 
    todoInput.value = '';

    e.preventDefault();

}
