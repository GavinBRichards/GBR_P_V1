import styled from 'styled-components';

export const MobileWrapper = styled.div`
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  height: 10%;
  display: grid;
  grid-template-columns: 8% auto 10% 4% 10% 8%;
  grid-template-rows: 50% 50%;
  margin: 0;
  z-index: 90;
`;

export const DesktopWrapper = styled.div`
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  height: 10%;
  display: grid;
  grid-template-columns: 5% auto 4% 2% 4% 5%;
  grid-template-rows: 50% 50%;
  margin: 0;
  z-index: 90;
`;
