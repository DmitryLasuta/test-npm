import type { MantineTheme, PaginationProps } from '@mantine/core';

export const PAGINATION_VARS = (_: MantineTheme, props: PaginationProps) => {
  if (props.size === 'sm') {
    return { root: { '--pagination-control-size': '30px' } };
  }
  return {
    root: {},
  };
};
