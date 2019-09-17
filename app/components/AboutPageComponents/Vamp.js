import React from 'react';
import styled, { keyframes } from 'styled-components';
import Mobile from '../Reusable/Mobile';
import Desktop from '../Reusable/Desktop';

const Keyframes = keyframes`
  0% {
    transform: translateY(-5rem);
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

const MobileEyes = styled.svg`
  display: grid;
  grid-column: 4 / 10;
  align-self: center;
  grid-row: 4 / 6;
  justify-self: center;
  margin: none;
  width: auto;
  height: auto;
  fill: pink !important;
  z-index: 15;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0.8s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const MobileMouth = styled.svg`
  display: grid;
  grid-column: 3 / 11;
  align-self: center;
  grid-row: 9 / 10;
  justify-self: center;
  margin: none;
  width: auto;
  height: auto;
  fill: pink !important;
  z-index: 15;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0.8s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const DesktopEyes = styled.svg`
  display: grid;
  grid-column: 7 / 10;
  grid-row: 3 / 5;
  margin: auto;
  width: auto;
  height: auto;
  fill: pink !important;
  z-index: 15;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0.8s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const DesktopMouth = styled.svg`
  display: grid;
  grid-column: 6 / 11;

  grid-row: 6 / 9;
  margin: auto;
  width: 70%;
  height: auto;
  fill: pink !important;
  z-index: 15;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0.8s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

export default function Vamp() {
  return (
    <>
      <Mobile>
        <MobileEyes viewBox="0 0 28.6 8.4">
          <path d="M22.2,8c2-1.9,4-3.9,6-5.8c1.2-1.2-0.7-3-1.8-1.8c-2,1.9-4,3.9-6,5.8C19.2,7.4,21,9.2,22.2,8z" />
          <path d="M28.2,6.2c-2-1.9-4-3.9-6-5.8c-1.2-1.2-3,0.6-1.8,1.8c2,1.9,4,3.9,6,5.8	C27.6,9.2,29.4,7.4,28.2,6.2z" />
          <path d="M2.2,8c2-1.9,4-3.9,6-5.8c1.2-1.2-0.7-3-1.8-1.8c-2,1.9-4,3.9-6,5.8C-0.8,7.4,1,9.2,2.2,8z" />
          <path d="M8.2,6.2c-2-1.9-4-3.9-6-5.8C1-0.8-0.8,1,0.4,2.2c2,1.9,4,3.9,6,5.8C7.6,9.2,9.4,7.4,8.2,6.2z" />
        </MobileEyes>
        <MobileMouth viewBox="0 0 33.8 9">
          <path d="M32.5,2.6H1.3C0.6,2.6,0,2,0,1.3C0,0.6,0.6,0,1.3,0h31.2c0.7,0,1.3,0.6,1.3,1.3C33.8,2,33.2,2.6,32.5,2.6z" />
          <path d="M6.9,9L4.8,5.5L2.8,2h8l-2,3.5L6.9,9z" />
          <path d="M26.9,9l-2.1-3.5l-2-3.5h8l-2,3.5L26.9,9z" />
        </MobileMouth>
      </Mobile>

      <Desktop>
        <DesktopEyes viewBox="0 0 28.6 8.4">
          <path d="M22.2,8c2-1.9,4-3.9,6-5.8c1.2-1.2-0.7-3-1.8-1.8c-2,1.9-4,3.9-6,5.8C19.2,7.4,21,9.2,22.2,8z" />
          <path d="M28.2,6.2c-2-1.9-4-3.9-6-5.8c-1.2-1.2-3,0.6-1.8,1.8c2,1.9,4,3.9,6,5.8	C27.6,9.2,29.4,7.4,28.2,6.2z" />
          <path d="M2.2,8c2-1.9,4-3.9,6-5.8c1.2-1.2-0.7-3-1.8-1.8c-2,1.9-4,3.9-6,5.8C-0.8,7.4,1,9.2,2.2,8z" />
          <path d="M8.2,6.2c-2-1.9-4-3.9-6-5.8C1-0.8-0.8,1,0.4,2.2c2,1.9,4,3.9,6,5.8C7.6,9.2,9.4,7.4,8.2,6.2z" />
        </DesktopEyes>
        <DesktopMouth viewBox="0 0 33.8 9">
          <path d="M32.5,2.6H1.3C0.6,2.6,0,2,0,1.3C0,0.6,0.6,0,1.3,0h31.2c0.7,0,1.3,0.6,1.3,1.3C33.8,2,33.2,2.6,32.5,2.6z" />
          <path d="M6.9,9L4.8,5.5L2.8,2h8l-2,3.5L6.9,9z" />
          <path d="M26.9,9l-2.1-3.5l-2-3.5h8l-2,3.5L26.9,9z" />
        </DesktopMouth>
      </Desktop>
    </>
  );
}
