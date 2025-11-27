import type { ActionIconProps } from '@mantine/core';
import { SHARED_BUTTON_PROPS } from '../constants';

export const DEFAULT_ACTION_BUTTON_PROPS: Partial<ActionIconProps> = {
  ...SHARED_BUTTON_PROPS,
  size: 'sm',
  loaderProps: { type: 'oval' },
};
