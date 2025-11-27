import type { SelectProps } from '@mantine/core';
import {
  DEFAULT_SELECT_NOT_FOUND_MESSAGE,
  DEFAULT_SELECT_PLACEHOLDER,
  SHARED_INPUT_PROPS,
} from '../constants';

export const SELECT_DEFAULT_PROPS: Partial<SelectProps> = {
  ...SHARED_INPUT_PROPS,
  nothingFoundMessage: DEFAULT_SELECT_NOT_FOUND_MESSAGE,
  placeholder: DEFAULT_SELECT_PLACEHOLDER,
  searchable: true,
  clearable: true,
  styles: { option: { fontSize: 14 } },
};
