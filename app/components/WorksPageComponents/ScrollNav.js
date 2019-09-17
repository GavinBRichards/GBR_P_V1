import styled, { keyframes } from 'styled-components';

const Keyframes = keyframes`
  0% {
    transform: translateX(5rem);
  }
  100% {
    transform: translateX(0rem);
    opacity: 1;
  }
`;

export const UpLineWrapper = styled.button`
  display: grid;
  grid-column: 19 / 20;
  grid-row: 9 / 10;
  justify-self: center;
  z-index: 50;
  background-color: transparent;
  cursor: pointer;
  border: none;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1.33s;
  animation-delay: 0.66s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;

  &:focus {
    outline: none;
  }
`;

export const UpLine = styled.svg`
  height: 100%;
  stroke: white;
  stroke-width: 4;

  &:hover {
    stroke: pink;
  }
`;

export const DotWrapper = styled.div`
  display: grid;
  grid-column: 19 / 20;
  grid-row: 10 / 11;
  justify-self: center;
  align-self: center;
  z-index: 50;
  background-color: transparent;
  border: none;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1.33s;
  animation-delay: 0.66s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;

  &:focus {
    outline: none;
  }
`;

export const Dot = styled.svg`
  width: 75%;
  fill: white !important;
  margin: auto;

  &:hover {
    fill: #24415f !important;
  }
`;

export const DownLineWrapper = styled.button`
  display: grid;
  grid-column: 19 / 20;
  grid-row: 11 / 12;
  justify-self: center;
  z-index: 50;
  cursor: pointer;
  background-color: transparent;
  border: none;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1.33s;
  animation-delay: 0.66s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;

  &:focus {
    outline: none;
  }
`;

export const DownLine = styled.svg`
  height: 100%;
  stroke: white;
  margin: 0 auto auto auto;
  stroke-width: 4;

  &:hover {
    stroke: pink;
  }
`;
