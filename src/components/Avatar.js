import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';

const Container = styled.div`
  align-items: center;
  background-color: ${theme.BLUE_500};
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.05);
  border-radius: 50%;
  color: white;
  display: inline-flex;
  font-family: ${theme.UNTITLEDSANSMEDIUM};
  justify-content: center;
  font-weight: 500;
  font-size: ${theme.FONTSIZE_300};
  text-transform: uppercase;
  position: relative;
  width: ${theme.SPACING_600};
  height: ${theme.SPACING_600};
  user-select: none;
  vertical-align: middle;

  ${props => props.size1 && css`
    width: ${theme.SPACING_400};
    height: ${theme.SPACING_400};
  `}

  ${props => props.size2 && css`
    width: ${theme.SPACING_500};
    height: ${theme.SPACING_500};
  `}

  ${props => props.size3 && css`
    width: ${theme.SPACING_600};
    height: ${theme.SPACING_600};
  `}

  ${props => props.size4 && css`
    width: ${theme.SPACING_700};
    height: ${theme.SPACING_700};
  `}

  ${props => props.size5 && css`
    width: ${theme.SPACING_800};
    height: ${theme.SPACING_800};
  `}

  ${props => props.size6 && css`
    width: ${theme.SPACING_900};
    height: ${theme.SPACING_900};
  `}

  ${props => props.color && css`
    &::before {
      position: absolute;
      border-radius: 50%;
      top: -2px;
      left: -2px;
      content: "";
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      box-shadow: 0 0 0 2px ${theme.GRAY_400};
    }
  `}

  ${props => props.blue && css`
    &::before {
      box-shadow: 0 0 0 2px ${theme.BLUE_500};
    }
  `}

  ${props => props.green && css`
    &::before {
      box-shadow: 0 0 0 2px ${theme.GREEN_500};
    }
  `}

  ${props => props.yellow && css`
    &::before {
      box-shadow: 0 0 0 2px ${theme.YELLOW_500};
    }
  `}

  ${props => props.red && css`
    &::before {
      box-shadow: 0 0 0 2px ${theme.RED_500};
    }
  `}

  ${props => props.inline && css`
    margin-left: -4px;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.05), 0 0 0 2px white;
  `}

  ${Margin}
`;

const Initial = styled.span`
  display: block;
  text-transform: uppercase;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  display: block;
  max-width: 100%;
`;

const Avatar = (props) => (
  <Container {...props}>
    <Initial>{props.initial}</Initial>
    <Image
      src={props.url}
      width={props.size}
      height={props.size}
      alt={props.caption}
    />
  </Container>
);

export default Avatar;
