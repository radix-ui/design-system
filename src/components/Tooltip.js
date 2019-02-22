import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components';
import Text from './Text';

const ACTIVE_DELAY = 800;
const RECENTLY_ACTIVE_THRESHOLD = 800;

const StyledTooltipContainer = styled.div`
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  position: absolute;
  transition-delay: 0ms;
  transition-property: opacity;

  ${(props) => props.active && css`
    opacity: 1;
  `}
`;

const StyledTooltipPanel = styled.div`
  border-radius: 4px;
  position: absolute;
  background: hsla(0,0%,0%,.8);
  padding: 7px;
`;

const StyledArrow = styled.div`
  position: relative;

  &::after {
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: transparent;
    margin-left: 0;
    border-width: 5px;
    top: 100%;
    left: 50%;

    ${(props) => props.direction === 'top' && css`
      border-top-color: hsla(0,0%,0%,.8);
    `}

    ${(props) => props.direction === 'right' && css`
      border-right-color: hsla(0,0%,0%,.8);
    `}

    ${(props) => props.direction === 'bottom' && css`
      border-bottom-color: hsla(0,0%,0%,.8);
    `}

    ${(props) => props.direction === 'left' && css`
      border-left-color: hsla(0,0%,0%,.8);
    `}
  }
`;

const ARROW_HEIGHT = 10;
const ARROW_WIDTH = 10;

const getBounds = (element) => {
  const { left, top, right, bottom, width, height } = element.getBoundingClientRect();
  return {
    left: left + window.scrollX,
    top: top + window.scrollY,
    right: right + window.scrollX,
    bottom: bottom + window.scrollY,
    width,
    height,
  };
};

const roundCoordinates = ({ top, left }) => ({
  top: Math.round(top),
  left: Math.round(left),
});

const getTooltipLayout = (
  alignment,
  direction,
  tooltipBounds,
  targetBounds,
) => {
  // Determine the center of the target, as the both the placement of the tooltip body and the arrow are relative to it
  const targetCenter = {
    left: targetBounds.left + targetBounds.width / 2,
    top: targetBounds.top + targetBounds.height / 2,
  };

  // Values for the tooltip's left edge which place it at the following positions
  const left = {
    start: targetBounds.left,
    center: targetCenter.left - tooltipBounds.width / 2,
    end: targetBounds.right - tooltipBounds.width,
  };

  // Values for the tooltip's top edge which place it at the following positions
  const top = {
    start: targetBounds.top,
    center: targetCenter.top - tooltipBounds.height / 2,
    end: targetBounds.bottom - tooltipBounds.height,
  };

  // Values for top and left at which the tooltip must start in order for its inner edge to be positioned at the correct
  // distance from the target's outer edge
  const origin = {
    top: targetBounds.top - tooltipBounds.height - ARROW_HEIGHT,
    right: targetBounds.right + ARROW_WIDTH,
    bottom: targetBounds.bottom + ARROW_HEIGHT,
    left: targetBounds.left - tooltipBounds.width - ARROW_HEIGHT,
  };

  const tooltipPositionCalculations = {
    top: {
      start: () => ({ left: left.start, top: origin.top }),
      center: () => ({ left: left.center, top: origin.top }),
      end: () => ({ left: left.end, top: origin.top }),
    },
    right: {
      start: () => ({ left: origin.right, top: top.start }),
      center: () => ({ left: origin.right, top: top.center }),
      end: () => ({ left: origin.right, top: top.end }),
    },
    bottom: {
      start: () => ({ left: left.start, top: origin.bottom }),
      center: () => ({ left: left.center, top: origin.bottom }),
      end: () => ({ left: left.end, top: origin.bottom }),
    },
    left: {
      start: () => ({ left: origin.left, top: top.start }),
      center: () => ({ left: origin.left, top: top.center }),
      end: () => ({ left: origin.left, top: top.end }),
    },
  };

  const arrowPositionCalculations = {
    top: () => ({
      left: targetCenter.left - ARROW_WIDTH / 2,
      top: targetBounds.top - ARROW_HEIGHT,
    }),
    right: () => ({
      left: targetBounds.right,
      top: targetCenter.top - ARROW_HEIGHT / 2,
    }),
    bottom: () => ({
      left: targetCenter.left - ARROW_WIDTH / 2,
      top: targetBounds.bottom,
    }),
    left: () => ({
      left: targetBounds.left - ARROW_WIDTH,
      top: targetCenter.top - ARROW_HEIGHT / 2,
    }),
  };

  return {
    tooltipPosition: roundCoordinates(tooltipPositionCalculations[direction][alignment]()),
    arrowPosition: roundCoordinates(arrowPositionCalculations[direction]()),
  };
};

