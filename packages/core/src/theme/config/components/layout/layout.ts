import { Grid } from '@mantine/core';
import { DEFAULT_GRID_PROPS } from './grid';

export const LayoutConfig = {
  Grid: Grid.extend({
    defaultProps: DEFAULT_GRID_PROPS,
  }),
};
