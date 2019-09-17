import React from 'react';
import Lottie from 'react-lottie';
import Mobile from '../Reusable/Mobile';
import Desktop from '../Reusable/Desktop';
import MobileData from './mobile_animation_data.json';
import DesktopData from './desktop_animation_data.json';

const mobileDefaultOptions = {
  animationData: MobileData,
  loop: false,
  autoplay: true,
};

const desktopDefaultOptions = {
  animationData: DesktopData,
  loop: false,
  autoplay: true,
};

export default function GRAnim() {
  return (
    <>
      <Mobile>
        <Lottie
          options={mobileDefaultOptions}
          height={'auto'}
          width={'100%'}
          isClickToPauseDisabled={true}
        />
      </Mobile>
      <Desktop>
        <Lottie
          options={desktopDefaultOptions}
          height={'auto'}
          width={'100%'}
          isClickToPauseDisabled={true}
        />
      </Desktop>
    </>
  );
}
