import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = [
  'Trainspotting',
  '28 Days Later'
];

const voting = <Voting pair={pair}
                       winner="Trainspotting" />;
ReactDOM.render(voting, document.getElementById('app'));
