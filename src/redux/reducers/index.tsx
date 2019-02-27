
import { StoreState } from '../../types/index';
import { SET_PLAYER_LIST, SET_MATCH_LIST } from '../actionTypes/index';
import { AnyAction } from 'redux';

const initialState: StoreState = {
  playerList: [],
  matchList: [],
};

export function user(state: StoreState = initialState, action: AnyAction): StoreState {
  switch (action.type) {
    case SET_PLAYER_LIST:
      return { 
        ...state, 
        playerList: action.payload
      };
    case SET_MATCH_LIST:
      return { 
        ...state, 
        matchList: action.payload
      };
    default:
      return state;
  }
}