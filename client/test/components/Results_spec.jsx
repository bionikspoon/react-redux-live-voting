import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} from 'react-addons-test-utils';
import {expect} from 'chai';
import {List, Map} from 'immutable';
import Results from '../../src/components/Results.jsx';

describe('Results', () => {
  it('renders entries with vote counts or zero', () => {
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({'Trainspotting': 5});
    const results = <Results pair={pair}
                             tally={tally} />;
    const component = renderIntoDocument(results);
    const entries = scryRenderedDOMComponentsWithClass(component, 'entry');
    const [train, days] = entries.map(e => e.textContent);

    expect(entries.length).to.equal(2);
    expect(train).to.contain('Trainspotting');
    expect(train).to.contain('5');
    expect(days).to.contain('28 Days Later');
    expect(days).to.contain('0');
  });

  it('invokes the next callback wehn next button is clicked', () => {
    let nextInvoked = false;
    const next = () => {nextInvoked = true};
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({'Trainspotting': 5});
    const results = <Results pair={pair}
                             tally={tally}
                             next={next} />;
    const component = renderIntoDocument(results);
    Simulate.click(ReactDOM.findDOMNode(component.refs.next));

    expect(nextInvoked).to.equal(true);

  });

  it('renders the winner there is one', () => {
    const results = <Results winner="Trainspotting"
                             pair={["Trainspotting", "28 Days Later"]}
                             tally={Map()} />;
    const component = renderIntoDocument(results);
    const winner = ReactDOM.findDOMNode(component.refs.winner);
    //noinspection BadExpressionStatementJS
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('Trainspotting');
  });
});