const Tooltip = () => {
  const [state, setState] = useState({
    // top | right | bottom | left
    alignment: 'bottom',
    // start | center | end
    direction: 'start',
    dirty: false,
    content: '',
    layout: {},
    target: null,
  });
  const [recentlyActive, setRecentlyActive] = useState(false);
  const [active, setActive] = useState(false);
  const [activeTimeout, setActiveTimeout] = useState(null);
  const [unactiveTimeout, setUnactiveTimeout] = useState(null);
  const tooltip = useRef(null);
  const disableTooltip = () => setActive(false);

  useEffect(() => {
    // Build mouseover listener
    const handleAttention = (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        setActive(false);
        return;
      }

      const { tooltipContent, tooltipDirection, tooltipAlignment } = target.dataset;
      
      // If two consecutive attention events occur to the same element, we can hide the tooltip
      if (!tooltipContent || target === state.target) {
        // If we were just active but are disabling now, set recentlyActive to true and set a timer to turn it off
        if (active) {
          setRecentlyActive(true);
          clearTimeout(unactiveTimeout);
          setUnactiveTimeout(setTimeout(
            () => setRecentlyActive(false),
            RECENTLY_ACTIVE_THRESHOLD,
          ));
        }

        // If we are not refocusing on the current target, there is a new element without tooltip data being focused,
        // so set target to null so we know to hide the tooltip. Otherwise, maintain the current target so that we know
        // we can hide the tooltip and keep it hidden until we receive a new target
        const targetBeingRefocused = target === state.target;
        setState({ ...state, target: targetBeingRefocused ? state.target : null });
        setActive(false);
        clearTimeout(activeTimeout);
      } else {
        if (target.tabIndex === -1) {
          console.warn('🚨 tabIndex has not been defined on a component with data-tooltip-content attribute!');
        }

        // Otherwise, we should show it for this element
        setState({
          target,
          direction: (tooltipDirection || 'start'),
          alignment: (tooltipAlignment || 'bottom'),
          content: tooltipContent,
          layout: {},
          dirty: true,
        });

        clearTimeout(activeTimeout);
        if (recentlyActive) {
          setActive(true);
        } else {
          setActiveTimeout(setTimeout(() => setActive(true), ACTIVE_DELAY));
        }
      }
    };

    window.addEventListener('mouseover', handleAttention);
    window.addEventListener('focusin', handleAttention);
    window.addEventListener('click', handleAttention);
    window.addEventListener('blur', disableTooltip);

    return () => {
      window.removeEventListener('mouseover', handleAttention);
      window.removeEventListener('focusin', handleAttention);
      window.removeEventListener('click', handleAttention);
      window.removeEventListener('blur', disableTooltip);
    };
  });

  useLayoutEffect(() => {
    const { direction, alignment, target } = state;
    if (!state.target) return setActive(false);
    if (!active || !state.dirty) { return; }

    // We've just rendered the tooltip. If there is content, determine tooltip's new position based on that content:
    const newLayout = getTooltipLayout(
      alignment,
      direction,
      getBounds(tooltip.current),
      getBounds(target),
    );

    setState({ ...state, layout: newLayout, dirty: false });
  });

  const { layout = {} } = state;
  return (
    <StyledTooltipContainer active={active}>
      <StyledArrow direction={state.direction} style={{ ...layout.arrowPosition }} />
      <StyledTooltipPanel ref={tooltip} style={{ ...layout.tooltipPosition }}>
        <Text nowrap size2 color_white>
          {state.content}
        </Text>
      </StyledTooltipPanel>
    </StyledTooltipContainer>
  );
};

export default Tooltip;
