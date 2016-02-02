import React from 'react';
import PureComponent from '../lib/PureComponent.jsx';

export const VOTE_WIDTH_PERCENT = 8;

export default class App extends PureComponent {
  render() {
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
        {entries}
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
