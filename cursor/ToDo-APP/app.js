const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// ローカルストレージからタスクを読み込む
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// 保存されたタスクを表示
tasks.forEach(task => {
  addTask(task.text, task.completed);
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    addTask(text);
    input.value = '';
    saveTasks();
  }
});

function addTask(text, completed = false) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  if (completed) {
    li.classList.add('completed');
  }

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = completed;
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed', checkbox.checked);
    saveTasks();
  });

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  const delBtn = document.createElement('button');
  delBtn.className = 'delete-btn';
  delBtn.textContent = '削除';
  delBtn.addEventListener('click', () => {
    list.removeChild(li);
    saveTasks();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);
}

function saveTasks() {
  const taskElements = list.querySelectorAll('.todo-item');
  tasks = Array.from(taskElements).map(task => ({
    text: task.querySelector('.task-text').textContent,
    completed: task.querySelector('input[type="checkbox"]').checked
  }));
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
