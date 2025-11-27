import tabsStyles from './tabs/tabs.module.css';

import { Anchor, Pagination, Tabs, TabsList } from '@mantine/core';
import { DEFAULT_ANCHOR_PROPS } from './anchor';
import { DEFAULT_PAGINATION_PROPS, PAGINATION_VARS } from './pagination';
import { DEFAULT_TAB_LIST_PROPS, TABS_DEFAULT_PROPS } from './tabs';

export const NavigationConfig = {
  Tabs: Tabs.extend({
    defaultProps: TABS_DEFAULT_PROPS,
    classNames: tabsStyles,
  }),
  Anchor: Anchor.extend({
    defaultProps: DEFAULT_ANCHOR_PROPS,
  }),
  Pagination: Pagination.extend({
    defaultProps: DEFAULT_PAGINATION_PROPS,
    vars: PAGINATION_VARS,
  }),
  TabsList: TabsList.extend({
    defaultProps: DEFAULT_TAB_LIST_PROPS,
  }),
};
