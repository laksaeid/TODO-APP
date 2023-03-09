import { E } from '@/library';

export const icon = (name, styles) => {
  return E({
    tag: 'ion-icon',
    name,
    className: styles,
  });
};
