import React from "react";
import styled from "styled-components";
import { width, space, themeGet } from "styled-system";
import { theme, themeColor } from "../theme";

const ICON_SIZE = 15;

const Wrapper = styled.div`
  position: relative;
  ${width}
  ${space}
`;

Wrapper.defaultProps = { theme };

const StyledSelect = styled.select`
  appearance: none;
  background-color: transparent;
  height: ${themeGet("space.5")};
  line-height: ${themeGet("space.5")};
  font-family: ${themeGet("fonts.normal")};
  padding: 0;
  font-size: ${themeGet("fontSizes.2")};
  border-radius: 0;
  padding-right: ${themeGet("space.3")};
  border: none;
  outline: none;
  width: 100%;
  box-shadow: inset 0 -1px 0 0 ${themeColor("grays.3")};

  &:focus {
    box-shadow: inset 0 -1px 0 0 ${themeColor("blues.4")};
  }
`;

StyledSelect.defaultProps = { theme };

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${ICON_SIZE}px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export function Select({ children, value, onChange, ...props }) {
  return (
    <Wrapper {...props}>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <IconWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={ICON_SIZE}
          height={ICON_SIZE}
          viewBox="0 0 15 15"
          fill="none"
          stroke="currentColor"
          style={{
            display: "block",
          }}
        >
          <path d="M14.5 5.5L12.5 3.5L10.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.5 9.5L12.5 11.5L10.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </IconWrapper>
    </Wrapper>
  );
}

Select.defaultProps = { theme };
