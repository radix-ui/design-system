import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Section = styled.section`
  ${props => props.size1 && css`
    padding-top: ${theme.SPACING_300};
    padding-bottom: ${theme.SPACING_300};
  `}

  ${props => props.size2 && css`
    padding-top: ${theme.SPACING_600};
    padding-bottom: ${theme.SPACING_600};
  `}

  ${props => props.size3 && css`
    padding-top: ${theme.SPACING_900};
    padding-bottom: ${theme.SPACING_900};
  `}

  ${props => props.expanded && css`
    height: 100vh;
  `}

  ${p => p.white && css`background-color: ${theme.WHITE};`}
  ${p => p.black && css`background-color: ${theme.BLACK};`}
  ${p => p.gray600 && css`background-color: ${theme.GRAY_600};`}
  ${p => p.gray900 && css`background-color: ${theme.GRAY_900};`}
`;

Section.propTypes = {
  mode: PropTypes.oneOf([
    'size1',
    'size2',
    'size3'
  ])
}

export default Section;
