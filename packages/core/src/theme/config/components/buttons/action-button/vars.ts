import type { MantineTheme, ActionIconProps } from '@mantine/core';

export const ACTION_BUTTON_VARS = (_: MantineTheme, props: ActionIconProps) => {
  if (props.size === 'xs') {
    return {
      root: {
        '--ai-size': '20px',
      },
    };
  }

  if (props.size === 'sm') {
    return {
      root: {
        '--ai-size': '32px',
      },
    };
  }

  return { root: {} };
};
