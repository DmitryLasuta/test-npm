import type { MultiSelectProps } from '@mantine/core';
import {
  DEFAULT_SELECT_NOT_FOUND_MESSAGE,
  DEFAULT_SELECT_PLACEHOLDER,
  SHARED_INPUT_PROPS,
} from '../constants';

export const MULTI_SELECT_DEFAULT_PROPS: Partial<MultiSelectProps> = {
  ...SHARED_INPUT_PROPS,
  nothingFoundMessage: DEFAULT_SELECT_NOT_FOUND_MESSAGE,
  placeholder: DEFAULT_SELECT_PLACEHOLDER,
  searchable: true,
  clearable: true,
  styles: { option: { fontSize: 14 }, label: { fontWeight: 500 } },
};
