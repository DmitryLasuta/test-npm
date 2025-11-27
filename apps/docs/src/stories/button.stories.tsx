import type { Meta, StoryObj } from '@storybook/react';
import { IconAdjustmentsAlt } from '@tabler/icons-react';
import { uptradeTheme } from '@tests-npm-deploy/core';
import {
  Button,
  Group,
  type ButtonProps,
  type ButtonVariant,
  type MantineSize,
} from '@mantine/core';

const variants: ButtonVariant[] = [
  'filled',
  'light',
  'outline',
  'subtle',
  'transparent',
  'white',
  'gradient',
  'default',
];

const sizes: MantineSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const buttonArgs: Partial<ButtonProps> = {
  ...uptradeTheme.components?.Button?.defaultProps,
  children: 'Нажми меня',
  loading: false,
  disabled: false,
  rightSection: '',
  leftSection: '',
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: buttonArgs,
  argTypes: {
    children: {
      control: 'text',
      description: `
**Содержимое кнопки**  
Текст или React-элемент, который будет отображаться внутри кнопки. Можно использовать иконки, текст или комбинацию того и другого.
    `,
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '' },
      },
    },
    variant: {
      control: 'select',
      options: variants,
      description: `
**Вариант внешнего вида кнопки**  
Определяет стиль кнопки. Возможные варианты:  
- \`filled\` — заполненная кнопка с фоновым цветом  
- \`light\` — светлый вариант кнопки  
- \`outline\` — кнопка с обводкой  
- \`subtle\` — максимально минималистичный вариант  
- \`transparent\` — прозрачная кнопка  
- \`white\` — белая кнопка  
- \`gradient\` — кнопка с градиентным фоном  
- \`default\` — стандартный стиль кнопки  
    `,
      defaultValue: buttonArgs.variant,
      table: {
        type: { summary: variants.join(' | ') },
        defaultValue: { summary: 'filled' },
      },
    },
    size: {
      control: 'select',
      options: sizes,
      description: `
**Размер кнопки**  
Определяет размеры кнопки по ширине, высоте и внутренним отступам.  
Возможные размеры: \`xs\`, \`sm\`, \`md\`, \`lg\`, \`xl\`.
    `,
      defaultValue: buttonArgs.size || 'sm',
      table: {
        type: { summary: sizes.join(' | ') },
        defaultValue: { summary: 'sm' },
      },
    },
    disabled: {
      control: 'boolean',
      description: `
**Отключена ли кнопка**  
Если true, кнопка становится неактивной и пользователь не сможет на неё нажать.  
Внешний вид изменяется согласно теме для disabled состояния.
    `,
      defaultValue: buttonArgs.disabled,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: `
**Состояние загрузки**  
Если true, внутри кнопки отображается индикатор загрузки (Loader).  
Можно дополнительно настроить внешний вид Loader через \`loaderProps\`.
    `,
      defaultValue: buttonArgs.loading,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    leftSection: {
      control: false,
      description: `
**Элемент слева от текста**  
ReactNode, который отображается слева от текста кнопки.  
Чаще всего используется для иконок.
    `,
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    rightSection: {
      control: false,
      description: `
**Элемент справа от текста**  
ReactNode, который отображается справа от текста кнопки.  
Чаще всего используется для иконок или индикаторов.
    `,
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    radius: {
      control: 'select',
      options: sizes,
      description: `
**Скругление углов кнопки**  
Задаёт радиус скругления углов кнопки. Можно указать в пикселях, rem или использовать стандартные значения темы (\`sm\`, \`md\`, \`lg\` и т.д.).
    `,
      defaultValue: buttonArgs.radius || 'sm',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'sm' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: `
**Растягивать кнопку на всю ширину контейнера**  
Если true, кнопка занимает всю ширину родительского блока.
    `,
      defaultValue: buttonArgs.fullWidth || false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    fw: {
      control: 'select',
      options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      description: `
**Толщина шрифта текста кнопки (font-weight)**  
Позволяет изменить толщину текста кнопки. Значения соответствуют CSS свойству font-weight.
    `,
      defaultValue: buttonArgs.fw || '600',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '600' },
      },
    },
    fz: {
      control: 'text',
      description: `
**Размер шрифта текста кнопки (font-size)**  
Позволяет задать размер текста кнопки в пикселях, rem или процентах.
    `,
      defaultValue: buttonArgs.fz || '14px',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '14px' },
      },
    },
    loaderProps: {
      control: 'object',
      description: `
**Свойства Loader**  
Кнопка поддерживает состояние загрузки. Для настройки индикатора используется проп \`loaderProps\`.  

**Доступные типы индикаторов:** \`oval\`, \`bars\`, \`dots\` (по умолчанию).  
Все индикаторы анимированы с помощью CSS для лучшей производительности.  

Можно передавать любые пропсы компонента \`Loader\`.  
Пример использования: \`{ type: 'bars', color: 'red', size: 16, variant: 'bars' }\`
    `,
      defaultValue: { type: 'dots', size: 14 },
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{ type: "dots", size: 14 }' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: `
**Стандартная кнопка**  

Пример кнопки с дефолтными настройками темы.  
Используется для быстрого рендера базового варианта кнопки.
        `,
      },
    },
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты кнопоки',
      },
    },
  },

  render: () => (
    <>
      <Group gap={'md'}>
        {variants.map((variant, index) => (
          <Button key={index} variant={variant}>
            {variant}
          </Button>
        ))}
      </Group>
    </>
  ),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Различные размеры кнопок',
      },
    },
  },

  render: () => (
    <>
      <Group gap={'md'}>
        {sizes.map((size, index) => (
          <Button key={index} size={size}>
            {size}
          </Button>
        ))}
      </Group>
    </>
  ),
};
