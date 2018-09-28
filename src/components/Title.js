import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';
import NegativeMargin from './../utilities/NegativeMargin';
import TextAlign from './../utilities/TextAlign';

const Title = styled.h3`
  color: ${theme.GRAY_900};
  margin: 0;
  font-family: ${theme.UNTITLEDSANSMEDIUM};
  font-weight: 500;
  text-transform: uppercase;

  ${p => p.size1 && css`
    font-size: ${theme.FONTSIZE_200};
    letter-spacing: .135em;
  `}

  ${p => p.size2 && css`
    font-size: ${theme.FONTSIZE_300};
    letter-spacing: .135em;
  `}

  ${p => p.size3 && css`
    font-size: ${theme.FONTSIZE_500};
    letter-spacing: .05em;
  `}

  ${p => p.white && css`color: ${theme.WHITE};`}
  ${p => p.black && css`color: ${theme.BLACK};`}
  ${p => p.gray500 && css`color: ${theme.GRAY_500};`}
  ${p => p.gray600 && css`color: ${theme.GRAY_600};`}
  ${p => p.gray900 && css`color: ${theme.GRAY_900};`}

  ${Margin}
  ${NegativeMargin}
  ${TextAlign}
`;

export default Title;
