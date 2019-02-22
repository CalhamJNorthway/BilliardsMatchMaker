import MainPage from '../components/MainPage';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { PlayerVO } from '../vo/UserVO';
import { initPlayerList } from '../redux/actions';

function mapStateToProps(state: StoreState) {
  const playerList: PlayerVO[] = state.playerList;

  return {
    playerList,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    parseJSON() {
      dispatch(initPlayerList());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
 