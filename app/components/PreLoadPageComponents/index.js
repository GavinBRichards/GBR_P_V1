import React, { useState, useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import GRAnim from './GRAnim';

function PreLoadPageComponents() {
  const [preLoading, setPreLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPreLoading(false), 8500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  let grAnim;

  if (preLoading) {
    grAnim = <GRAnim />;
  } else {
    grAnim = <Redirect to="/home" />;
  }

  return <>{grAnim}</>;
}

export default withRouter(PreLoadPageComponents);
