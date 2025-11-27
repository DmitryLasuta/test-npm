import type { LoadingOverlayProps } from '@mantine/core';

export const DEFAULT_LOADING_OVERLAY_PROPS: Partial<LoadingOverlayProps> = {
  loaderProps: {
    color: 'uptrade-blue.6',
    size: 'md',
  },
  overlayProps: {
    radius: 'sm',
    blur: 2,
  },
};
