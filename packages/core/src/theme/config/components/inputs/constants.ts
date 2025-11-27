import { InputProps } from '@mantine/core';

export const DEFAULT_SELECT_PLACEHOLDER = 'Выберите из списка';

export const DEFAULT_SELECT_NOT_FOUND_MESSAGE = 'Ничего не найдено...';

export const SHARED_INPUT_PROPS: Pick<InputProps, 'size' | 'radius'> = {
  size: 'sm',
  radius: 'sm',
};
