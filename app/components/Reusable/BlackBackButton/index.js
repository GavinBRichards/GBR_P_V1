import React from 'react';
import styled, { keyframes } from 'styled-components';
import StyledLink from '../StyledLink';
import Mobile from '../Mobile';
import Desktop from '../Desktop';

const Keyframes = keyframes`
  0% {
    transform: translateX(5rem);
  }
  100% {
    transform: translateX(0rem);
    opacity: 1;
  }
`;

const MobileLink = styled(StyledLink)`
  position: absolute;
  top: 4%;
  right: 8%;
  font-family: 'Roboto';
  font-size: 1.6rem;
  color: #070707;
  background-color: transparent;
  z-index: 100;

  &:focus {
    outline: none;
  }

  &:hover {
    color: pink;
  }
`;

const DesktopLink = styled(StyledLink)`
  position: absolute;
  top: 4%;
  right: 4%;
  font-family: 'Roboto';
  font-size: 1.6rem;
  color: #070707;
  background-color: transparent;
  z-index: 100;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1s;
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

function BlackBackButton() {
  return (
    <>
      <Mobile>
        <MobileLink to="/works">BACK</MobileLink>
      </Mobile>

      <Desktop>
        <DesktopLink to="/works">BACK</DesktopLink>
      </Desktop>
    </>
  );
}

export default BlackBackButton;
