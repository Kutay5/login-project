'use client';
import { Open_Sans, Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const open_sans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: open_sans.style.fontFamily,

    h5: {
        fontWeight: 700,
        fontSize: '36px'
    },
    h6: {
        fontWeight: 700,
        fontSize: '30px',
        fontFamily: roboto.style.fontFamily
    },
    body1: {
        fontSize: '18px',
        fontWeight: 700
    }
  },
  palette: {
    primary: {
        main: '#3751FE'
    }
  }
});

export default theme;