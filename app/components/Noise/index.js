import React from 'react';
import styled from 'styled-components';

import NoiseGif from '../../images/noise.gif';

const NoiseWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${NoiseGif});
  background-repeat: repeat;
  opacity: 0.05;
  z-index: 1000;
  pointer-events: none;
`;

function Noise() {
  return <NoiseWrapper />;
}

export default Noise;
