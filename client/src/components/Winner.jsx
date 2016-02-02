import React from 'react';

import PureComponent from '../lib/PureComponent.jsx';

export default class Winner extends PureComponent {
  render() {
    return <div ref="winner">Winner is {this.props.winner}!</div>;
  }
};
