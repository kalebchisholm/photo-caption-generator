import { extendTheme } from '@chakra-ui/react'

export const myTheme = extendTheme ({
  colors: {
    primary: '#7371FC',       // medium slate blue
    secondary: '#FDFFFC',     // middle yellow
    btnColor: '#7371FC',
    btnHoverColor: '#B0AFFD', // medium slate blue
    headerColor: '#151f36'
  },
  styles: {
    global: () => ({
      body: {
        bg: '#E8E9EB',        // platinum
        color: 'black',
      }
    })
  }
})