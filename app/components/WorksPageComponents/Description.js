import styled, { keyframes } from 'styled-components';

const Keyframes = keyframes`
  0% {
    transform: translateY(1rem);
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

const AnimDownKeyframes = keyframes`
  0% {
    transform: translateY(0rem);
    opacity: 1;
  }
  100% {
    transform: translateY(1rem);
    opacity: 0;
  }
`;

export const MUpDescription = styled.div`
  display: grid;
  grid-column: 3 / 4;
  grid-row: 7 / 10;
  font-size: 1.4rem;
  color: white;
  z-index: 75;
  font-family: 'RobotoLight';
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1.66s;
  animation-delay: 1.33s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

export const MDownDescription = styled.div`
  display: grid;
  grid-column: 3 / 4;
  grid-row: 7 / 10;
  font-size: 1.4rem;
  color: white;
  z-index: 75;
  font-family: 'RobotoLight';
  opacity: 0;

  animation-name: ${AnimDownKeyframes};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

export const DDescription = styled.div`
  display: grid;
  grid-column: 9 / 16;
  grid-row: 8 / 13;
  font-size: 1.4rem;
  color: white;
  z-index: 15;
  font-family: 'RobotoLight';
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1.66s;
  animation-delay: 1.33s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;
