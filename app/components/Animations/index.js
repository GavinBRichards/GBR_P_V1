/**
 *
 * Animations
 *
 */
import React, { useEffect, useRef } from 'react';
import { TweenMax, Linear, CSSPlugin, AttrPlugin } from 'gsap/all';
// import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Transition } from 'react-transition-group';

const plugins = [CSSPlugin, AttrPlugin];

const Keyframes = keyframes`
  0% {
    transform: translateY(-5rem);
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

const PoopDiv = styled.div`
  font-size: 5rem;
  color: green;
  opacity: 0;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

// let logoElement = useRef(null);

// useEffect(() => {
//   TweenMax.from(logoElement, 1, {
//     x: 100,
//     color: 'brown',
//     autoAlpha: 0,
//   });
// }, []);
const Animations = () => {
  return (
    <PoopDiv
    // ref={element => {
    //   logoElement = element;
    // }}
    >
      asdfasdf
    </PoopDiv>
  );
};

Animations.propTypes = {};

export default Animations;
