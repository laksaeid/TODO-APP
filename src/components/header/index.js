import {
  showModal,
  E,
  icon,
  showDrawer,
  filterHandler,
  render,
  showLoading,
  hideLoading,
  getItems,
} from '@/library';
import { debounce } from 'lodash/function';

export const Header = () => {
  const header = E({
    tag: 'header',
    className: 'bg-blue-800 w-full h-16 flex gap-3 items-center px-3',
    child: [
      icon('list', 'text-white text-3xl cursor-pointer'),
      E({
        tag: 'p',
        className: 'text-white flex-1 text-xs sm:text-sm md:text-base',
        child: 'My To-Do Tasks',
      }),
      E({
        tag: 'div',
        className:
          'flex gap-2 items-center rounded-md mr-4 w-60 bg-blue-700 p-1',
        child: [
          icon('search', 'text-white cursor-pointer'),
          E({
            tag: 'input',
            type: '',
            id: 'search',
            className: 'bg-transparent border-0 outline-0 text-white',
          }),
        ],
      }),
      icon('funnel', 'text-white text-2xl mr-2 cursor-pointer'),
      icon('add', 'text-blue-500 bg-white text-xl cursor-pointer'),
    ],
  });
  header.children[3].addEventListener('click', showDrawer);
  header.querySelector('#search').addEventListener(
    'input',
    debounce(async (e) => {
      showLoading();
      if (!e.target.value) {
        document.querySelector('#rpp').value = 'select';
        document.querySelector('#rpp').disabled = false;
        document.querySelector('#prev').classList.remove('cursor-not-allowed');
        document.querySelector('#prev').disabled = false;
        document.querySelector('#next').classList.remove('cursor-not-allowed');
        document.querySelector('#next').disabled = false;
        await getItems(1, 5).then((res) => render(res));
      } else {
        document.querySelector('#rpp').value = 'All';
        document.querySelector('#rpp').disabled = 'true';
        document.querySelector('#prev').classList.add('cursor-not-allowed');
        document.querySelector('#prev').disabled = true;
        document.querySelector('#next').classList.add('cursor-not-allowed');
        document.querySelector('#next').disabled = true;
        await filterHandler(`q=${e.target.value}`).then((res) => {
          render(res);
        });
      }
      hideLoading();
    }, 1000)
  );
  header.children[4].addEventListener('click', () => showModal());

  return header;
};
