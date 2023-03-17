import { btnMaker } from '@/components';
import { E, CloseModal } from '@/library';
export const FormFooter = () => {
  const FormFooter = E({
    tag: 'div',
    id: 'formfooter',
    className: 'flex mt-5 pt-5 justify-between border-t',
    child: [
      btnMaker('CANCEL', 'outline', 'closeModal', 'button'),
      btnMaker('SAVE', 'fill', 'submit', 'submit'),
    ],
  });
  FormFooter.querySelector('#closeModal').addEventListener('click', CloseModal);
  return FormFooter;
};
