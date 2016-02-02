import React from 'react';
import classNames from 'classnames';
import PureComponent from '../lib/PureComponent.jsx';

export default class Vote extends PureComponent {
  render() {
    const pair = this.getPair().map(entry => {
      const hadVotedForEntry = this.hasVotedFor(entry);
      const onClick = () => this.props.vote(entry);
      const label = <div className="label">Voted</div>;
      return (
        <button
          key={entry}
          onClick={onClick}
          disabled={this.isDisabled()}
          className={classNames({voted: hadVotedForEntry})}
        >
          <h1>{entry}</h1>

          {hadVotedForEntry ? label : null}
        </button>
      )
    });
    return <div className="voting">{pair}</div>;
  }

  getPair() {
    return this.props.pair || [];
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }
}
