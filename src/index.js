import React, {Component} from 'react'
import Button from './components/Button.js'
import Text from './components/Text.js'
import Heading from './components/Heading.js'
import Badge from './components/Badge.js'
import Box from './components/Box.js'
import Container from './components/Container.js'
import Divider from './components/Divider.js'
import Flexbox from './components/Flexbox.js'
import Image from './components/Image.js'
import Input from './components/Input.js'
import LinesButton from './components/LinesButton.js'


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
