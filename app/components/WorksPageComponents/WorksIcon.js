import React from 'react';
import styled, { keyframes } from 'styled-components';
import Mobile from '../Reusable/Mobile';
import Desktop from '../Reusable/Desktop';

const Keyframes = keyframes`
  0% {
    transform: translateX(-5rem);
  }
  100% {
    transform: translateX(0rem);
    opacity: 1;
  }
`;

const MWorksIconWrapper = styled.div`
  display: grid;
  grid-column: 2 / 5;
  grid-row: 2 / 3;
  margin: none;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-delay: 1s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const MobileText = styled.p`
  font-family: 'Roboto';
  font-size: 1.6rem;
  color: pink;
  margin: 0 auto auto 0;
  z-index: 15;
`;

const DWorksIconWrapper = styled.div`
  display: grid;
  grid-column: 2 / 5;
  grid-row: 2 / 3;
  margin: none;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-delay: 0.66s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const DesktopText = styled.p`
  font-family: 'Roboto';
  font-size: 2rem;
  color: white;
  margin: 0 auto auto 0;
  z-index: 15;
`;

const WorksIcon = () => (
  <>
    <Mobile>
      <MWorksIconWrapper>
        <MobileText>WORKS/</MobileText>
      </MWorksIconWrapper>
    </Mobile>
    <Desktop>
      <DWorksIconWrapper>
        <DesktopText>WORKS/</DesktopText>
      </DWorksIconWrapper>
    </Desktop>
  </>
);

export default WorksIcon;
