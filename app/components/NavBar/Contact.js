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
  grid-column: 5 / 6;
  grid-row: 2 / 3;
  justify-self: center;
  align-self: center;
  z-index: 100;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-delay: 0.9s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const MobileContact = styled.div`
  text-decoration: none;
  color: white;
  font-size: 1.4rem;

  &:hover {
    color: pink;
  }
`;

const DesktopWrapper = styled.div`
  display: grid;
  grid-column: 5 / 6;
  grid-row: 2 / 3;
  justify-self: center;
  align-self: center;
  z-index: 100;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-delay: 0.9s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const DesktopContact = styled.div`
  text-decoration: none;
  color: white;
  font-size: 1.6rem;

  &:hover {
    color: pink;
  }
`;

const Con = styled.div`
  text-align: center;
  line-height: 1;
`;

const Tact = styled.div`
  text-align: center;
  line-height: 1;
`;

const Contact = () => (
  <>
    <Mobile>
      <MobileWrapper>
        <StyledLink to="/contact">
          <MobileContact>
            <Con>CON</Con>
            <Tact>TACT</Tact>
          </MobileContact>
        </StyledLink>
      </MobileWrapper>
    </Mobile>

    <Desktop>
      <DesktopWrapper>
        <StyledLink to="/contact">
          <DesktopContact>
            <Con>CON</Con>
            <Tact>TACT</Tact>
          </DesktopContact>
        </StyledLink>
      </DesktopWrapper>
    </Desktop>
  </>
);

export default Contact;
