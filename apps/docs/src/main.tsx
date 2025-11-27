import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@tests-npm-deploy/core/core.css';

import App from './App';
import { MantineAppProvider } from './providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineAppProvider>
      <App />
    </MantineAppProvider>
  </StrictMode>
);
