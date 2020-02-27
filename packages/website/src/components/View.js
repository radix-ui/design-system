import React from 'react';
import { Button, Box, Heading } from '@modulz/radix';
import { useView, Compiler } from 'react-view';
import CodeBlock from './CodeBlock';
import { Knobs } from './Knobs';

export function View({ config }) {
  const { compilerProps, knobProps, editorProps, actions } = useView(config);

  return (
    <>
      <Compiler {...compilerProps} minHeight={62} />
      <Box
        mt={8}
        mb={7}
        overflow={['scroll', 'visible']}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <Heading as="h3" fontWeight={500} size={2} mt={8} mb={4}>
          Props
        </Heading>
        <Knobs {...knobProps} />
        <CodeBlock live plain onChange={editorProps.onChange}>
          {editorProps.code}
        </CodeBlock>
        <Box mt={4}>
          <Button onClick={actions.formatCode} mr={2}>
            Format Code
          </Button>
          <Button onClick={actions.copyCode} mr={2}>
            Copy code
          </Button>
          <Button onClick={actions.reset}>Reset</Button>
        </Box>
      </Box>
    </>
  );
}
