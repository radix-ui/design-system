import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import Slider from 'src/components/Slider';
import sinon from 'sinon';

describe('Slider', () => {
  it('passes through all props to the underlying input component', () => {
    const min = 0;
    const max = 10;
    const value = 5;
    const wrapper = mount(<Slider min={min} max={max} value={value} />);
    const input = wrapper.find('input');
    expect(+input.props().min).toBe(min);
    expect(+input.props().max).toBe(max);
    expect(+input.props().value).toBe(value);
  });

  it("renders an inner track whose width is commensurate with the input's value", () => {
    let wrapper = mount(<Slider min={0} max={100} value={50} />);
    let innerTrack = wrapper.find('div').at(2);
    expect(innerTrack.props().style.width).toBe('50%');

    wrapper = mount(<Slider min={0} max={100} value={25} />);
    innerTrack = wrapper.find('div').at(2);
    expect(innerTrack.props().style.width).toBe('25%');

    wrapper = mount(<Slider min={0} max={50} value={25} />);
    innerTrack = wrapper.find('div').at(2);
    expect(innerTrack.props().style.width).toBe('50%');
  });

  it("doesn't render a track too wide when max range isn't specified", () => {
    const wrapper = mount(<Slider min={0} value={50} />);
    const innerTrack = wrapper.find('div').at(2);
    expect(innerTrack.props().style.width).toBe('50%');
  });

  it('increments the input by largeStep prop when shift is held down and arrow key is pressed', () => {
    let wrapper = mount(<Slider min={0} value={50} largeStep={5} />);
    let input = wrapper.find('input');
    input.simulate('keyDown', { keyCode: 39, shiftKey: true });
    expect(input.getDOMNode().getAttribute('value')).toBe('55');

    wrapper = mount(<Slider value={50} largeStep={5} />);
    input = wrapper.find('input');
    input.simulate('keyDown', { keyCode: 37, shiftKey: true });
    expect(input.getDOMNode().getAttribute('value')).toBe('45');

    wrapper = mount(<Slider value={50} largeStep={20} />);
    input = wrapper.find('input');
    input.simulate('keyDown', { keyCode: 39, shiftKey: true });
    expect(input.getDOMNode().getAttribute('value')).toBe('70');
  });

  it('does not increment the input past the max value when shift is held down and right arrow key is pressed', () => {
    const wrapper = mount(<Slider min={0} max={50} value={45} largeStep={10} />);
    const input = wrapper.find('input');
    input.simulate('keyDown', { keyCode: 39, shiftKey: true });
    expect(input.getDOMNode().getAttribute('value')).toBe('50');
  });

  it('does not decrement the input below the min value when shift is held down and left arrow key is pressed', () => {
    const wrapper = mount(<Slider min={0} value={5} largeStep={10} />);
    const input = wrapper.find('input');
    input.simulate('keyDown', { keyCode: 37, shiftKey: true });
    expect(input.getDOMNode().getAttribute('value')).toBe('0');
  });

  it('calls onChange with change event whenever a value changes', () => {
    const spy = sinon.spy();
    const wrapper = mount(<Slider value={10} onChange={spy} />);
    const input = wrapper.find('input');
    const psuedoEvent = { target: { value: 20 } };
    input.simulate('change', psuedoEvent);
    expect(spy.calledWithMatch(sinon.match(psuedoEvent))).toBe(true);
  });
});