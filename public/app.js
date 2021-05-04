const form = document.querySelector('#tdl-task-form');
const taskList = document.querySelector('#tdl-task-list');
const clearTask = document.querySelector('.tdl-clear-tasks');
const taskInput = document.querySelector('#tdl-task-input');


document.querySelector('#tdl-add-btn').addEventListener('click', addTask);
document.querySelector('.delete-icon').addEventListener('click', removeTask);

function addTask() {
  if (taskInput.value === '') {
  }
  if (taskInput.value == '') {
      return false;
  }
    const li = document.createElement('li');
        li.className = 'tdl-task-list-item tdl-task-list-item flex items-center place-items-center justify-between align-middle hover:bg-indigo-100 px-6 py-2 hover:shadow';
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.className = 'delete-icon';
        link.innerHTML = '<i class="fas fa-trash-alt delete-icon flex-shrink-0 h-6 w-6 text-red-500 cursor-pointer"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = '';
    console.log(li);
}

function removeTask() {
    let li = document.getElementById('#tdl-task-list-item');
    li.remove();
    console.log(li);
}
  

