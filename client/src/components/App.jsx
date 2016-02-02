import React from 'react';
import PureComponent from '../lib/PureComponent.jsx';
import {List, Map} from 'immutable';

const pair = [
  'Trainspotting',
  '28 Days Later'
];
const tally = Map({
  'Trainspotting': 5,
  '28 Days Later': 4
});
export default class App extends PureComponent {
  render() {
    return React.cloneElement(this.props.children, {
      pair,
      tally
    });
  }
}
