import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const Keyframes = keyframes`
  0% {
    transform: translateY(1rem);
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

export const MNotBuiltLink = styled(Link)`
  display: grid;
  grid-column: 3 / 4;
  grid-row: 12 / 13;
  margin: 4rem 0 auto auto;
  font-size: 1.6rem;
  color: white;
  z-index: 15;
  font-family: 'RobotoBlack';
  -webkit-tap-highlight-color: transparent;
  text-decoration: line-through;
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

export const DNotBuiltLink = styled(Link)`
  display: grid;
  grid-column: 9 / 11;
  grid-row: 15 / 16;
  margin: auto auto auto 0;
  font-size: 1.6rem;
  color: white;
  z-index: 15;
  font-family: 'RobotoBlack';
  text-decoration: line-through;
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
