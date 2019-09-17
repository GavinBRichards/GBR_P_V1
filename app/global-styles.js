import { createGlobalStyle, keyframes } from 'styled-components';

import YouthCulture from './fonts/YouthCulture/YouthCulture.otf';
import Anton from './fonts/Anton/Anton-Regular.ttf';
import Roboto from './fonts/Roboto/Roboto-Regular.ttf';
import RobotoLight from './fonts/Roboto/Roboto-Light.ttf';
import RobotoBlack from './fonts/Roboto/Roboto-Black.ttf';

const Keyframes = keyframes`
  0% {
      background-position: 24% 0%;
    }
    50% {
      background-position: 77% 100%;
    }
    100% {
      background-position: 24% 0%;
    }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: YouthCulture;
    src: url(${YouthCulture}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Anton;
    src: url(${Anton}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url(${Roboto}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: RobotoLight;
    src: url(${RobotoLight}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: RobotoBlack;
    src: url(${RobotoBlack}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -font-smoothing: antialiased;
    height: 100%;
    width: 100%;
    max-width: 100%;
    margin: 0;
    font-size: 10px !important;
    line-height: 1.5;
    overscroll-behavior-y: contain;
    background: linear-gradient(150deg, #d88ea9, #264562);
    animation: ${Keyframes} 10s ease infinite;
    background-size: 250% 250%;
  }

  body {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  }

  button {
    padding: none !important;
    margin: none !important;
  }

  link{
    padding: none !important;
    margin: none !important;
  }

`;

export default GlobalStyle;
