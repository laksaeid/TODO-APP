import { render, CloseModal, showModal } from '@/library';
export let tasks = getItemFromLocalStorage() || [];
let isEdit = false;
// eslint-disable-next-line no-unused-vars
let editId;
const page = { currentPage: 1, rpp:'All'}
export const submitHandler = (e) => {
  e && e.preventDefault();
  const form = document.querySelector('form');
  const taskName = form.taskName.value;
  const priority = form.priority.value;
  const status = form.status.value;
  const date = form.date.value;
  const msg = form.message.value;
  if (!isEdit) {
    const task = {
      id: Date.now(),
      taskName,
      priority,
      status,
      date,
      msg,
    };
    tasks.push(task);
  } else {
    tasks = tasks.map((task) => {
      if (task.id === +editId) {
        task.taskName = taskName;
        task.priority = priority;
        task.status = status;
        task.date = date;
        task.msg = msg;
      }
      form.submit.innerHTML = 'save';
      return task;
    });
  }
  setItemToLocalStorage(tasks);
  render(tasks);
  CloseModal();

  // console.log(taskName.value,priority.value,status.value,date.value,msg.value,tasks,isEdit,editId);
};
function setItemToLocalStorage(data) {
  localStorage.setItem('tasks', JSON.stringify(data));
}
function getItemFromLocalStorage() {
  return JSON.parse(localStorage.getItem('tasks'));
}
export const handleCrud = (e) => {
  if (!e.target.closest('BUTTON')) return;
  if (e.target.closest('BUTTON').id === 'delete') {
    const deleteId = e.target.closest('tr').id;
    tasks = tasks.filter((task) => task.id !== +deleteId);
    setItemToLocalStorage(tasks);
    render(tasks);
  }
  if (e.target.closest('BUTTON').id === 'edit') {
    const form = document.querySelector('form');
    editId = e.target.closest('tr').id;
    const editTask = tasks.find((task) => task.id === +editId);
    form.taskName.value = editTask.taskName;
    form.message.value = editTask.msg;
    form.priority.value = editTask.priority;
    form.status.value = editTask.status;
    form.date.value = editTask.date;
    isEdit = true;
    form.submit.innerHTML = 'edit';
    showModal();
  }
  if (e.target.closest('BUTTON').id === 'view') {
    const form = document.querySelector('form');
    editId = e.target.closest('tr').id;
    const editTask = tasks.find((task) => task.id === +editId);
    form.taskName.value = editTask.taskName;
    form.message.value = editTask.msg;
    form.priority.value = editTask.priority;
    form.status.value = editTask.status;
    form.date.value = editTask.date;
    form.submit.classList.add('cursor-not-allowed');
    form.submit.classList.add('opacity-50');
    form.submit.disabled = true;
    form.taskName.disabled = true;
    form.message.disabled = true;
    form.priority.disabled = true;
    form.status.disabled = true;
    form.date.disabled = true;
    showModal();
  }
};

export const Search = (e) => {
  const filter = tasks.filter((task) => task.taskName.includes(e.target.value));
  render(filter);
};
export const priorityFilter = (e) => {
  if (e.target.value === 'All') {
    render(tasks);
  } else {
    const filter = tasks.filter((task) => task.priority === e.target.value);
    render(filter);
  }
};
export const statusFilter = (e) => {
  if (e.target.value === 'All') {
    render(tasks);
  } else {
    const filter = tasks.filter((task) => task.status === e.target.value);
    render(filter);
  }
};
export const deadLineFilter = (e) => {
  const filter = tasks.filter(task => toStamp(task.date) === toStamp(e.target.value));
  render(filter);
  
}

function toStamp(date) {
  const splited = date.split('-');
  const stamp = new Date(splited[2] , splited[1] - 1 , splited[0])
  return stamp.getTime()
}

export const rppHandle = (e) => {
  page.rpp = e.target.value
  if (page.rpp === 'All') {
    render(tasks);
  } else {
    const filter = tasks.filter((task,index) => index < page.rpp);
    render(filter);
  }
}
export const pagination = () => {
  
}