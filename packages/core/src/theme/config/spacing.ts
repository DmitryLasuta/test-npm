type ExtendedSpacing = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const spacingConfig = {
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '40px',
} satisfies Record<ExtendedSpacing, string | number>;
