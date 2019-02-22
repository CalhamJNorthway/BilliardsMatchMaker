
import { StoreState } from '../../types/index';
import { SET_PLAYER_LIST } from '../actionTypes/index';
import { IReduxAction } from '../../vo/ReduxActionVO';

const initialState: StoreState = {
  playerList: [],
};

export function user(state: StoreState = initialState, action: IReduxAction): StoreState {
  switch (action.type) {
    case SET_PLAYER_LIST:
      return { 
        ...state, 
        playerList: action.payload
      };
    default:
      return state;
  }
}