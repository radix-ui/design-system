import styled, { css } from 'styled-components';

const Button = styled.button`
  align-items: center;
  appearance: none;
  background-color: lightgray;
  box-shadow: inset 0 0 0 1px gray;
  border: none;
  border-radius: 4px;
  color: gray;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-family: 'UntitledSans-Medium';
  font-size: 15px;
  font-weight: 400;
  height: 35px;
  justify-content: center;
  line-height: 1;
  min-width: 35px;
  outline: none;
  padding: 0 15px;
  pointer-events: auto;
  text-align: center;
  text-decoration: none;
  transition-property: all;
  transition-duration: 80ms;
  transition-timing-function: ease;
  user-select: none;
  white-space: nowrap;
`;

export default Button;
