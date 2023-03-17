import { E } from '@/library';
export const Container = (...child) => {
  const container = E({
    tag: 'div',
    className: 'mx-auto',
    child,
  });

  return container;
};
