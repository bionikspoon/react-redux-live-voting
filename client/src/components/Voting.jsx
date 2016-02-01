import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

export default class Voting extends React.Component {
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
