import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAboutPage from './selectors';
import reducer from './reducer';

import Mobile from '../../components/Reusable/Mobile';
import Desktop from '../../components/Reusable/Desktop';
import WhiteBackButton from '../../components/Reusable/WhiteBackButton';
import {
  MTopWrapper,
  MBottomWrapper,
  DWrapper,
} from '../../components/AboutPageComponents/Wrappers';
import Gavin from '../../components/AboutPageComponents/Gavin';
import Richards from '../../components/AboutPageComponents/Richards';
import Vamp from '../../components/AboutPageComponents/Vamp';
import Text from '../../components/AboutPageComponents/Text';

export function AboutPage() {
  useInjectReducer({ key: 'aboutPage', reducer });

  return (
    <>
      <WhiteBackButton />

      <Mobile>
        <MTopWrapper>
          <Gavin />
          <Richards />
          <Vamp />
        </MTopWrapper>
        <MBottomWrapper>
          <Text />
        </MBottomWrapper>
      </Mobile>
      <Desktop>
        <DWrapper>
          <Gavin />
          <Richards />
          <Vamp />
          <Text />
        </DWrapper>
      </Desktop>
    </>
  );
}

// AboutPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  aboutPage: makeSelectAboutPage(),
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

export default compose(withConnect)(AboutPage);
