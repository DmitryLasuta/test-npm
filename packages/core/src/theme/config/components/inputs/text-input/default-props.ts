import type { TextInputProps } from '@mantine/core';
import { SHARED_INPUT_PROPS } from '../constants';

export const DEFAULT_TEXT_INPUT_PROPS: Partial<TextInputProps> = {
  ...SHARED_INPUT_PROPS,
  placeholder: 'Введите текст',
};
