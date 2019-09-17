import React from 'react';
import styled, { keyframes } from 'styled-components';
import Mobile from '../Reusable/Mobile';
import Desktop from '../Reusable/Desktop';

const Keyframes = keyframes`
  0% {
    transform: translateY(5rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

const Icon = styled.svg`
  width: 40%;
  margin: auto;
  z-index: 150;
  fill: pink !important;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const MobileLinkedInLink = styled.a`
  display: grid;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  width: 100%;
`;

const DesktopLinkedInLink = styled.a`
  display: grid;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  width: 100%;
`;

export default function LinkedIn() {
  return (
    <>
      <Mobile>
        <MobileLinkedInLink href="https://www.linkedin.com/in/gavin-richards-2a427250">
          <Icon viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </Icon>
        </MobileLinkedInLink>
      </Mobile>

      <Desktop>
        <DesktopLinkedInLink
          href="https://www.linkedin.com/in/gavin-richards-2a427250"
          target="blank"
        >
          <Icon viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </Icon>
        </DesktopLinkedInLink>
      </Desktop>
    </>
  );
}
