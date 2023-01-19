import { extendTheme } from '@chakra-ui/react';
import { supplySans, supplyMono } from '@/fonts';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const fonts = {
  heading: supplySans.style.fontFamily,
  body: supplySans.style.fontFamily,
}

export const theme = extendTheme({ colors, fonts })
