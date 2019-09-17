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

export const ProjectDetails = styled.button`
  display: grid;
  grid-column: 2 / 4;
  grid-row: 11 / 12;
  margin: auto auto 2rem 0;
  padding: 0;
  font-size: 1.8rem;
  color: white;
  z-index: 55;
  font-family: 'RobotoLight';
  text-decoration: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  border: none;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1.66s;
  animation-delay: 1.33s;
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
