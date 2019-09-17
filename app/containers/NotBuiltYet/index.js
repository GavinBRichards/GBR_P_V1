import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Mobile from '../../components/Reusable/Mobile';
import Desktop from '../../components/Reusable/Desktop';
import WhiteBackButton from '../../components/Reusable/WhiteBackButton';
import {
  MWrapper,
  DWrapper,
} from '../../components/NotBuiltComponents/Wrappers';
import { MSorry, DSorry } from '../../components/NotBuiltComponents/Sorry';

export function NotBuiltYet() {
  return (
    <>
      <WhiteBackButton />
      <Mobile>
        <MWrapper>
          <MSorry>sorry this project hasn't been built yet</MSorry>
        </MWrapper>
      </Mobile>
      <Desktop>
        <DWrapper>
          <DSorry>sorry this project hasn't been built yet</DSorry>
        </DWrapper>
      </Desktop>
    </>
  );
}

// NotBuiltYet.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(NotBuiltYet);
