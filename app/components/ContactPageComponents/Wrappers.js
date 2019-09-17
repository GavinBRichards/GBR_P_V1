import styled from 'styled-components';

export const MWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  margin: none;
  display: grid;
  grid-template-columns: 8% auto 20% 20% 20% auto 8%;
  grid-template-rows: 35% 10% 5% auto;
`;

export const DWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  margin: none;
  display: grid;
  grid-template-columns: 8% auto 6% 6% 6% auto 8%;
  grid-template-rows: 35% 10% 5% auto;
`;
