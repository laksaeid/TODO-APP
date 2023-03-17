import * as lib from '@/library';
export const page = { currentPage: 1, rpp: 5 };
export const isEdit = { status: false };
const data = await lib.getItems();
let editId;
export const submitHandler = async (e) => {
  e.preventDefault();
  const form = document.querySelector('form');
  const taskName = form.taskName.value;
  const priority = form.priority.value;
  const status = form.status.value;
  const date = form.date.value;
  const msg = form.message.value;
  if (!isEdit.status) {
    const task = {
      taskName,
      priority,
      status,
      date,
      msg,
      id: Date.now(),
    };
    data.unshift(task);
    lib.CloseModal();
    lib.showLoading();
    await lib.sendItems(task);
    page.currentPage=1
    await lib.getItems(page.currentPage, page.rpp).then((res) => {
      lib.render(res);
    });
    lib.hideLoading();
  } else {
    data.forEach(async (task) => {
      if (task.id === +editId) {
        task.taskName = taskName;
        task.priority = priority;
        task.status = status;
        task.date = date;
        task.msg = msg;
        lib.CloseModal();
        lib.showLoading();
        await lib.editItem(task.id, task);
        await lib.getItems(page.currentPage, page.rpp).then((res) => {
          lib.render(res);
        });
        lib.hideLoading();
        return task;
      }
    });
    form.submit.innerHTML = 'save';
  }
};
export const handleCrud = async (e) => {
  if (!e.target.closest('BUTTON')) return;
  if (e.target.closest('BUTTON').id === 'delete') {
    const deleteId = e.target.closest('tr').id;
    lib.showLoading();
    await lib.deleteItem(deleteId);
    await lib
      .getItems(page.currentPage, page.rpp)
      .then((res) => lib.render(res));
    lib.hideLoading();
  }
  if (e.target.closest('BUTTON').id === 'edit') {
    const form = document.querySelector('form');
    editId = e.target.closest('tr').id;
    const editTask = data.find((task) => task.id === +editId);
    form.taskName.value = editTask.taskName;
    form.message.value = editTask.msg;
    form.priority.value = editTask.priority;
    form.status.value = editTask.status;
    form.date.value = editTask.date;
    lib.showModal();
    isEdit.status = true;
    form.submit.innerHTML = 'edit';
  }
  if (e.target.closest('BUTTON').id === 'view') {
    const form = document.querySelector('form');
    editId = e.target.closest('tr').id;

    const editTask = data.find((task) => task.id === +editId);
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
    isEdit.status = true;
    lib.showModal();
  }
};
export const rppHandle = async (e) => {
  if (e.target.value === 'All') {
    lib.showLoading();
    await lib.getItems(1, 999).then((res) => lib.render(res));
    page.rpp = 999;
    lib.hideLoading();
  } else {
    lib.showLoading();
    page.rpp = e.target.value;
    await lib
      .getItems(page.currentPage, page.rpp)
      .then((res) => lib.render(res));
    lib.hideLoading();
  }
};
export const pagination = async (e) => {
  if (!e.target.closest('button')) return;
  if (e.target.closest('button').id === 'next') {
    if (!lib.header.includes('next')) return;
    lib.showLoading();
    ++page.currentPage;
    await lib.getItems(page.currentPage, page.rpp).then((res) => {
      lib.render(res);
    });
    lib.hideLoading();
  }
  if (e.target.closest('button').id === 'prev') {
    if (page.currentPage === 1) return;
    lib.showLoading();
    --page.currentPage;
    await lib.getItems(page.currentPage, page.rpp).then((res) => {
      lib.render(res);
    });
    lib.hideLoading();
  }
};
