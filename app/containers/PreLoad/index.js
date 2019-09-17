import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPreLoad from './selectors';
import reducer from './reducer';

import PreLoadPageComponents from '../../components/PreLoadPageComponents';
import Credit from '../../components/PreLoadPageComponents/Credit';

export function PreLoad() {
  useInjectReducer({ key: 'preLoad', reducer });

  return (
    <>
      <PreLoadPageComponents />
      <Credit />
    </>
  );
}

PreLoad.propTypes = {};

const mapStateToProps = createStructuredSelector({
  preLoad: makeSelectPreLoad(),
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

export default compose(withConnect)(PreLoad);
