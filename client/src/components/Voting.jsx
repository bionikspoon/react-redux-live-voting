import React from 'react';
import {connect} from 'react-redux';

import Winner from './Winner';
import Vote from './Vote';
import PureComponent from '../lib/PureComponent.jsx';
import * as actionCreators from '../action_creators';

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

export default connect(mapStateToProps, actionCreators)(Voting);

function mapStateToProps(state) {
  return {
    pair: state.getIn([
      'vote',
      'pair'
    ]),
    winner: state.get('winner'),
    hasVoted: state.get('hasVoted')
  };
}
