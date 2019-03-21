import React from "react";
import { storiesOf } from "@storybook/react";
import { Button, MediumButton } from "./Button";

storiesOf("Components|Button", module).add("default", () => (
  <>
    <div>
      <Button mr={4}>Hello Button</Button>
      <MediumButton>Button</MediumButton>
    </div>

    <div>
      <Button variant="blue" mt="4" mr="4">
        Blue
      </Button>
      <MediumButton variant="blue" mt="4">
        Blue
      </MediumButton>
    </div>

    <div>
      <Button variant="green" mt="4" mr="4">
        Green
      </Button>
      <MediumButton variant="green" mt="4">
        Green
      </MediumButton>
    </div>

    <div>
      <Button variant="yellow" mt="4" mr="4">
        Yellow
      </Button>
      <MediumButton variant="yellow" mt="4">
        Yellow
      </MediumButton>
    </div>

    <div>
      <Button variant="red" mt="4" mr="4">
        Red
      </Button>
      <MediumButton variant="red" mt="4">
        Red
      </MediumButton>
    </div>

    <div>
      <Button variant="active" mt="4" mr="4">
        Active
      </Button>
      <MediumButton variant="active" mt="4">
        Active
      </MediumButton>
    </div>

    <div>
      <Button disabled mt="4" mr="4">
        Disabled
      </Button>
      <MediumButton disabled mt="4">
        Disabled
      </MediumButton>
    </div>
  </>
));
