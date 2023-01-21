import { extendTheme } from '@chakra-ui/react';
import { supplySans, supplyMono } from '@/fonts';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  background: "#101011"
};

const fonts = {
  heading: supplySans.style.fontFamily,
  body: supplySans.style.fontFamily,
};

export const fontColors = {
  primary: 'whiteAlpha.900',
  secondary: 'whiteAlpha.900',
  placeholder: 'whiteAlpha.900',
}

const semanticTokens = {
  colors: {
    'chakra-body-text': { _light: fontColors.primary },
    'chakra-placeholder-color': { _light: fontColors.placeholder },
  },
};

export const theme = extendTheme({ colors, fonts, semanticTokens })
