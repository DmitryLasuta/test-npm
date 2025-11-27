import type { TitleProps } from '@mantine/core';

export const DEFAULT_TITLE_PROPS: Partial<TitleProps> = {
  styles: {
    root: {
      fontSize: 'var(--title-fz) !important',
      fontWeight: 'var(--title-fw) !important',
      lineHeight: 'var(--title-lh) !important',
    },
  },
};
