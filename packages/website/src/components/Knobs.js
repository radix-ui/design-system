import React from 'react';
import { PropTypes } from 'react-view';
import { Input, Select, Option, Checkbox, Text, Flex, Code, Grid, Box } from '@modulz/radix';
import CodeBlock from './CodeBlock';

function Knob({ name, value, type, options, set }) {
  switch (type) {
    case PropTypes.Array:
    case PropTypes.Function:
    case PropTypes.ReactNode:
      return (
        <CodeBlock live plain onChange={code => set(code, name)}>
          {value}
        </CodeBlock>
      );
    case PropTypes.String:
    case PropTypes.Number:
      return (
        <Input
          value={value}
          type={type === PropTypes.Number ? 'number' : 'text'}
          onChange={e => set(e.target.value, name)}
        />
      );
    case PropTypes.Enum:
      return (
        <Select
          value={value}
          placeholder="Select an option"
          onValueChange={v => set(v, name)}
          size={1}
        >
          {options.map(option => (
            <Option key={option} value={option} label={option} />
          ))}
        </Select>
      );
    case PropTypes.Boolean:
      return <Checkbox checked={value} onChange={() => set(!value, name)} />;
    default:
      return null;
  }
}

export function Knobs({ state, set, error }) {
  return (
    <Box mb={20}>
      {Object.keys(state).map(name => {
        const prop = state[name];
        return (
          <Flex key={name} justifyContent="space-between" alignItems="center" mb={2}>
            <Grid gridRowGap={1}>
              <Text as="p" size={4}>
                {name}
              </Text>
              <div>
                <Code>{prop.type === PropTypes.Enum ? prop.options.join(' | ') : prop.type}</Code>
              </div>
              <Text as="small" size={2}>
                {prop.description}
              </Text>
            </Grid>
            <Knob {...prop} name={name} set={set} error={error.where === name ? error.msg : null} />
          </Flex>
        );
      })}
    </Box>
  );
}
