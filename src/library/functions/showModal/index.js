export const showModal = () => {
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  modal.classList.remove('invisible');
  modal.classList.remove('opacity-0');
  overlay.classList.remove('invisible');
  overlay.classList.remove('opacity-0');
};
