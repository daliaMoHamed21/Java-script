let tasks = [];

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.name;

    if (task.status === 'done') {
      listItem.classList.add('done');
    }

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.onclick = function() {
      toggleStatus(index);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      deleteTask(index);
    };

    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value.trim();

  if (taskName !== '') {
    tasks.push({ name: taskName, status: 'pending' });
    taskInput.value = '';
    displayTasks();
  }
}

function toggleStatus(index) {
  if (tasks[index].status === 'pending') {
    tasks[index].status = 'done';
  } else {
    tasks[index].status = 'pending';
  }
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}


displayTasks();
