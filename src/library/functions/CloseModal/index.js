import { isEdit } from '@/library';

export const CloseModal = () => {
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  modal.classList.add('invisible');
  modal.classList.add('opacity-0');
  overlay.classList.add('invisible');
  overlay.classList.add('opacity-0');
  const form = document.querySelector('form');
  form.reset();
  form.submit.classList.remove('cursor-not-allowed');
  form.submit.classList.remove('opacity-50');
  form.submit.disabled = false;
  form.taskName.disabled = false;
  form.message.disabled = false;
  form.priority.disabled = false;
  form.status.disabled = false;
  form.date.disabled = false;
  isEdit.status = false;
  document.querySelector('#rpp').value = 'select';
  document.querySelector('#rpp').disabled = false;
  document.querySelector('#prev').classList.remove('cursor-not-allowed');
  document.querySelector('#prev').disabled = false;
  document.querySelector('#next').classList.remove('cursor-not-allowed');
  document.querySelector('#next').disabled = false;
  form.submit.innerHTML = 'Save';
  const drawer = document.getElementById('drawer');
  drawer.className =
    'absolute p-4 flex flex-col gap-3 bg-white h-screen top-0 -right-96 w-96 transition-all duration-1000';
};
