import React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "./Box";
import { Flex } from "./Flex";
import { Button } from "./Button";
import { Tooltip } from "./Tooltip";

storiesOf("Components|Tooltip", module).add("default", () => (
  <>
    <Box mb="6" mt="6" ml="200px">
      <Flex py="5">
        <Box m="10px">
          <Tooltip position="top" align="start" text="Tooltip text goes here ⚡️">
            <Button>Top / Start</Button>
          </Tooltip>
        </Box>
        <Box m="10px">
          <Tooltip text="Tooltip text goes here ⚡️">
            <Button>Top / Center</Button>
          </Tooltip>
        </Box>
        <Box m="10px">
          <Tooltip position="top" align="end" text="Tooltip text goes here ⚡️">
            <Button>Top / End</Button>
          </Tooltip>
        </Box>
      </Flex>

      <Flex py="5">
        <Box m="10px">
          <Tooltip position="bottom" align="start" text="Tooltip text goes here ⚡️">
            <Button>Bottom / Start</Button>
          </Tooltip>
        </Box>
        <Box m="10px">
          <Tooltip position="bottom" text="Tooltip text goes here ⚡️">
            <Button>Bottom / Center</Button>
          </Tooltip>
        </Box>
        <Box m="10px">
          <Tooltip position="bottom" align="end" text="Tooltip text goes here ⚡️">
            <Button>Bottom / End</Button>
          </Tooltip>
        </Box>
      </Flex>

      <Flex py="5">
        <Box m="10px">
          <Tooltip position="left" align="start" text="Tooltip text goes here ⚡️">
            <Button>Left / Start</Button>
          </Tooltip>
        </Box>
        <Box m="10px">
          <Tooltip position="left" text="Tooltip text goes here ⚡️">
            <Button>Left / Center</Button>
          </Tooltip>
        </Box>
        <Box m="10px">
          <Tooltip position="left" align="end" text="Tooltip text goes here ⚡️">
            <Button>Left / End </Button>
          </Tooltip>
        </Box>
      </Flex>

      <Flex py="5">
        <Box m="10px">
          <Tooltip position="right" align="start" text="Tooltip text goes here ⚡️">
            <Button>Right / Start</Button>
          </Tooltip>
        </Box>
        <Box m="10px">
          <Tooltip position="right" text="Tooltip text goes here ⚡️">
            <Button>Right / Center</Button>
          </Tooltip>
        </Box>
        <Box m="10px">
          <Tooltip position="right" align="end" text="Tooltip text goes here ⚡️">
            <Button>Right / End </Button>
          </Tooltip>
        </Box>
      </Flex>
    </Box>
  </>
));
