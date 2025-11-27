import { uptradeTheme } from '@tests-npm-deploy/core';
import { MantineProvider } from '@mantine/core';

export function MantineAppProvider({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={uptradeTheme}>{children}</MantineProvider>;
}
