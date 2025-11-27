import { type MantineColorsTuple } from '@mantine/core';

/**
 * Палитра синих оттенков для бренда.
 *
 * Каждый элемент массива соответствует уровню насыщенности цвета и назначению в UI:
 *
 * | Индекс | Название из Figma                 | Назначение                                     |
 * |--------|-----------------------------------|------------------------------------------------|
 * | 0      | brand / background                | Самый светлый фон                              |
 * | 1      | light variant background          | Светлый фон для кнопок и светлых элементов     |
 * | 2      | light border / hover              | Светлая граница / hover                        |
 * | 3      | soft hover                        | Мягкий hover для фоновых элементов             |
 * | 4      | subtle accent                     | Вторичный акцент                               |
 * | 5      | primary hover                     | Primary hover / активное состояние             |
 * | 6      | brand / accent                    | Основной брендовый цвет                        |
 * | 7      | pressed / dark hover              | Нажатие / темный hover                         |
 * | 8      | focus ring / dark background      | Фокус / темный фон                             |
 * | 9      | darkest / border                  | Темный оттенок для границ, текста и иконок     |
 *
 */

export const brandColorsPalette: MantineColorsTuple = [
  '#f8f9ff', // [0]
  '#cfcfff', // [1]
  '#9b9bff', // [2]
  '#6464ff', // [3]
  '#3736fe', // [4]
  '#1b19fe', // [5]
  '#0000fa', // [6]
  '#0000e4', // [7]
  '#0000cc', // [8]
  '#0000b4', // [9]
  '#dbe4ff' //  [10]
] as const;
