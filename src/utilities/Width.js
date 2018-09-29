import { css } from 'styled-components';
import * as theme from './../theme/';

const Width = css`
  ${p => p.width_50 && css` width: 50%; `}
  ${p => p.width_100 && css` width: 100%; `}
`;

export default Width;
