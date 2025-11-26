import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({});

export function MantineAppProvider({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
