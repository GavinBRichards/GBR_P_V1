import styled, { keyframes } from 'styled-components';

const AnimUpKeyframes = keyframes`
  0% {
    transform: translateY(-1rem);
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

const AnimDownKeyframes = keyframes`
  0% {
    transform: translateY(1rem);
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

export const AnimUpBottomText = styled.div`
  display: grid;
  grid-column: 1 / 6;
  grid-row: 14 / 15;
  z-index: 50;
  margin: 1rem auto auto 5rem;
  font-family: 'YouthCulture';
  font-size: 6rem;
  line-height: 0.8;
  color: transparent;
  -webkit-text-stroke: 1px white;
  opacity: 0;

  animation-name: ${AnimUpKeyframes};
  animation-duration: 1.33s;
  animation-delay: 0.66s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

export const AnimDownBottomText = styled.div`
  display: grid;
  grid-column: 1 / 6;
  grid-row: 14 / 15;
  z-index: 50;
  margin: 1rem auto auto 5rem;
  font-family: 'YouthCulture';
  font-size: 6rem;
  line-height: 0.8;
  color: transparent;
  -webkit-text-stroke: 1px white;
  opacity: 0;

  animation-name: ${AnimDownKeyframes};
  animation-duration: 1.33s;
  animation-delay: 0.66s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;
