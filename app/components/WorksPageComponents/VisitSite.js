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

export const MVisitSite = styled.a`
  display: grid;
  grid-column: 3 / 4;
  grid-row: 12 / 13;
  margin: 4rem 0 auto auto;
  font-size: 1.6rem;
  color: white;
  z-index: 15;
  font-family: 'RobotoBlack';
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1.66s;
  animation-delay: 2s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;

  &:focus {
    outline: none;
  }

  &:hover {
    color: pink;
  }
`;

export const DVisitSite = styled.a`
  display: grid;
  grid-column: 9 / 11;
  grid-row: 15 / 16;
  margin: auto auto auto 0;
  font-size: 1.6rem;
  color: white;
  z-index: 15;
  font-family: 'RobotoBlack';
  text-decoration: none;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1.66s;
  animation-delay: 2s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;

  &:focus {
    outline: none;
  }

  &:hover {
    color: pink;
  }
`;
