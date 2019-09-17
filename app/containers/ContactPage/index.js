import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Transition } from 'react-transition-group';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectContactPage from './selectors';
import reducer from './reducer';

import Mobile from '../../components/Reusable/Mobile';
import Desktop from '../../components/Reusable/Desktop';
import WhiteBackButton from '../../components/Reusable/WhiteBackButton';
import {
  MWrapper,
  DWrapper,
} from '../../components/ContactPageComponents/Wrappers';
import {
  MContact,
  DContact,
} from '../../components/ContactPageComponents/Contact';
import { Text } from '../../components/ContactPageComponents/SubText';
import LinkedIn from '../../components/ContactPageComponents/LinkedIn';
import Email from '../../components/ContactPageComponents/Email';
import Instagram from '../../components/ContactPageComponents/Instagram';

export function ContactPage() {
  useInjectReducer({ key: 'contactPage', reducer });

  const [iconsShow, setIconsShow] = useState(false);
  const [mContactShow, setMContactShow] = useState(true);
  const [dContactShow, setDContactShow] = useState(true);

  let mContactWrap;
  let dContactWrap;
  let iconWrap;

  if (mContactShow) {
    mContactWrap = (
      <MContact
        onClick={() => {
          setIconsShow(true);
          setMContactShow(false);
        }}
      >
        contact me.
      </MContact>
    );
  } else {
    mContactWrap = null;
  }

  if (dContactShow) {
    dContactWrap = (
      <DContact
        onClick={() => {
          setIconsShow(true);
          setDContactShow(false);
        }}
      >
        contact me.
      </DContact>
    );
  } else {
    mContactWrap = null;
  }

  if (iconsShow) {
    iconWrap = (
      <>
        <LinkedIn />
        <Email />
        <Instagram />
      </>
    );
  } else {
    iconWrap = null;
  }

  return (
    <>
      <WhiteBackButton />

      <Mobile>
        <MWrapper>
          {mContactWrap}
          <Transition timeout={10} mountOnEnter unmountOnExit in={iconsShow}>
            <>{iconWrap}</>
          </Transition>
          <Text>"i'm avaliable ; )"</Text>
        </MWrapper>
      </Mobile>

      <Desktop>
        <DWrapper>
          {dContactWrap}
          <Transition timeout={10} mountOnEnter unmountOnExit in={iconsShow}>
            <>{iconWrap}</>
          </Transition>
          <Text>"i'm avaliable ; )"</Text>
        </DWrapper>
      </Desktop>
    </>
  );
}

// ContactPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  contactPage: makeSelectContactPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ContactPage);
