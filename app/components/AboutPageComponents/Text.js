import React from 'react';
import styled, { keyframes } from 'styled-components';
import Mobile from '../Reusable/Mobile';
import Desktop from '../Reusable/Desktop';

const Keyframes = keyframes`
  0% {
    transform: translateX(-5rem);
  }
  100% {
    transform: translateX(0rem);
    opacity: 1;
  }
`;

const MobileText1 = styled.p`
  font-size: 1.6rem;
  color: white;
  display: grid;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  margin: auto auto auto 0;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 2s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const MobileText2 = styled.p`
  font-size: 1.6rem;
  color: white;
  display: grid;
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  margin: auto auto auto 0;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 2.33s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const MobileText3 = styled.p`
  font-size: 1.6rem;
  color: white;
  display: grid;
  grid-column: 2 / 3;
  grid-row: 6 / 7;
  margin: auto auto auto 0;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 2.66s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const DesktopText1 = styled.p`
  font-size: 2rem;
  color: white;
  display: grid;
  grid-column: 9 / 13;
  grid-row: 10 / 11;
  margin: auto auto auto 0;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 2s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const DesktopText2 = styled.p`
  font-size: 2rem;
  color: white;
  display: grid;
  grid-column: 9 / 13;
  grid-row: 12 / 14;
  margin: auto auto auto 0;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 2.33s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const Text = () => (
  <>
    <Mobile>
      <MobileText1>
        I'm a self taught freelance developer in Salt Lake City.
      </MobileText1>
      <MobileText2>
        My main focus is creating unique experiences through the use of React
        and animations, while maintaining understandable and flexible code.
      </MobileText2>
    </Mobile>

    <Desktop>
      <DesktopText1>
        I'm a self taught freelance developer in Salt Lake City.
      </DesktopText1>
      <DesktopText2>
        My main focus is creating unique experiences through the use of React
        and animations, while maintaining understandable and flexible code.
      </DesktopText2>
    </Desktop>
  </>
);

export default Text;
