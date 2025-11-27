import {
  Checkbox,
  MultiSelect,
  NumberInput,
  Radio,
  SegmentedControl,
  Select,
  Switch,
  TextInput,
} from '@mantine/core';
import { MULTI_SELECT_DEFAULT_PROPS } from './multi-select';
import { DEFAULT_NUMBER_INPUT_PROPS } from './number-input';
import { DEFAULT_RADIO_PROPS } from './radio';
import { SELECT_DEFAULT_PROPS } from './select';
import { DEFAULT_TEXT_AREA_PROPS } from './text-area';
import { DEFAULT_TEXT_INPUT_PROPS } from './text-input';
import checkboxStyles from './checkbox/checkbox.module.css';
import multiSelectStyles from './multi-select/multi-select.module.css';
import numberInputStyles from './number-input/number-input.module.css';
import radioStyles from './radio/radio.module.css';
import segmentedControlStyles from './segmented-control/segmented-control.module.css';
import selectStyles from './select/select.module.css';
import switchStyles from './switch/switch.module.css';
import textAreaStyles from './text-area/text-area.module.css';
import textInputStyles from './text-input/text-input.module.css';

export const InputsConfig = {
  Select: Select.extend({
    defaultProps: SELECT_DEFAULT_PROPS,
    classNames: selectStyles,
  }),
  MultiSelect: MultiSelect.extend({
    defaultProps: MULTI_SELECT_DEFAULT_PROPS,
    classNames: multiSelectStyles,
  }),
  TextInput: TextInput.extend({
    defaultProps: DEFAULT_TEXT_INPUT_PROPS,
    classNames: textInputStyles,
  }),
  NumberInput: NumberInput.extend({
    defaultProps: DEFAULT_NUMBER_INPUT_PROPS,
    classNames: numberInputStyles,
  }),
  Textarea: TextInput.extend({
    defaultProps: DEFAULT_TEXT_AREA_PROPS,
    classNames: textAreaStyles,
  }),
  SegmentedControl: SegmentedControl.extend({
    classNames: segmentedControlStyles,
  }),
  Switch: Switch.extend({
    classNames: switchStyles,
  }),
  Checkbox: Checkbox.extend({
    classNames: checkboxStyles,
  }),
  Radio: Radio.extend({
    defaultProps: DEFAULT_RADIO_PROPS,
    classNames: radioStyles,
  }),
};
