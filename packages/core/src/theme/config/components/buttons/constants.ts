import { type ButtonProps } from '@mantine/core';

export const SHARED_BUTTON_PROPS: Pick<ButtonProps, 'size' | 'radius' | 'variant' | 'fz' | 'fw'> = {
  size: 'sm',
  radius: 'sm',
  variant: 'filled',
  fw: '600',
  fz: '14px',
};
