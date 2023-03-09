import {E} from '@/library';
// import  js  from '@/js';
export const Container = (...child) => {
  const container = E({
    tag: 'div',
    className: 'mx-auto',
    child,
  });

  // container.addEventListener('click', () => {
  //   console.log('Container clicked!');
  // });

  return container;
};
