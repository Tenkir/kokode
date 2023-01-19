import localFont from '@next/font/local';

export const supplySans = localFont(
  {
    src: [
      {
        path: './woff2/PPSupplySans-Regular.woff2',
        weight: '400',
        style: 'normal'
      },
      {
        path: './woff2/PPSupplySans-Ultralight.woff2',
        weight: '200',
        style: 'normal'
      },
      {
        path: './woff/PPSupplySans-Regular.woff',
        weight: '400',
        style: 'normal'
      },
      {
        path: './woff/PPSupplySans-Ultralight.woff',
        weight: '200',
        style: 'normal'
      },
    ],
    fallback: ['sans-serif', 'system-ui'],
    variable: '--font-supply-sans',
  });

  export const supplyMono = localFont({ src: [
    {
      path: './woff2/PPSupplyMono-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './woff2/PPSupplyMono-Ultralight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: './woff/PPSupplyMono-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './woff/PPSupplyMono-Ultralight.woff',
      weight: '200',
      style: 'normal'
    },
  ],
  fallback: ['sans-serif', 'system-ui'],
  variable: '--font-supply-mono',
});
