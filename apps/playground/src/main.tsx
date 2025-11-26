import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@mantine/core/styles.css';
import App from './App';
import { MantineAppProvider } from './providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineAppProvider>
      <App />
    </MantineAppProvider>
  </StrictMode>
);
