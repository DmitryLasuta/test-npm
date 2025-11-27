import type { DrawerProps } from '@mantine/core';

export const DEFAULT_DRAWER_PROPS: Partial<DrawerProps> = {
  zIndex: 1026,
  offset: 8,
  mr: 6,
  position: 'right',
  size: 400,
  radius: 'lg',
  styles: { header: { padding: '24px' }, body: { padding: '24px', paddingTop: '0px' } },
};
