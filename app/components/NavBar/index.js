import React from 'react';
import Mobile from '../Reusable/Mobile';
import Desktop from '../Reusable/Desktop';

import { MobileWrapper, DesktopWrapper } from './Wrappers';

import Vamp from './Vamp';
import Line from './Line';
import Contact from './Contact';

function NavBar() {
  return (
    <>
      <Mobile>
        <MobileWrapper>
          <Vamp />
          <Line />
          <Contact />
        </MobileWrapper>
      </Mobile>

      <Desktop>
        <DesktopWrapper>
          <Vamp />
          <Line />
          <Contact />
        </DesktopWrapper>
      </Desktop>
    </>
  );
}

export default NavBar;
