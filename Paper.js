import * as React from 'react';
import {DefaultTheme, Provider} from 'react-native-paper';

import App from './App';

// const theme = {
//   ...DefaultTheme,
//   fonts: {
//     regular: 'Nunito-Regular',
//     medium: 'Nunito-Medium',
//     light: 'Nunito-Light',
//     thin: 'Nunito-Light',
//   },
//   roundness: 5,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#777',
//     accent: '#f1c40f',
//     placeholder: '#888',
//   },
// };
// theme={theme}
export const main = () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
}
