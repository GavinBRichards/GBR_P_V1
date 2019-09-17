import React from 'react';
import styled, { keyframes } from 'styled-components';
import Mobile from '../Reusable/Mobile';
import Desktop from '../Reusable/Desktop';
import StyledLink from '../Reusable/StyledLink';

const Keyframes = keyframes`
  0% {
    transform: translateX(5rem);
  }
  100% {
    transform: translateX(0rem);
    opacity: 1;
  }
`;

const MobileWrapper = styled.div`
  display: grid;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  justify-self: center;
  align-self: center;
  z-index: 100;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const MobileIcon = styled.svg`
  width: 100%;
  fill: white !important;

  &:hover {
    fill: pink !important;
  }
`;

const DesktopWrapper = styled.div`
  display: grid;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  justify-self: center;
  align-self: center;
  z-index: 100;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const DesktopIcon = styled.svg`
  width: 80%;
  fill: white !important;

  &:hover {
    fill: pink !important;
  }
`;

const Vamp = () => (
  <>
    <Mobile>
      <MobileWrapper>
        <StyledLink to="/about">
          <MobileIcon viewBox="0 0 50 50">
            <circle cx="15" cy="15" r="4" />
            <path d="M40.6 32.6H9.4c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3h31.2c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3z" />
            <path d="M15 39l-2.1-3.5-2-3.5h8l-2 3.5L15 39z" />
            <path d="M35 39l-2.1-3.5-2-3.5h8l-2 3.5L35 39z" />
            <circle cx="35" cy="15" r="4" />
          </MobileIcon>
        </StyledLink>
      </MobileWrapper>
    </Mobile>

    <Desktop>
      <DesktopWrapper>
        <StyledLink to="/about">
          <DesktopIcon viewBox="0 0 50 50">
            <circle cx="15" cy="15" r="4" />
            <path d="M40.6 32.6H9.4c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3h31.2c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3z" />
            <path d="M15 39l-2.1-3.5-2-3.5h8l-2 3.5L15 39z" />
            <path d="M35 39l-2.1-3.5-2-3.5h8l-2 3.5L35 39z" />
            <circle cx="35" cy="15" r="4" />
          </DesktopIcon>
        </StyledLink>
      </DesktopWrapper>
    </Desktop>
  </>
);

export default Vamp;
