import { extendTheme } from '@chakra-ui/react'

export const myTheme = extendTheme ({
  colors: {
    centerBg: 'whitesmoke',
    btnColor: '#95BF47',
    btnHoverColor: '#64943E',
    headerColor: '#151f36',
  },
  styles: {
    global: () => ({
      body: {
        bg: '#edeadf',
        color: 'black',
      }
    })
  }
})