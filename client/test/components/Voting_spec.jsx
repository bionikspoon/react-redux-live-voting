import {Voting} from '../../src/components/Voting.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} from 'react-addons-test-utils';
import {expect} from 'chai';

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(<Voting pair={["Trainspotting", "28 Days Later"]} />);
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days Later');
  });

  it('invokes callback when a button is clicked', () => {
    let votedWith = null;
    const vote = entry => {votedWith = entry};
    const voting = (
      <Voting
        pair={["Trainspotting", "28 Days Later"]}
        vote={vote} />
    );
    const component = renderIntoDocument(voting);
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    Simulate.click(buttons[0]);

    expect(votedWith).to.equal('Trainspotting');

  });

  it('disables buttons when user has voted', () => {
    const voting = (
      <Voting
        pair={["Trainspotting", "28 Days Later"]}
        hasVoted="Trainspotting" />
    );
    const component = renderIntoDocument(voting);
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].hasAttribute('disabled')).to.equal(true);
    expect(buttons[1].hasAttribute('disabled')).to.equal(true);
  });

  it('adds label to the voted entry', () => {
    const voting = (
      <Voting
        pair={["Trainspotting", "28 Days Later"]}
        hasVoted="Trainspotting" />
    );
    const component = renderIntoDocument(voting);
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons[0].textContent).to.contain('Voted')
  });

  it('renders just the winner when there is one', () => {
    const voting = <Voting winner="Trainspotting" />;
    const component = renderIntoDocument(voting);
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(0);

    //noinspection JSDeclarationsAtScopeStart
    const winner = ReactDOM.findDOMNode(component.refs.winner);
    //noinspection BadExpressionStatementJS
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('Trainspotting');
  });

  //it.skip('renders as a pure component', () => {
  //  const pair = [
  //    'Trainspotting',
  //    '28 Days Later'
  //  ];
  //  const component = renderIntoDocument(<Voting pair={pair} />);
  //  let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
  //  expect(firstButton.textContent).to.equal('Trainspotting');
  //  pair[0] = 'Sunshine';
  //
  //  component.setProps({pair: pair});
  //  //noinspection ReuseOfLocalVariableJS
  //  firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
  //  expect(firstButton.textContent).to.equal('Trainspotting');
  //
  //});

});
