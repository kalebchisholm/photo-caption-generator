/** 
 * FILE: index.jsx
 * AUTHOR: Kaleb Chisholm
 * LAST MODIFIED: 05/12/2022
*/
import { ChakraProvider } from '@chakra-ui/react';
import { myTheme } from './styles/Theme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={myTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);