export const closeDrawer = () => {
  const overlay = document.getElementById('overlay');
  const drawer = document.getElementById('drawer');
  drawer.className =
    'absolute p-4 flex flex-col gap-3 bg-white h-screen top-0 -right-96 w-96 transition-all duration-1000';
  overlay.classList.add('invisible');
  overlay.classList.add('opacity-0');
};
