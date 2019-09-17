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

export const CurrentNumberWrapper = styled.div`
  display: grid;
  grid-column: 2 / 3;
  grid-row: 18 / 19;
  margin: none;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1.33s;
  animation-timing-function: ease;
  animation-delay: 0.66s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

export const CurrentNumber = styled.div`
  margin: auto auto 0 0;
  font-size: 1.8rem;
  color: white;
  z-index: 50;
  font-family: 'RobotoBlack';
`;

export const MaxNumberWrapper = styled.div`
  display: grid;
  grid-column: 2 / 3;
  grid-row: 18 / 19;
  margin: none;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1.33s;
  animation-timing-function: ease;
  animation-delay: 0.33s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

export const MaxNumber = styled.div`
  margin: auto 0 0 auto;
  font-size: 1.4rem;
  color: white;
  z-index: 50;
  font-family: 'RobotoBlack';
`;
