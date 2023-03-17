export const showDrawer = () => {
  const overlay = document.getElementById('overlay');
  const drawer = document.getElementById('drawer');
  drawer.className =
    'absolute p-4 flex flex-col gap-3 bg-white h-screen top-0 -right-0 w-96 transition-all duration-1000 z-30';
  overlay.classList.remove('invisible');
  overlay.classList.remove('opacity-0');
};
