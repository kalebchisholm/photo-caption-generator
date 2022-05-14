/** 
 * FILE: Theme.js
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/14/2022
 * 
 * PURPOSE: Defines the theme used in the app.
*/

import { extendTheme } from '@chakra-ui/react'

export const myTheme = extendTheme ({
  colors: {
    primary: '#7371FC',
    secondary: '#FDFFFC',
    btnColor: '#7371FC',
    btnHoverColor: '#B0AFFD',
    headerColor: '#151f36',
    presetBg: '#D3D5D9',
  },
  styles: {
    global: () => ({
      body: {
        bg: '#E8E9EB',
        color: 'black',
        margin: 0,
        'font-family': 
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },

      code: {
        'font-family': "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      },
    })
  }
})