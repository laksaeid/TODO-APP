import { E, icon } from '@/library';

const variants = {
  delete: icon('trash', 'py-1 px-2 text-white bg-red-500 rounded-md'),
  edit: icon('pencil', 'py-1 px-2 text-white bg-green-500 rounded-md'),
  view: icon('eye', 'py-1 px-2 text-white bg-gray-400 rounded-md'),
};
export const ActionBtn = (action) => {
  return E({
    tag: 'button',
    className: 'pt-2',
    restAttr: {
      'data-action': action,
    },
    child: [variants[action]],
  });
};
