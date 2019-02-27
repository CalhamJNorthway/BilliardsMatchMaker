import { StoreState } from '../../types';
import { user as reducer } from '../../redux/reducers/index';
import { PlayerVO } from '../../vo/UserVO';
import { SET_PLAYER_LIST, SET_MATCH_LIST } from '../../redux/actionTypes';
import { AnyAction } from 'redux';
import { MatchVO } from '../../vo/MatchVO';

/**
 * yarn jest tests/redux/Reducer.spec.ts --config jest.test.config.json --coverage
 */

const testState: StoreState = {
    playerList: [],
    matchList: [],
};

const testPlayer1: PlayerVO = new PlayerVO('1', '1', 0, 0);
const testPlayer2: PlayerVO = new PlayerVO('2', '2', 0, 0);
const testMatch: MatchVO = new MatchVO(testPlayer1, testPlayer2);

describe('App Reducer Tests', () => {
    describe('#initState', () => {
        it('should return the initial state', () => {
            expect(reducer(testState, { type: undefined, payload: undefined })).toEqual(testState);
        });
    });
    describe('#setPlayerList', () => {
        it('should set the player list', () => {
            const finalState: StoreState = { ...testState, playerList: [testPlayer1, testPlayer2]};
            const action: AnyAction = { type: SET_PLAYER_LIST, payload:  [testPlayer1, testPlayer2]};
            expect(reducer(testState, action))
                .toEqual(finalState);
        });
    });
    describe('#setMatchList', () => {
        it('should set the match list', () => {
            const finalState: StoreState = { ...testState, matchList: [testMatch]};
            const action: AnyAction = { type: SET_MATCH_LIST, payload:  [testMatch]};
            expect(reducer(testState, action))
                .toEqual(finalState);
        });
    });
});
