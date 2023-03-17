import { E } from '@/library';
const variens = {
  outline: 'border border-blue-500 text-blue-500 px-2 py-1 rounded-md',
  fill: 'bg-blue-500 text-white px-3 py-1 rounded-md',
  icon: '',
};
export const btnMaker = (text, style, id = '', type = '') => {
  return E({
    tag: 'button',
    className: variens[style],
    id,
    type,
    innerHTML: text,
  });
};
