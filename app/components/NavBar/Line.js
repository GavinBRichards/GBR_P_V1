import React from 'react';
import styled, { keyframes } from 'styled-components';
import Mobile from '../Reusable/Mobile';
import Desktop from '../Reusable/Desktop';

const Keyframes = keyframes`
  0% {
    transform: translateX(5rem);
  }
  100% {
    transform: translateX(0rem);
    opacity: 1;
  }
`;

const MobileLine = styled.svg`
  display: grid;
  grid-column: 4 / 5;
  justify-self: center;
  grid-row: 2 / 3;
  align-self: center;
  height: 100%;
  stroke: white;
  stroke-width: 3;
  z-index: 100;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-delay: 0.33s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const DesktopLine = styled.svg`
  display: grid;
  grid-column: 4 / 5;
  justify-self: center;
  grid-row: 2 / 3;
  align-self: center;
  height: 100%;
  stroke: white;
  stroke-width: 2;
  z-index: 100;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-delay: 0.33s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;

  &:hover {
    stroke: #24415f !important;
  }
`;

const Line = () => (
  <>
    <Mobile>
      <MobileLine viewBox="0 0 25 50">
        <line x1="12.5" y1="0.5" x2="12.5" y2="49.5" />
      </MobileLine>
    </Mobile>

    <Desktop>
      <DesktopLine viewBox="0 0 25 50">
        <line x1="12.5" y1="0.5" x2="12.5" y2="49.5" />
      </DesktopLine>
    </Desktop>
  </>
);

export default Line;
