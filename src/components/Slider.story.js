import React from "react";
import Component from "react-component-component";
import { storiesOf } from "@storybook/react";
import { Box } from "./Box";
import { Slider } from "./Slider";

storiesOf("Components|Slider", module).add("default", () => (
  <>
    <Box mb="4">
      <Slider defaultValue="20" />
    </Box>

    <Box mb="4">
      <Component initialState={{ value: 50 }}>
        {({ state, setState }) => (
          <>
            <Slider
              value={state.value}
              onChange={event => setState({ value: event.target.value })}
            />
            <div>
              <button onClick={() => setState({ value: 0 })}>change to 0</button>
              <button onClick={() => setState({ value: 50 })}>change to 50</button>
              <button onClick={() => setState({ value: 100 })}>change to 100</button>
            </div>
          </>
        )}
      </Component>
    </Box>
  </>
));
