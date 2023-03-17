import { E } from '@/library';
const variants = {
  Low: 'bg-gray-400 rounded-full text-white ',
  Medium: 'bg-yellow-300 rounded-full text-black  ',
  High: 'bg-red-500 rounded-full text-black ',
  Todo: 'bg-red-500 rounded-full text-black ',
  Doing: 'bg-yellow-300 rounded-full text-black ',
  Done: 'bg-green-500 rounded-full text-black ',
};
export const status = (text) => {
  return E({
    tag: 'td',
    className: 'border-x',
    child: [
      E({
        tag: 'p',
        className:
          variants[text] + 'w-max py-1 px-3 text-sm font-bold mx-auto border-x',
        child: text,
      }),
    ],
  });
};
