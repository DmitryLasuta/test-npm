import type { DatePickerInputProps } from '@mantine/dates';

export const DATE_PICKER_DEFAULT_PROPS: Partial<DatePickerInputProps> = {
  placeholder: 'ДД.ММ.ГГГГ',
  valueFormat: 'DD.MM.YYYY',
  size: 'sm',
  radius: 'sm',
};
