import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';
import PureComponent from '../lib/PureComponent.jsx';
import Winner from './Winner.jsx';

export class Results extends PureComponent {
  render() {
    return this.props.winner ? this.renderWinner() : this.renderTally();
  }

  renderWinner() {
    return <Winner ref="winner"
                   winner={this.props.winner} />;
  }

  renderTally() {
    const entries = this.getPair().map(entry => (
      <div
        key={entry}
        className="entry">
        <h1>{entry}</h1>
        <div className="voteVisualization">
          <div
            className="votesBlock"
            style={{width: this.getVotesBlockWidth(entry)}}>
          </div>
        </div>
        <div className="voteCount">
          {this.getVotes(entry)}
        </div>
      </div>
    ));
    return (
      <div className="results">
        <div className="tally">
          {entries}
        </div>
        <div className="management">
          <button
            className="next"
            ref="next"
            onClick={this.props.next}>
            Next
          </button>
        </div>
      </div>
    );
  }

  getPair() {
    return this.props.pair || [];
  }

  getVotes(entry) {
    if(this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }

  getVotesBlockWidth(entry) {
    return (this.getVotes(entry) * VOTE_WIDTH_PERCENT) + '%';
  }

}

export default connect(mapStateToProps, actionCreators)(Results);

const VOTE_WIDTH_PERCENT = 8;

function mapStateToProps(state) {
  return {
    pair: state.getIn([
      'vote',
      'pair'
    ]),
    tally: state.getIn([
      'vote',
      'tally'
    ]),
    winner: state.get('winner')
  }
}
