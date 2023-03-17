import { E, pagination, rppHandle } from '@/library';
export const footer = () => {
  const footer = E({
    tag: 'div',
    className: 'w-full h-14 text-right p-4 flex justify-end items-center',
    child: [
      E({
        tag: 'div',
        className: 'mt-2 space-x-4 bg-blue-800 rounded-l flex items-center',
        child: [
          E({
            tag: 'label',
            className: 'ml-3 text-white',
            child: 'Rows per page : ',
          }),
          E({
            tag: 'select',
            id: 'rpp',
            className:
              'appearance-none hover:bg-blue-900 border-l border-blue-700 border-0 rounded h-[36px] outline-0 text-white pb- focus:ring-0 bg-blue-800',
            child: [
              E({
                tag: 'option',
                hidden: true,
                selected: true,
                child: 'select',
              }),
              E({
                tag: 'option',
                child: 'All',
              }),
              E({
                tag: 'option',
                child: 3,
              }),
              E({
                tag: 'option',
                child: 6,
              }),
              E({
                tag: 'option',
                child: 10,
              }),
            ],
          }),
        ],
      }),
      E({
        tag: 'div',
        id: 'pagination',
        className: 'flex gap-3 items-center',
        child: [
          E({
            tag: 'div',
            className: 'inline-flex mt-2 xs:mt-0',
            child: [
              E({
                tag: 'button',
                id: 'prev',
                className:
                  'inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-800 border-l border-blue-700 hover:bg-blue-900',
                innerHTML:
                  '<svg aria-hidden="true", class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>Prev',
              }),
              E({
                tag: 'button',
                id: 'next',
                className:
                  'inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-800 border-0 border-l border-blue-700 rounded-r hover:bg-blue-900',
                innerHTML:
                  'Next<svg aria-hidden="true", class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>',
              }),
            ],
          }),
        ],
      }),
    ],
  });
  footer.querySelector('#pagination').addEventListener('click', pagination);
  footer.querySelector('#rpp').addEventListener('change', rppHandle);
  return footer;
};
