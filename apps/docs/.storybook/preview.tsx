import type { Preview } from '@storybook/react-vite';

import { MantineAppProvider } from '../src/providers/mantine'

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@tests-npm-deploy/core/core.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <MantineAppProvider>
        <Story />
      </MantineAppProvider>
    ),
  ],
};

export default preview;
