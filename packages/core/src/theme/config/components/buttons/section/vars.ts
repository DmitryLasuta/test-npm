import type { MantineTheme, ButtonGroupSectionProps } from '@mantine/core';

export const BUTTON_GROUP_SECTION_VARS = (_: MantineTheme, props: ButtonGroupSectionProps) => {
  if (props.size === 'sm') {
    return { root: {}, groupSection: { '--section-height': '32px' } };
  }
  return { root: {}, groupSection: {} };
};
