import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Slider from '../../src/components/Slider';

describe('Slider', () => {
  let containerNode;

  beforeEach(() => {
    containerNode = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(containerNode);
  });

  it('passes through all props to the underlying input component', () => {
    const min = 0;
    const max = 10;
    const value = 5;
    render(<Slider min={min} max={max} value={value} />, containerNode, () => {
      const inputNode = containerNode.getElementsByTagName('input')[0];
      expect(+inputNode.min).toBe(min);
      expect(+inputNode.max).toBe(max);
      expect(+inputNode.value).toBe(value);
    });

    
  });

  it('renders an outer track underneath the component', () => {});
  it("renders an inner track whose width is commensurate with the input's value", () => {});
  it("doesn't render a track too wide when max range isn't specified", () => {});
  it('focuses the input when the track or the input is selected', () => {});
  it('increments the input by increments of 10 when shift is held down', () => {});
  it('does not increment the input past the max value when shift is held down and right arrow key is pressed', () => {});
  it('does not decrement the input below the min value when shift is held down and left arrow key is pressed', () => {});
});