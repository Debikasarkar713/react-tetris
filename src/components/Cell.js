import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
  <StyledCell color={TETROMINOS['L'].color}></StyledCell>
);
export default Cell;
