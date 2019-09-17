import styled from 'styled-components';

export const MTopWrapper = styled.div`
  width: 100vw;
  height: 50vh;
  max-height: 100vh;
  margin: 0;
  display: grid;
  grid-template-columns: 8% 7% 7% 14% 7% 7% 7% 7% 14% 7% 7% 8%;
  grid-template-rows: 15% 1% 6% 7% 8% 26% 8% 7% 7% 7% 8%;
  border: none;
`;

export const MBottomWrapper = styled.div`
  width: 100vw;
  height: 50vh;
  max-height: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: 16% 70% 14%;
  grid-template-rows: 5% 23% 5% 10% 5% 10% 5% 10% 5% 10% 5% auto;
  border: none;
`;

export const DWrapper = styled.div`
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(15, 6.66%);
  grid-template-rows: repeat(15, 6.66%);
  border: none;
  z-index: 80;
`;
