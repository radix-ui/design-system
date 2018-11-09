import styled, { css } from 'styled-components';
import HoverZone from './HoverZone';

const HoverZonePanel = styled.div`
  opacity: 0;

  ${HoverZone}:hover & {
    opacity: 1;
  }

  ${p => p.forceShow && css`
    opacity: 1;
  `}
`;

export default HoverZonePanel;
