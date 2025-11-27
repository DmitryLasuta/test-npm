import { ActionIcon, Button, ButtonGroupSection } from '@mantine/core';
import { ACTION_BUTTON_VARS, DEFAULT_ACTION_BUTTON_PROPS } from './action-button';
import { BUTTON_VARS, DEFAULT_BUTTON_PROPS } from './button';
import { BUTTON_GROUP_SECTION_VARS, DEFAULT_BUTTON_GROUP_SECTION_PROPS } from './section';
import actionButton from './action-button/action-button.module.css';
import buttonStyles from './button/button.module.css';
import buttonSectionStyles from './section/section.module.css';

export const ButtonsConfig = {
  Button: Button.extend({
    defaultProps: DEFAULT_BUTTON_PROPS,
    vars: BUTTON_VARS,
    classNames: buttonStyles,
  }),
  ActionIcon: ActionIcon.extend({
    defaultProps: DEFAULT_ACTION_BUTTON_PROPS,
    vars: ACTION_BUTTON_VARS,
    classNames: actionButton,
  }),
  ButtonGroupSection: ButtonGroupSection.extend({
    defaultProps: DEFAULT_BUTTON_GROUP_SECTION_PROPS,
    classNames: buttonSectionStyles,
    vars: BUTTON_GROUP_SECTION_VARS,
  }),
};
