import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Table = styled.table`
  width: 100%;
  max-width: 100%;
  padding: 0;
  empty-cells: show;
  border-collapse: collapse;
  border: 0;
  text-align: left;

  ${p => p.size2 && css`
    min-height: ${theme.SPACING_300};
    min-width: ${theme.SPACING_300};
  `}
`;

export default Table;
