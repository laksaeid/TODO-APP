import {
  E,
  icon,
  closeDrawer,
  // priorityFilter,
  // statusFilter,
  // deadLineFilter,
  handleFilter,
  // resetFilter,
} from '@/library';

export const drawer = () => {
  const drawer = E({
    tag: 'div',
    id: 'drawer',
    className:
      'absolute p-4 flex flex-col gap-3 bg-white h-screen top-0 -right-96 w-96 transition-all duration-1000',
    child: [
      E({
        tag: 'div',
        className: 'flex justify-between items-center',
        child: [
          E({
            tag: 'h3',
            className: 'text-lg font-semibold',
            child: 'filters',
          }),
          icon(
            'close-outline',
            'text-black cursor-pointer close-drawer text-2xl'
          ),
        ],
      }),
      E({
        tag: 'label',
        for: 'priority',
        child: 'Priority:',
      }),
      E({
        tag: 'select',
        className: 'rounded-md ',
        id: 'priority',
        child: [
          E({
            tag: 'option',
            selected: true,
            hidden: true,
            value: '/',
            child: 'select',
          }),
          E({
            tag: 'option',
            value: '/',
            child: 'All',
          }),
          E({
            tag: 'option',
            value: '=Low',
            child: 'Low',
          }),
          E({
            tag: 'option',
            value: '=Medium',
            child: 'Medium',
          }),
          E({
            tag: 'option',
            value: '=High',
            child: 'High',
          }),
        ],
      }),
      E({
        tag: 'label',
        for: 'status',
        child: 'status:',
      }),
      E({
        tag: 'select',
        className: 'rounded-md ',
        id: 'status',
        child: [
          E({
            tag: 'option',
            selected: true,
            hidden: true,
            value: '/',
            child: 'select',
          }),
          E({
            tag: 'option',

            value: '/',
            child: 'All',
          }),
          E({
            tag: 'option',
            value: '=Done',
            child: 'Done',
          }),
          E({
            tag: 'option',
            value: '=Doing',
            child: 'Doing',
          }),
          E({
            tag: 'option',
            value: '=Todo',
            child: 'Todo',
          }),
        ],
      }),
      E({
        tag: 'label',
        for: 'Deadline',
        child: 'Deadline:',
      }),
      E({
        tag: 'input',
        type: 'date',
        className: 'rounded-md',
        id: 'Deadline',
      }),
    ],
  });
  drawer.addEventListener('change', handleFilter);
  drawer.querySelector('.close-drawer').addEventListener('click', closeDrawer);
  return drawer;
};
