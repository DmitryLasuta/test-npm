import { NumberInputProps } from '@mantine/core';
import { SHARED_INPUT_PROPS } from '../constants';

export const DEFAULT_NUMBER_INPUT_PROPS: Partial<NumberInputProps> = {
  ...SHARED_INPUT_PROPS,
  hideControls: true,
  decimalScale: 2,
  allowNegative: false,
  thousandSeparator: ' ',
};
