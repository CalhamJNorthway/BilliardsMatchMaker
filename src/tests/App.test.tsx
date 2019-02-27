import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainPage from '../components/MainPage';
import { PlayerVO } from '../vo/UserVO';
import { MatchVO } from '../vo/MatchVO';

let IMainPageProps: {
  // Items
  backgroundURL: string;
  playerList: PlayerVO[];
  matchList: MatchVO[];

  // Actions
  parseJSON: () => void;
  sortListByTP: any;
  sortListByPPG: any;
  getMatchListByPPG: any;
  getMatchListByTP: any;
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainPage{...IMainPageProps}/>, div);
});
