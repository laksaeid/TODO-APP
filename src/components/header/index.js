import { showModal ,E,icon, Search,showDrawer } from '@/library';

export const Header = () => {
  const header = E({
    tag: 'header',
    className: 'bg-blue-800 w-full h-16 flex gap-3 items-center px-3',
    child: [
      icon('list', 'text-white text-3xl cursor-pointer'),
      E({
        tag: 'p',
        className: 'text-white flex-1',
        child: 'My To-Do Tasks',
      }),
      E({
        tag: 'div',
        className: 'flex gap-2 items-center rounded-md mr-4 w-60 bg-blue-700 p-1',
        child: [
          icon('search', 'text-white cursor-pointer'),
          E({
            tag: 'input',
            type:'',
            id:'search',
            className: 'bg-transparent border-0 outline-0 text-white',
          }),
        ],
      }),
      icon('funnel', 'text-white text-2xl mr-2 cursor-pointer'),
      icon('add', 'text-blue-500 bg-white text-xl cursor-pointer'),
    ],
  });
  header.children[3].addEventListener('click',showDrawer)
  header.children[2].children[1].addEventListener('input',Search)
  header.children[4].addEventListener('click', () => showModal());

  return header;
};
