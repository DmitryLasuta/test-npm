import type { NumberFormatterProps } from '@mantine/core';
import { CURRENCY } from '../../../../../constants';

export const DEFAULT_NUMBER_FORMATTER_PROPS: Partial<NumberFormatterProps> = {
  suffix: ` ${CURRENCY.RUSSIAN_RUBLE.SYMBOL}`,
  decimalScale: 2,
  decimalSeparator: ',',
  thousandSeparator: ' ',
  fixedDecimalScale: true,
  style: { whiteSpace: 'nowrap' },
};
