import React from 'react';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import PureComponent from '../lib/PureComponent.jsx';

export class Voting extends PureComponent {
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

export default connect(mapStateToProps)(Voting);

function mapStateToProps(state) {
  return {
    pair: state.getIn([
      'vote',
      'pair'
    ]),
    winner: state.get('winner')
  };
}
