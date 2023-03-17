import { E, handleCrud } from '@/library';
export const main = () => {
  const table = E({
    tag: 'table',
    className: 'w-full table-fixed border ',
    child: [
      E({
        tag: 'thead',
        className: 'border ',
        child: [
          E({
            tag: 'tr',
            className: '',
            child: [
              E({
                tag: 'th',
                className: 'text-left px-4 py-3',
                child: 'Task Name',
              }),
              E({
                tag: 'th',
                className: '',
                child: 'priority',
              }),
              E({
                tag: 'th',
                className: '',
                child: 'Status',
              }),
              E({
                tag: 'th',
                className: '',
                child: 'Deadline',
              }),
              E({
                tag: 'th',
                className: '',
                child: 'Actions',
              }),
            ],
          }),
        ],
      }),
      E({
        tag: 'tbody',
        className: '',
        child: [],
      }),
    ],
  });
  table.addEventListener('click', handleCrud);
  return table;
};
