import React from 'react';
import styled, { keyframes } from 'styled-components';
import Mobile from '../Reusable/Mobile';
import Desktop from '../Reusable/Desktop';

const Keyframes = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const MCredit = styled.a`
  position: fixed;
  bottom: 1rem;
  right: 3rem;
  font-size: 1.6rem;
  color: white;
  z-index: 500;
  cursor: pointer;
  font-family: 'RobotoLight';
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-delay: 8s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const DCredit = styled.a`
  position: absolute;
  bottom: 13rem;
  right: 3rem;
  font-size: 1.6rem;
  color: white;
  z-index: 500;
  cursor: pointer;
  font-family: 'RobotoLight';
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-delay: 8s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

export default function Credit() {
  return (
    <>
      <Mobile>
        <MCredit href="https://www.instagram.com/bowlcutairjordan/">
          Letterwork: Chase Estes
        </MCredit>
      </Mobile>

      <Desktop>
        <DCredit
          href="https://www.instagram.com/bowlcutairjordan/"
          target="blank"
        >
          Letterwork: Chase Estes
        </DCredit>
      </Desktop>
    </>
  );
}
