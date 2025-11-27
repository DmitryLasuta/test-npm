import type { DefaultMantineColor } from '@mantine/core';
import type { colorsConfig } from '../theme/config';

export type ExtendedCustomColors = keyof typeof colorsConfig | DefaultMantineColor;
