import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';
import NegativeMargin from './../utilities/NegativeMargin';
import Leading from './../utilities/Leading';
import TextAlign from './../utilities/TextAlign';

const Heading = styled.h3`
  color: ${theme.GRAY_900};
  font-family: 'UntitledSans',apple-system,BlinkMacSystemFont;
  margin: 0;

  ${p => p.size1 && css`
    font-size: ${theme.FONTSIZE_400};
    letter-spacing: -.0125em;
    margin-left: -.05em;
  `}

  ${p => p.size2 && css`
    font-size: ${theme.FONTSIZE_600};
    letter-spacing: -.005em;
    margin-left: -.06em;
  `}

  ${p => p.size3 && css`
    font-size: ${theme.FONTSIZE_800};
    letter-spacing: -.012em;
    margin-left: -.075em;
  `}

  ${p => p.size4 && css`
    font-size: ${theme.FONTSIZE_900};
    letter-spacing: -.028em;
    margin-left: -.085em;
  `}

  ${p => p.size5 && css`
    font-size: ${theme.FONTSIZE_1000};
    letter-spacing: -.042em;
    margin-left: -.088em;
  `}

  ${p => p.size6 && css`
    font-size: ${theme.FONTSIZE_1100};
    letter-spacing: -.052em;
    margin-left: -.09em;
  `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_size1 && css`
      font-size: ${theme.FONTSIZE_400};
      letter-spacing: -.0125em;
      margin-left: -.05em;
    `}

    ${p => p.bp1_size2 && css`
      font-size: ${theme.FONTSIZE_600};
      letter-spacing: -.005em;
      margin-left: -.06em;
    `}

    ${p => p.bp1_size3 && css`
      font-size: ${theme.FONTSIZE_800};
      letter-spacing: -.012em;
      margin-left: -.075em;
    `}

    ${p => p.bp1_size4 && css`
      font-size: ${theme.FONTSIZE_900};
      letter-spacing: -.028em;
      margin-left: -.085em;
    `}

    ${p => p.bp1_size5 && css`
      font-size: ${theme.FONTSIZE_1000};
      letter-spacing: -.042em;
      margin-left: -.088em;
    `}

    ${p => p.bp1_size6 && css`
      font-size: ${theme.FONTSIZE_1100};
      letter-spacing: -.052em;
      margin-left: -.09em;
    `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_size1 && css`
      font-size: ${theme.FONTSIZE_400};
      letter-spacing: -.0125em;
      margin-left: -.05em;
    `}

    ${p => p.bp2_size2 && css`
      font-size: ${theme.FONTSIZE_600};
      letter-spacing: -.005em;
      margin-left: -.06em;
    `}

    ${p => p.bp2_size3 && css`
      font-size: ${theme.FONTSIZE_800};
      letter-spacing: -.012em;
      margin-left: -.075em;
    `}

    ${p => p.bp2_size4 && css`
      font-size: ${theme.FONTSIZE_900};
      letter-spacing: -.028em;
      margin-left: -.085em;
    `}

    ${p => p.bp2_size5 && css`
      font-size: ${theme.FONTSIZE_1000};
      letter-spacing: -.042em;
      margin-left: -.088em;
    `}

    ${p => p.bp2_size6 && css`
      font-size: ${theme.FONTSIZE_1100};
      letter-spacing: -.052em;
      margin-left: -.09em;
    `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_size1 && css`
      font-size: ${theme.FONTSIZE_400};
      letter-spacing: -.0125em;
      margin-left: -.05em;
    `}

    ${p => p.bp3_size2 && css`
      font-size: ${theme.FONTSIZE_600};
      letter-spacing: -.005em;
      margin-left: -.06em;
    `}

    ${p => p.bp3_size3 && css`
      font-size: ${theme.FONTSIZE_800};
      letter-spacing: -.012em;
      margin-left: -.075em;
    `}

    ${p => p.bp3_size4 && css`
      font-size: ${theme.FONTSIZE_900};
      letter-spacing: -.028em;
      margin-left: -.085em;
    `}

    ${p => p.bp3_size5 && css`
      font-size: ${theme.FONTSIZE_1000};
      letter-spacing: -.042em;
      margin-left: -.088em;
    `}

    ${p => p.bp3_size6 && css`
      font-size: ${theme.FONTSIZE_1100};
      letter-spacing: -.052em;
      margin-left: -.09em;
    `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_size1 && css`
      font-size: ${theme.FONTSIZE_400};
      letter-spacing: -.0125em;
      margin-left: -.05em;
    `}

    ${p => p.bp4_size2 && css`
      font-size: ${theme.FONTSIZE_600};
      letter-spacing: -.005em;
      margin-left: -.06em;
    `}

    ${p => p.bp4_size3 && css`
      font-size: ${theme.FONTSIZE_800};
      letter-spacing: -.012em;
      margin-left: -.075em;
    `}

    ${p => p.bp4_size4 && css`
      font-size: ${theme.FONTSIZE_900};
      letter-spacing: -.028em;
      margin-left: -.085em;
    `}

    ${p => p.bp4_size5 && css`
      font-size: ${theme.FONTSIZE_1000};
      letter-spacing: -.042em;
      margin-left: -.088em;
    `}

    ${p => p.bp4_size6 && css`
      font-size: ${theme.FONTSIZE_1100};
      letter-spacing: -.052em;
      margin-left: -.09em;
    `}
  }

  ${p => p.white && css`color: ${theme.WHITE};`}
  ${p => p.black && css`color: ${theme.BLACK};`}

  ${p => p.gray500 && css`color: ${theme.GRAY_500};`}
  ${p => p.gray600 && css`color: ${theme.GRAY_600};`}
  ${p => p.gray900 && css`color: ${theme.GRAY_900};`}

  ${p => p.bold && css`
    font-weight: 500;
    font-family: ${theme.UNTITLEDSANSMEDIUM};
  `}

  ${p => p.nowrap && css`white-space: nowrap;`}

  ${p => p.tnum && css`font-feature-settings: 'tnum';`}

  ${p => p.us_none && css`user-select: none;`}

  ${Leading}
  ${Margin}
  ${NegativeMargin}
  ${TextAlign}
`;

Heading.propTypes = {
  mode: PropTypes.oneOf([
    'size1',
    'size2',
    'size3',
    'size4',
    'size5',
    'size6'
  ])
}

export default Heading;
