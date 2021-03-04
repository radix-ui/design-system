import { Box } from '../components/Box';
import { TreeItem } from '../components/TreeItem';
import { Text } from '../components/Text';
import { ScrollArea } from '../components/Scrollbar';
import { BoxIcon, RadiobuttonIcon, SliderIcon, TextIcon, SwitchIcon } from '@radix-ui/react-icons';

export function Layers() {
  return (
    <Box
      css={{
        position: 'fixed',
        top: '36px',
        left: '0',
        bottom: '0',
        width: '250px',
        borderRight: '1px solid $canvas',
        py: '$1',
        backgroundColor: '$loContrast',
      }}
    >
      <ScrollArea>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$slate400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="gray" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="gray" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="gray" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>

        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$red400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="red" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="red" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="red" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$crimson400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="crimson" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="crimson" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="crimson" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$pink400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="pink" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="pink" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="pink" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$purple400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="purple" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="purple" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="purple" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$violet400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="violet" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="violet" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="violet" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$indigo400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="indigo" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="indigo" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="indigo" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$blue400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="blue" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="blue" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="blue" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$cyan400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="cyan" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="cyan" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="cyan" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$teal400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="teal" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="teal" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="teal" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$green400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="green" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="green" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="green" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$lime400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="lime" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="lime" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="lime" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem css={{ backgroundColor: '$yellow400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="yellow" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="yellow" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="yellow" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem css={{ backgroundColor: '$orange400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="orange" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="orange" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="orange" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem css={{ backgroundColor: '$gold400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="gold" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="gold" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="gold" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem css={{ backgroundColor: '$brown400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="brown" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="brown" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="brown" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem css={{ backgroundColor: '$bronze400' }}>
          <Box css={{ mr: '$2' }}>
            <RadiobuttonIcon />
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="bronze" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SliderIcon />
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="bronze" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <SwitchIcon />
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="bronze" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
            <TextIcon />
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <BoxIcon />
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
      </ScrollArea>
    </Box>
  );
}
