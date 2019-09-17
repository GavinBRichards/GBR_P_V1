import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  border: none;
  background-color: transparent;

  &:hover {
    fill: pink !important;
  }
`;
