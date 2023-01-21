import type { AppProps } from 'next/app'
import { ChakraProvider, DarkMode } from '@chakra-ui/react'
import { theme } from '@/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DarkMode>
        <Component {...pageProps} />
      </DarkMode>
    </ChakraProvider>
  );
}
