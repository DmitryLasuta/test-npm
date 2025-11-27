import { Table, Text, Title } from '@mantine/core';
import { DEFAULT_TABlE_PROPS } from './table';
import { DEFAULT_TEXT_PROPS } from './text';
import { DEFAULT_TITLE_PROPS } from './title';
import tableStyles from './table/table.module.css';
import titleStyles from './title/title.module.css';

export const TypographyConfig = {
  Title: Title.extend({
    classNames: titleStyles,
    defaultProps: DEFAULT_TITLE_PROPS,
  }),
  Text: Text.extend({
    defaultProps: DEFAULT_TEXT_PROPS,
  }),
  Table: Table.extend({
    classNames: tableStyles,
    defaultProps: DEFAULT_TABlE_PROPS,
  }),
};
