import styled, { css } from 'styled-components';

const Image = styled.img`
  display: block;
  max-width: 100%;

  ${p => p.rounded && css`
    border-radius: 50%;
  `}
`;

export default Image;
