import { E, submitHandler } from '@/library';
import { FormFooter } from '../FormFooter';

export const Form = () => {
  const form = E({
    tag: 'form',
    className: 'p-4',
    child: [
      E({
        tag: 'div',
        className: 'relative',
        child: [
          E({
            tag: 'input',
            type: 'text',
            id: 'taskName',
            className:
              'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer',
            placeholder: ' ',
          }),
          E({
            tag: 'label',
            for: 'taskName',
            className:
              'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1',
            child: 'Task Name',
          }),
        ],
      }),
      E({
        tag: 'div',
        className: 'flex w-full mt-10 justify-between',
        child: [
          E({
            tag: 'select',
            id: 'priority',
            className:
              'block flex-1 py-2.5 px-0 w-full text-sm text-gray-500 w-28 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer',
            child: [
              E({
                tag: 'option',
                restAttr: { selected: '', hidden: '' },
                child: 'Priority',
              }),
              E({
                tag: 'option',
                className: 'text-center',
                child: 'Low',
              }),
              E({
                tag: 'option',
                className: 'text-center',
                child: 'Medium',
              }),
              E({
                tag: 'option',
                className: 'text-center',
                child: 'High',
              }),
            ],
          }),
          E({
            tag: 'select',
            id: 'status',
            className:
              'block flex-1 py-2.5 px-0 mx-10 w-full text-sm text-gray-500 w-28 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer',
            child: [
              E({
                tag: 'option',
                restAttr: { selected: '', hidden: '' },
                child: 'Status',
              }),
              E({
                tag: 'option',
                className: 'text-center',
                child: 'Todo',
              }),
              E({
                tag: 'option',
                className: 'text-center',
                child: 'Doing',
              }),
              E({
                tag: 'option',
                className: 'text-center',
                child: 'Done',
              }),
            ],
          }),
          E({
            tag: 'input',
            id: 'date',
            type: 'date',
            className:
              'block flex-1 py-2.5 px-0 w-full text-sm text-gray-500 w-28 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer',
          }),
        ],
      }),
      E({
        tag: 'textarea',
        id: 'message',
        rows: '4',
        className:
          'mt-10 max-h-[150px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
        placeholder: 'Write your thoughts here...',
      }),
      FormFooter(),
    ],
  });
  form.addEventListener('submit', submitHandler);
  return form;
};
