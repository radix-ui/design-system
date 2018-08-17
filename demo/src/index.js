import React, {Component} from 'react'
import {render} from 'react-dom'

import Showcase from '../../src'

import './layout.css'

class Demo extends Component {
  render() {
    return <div>
      <Showcase/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
