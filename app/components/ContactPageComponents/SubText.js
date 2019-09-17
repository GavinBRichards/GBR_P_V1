import styled, { keyframes } from 'styled-components';

const Keyframes = keyframes`
  0% {
    transform: translateY(-1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

export const Text = styled.p`
  display: grid;
  grid-column: 3 / 6;
  grid-row: 3 / 4;
  margin: 0 auto;
  font-family: 'Roboto';
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
  z-index: 10;
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
