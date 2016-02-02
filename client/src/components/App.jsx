import React from 'react';

import PureComponent from '../lib/PureComponent.jsx';

export default class App extends PureComponent {
  render() {
    return this.props.children;
  }
}
