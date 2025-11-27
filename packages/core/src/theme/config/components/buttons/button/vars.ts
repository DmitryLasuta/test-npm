import type { ButtonProps, MantineTheme } from '@mantine/core';

export const BUTTON_VARS = (_: MantineTheme, props: ButtonProps) => {
  if (props.size === 'sm') {
    return {
      root: {
        '--button-height-sm': '32px',
        '--button-padding-x': '16px',
        '--button-padding-y': '6px',
        '--button-font-size': '14px',
      },
    };
  }
  return { root: {} };
};
