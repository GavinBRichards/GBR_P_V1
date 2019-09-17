import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectWorksPage, {
  makeSelectCurrentIndex,
  makeSelectTitlesCount,
  makeSelectNextIndex,
  makeSelectPrevIndex,
} from './selectors';
import reducer from '../App/reducer';

import { incrementAction, decrementAction } from '../App/actions';

// Data Array Imports
import { MiddleTitles } from '../../Data/MiddleTitles';
import { TopBottomTitles } from '../../Data/TopBottomTitles';
import { ColoredImages } from '../../Data/ColoredImages';
import { Years } from '../../Data/Years';
import { Roles } from '../../Data/Roles';
import { Descriptions } from '../../Data/Descriptions';
import { Sites } from '../../Data/Sites';

// Component Imports
import Mobile from '../../components/Reusable/Mobile';
import Desktop from '../../components/Reusable/Desktop';
import NavBar from '../../components/NavBar';
import {
  MWrapper,
  DWrapper,
} from '../../components/WorksPageComponents/Wrappers';
import WorksIcon from '../../components/WorksPageComponents/WorksIcon';
import {
  AnimUpTopText,
  AnimDownTopText,
} from '../../components/WorksPageComponents/TopText';
import {
  MAnimUpMiddleText,
  MAnimDownMiddleText,
  MReverseMiddleText,
  DMiddleText,
} from '../../components/WorksPageComponents/MiddleText';
import {
  AnimUpBottomText,
  AnimDownBottomText,
} from '../../components/WorksPageComponents/BottomText';
import {
  MAnimUpHeroWrapper,
  MAnimDownHeroWrapper,
  DHeroWrapper,
  MHeroImage,
  DHeroImage,
} from '../../components/WorksPageComponents/Hero';
import {
  UpLineWrapper,
  UpLine,
  DotWrapper,
  Dot,
  DownLineWrapper,
  DownLine,
} from '../../components/WorksPageComponents/ScrollNav';
import {
  CurrentNumberWrapper,
  CurrentNumber,
  MaxNumberWrapper,
  MaxNumber,
} from '../../components/WorksPageComponents/Counter';
import {
  MUpYear,
  MDownYear,
  DYear,
} from '../../components/WorksPageComponents/Year';
import {
  MUpRole,
  MDownRole,
  DRole,
} from '../../components/WorksPageComponents/Role';
import {
  MUpDescription,
  MDownDescription,
  DDescription,
} from '../../components/WorksPageComponents/Description';
import {
  MVisitSite,
  DVisitSite,
} from '../../components/WorksPageComponents/VisitSite';
import {
  MNotBuiltLink,
  DNotBuiltLink,
} from '../../components/WorksPageComponents/NotBuiltLink';
import { ProjectDetails } from '../../components/WorksPageComponents/ViewDetails';

