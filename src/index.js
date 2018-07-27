import React, {Component} from 'react'

// Note that it's not necessary to import before exporting
// We only need to import if we want to use these in the little demo generated below
import Badge from './components/Badge';
import Box from './components/Box';
import Button from './components/Button';
import Container from './components/Container';
import Divider from './components/Divider';
import Flexbox from './components/Flexbox';
import Heading from './components/Heading';
import Image from './components/Image';
import Input from './components/Input';
import LinesButton from './components/LinesButton';
import Link from './components/Link';
import List from './components/List';
import ListItem from './components/ListItem';
import Section from './components/Select';
import Slider from './components/Switch';
import Select from './components/Select';
import Switch from './components/Switch';
import Text from './components/Text';

// It's necessary to export any components that we want to use elsewhere
// with the "export x from 'radix'" syntax
export Badge from './components/Badge';
export Box from './components/Box';
export Button from './components/Button';
export Container from './components/Container';
export Divider from './components/Divider';
export Flexbox from './components/Flexbox';
export Heading from './components/Heading';
export Image from './components/Image';
export Input from './components/Input';
export LinesButton from './components/LinesButton';
export Link from './components/Link';
export List from './components/List';
export ListItem from './components/ListItem';
export Section from './components/Select';
export Slider from './components/Switch';
export Select from './components/Select';
export Switch from './components/Switch';
export Text from './components/Text';

export default class extends Component {
  render() {
    return <div>
      <Button>
        Button
      </Button>
      <Text>
        Text
      </Text>
      <Heading>
        Heading
      </Heading>
      <Badge>
        Badge
      </Badge>
      <Box>
        Box
      </Box>
      <Container>
        Container
      </Container>
      <Divider>
        Divider
      </Divider>
      <Flexbox>
        Flexbox
      </Flexbox>
      <Image />
      <Input />
      <LinesButton>
        LinesButton
      </LinesButton>
    </div>
  }
}
