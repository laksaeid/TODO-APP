import { E, status } from '@/library';
import { btnMaker } from '@/components';
export const render = (tasks) => {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  tasks.forEach((task, index) => {
    const row = E({
      tag: 'tr',
      id: task.id,
      className: 'border h-[50px] text-xs sm:text-sm md:text-base',
      child: [
        E({
          tag: 'td',
          className: 'px-4 py-3 font-semibold',
          child: task.taskName,
        }),
        status(task.priority, 'gray'),
        status(task.status, 'red'),
        E({
          tag: 'td',
          className: 'text-center border-x px-5',
          child: [
            E({
              tag: 'p',
              className: 'border border-purple-500 rounded-full px-2',
              child: task.date,
            }),
          ],
        }),
        E({
          tag: 'td',
          className: 'text-center space-x-2',
          child: [
            btnMaker(
              '<ion-icon class="text-xl rounded-md text-white p-1 bg-rose-500" name="trash"></ion-icon>',
              'icon',
              'delete'
            ),
            btnMaker(
              '<ion-icon class="text-xl  rounded-md text-white p-1 bg-green-500" name="pencil"></ion-icon>',
              'icon',
              'edit'
            ),
            btnMaker(
              '<ion-icon class="text-xl rounded-md text-white p-1 bg-gray-500" name="eye"></ion-icon>',
              'icon',
              'view'
            ),
          ],
        }),
      ],
    });
    tbody.append(row);
  });
};
