import localFont from 'next/font/local';

export const IranSans = localFont({
  src: [
    {
      path: '../assets/fonts/iranSans/woff2/iran_sans_web_black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iranSans/woff2/iran_sans_web_bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iranSans/woff2/iran_sans_web_medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iranSans/woff2/iran_sans_web_light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iranSans/woff2/iran_sans_web_ultraLight.woff2',
      weight: '200',
      style: 'normal',
    },
  ],
  preload: true,
  variable: '--font-iran-sans',
  display: 'swap',
});

export const IranYekan = localFont({
  src: [
    {
      path: '../assets/fonts/iranYekan/woff2/iran_yekan_web_extraBlack.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iranYekan/woff2/iran_yekan_web_black.woff2',
      weight: '850',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iranYekan/woff2/iran_yekan_web_extraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iranYekan/woff2/iran_yekan_web_bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iranYekan/woff2/iran_yekan_web_medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iranYekan/woff2/iran_yekan_web_regular.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iranYekan/woff2/iran_yekan_web_light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iranYekan/woff2/iran_yekan_web_thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
  preload: true,
  variable: '--font-iran-yekan',
  display: 'swap',
});
