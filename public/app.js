const taskInput = document.getElementById('tdl-add-task');
const addBtn = document.getElementById('tdl-add-btn');

function addTask() {
    if(taskInput.value == "") {
        alert("Task Empty!");
        return;
    };
};

console.log(addTask);
