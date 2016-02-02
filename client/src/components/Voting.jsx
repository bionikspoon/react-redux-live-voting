import React from 'react';
import Winner from './Winner';
import Vote from './Vote';
import PureComponent from '../lib/PureComponent.jsx';

export default class Voting extends PureComponent {
  render() {
    return this.props.winner ? this.renderWinner() : this.renderVoting();
  }

  renderWinner() {
    return <Winner ref="winner"
                   winner={this.props.winner } />;
  }

  renderVoting() {
    return <Vote {...this.props} />;
  }

}
