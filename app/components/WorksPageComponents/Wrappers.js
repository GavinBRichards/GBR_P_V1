import styled from 'styled-components';

export const MWrapper = styled.div`
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: 8% 2% 80% 2% 8%;
  grid-template-rows: 5% 4% 15% repeat(8, 6.25%) 15% auto 5%;
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
  grid-template-columns: 4% 2% 2% 34% repeat(12, 4%) 2% 1% 2% 1% 4%;
  grid-template-rows: 4% 15% repeat(15, 4%) 17% 4%;
  border: none;
`;
