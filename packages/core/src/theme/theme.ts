import { createTheme, DEFAULT_THEME } from '@mantine/core';
import { colorsConfig, headingsConfig, PRIMARY_COLOR, spacingConfig } from './config';
import {
  ButtonsConfig,
  DataDisplayConfig,
  DatesConfig,
  FeedbackConfig,
  InputsConfig,
  LayoutConfig,
  MiscellaneousConfig,
  NavigationConfig,
  OverlaysConfig,
  TypographyConfig,
} from './config/components';

export const uptradeTheme = createTheme({
  fontFamily: `Roboto, ${DEFAULT_THEME.fontFamily}`,
  colors: colorsConfig,
  components: {
    ...ButtonsConfig,
    ...NavigationConfig,
    ...DataDisplayConfig,
    ...DatesConfig,
    ...FeedbackConfig,
    ...InputsConfig,
    ...LayoutConfig,
    ...MiscellaneousConfig,
    ...OverlaysConfig,
    ...TypographyConfig,
  },
  primaryColor: PRIMARY_COLOR,
  headings: headingsConfig,
  spacing: spacingConfig,
});
