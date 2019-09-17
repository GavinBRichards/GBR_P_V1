import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import PreLoad from 'containers/PreLoad/Loadable';
import WorksPage from 'containers/WorksPage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import NotBuiltYet from 'containers/NotBuiltYet/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Noise from '../../components/Noise';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  position: fixed;
  overflow-x: hidden;
  min-width: 100%;
  min-height: 100%;
  margin: none;
  padding: none;
`;

export default function App() {
  return (
    <>
      <AppWrapper>
        <Helmet titleTemplate="Gavin.Works" defaultTitle="Gavin.Works">
          <meta name="description" content="Gavin Richards Dev Portfolio" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={PreLoad} />
          <Route exact path="/home" component={WorksPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/notbuilt" component={NotBuiltYet} />
          <Route component={NotFoundPage} />
        </Switch>
      </AppWrapper>
      <Noise />
      <GlobalStyle />
    </>
  );
}
