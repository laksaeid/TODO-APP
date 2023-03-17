import { E, CloseModal } from '@/library';
import { Form } from '@/screens';

export const Modal = () => {
  return E({
    tag: 'div',
    id: 'modal',
    className:
      'bg-white shadow-lg transition duration-500 opacity-0 invisible border rounded-md w-[600px] z-10 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    child: [
      E({ tag: 'h2', className: 'p-4 border-b', child: 'New Task' }),
      Form(),
    ],
  });
};
export const Overlay = () => {
  const Overlay = E({
    tag: 'div',
    id: 'overlay',
    className:
      'overlay transition duration-500 invisible opacity-0 h-screen w-screen bg-black fixed top-0 left-0 opacity-50',
  });
  Overlay.addEventListener('click', CloseModal);
  return Overlay;
};
