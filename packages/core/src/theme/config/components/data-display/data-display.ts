import { Badge, NumberFormatter } from '@mantine/core';
import { DEFAULT_BADGE_PROPS } from './badge';
import { DEFAULT_NUMBER_FORMATTER_PROPS } from './number-formatter';

export const DataDisplayConfig = {
  Badge: Badge.extend({
    defaultProps: DEFAULT_BADGE_PROPS,
  }),
  NumberFormatter: NumberFormatter.extend({
    defaultProps: DEFAULT_NUMBER_FORMATTER_PROPS,
  }),
};
