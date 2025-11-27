import { DatePickerInput } from '@mantine/dates';
import { DATE_PICKER_DEFAULT_PROPS } from './date-picker-input';
import datePickerInputStyles from './date-picker-input/date-picker-input.module.css';

export const DatesConfig = {
  DatePickerInput: DatePickerInput.extend({
    defaultProps: DATE_PICKER_DEFAULT_PROPS,
    classNames: datePickerInputStyles,
  }),
};
