import { css } from 'styled-components';
import * as theme from './../theme/';

const Width = css`
  ${p => p.w50 && css` width: 50%; `}
  ${p => p.w100 && css` width: 100%; `}
`;

export default Width;
