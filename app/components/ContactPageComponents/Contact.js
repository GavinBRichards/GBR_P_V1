import styled, { keyframes } from 'styled-components';

export const ContactKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const MContact = styled.button`
  display: grid;
  grid-column: 3 / 6;
  grid-row: 2 / 3;
  margin: auto auto 0 auto;
  font-family: 'YouthCulture';
  font-size: 4rem;
  text-decoration: none;
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: none;
  z-index: 10;
  opacity: 0;

  animation-name: ${ContactKeyframes};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 1s;
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

export const DContact = styled.button`
  display: grid;
  grid-column: 3 / 6;
  grid-row: 2 / 3;
  margin: auto auto 0 auto;
  font-family: 'YouthCulture';
  font-size: 6rem;
  text-decoration: none;
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: none;
  z-index: 10;
  opacity: 0;

  animation-name: ${ContactKeyframes};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 1s;
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
