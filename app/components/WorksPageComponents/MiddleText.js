import styled, { keyframes } from 'styled-components';

const Keyframes = keyframes`
  0% {
    transform: translateX(-5rem);
  }
  100% {
    transform: translateX(0rem);
    opacity: 1;
  }
`;

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
    transform: translateY(8rem);
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

const ReverseKeyframes = keyframes`
  0% {
    transform: translateY(0rem);
    opacity: 1;
  }
  100% {
    transform: translateY(-8rem);
    opacity: 0;
  }
`;

export const MAnimUpMiddleText = styled.button`
  display: grid;
  grid-column: 1 / 6;
  grid-row: 4 / 12;
  z-index: 100;
  margin: auto auto auto 1rem;
  padding: 0;
  font-family: 'YouthCulture';
  font-size: 8rem;
  text-align: left;
  line-height: 0.8;
  color: white;
  text-decoration: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  border: none;
  opacity: 0;

  animation-name: ${AnimUpKeyframes};
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

  &:hover {
    color: pink;
  }
`;

export const MReverseMiddleText = styled.button`
  display: grid;
  grid-column: 1 / 6;
  grid-row: 4 / 12;
  margin: auto auto auto 1rem;
  z-index: 50;
  padding: 0;
  font-family: 'YouthCulture';
  font-size: 8rem;
  text-align: left;
  line-height: 0.8;
  color: white;
  text-decoration: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  border: none;

  animation-name: ${ReverseKeyframes};
  animation-duration: 1s;
  animation-timing-function: linear;
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

export const MAnimDownMiddleText = styled.button`
  display: grid;
  grid-column: 1 / 6;
  grid-row: 4 / 12;
  z-index: 50;
  margin: auto auto auto 1rem;
  padding: 0;
  font-family: 'YouthCulture';
  font-size: 8rem;
  text-align: left;
  line-height: 0.8;
  color: white;
  text-decoration: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  border: none;
  opacity: 0;

  animation-name: ${AnimDownKeyframes};
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

  &:hover {
    color: pink;
  }
`;

export const DMiddleText = styled.div`
  display: grid;
  grid-column: 3 / 7;
  grid-row: 3 / 18;
  align-self: center;
  z-index: 50;
  margin: auto auto auto 0;
  font-family: 'YouthCulture';
  font-size: 14rem;
  line-height: 0.8;
  color: white;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1.33s;
  animation-delay: 0.66s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;
