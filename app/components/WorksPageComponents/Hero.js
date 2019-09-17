import styled, { keyframes } from 'styled-components';

const AnimUpKeyframes = keyframes`
  0% {
    transform: translateY(-5rem);
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

const AnimDownKeyframes = keyframes`
  0% {
    transform: translateY(5rem);
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

const DKeyframes = keyframes`
  0% {
    transform: translateX(-5rem);
  }
  100% {
    transform: translateX(0rem);
    opacity: 1;
  }
`;

export const MAnimUpHeroWrapper = styled.div`
  display: grid;
  grid-column: 1 / 6;
  grid-row: 4 / 12;
  margin: none;
  height: 100%;
  overflow: hidden;
  z-index: 10;
  background-color: #222222;
  opacity: 0;

  animation-name: ${AnimUpKeyframes};
  animation-duration: 1.33s;
  animation-delay: 0.33s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

export const MAnimDownHeroWrapper = styled.div`
  display: grid;
  grid-column: 1 / 6;
  grid-row: 4 / 12;
  margin: none;
  height: 100%;
  overflow: hidden;
  z-index: 10;
  background-color: #222222;
  opacity: 0;

  animation-name: ${AnimDownKeyframes};
  animation-duration: 1.33s;
  animation-delay: 0.33s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

export const DHeroWrapper = styled.div`
  display: grid;
  grid-column: 4 / 5;
  grid-row: 3 / 18;
  margin: none;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  z-index: 10;
  background-color: #222222;
  opacity: 0;

  animation-name: ${DKeyframes};
  animation-duration: 1.33s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

export const MHeroImage = styled.img`
  height: 100%;
  opacity: 0.5;
`;

export const DHeroImage = styled.img`
  max-height: 100%;
  opacity: 0.5;
`;
