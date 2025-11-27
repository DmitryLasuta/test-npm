import type { ButtonProps } from '@mantine/core';
import { SHARED_BUTTON_PROPS } from '../constants';

export const DEFAULT_BUTTON_PROPS: Partial<ButtonProps> = {
  ...SHARED_BUTTON_PROPS,
  loaderProps: { type: 'dots' },
};
