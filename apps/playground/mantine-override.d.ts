import type { MantineColorsTuple } from '@mantine/core';
import type { ExpandedSpacing, ExtendedCustomColors, ExtendedTableVariant } from './types';

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }

  export interface MantineThemeSizesOverride {
    spacing: ExpandedSpacing;
  }

  export interface TableProps {
    variant?: ExtendedTableVariant;
  }
}

export {};