export function WorksPage({
  currentIndex,
  titlesCount,
  nextIndex,
  prevIndex,
  onIncrementAction,
  onDecrementAction,
}) {
  useInjectReducer({ key: 'worksPage', reducer });

  const [animateUp, setAnimateUp] = useState(true);
  const [animateDown, setAnimateDown] = useState(false);
  const [animateUpMiddleText, setAnimateUpMiddleText] = useState(true);
  const [animateDownMiddleText, setAnimateDownMiddleText] = useState(false);
  const [reverseMiddleText, setReverseMiddleText] = useState('forward');
  const [reverseButton, setReverseButton] = useState(true);
  const [showDetails, setShowDetails] = useState('hidden');

  let topTextWrap;
  if (animateUp) {
    topTextWrap = (
      <AnimUpTopText key={currentIndex + 19}>
        {TopBottomTitles[prevIndex]}
      </AnimUpTopText>
    );
  } else if (animateDown) {
    topTextWrap = (
      <AnimDownTopText key={currentIndex + 19}>
        {TopBottomTitles[prevIndex]}
      </AnimDownTopText>
    );
  }

  let middleTextWrap;
  if (animateUpMiddleText) {
    middleTextWrap = (
      <MAnimUpMiddleText
        key={currentIndex + 666}
        onClick={() => {
          setAnimateDownMiddleText(false);
          setAnimateUpMiddleText(false);
          setReverseMiddleText('forward');
          setReverseButton(false);
          setShowDetails('yes');
        }}
      >
        {MiddleTitles[currentIndex]}
      </MAnimUpMiddleText>
    );
  } else if (animateDownMiddleText) {
    middleTextWrap = (
      <MAnimDownMiddleText
        key={currentIndex + 199}
        onClick={() => {
          setAnimateDownMiddleText(false);
          setAnimateUpMiddleText(false);
          setReverseMiddleText('forward');
          setReverseButton(false);
          setShowDetails('yes');
        }}
      >
        {MiddleTitles[currentIndex]}
      </MAnimDownMiddleText>
    );
  } else if (
    reverseMiddleText === 'forward' &&
    animateUpMiddleText === false &&
    animateDownMiddleText === false
  ) {
    middleTextWrap = (
      <MReverseMiddleText key={currentIndex + 199}>
        {MiddleTitles[currentIndex]}
      </MReverseMiddleText>
    );
  }

  let heroWrap;
  if (animateUp) {
    heroWrap = (
      <MAnimUpHeroWrapper key={currentIndex + 200}>
        <MHeroImage src={ColoredImages[currentIndex]} />
      </MAnimUpHeroWrapper>
    );
  } else if (animateDown) {
    heroWrap = (
      <MAnimDownHeroWrapper key={currentIndex + 200}>
        <MHeroImage src={ColoredImages[currentIndex]} />
      </MAnimDownHeroWrapper>
    );
  }

  let projectDetailsWrap;
  if (reverseButton) {
    projectDetailsWrap = (
      <ProjectDetails
        key={currentIndex + 220}
        onClick={() => {
          setAnimateDownMiddleText(false);
          setAnimateUpMiddleText(false);
          setReverseMiddleText('forward');
          setReverseButton(false);
          setShowDetails('yes');
        }}
      >
        Project Details.
      </ProjectDetails>
    );
  } else {
    projectDetailsWrap = (
      <ProjectDetails
        key={currentIndex + 220}
        onClick={() => {
          setAnimateDownMiddleText(false);
          setAnimateUpMiddleText(false);
          setReverseButton(true);
          setTimeout(() => {
            setShowDetails('no');
          }, 250);
          setTimeout(() => {
            setAnimateUpMiddleText(true);
          }, 500);
        }}
      >
        Hide Details.
      </ProjectDetails>
    );
  }

  let yearWrap;
  if (showDetails === 'yes') {
    yearWrap = <MUpYear key={currentIndex + 1}>{Years[currentIndex]}</MUpYear>;
  } else if (showDetails === 'no') {
    yearWrap = (
      <MDownYear key={currentIndex + 1}>{Years[currentIndex]}</MDownYear>
    );
  } else {
    yearWrap = null;
  }

  let roleWrap;
  if (showDetails === 'yes') {
    roleWrap = <MUpRole key={currentIndex + 2}>{Roles[currentIndex]}</MUpRole>;
  } else if (showDetails === 'no') {
    roleWrap = (
      <MDownRole key={currentIndex + 2}>{Roles[currentIndex]}</MDownRole>
    );
  } else {
    roleWrap = null;
  }

  let descriptionWrap;
  if (showDetails === 'yes') {
    descriptionWrap = (
      <MUpDescription key={currentIndex + 213}>
        {Descriptions[currentIndex]}
      </MUpDescription>
    );
  } else if (showDetails === 'no') {
    descriptionWrap = (
      <MDownDescription key={currentIndex + 213}>
        {Descriptions[currentIndex]}
      </MDownDescription>
    );
  } else {
    descriptionWrap = null;
  }

  let bottomTextWrap;
  if (animateUp) {
    bottomTextWrap = (
      <AnimUpBottomText key={currentIndex + 112}>
        {TopBottomTitles[nextIndex]}
      </AnimUpBottomText>
    );
  } else if (animateDown) {
    bottomTextWrap = (
      <AnimDownBottomText key={currentIndex + 112}>
        {TopBottomTitles[nextIndex]}
      </AnimDownBottomText>
    );
  }

  let mVisitWrap;
  if (currentIndex === 0) {
    mVisitWrap = (
      <MVisitSite
        key={currentIndex + 9}
        href={Sites[currentIndex]}
        target="blank"
      >
        Visit Site
      </MVisitSite>
    );
  } else if (currentIndex === 1) {
    mVisitWrap = <MVisitSite key={currentIndex + 9}>Already Here</MVisitSite>;
  } else {
    mVisitWrap = (
      <MNotBuiltLink key={currentIndex + 9} to="/notbuilt">
        Visit Site
      </MNotBuiltLink>
    );
  }

  let dVisitWrap;
  if (currentIndex === 0) {
    dVisitWrap = (
      <DVisitSite
        key={currentIndex + 9}
        href={Sites[currentIndex]}
        target="blank"
      >
        Visit Site
      </DVisitSite>
    );
  } else if (currentIndex === 1) {
    dVisitWrap = <DVisitSite key={currentIndex + 9}>Already Here</DVisitSite>;
  } else {
    dVisitWrap = (
      <DNotBuiltLink key={currentIndex + 9} to="/notbuilt">
        Visit Site
      </DNotBuiltLink>
    );
  }

  return (
    <>
      <NavBar />

      {/*              MOBILE               */}
      <Mobile>
        <ReactScrollWheelHandler
          upHandler={() => {
            onDecrementAction();
            setAnimateUp(false);
            setAnimateDown(false);
            setAnimateUpMiddleText(false);
            setAnimateDownMiddleText(false);
            setReverseMiddleText(false);
            setReverseButton(true);
            setShowDetails('hidden');
            setTimeout(() => {
              setAnimateUp(true);
              setAnimateUpMiddleText(true);
            }, 10);
          }}
          downHandler={() => {
            onIncrementAction();
            setAnimateDown(false);
            setAnimateUp(false);
            setAnimateUpMiddleText(false);
            setAnimateDownMiddleText(false);
            setReverseButton(true);
            setReverseMiddleText(false);
            setShowDetails('hidden');
            setTimeout(() => {
              setAnimateDown(true);
              setAnimateDownMiddleText(true);
            }, 10);
          }}
        >
          <MWrapper>
            <WorksIcon />
            {topTextWrap}
            {middleTextWrap}
            {bottomTextWrap}
            {heroWrap}
            {projectDetailsWrap}
            {yearWrap}
            {roleWrap}
            {descriptionWrap}
            {mVisitWrap}
          </MWrapper>
        </ReactScrollWheelHandler>
      </Mobile>

      {/*              DESKTOP               */}
      <Desktop>
        <ReactScrollWheelHandler
          upHandler={() => {
            onDecrementAction();
          }}
          downHandler={() => {
            onIncrementAction();
          }}
        >
          <DWrapper>
            <WorksIcon />
            <UpLineWrapper
              onClick={() => {
                onDecrementAction();
              }}
            >
              <UpLine viewBox="0 0 50 50">
                <line x1="25" y1="0" x2="25" y2="50" />
              </UpLine>
            </UpLineWrapper>
            <DotWrapper>
              <Dot viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="12.5" />
              </Dot>
            </DotWrapper>
            <DownLineWrapper
              onClick={() => {
                onIncrementAction();
              }}
            >
              <DownLine viewBox="0 0 50 50">
                <line x1="25" y1="0" x2="25" y2="50" />
              </DownLine>
            </DownLineWrapper>

            <DMiddleText key={currentIndex + 199}>
              {MiddleTitles[currentIndex]}
            </DMiddleText>

            <DHeroWrapper key={currentIndex + 12}>
              <DHeroImage src={ColoredImages[currentIndex]} />
            </DHeroWrapper>

            <CurrentNumberWrapper key={currentIndex + 99}>
              <CurrentNumber>{currentIndex + 1}</CurrentNumber>
            </CurrentNumberWrapper>

            <MaxNumberWrapper>
              <MaxNumber>/{titlesCount}</MaxNumber>
            </MaxNumberWrapper>

            <DYear key={currentIndex + 1}>{Years[currentIndex]}</DYear>
            <DRole key={currentIndex + 2}>{Roles[currentIndex]}</DRole>
            <DDescription key={currentIndex + 3}>
              {Descriptions[currentIndex]}
            </DDescription>
            {dVisitWrap}
          </DWrapper>
        </ReactScrollWheelHandler>
      </Desktop>
    </>
  );
}

WorksPage.propTypes = {
  currentIndex: PropTypes.number,
  titlesCount: PropTypes.number,
  nextIndex: PropTypes.number,
  prevIndex: PropTypes.number,
  onIncrementAction: PropTypes.func,
  onDecrementAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  worksPage: makeSelectWorksPage(),
  currentIndex: makeSelectCurrentIndex(),
  nextIndex: makeSelectNextIndex(),
  titlesCount: makeSelectTitlesCount(),
  prevIndex: makeSelectPrevIndex(),
});

function mapDispatchToProps(dispatch) {
  return {
    onIncrementAction: () => dispatch(incrementAction()),
    onDecrementAction: () => dispatch(decrementAction()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(WorksPage);
