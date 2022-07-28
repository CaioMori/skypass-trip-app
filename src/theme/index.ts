import {extendTheme} from 'native-base'

export const THEME = extendTheme({
  colors: {
    azulEscuro: '#00264B',
    azulClaro: '#0F4C81',
    escuro: '#181B2B',
    chumbo: '#3C4056',
    cinzaClaro: '#ECECEC',
    claro: '#F6F6F6',
    chumboClaro: '#6D7392',
    desativado: '#B7B7B7',
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56,
  },
})
