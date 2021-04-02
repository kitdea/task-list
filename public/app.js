const form = document.querySelector('#tdl-task-form');
const taskList = document.querySelector('#tdl-task-list')
const taskInput = document.querySelector('#tdl-task-input');
const addBtn = document.querySelector('#tdl-add-btn');

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('tdl-add-btn', addTask);
};

function addTask() {
    if(taskInput.value === "") {
        alert("Add a Task!");
    }

    const li = document.createElement('li');
    li.className = 'tdl-task-list-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item';
    link.innerHTML = '<i class="fas fa-trash-alt delete-icon flex-shrink-0 h-6 w-6 text-red-400"></i>';
    li.appendChild(link);

    

    e.preventDefault();
};

