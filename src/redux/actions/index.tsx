import { PlayerVO } from '../../vo/UserVO';
import { SET_PLAYER_LIST, SET_MATCH_LIST } from '../actionTypes';
import { testList } from '../../constants/testList';
import { MatchVO } from '../../vo/MatchVO';

export function setPlayerList(playerList: PlayerVO[]) {
    return {
        type: SET_PLAYER_LIST,
        payload: playerList
    };
}

export function setMatchList(matchList: MatchVO[]) {
    return {
        type: SET_MATCH_LIST,
        payload: matchList
    };
}

export function initPlayerList() {
    return(dispatch) => {
        const playerList: PlayerVO [] = testList;
        dispatch(setPlayerList(playerList));
    };
}