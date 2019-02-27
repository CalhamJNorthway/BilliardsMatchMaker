import MainPage from '../components/MainPage';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { PlayerVO } from '../vo/UserVO';
import { initPlayerList, setPlayerList, setMatchList } from '../redux/actions';
import { poolTableBackgroundURL } from '../constants/imageLinks';
import { sortPlayersByPPG } from '../helpers/sortPlayersByPPG';
import { sortPlayersByTP } from '../helpers/sortPlayersByTP';
import { setMatchesByPPG } from '../helpers/setMatchesByPPG';
import { MatchVO } from '../vo/MatchVO';
import { setMatchesByTP } from '../helpers/setMatchesByTP';

function mapStateToProps(state: StoreState) {
  const playerList: PlayerVO[] = state.playerList;
  const backgroundURL: string = poolTableBackgroundURL;
  const matchList: MatchVO[] = state.matchList;

  return {
    playerList,
    backgroundURL,
    matchList,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    parseJSON() {
      dispatch(initPlayerList());
    },
    sortListByPPG(playerList: PlayerVO[]) {
      const sortedPlayerList: PlayerVO[] = sortPlayersByPPG(playerList);
      dispatch(setPlayerList(sortedPlayerList));
    },
    sortListByTP(playerList: PlayerVO[]) {
      const sortedPlayerList: PlayerVO[] = sortPlayersByTP(playerList);
      dispatch(setPlayerList(sortedPlayerList));
    },
    getMatchListByPPG(playerList: PlayerVO[]) {
      const matchList: MatchVO[] = setMatchesByPPG(playerList);
      dispatch(setMatchList(matchList));
    },
    getMatchListByTP(playerList: PlayerVO[]) {
      const matchList: MatchVO[] = setMatchesByTP(playerList);
      dispatch(setMatchList(matchList));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);