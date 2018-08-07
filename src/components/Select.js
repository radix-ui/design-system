import React from 'react';
import styled from 'styled-components';
import * as theme from './../theme/';

const Wrapper = styled.div`
  position: relative
`;

const Menu = styled.select`
  appearance: none;
  background-color: transparent;
  height: ${theme.SPACING_500};
  line-height: ${theme.SPACING_500};
  font-family: inherit;
  padding: 0;
  font-size: ${theme.FONTSIZE_300};
  border-radius: 0;
  border: none;
  outline: none;
  box-shadow: inset 0 -1px 0 0 ${theme.GRAY_400};
  width: 100%;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
`;

const Select = (props) => (
  <Wrapper>
    <Menu {...props}>
      {props.children}
    </Menu>
    <IconContainer>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="black">
        <path d="M8 0L4 4L0 0" transform="translate(3.5 5.5)" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </IconContainer>
  </Wrapper>
);

export default Select;
