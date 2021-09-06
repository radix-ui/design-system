import {
  BlendingModeIcon,
  MinusIcon,
  MixerVerticalIcon,
  PlusIcon,
  ShadowIcon,
  TransparencyGridIcon,
} from '@radix-ui/react-icons';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { IconButton } from '../components/IconButton';
import { TextField } from '../components/TextField';
import { Select } from '../components/Select';
import { Text } from '../components/Text';
import { ScrollArea } from '../components/Scrollbar';

export function Properties() {
  return (
    <Box
      css={{
        position: 'fixed',
        top: '36px',
        right: '0',
        bottom: '0',
        width: '250px',
        borderLeft: '1px solid $canvas',
        backgroundColor: '$loContrast',
      }}
    >
      <ScrollArea>
        <Box css={{ pb: '$9' }}>
          <Box css={{ py: '$1' }}>
            <Flex
              css={{
                px: '$3',
                my: '$1',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Text size="1" css={{ fontWeight: 500 }}>
                  Layout
                </Text>
              </Box>
              <Box css={{ mr: '-$1' }}>
                <IconButton>
                  <PlusIcon />
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Width</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Height</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Min. Width</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Max. Width</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Min. Height</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Max. Height</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Padding</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Padding Top</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Padding Right</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Padding Bottom</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Padding Left</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Overflow</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <Select css={{ width: '100%' }}>
                    <option value="option1" label="Visible">
                      fewfew
                    </option>
                    <option value="option2" label="Hidden">
                      fewfew
                    </option>
                  </Select>
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
          </Box>

          <Box css={{ borderTop: '1px solid $slate6', py: '$1' }}>
            <Flex
              css={{
                px: '$3',
                my: '$1',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Text size="1" css={{ fontWeight: 500 }}>
                  Text
                </Text>
              </Box>
              <Box css={{ mr: '-$1' }}>
                <IconButton>
                  <PlusIcon />
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <Select css={{ width: '100%' }}>
                    <option value="option1" label="Untitled"></option>
                    <option value="option2" label="Repeat X"></option>
                    <option value="option3" label="Repeat Y"></option>
                  </Select>
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Size</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="16" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Style</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <Select css={{ width: '100%' }}>
                    <option value="option1" label="Normal"></option>
                    <option value="option2" label="Italic"></option>
                    <option value="option3" label="Medium"></option>
                    <option value="option3" label="Bold"></option>
                    <option value="option3" label="Bold Italic"></option>
                  </Select>
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Color</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box>
                  <IconButton>
                    <TransparencyGridIcon />
                  </IconButton>
                </Box>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="b5b5b5" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Line Height</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="1" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Tracking</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Case</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <Select css={{ width: '100%' }}>
                    <option value="option1" label="As Typed"></option>
                    <option value="option2" label="Lowercase"></option>
                    <option value="option3" label="Uppercase"></option>
                    <option value="option3" label="Capitalized"></option>
                  </Select>
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
          </Box>

          <Box css={{ borderTop: '1px solid $slate6', py: '$1' }}>
            <Flex
              css={{
                px: '$3',
                my: '$1',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Text size="1" css={{ fontWeight: 500 }}>
                  Shadow
                </Text>
              </Box>
              <Box css={{ mr: '-$1' }}>
                <IconButton>
                  <PlusIcon />
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ mr: '$1', ml: '-$1' }}>
                <IconButton>
                  <TransparencyGridIcon />
                </IconButton>
              </Box>
              <Box css={{ mr: '$1', ml: '-$1' }}>
                <IconButton>
                  <ShadowIcon />
                </IconButton>
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <TextField
                  size="1"
                  cursor="default"
                  defaultValue="0"
                  css={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    width: 'calc(100% + 1px)',
                  }}
                />
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <TextField
                  size="1"
                  cursor="default"
                  defaultValue="0"
                  css={{ borderRadius: 0, width: 'calc(100% + 1px)' }}
                />
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <TextField
                  size="1"
                  cursor="default"
                  defaultValue="0"
                  css={{ borderRadius: 0, width: 'calc(100% + 1px)' }}
                />
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <TextField
                  size="1"
                  cursor="default"
                  defaultValue="0"
                  css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                />
              </Box>
              <Box css={{ ml: '$1', mr: '-$1' }}>
                <IconButton>
                  <MinusIcon />
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ mr: '$1', ml: '-$1' }}>
                <IconButton>
                  <TransparencyGridIcon />
                </IconButton>
              </Box>
              <Box css={{ mr: '$1', ml: '-$1' }}>
                <IconButton>
                  <ShadowIcon />
                </IconButton>
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <TextField
                  size="1"
                  cursor="default"
                  defaultValue="0"
                  css={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    width: 'calc(100% + 1px)',
                  }}
                />
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <TextField
                  size="1"
                  cursor="default"
                  defaultValue="0"
                  css={{ borderRadius: 0, width: 'calc(100% + 1px)' }}
                />
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <TextField
                  size="1"
                  cursor="default"
                  defaultValue="0"
                  css={{ borderRadius: 0, width: 'calc(100% + 1px)' }}
                />
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <TextField
                  size="1"
                  cursor="default"
                  defaultValue="0"
                  css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                />
              </Box>
              <Box css={{ ml: '$1', mr: '-$1' }}>
                <IconButton>
                  <MinusIcon />
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ pl: '68px', pr: '40px', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                {/* <Tooltip label="X Offset" side="bottom" align="center"> */}
                <Text
                  size="1"
                  css={{
                    color: '$slate11',
                    display: 'block',
                    textAlign: 'center',
                  }}
                  style={{ lineHeight: 1 }}
                >
                  X
                </Text>
                {/* </Tooltip> */}
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                {/* <Tooltip label="Y Offset" side="bottom" align="center"> */}
                <Text
                  size="1"
                  css={{
                    color: '$slate11',
                    display: 'block',
                    textAlign: 'center',
                  }}
                  style={{ lineHeight: 1 }}
                >
                  Y
                </Text>
                {/* </Tooltip> */}
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                {/* <Tooltip label="Blur" side="bottom" align="center"> */}
                <Text
                  size="1"
                  css={{
                    color: '$slate11',
                    display: 'block',
                    textAlign: 'center',
                  }}
                  style={{ lineHeight: 1 }}
                >
                  B
                </Text>
                {/* </Tooltip> */}
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                {/* <Tooltip label="Spread" side="bottom" align="center"> */}
                <Text
                  size="1"
                  css={{
                    color: '$slate11',
                    display: 'block',
                    textAlign: 'center',
                  }}
                  style={{ lineHeight: 1 }}
                >
                  S
                </Text>
                {/* </Tooltip> */}
              </Box>
            </Flex>
          </Box>

          <Box css={{ borderTop: '1px solid $slate6', py: '$1' }}>
            <Flex
              css={{
                px: '$3',
                my: '$1',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Text size="1" css={{ fontWeight: 500 }}>
                  Filter
                </Text>
              </Box>
              <Box css={{ mr: '-$1' }}>
                <IconButton>
                  <PlusIcon />
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ mr: '$1', ml: '-$1' }}>
                  <IconButton>
                    <BlendingModeIcon />
                  </IconButton>
                </Box>
                <Box css={{ flexGrow: 1 }}>
                  <Select
                    css={{
                      width: 'calc(100% + 1px)',
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  >
                    <option value="option1" label="Brightness">
                      Brightness
                    </option>
                    <option value="option2" label="Brightness">
                      Brightness
                    </option>
                    <option value="option3" label="Brightness">
                      Brightness
                    </option>
                  </Select>
                </Box>
              </Flex>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="5"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ mr: '$1', ml: '-$1' }}>
                  <IconButton>
                    <BlendingModeIcon />
                  </IconButton>
                </Box>
                <Box css={{ flexGrow: 1 }}>
                  <Select
                    css={{
                      width: 'calc(100% + 1px)',
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  >
                    <option value="option1" label="Brightness">
                      Brightness
                    </option>
                    <option value="option2" label="Blur">
                      Blur
                    </option>
                    <option value="option3" label="Blur">
                      Blur
                    </option>
                  </Select>
                </Box>
              </Flex>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="100%"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
          </Box>

          <Box css={{ borderTop: '1px solid $slate6', py: '$1' }}>
            <Flex
              css={{
                px: '$3',
                my: '$1',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Text size="1" css={{ fontWeight: 500 }}>
                  Transform
                </Text>
              </Box>
              <Box css={{ mr: '-$1' }}>
                <IconButton>
                  <PlusIcon />
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Select
                  css={{
                    width: 'calc(100% + 1px)',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <option value="option1" label="Rotate"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="0°"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Select
                  css={{
                    width: 'calc(100% + 1px)',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <option value="option1" label="Rotate X"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="0°"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Select
                  css={{
                    width: 'calc(100% + 1px)',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <option value="option1" label="Rotate Y"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="0°"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Select
                  css={{
                    width: 'calc(100% + 1px)',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <option value="option1" label="Rotate Z"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="0°"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Select
                  css={{
                    width: 'calc(100% + 1px)',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <option value="option1" label="Scale"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="100%"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Select
                  css={{
                    width: 'calc(100% + 1px)',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <option value="option1" label="Scale X"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="100%"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Select
                  css={{
                    width: 'calc(100% + 1px)',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <option value="option1" label="Scale Y"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="100%"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Select
                  css={{
                    width: 'calc(100% + 1px)',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <option value="option1" label="Scale Z"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="100%"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Select
                  css={{
                    width: 'calc(100% + 1px)',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <option value="option1" label="Skew X"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="0°"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Select
                  css={{
                    width: 'calc(100% + 1px)',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <option value="option1" label="Skew Y"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="0°"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Select
                  css={{
                    width: 'calc(100% + 1px)',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <option value="option1" label="Translate X"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="0"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Select
                  css={{
                    width: 'calc(100% + 1px)',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <option value="option1" label="Translate Y"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="0"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Select
                  css={{
                    width: 'calc(100% + 1px)',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <option value="option1" label="Translate Z"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="0"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Origin</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <Select css={{ width: '100%' }}>
                    <option value="option1" label="Center"></option>
                    <option value="option2" label="Top"></option>
                    <option value="option3" label="Right"></option>
                    <option value="option3" label="Bottom"></option>
                    <option value="option3" label="Left"></option>
                    <option value="option1" label="Top Right"></option>
                    <option value="option2" label="Bottom Right"></option>
                    <option value="option3" label="Bottom Left"></option>
                    <option value="option3" label="Top Left"></option>
                  </Select>
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: 1 }}>
                <Text size="1">Perspective</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField size="1" cursor="default" defaultValue="0°" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
          </Box>

          <Box css={{ borderTop: '1px solid $slate6', py: '$1' }}>
            <Flex
              css={{
                px: '$3',
                my: '$1',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Text size="1" css={{ fontWeight: 500 }}>
                  Transition
                </Text>
              </Box>
              <Box css={{ mr: '-$1' }}>
                <IconButton>
                  <PlusIcon />
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ mr: '$1', ml: '-$1' }}>
                  <IconButton>
                    <MixerVerticalIcon />
                  </IconButton>
                </Box>
                <Box css={{ flexGrow: 1 }}>
                  <Select
                    css={{
                      width: 'calc(100% + 1px)',
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  >
                    <option value="option1" label="Fill"></option>
                    <option value="option2" label="Repeat X"></option>
                    <option value="option3" label="Repeat Y"></option>
                  </Select>
                </Box>
              </Flex>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="100ms"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ mr: '$1', ml: '-$1' }}>
                  <IconButton>
                    <MixerVerticalIcon />
                  </IconButton>
                </Box>
                <Box css={{ flexGrow: 1 }}>
                  <Select
                    css={{
                      width: 'calc(100% + 1px)',
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  >
                    <option value="option1" label="Transform"></option>
                    <option value="option2" label="Repeat X"></option>
                    <option value="option3" label="Repeat Y"></option>
                  </Select>
                </Box>
              </Flex>
              <Flex css={{ flexBasis: '0', flexGrow: 1 }}>
                <Box css={{ flexGrow: 1 }}>
                  <TextField
                    size="1"
                    cursor="default"
                    defaultValue="100ms"
                    css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton>
                    <MinusIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </ScrollArea>
    </Box>
  );
}
