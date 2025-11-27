import { Paper } from '@mantine/core';
import { DEFAULT_PAPER_PROPS } from './paper';

export const MiscellaneousConfig = {
  Paper: Paper.extend({
    defaultProps: DEFAULT_PAPER_PROPS,
  }),
};
