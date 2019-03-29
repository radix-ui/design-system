import React from "react";
import Component from "react-component-component";
import { storiesOf } from "@storybook/react";
import { Box } from "./Box";
import { Slider } from "./Slider";
import { Button } from "./Button";

storiesOf("Components|Slider", module).add("default", () => (
  <>
    <Box mb="4">
      <p>Uncontrolled</p>
      <Slider />
    </Box>

    <Box mt="4" mb="4">
      <p>Controlled</p>
      <Component initialState={{ value: 50 }}>
        {({ state, setState }) => (
          <>
            <Slider
              value={state.value}
              onChange={event => setState({ value: event.target.value })}
            />
            <div>
              <p>Current value is {state.value}</p>
              <Button mx="1" onClick={() => setState({ value: 0 })}>
                change to 0
              </Button>
              <Button mx="1" onClick={() => setState({ value: 50 })}>
                change to 50
              </Button>
              <Button mx="1" onClick={() => setState({ value: 100 })}>
                change to 100
              </Button>
            </div>
          </>
        )}
      </Component>
    </Box>
  </>
));
