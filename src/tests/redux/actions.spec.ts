import { setPlayerList, setMatchList } from '../../redux/actions';
import { PlayerVO } from '../../vo/UserVO';
import { AnyAction } from 'redux';
import { SET_PLAYER_LIST, SET_MATCH_LIST } from '../../redux/actionTypes';
import { MatchVO } from '../../vo/MatchVO';

/**
 * yarn jest test/app/redux/app/Actions.spec.ts --config jest.test.config.json --coverage
 */

const testPlayer1: PlayerVO = new PlayerVO('1', '1', 0, 0);
const testPlayer2: PlayerVO = new PlayerVO('2', '2', 0, 0);
const testMatch: MatchVO = new MatchVO(testPlayer1, testPlayer2);

describe('App Actions Tests', () => {
    describe('#setPlayerList', () => {
        it('Should create an action to change player list', () => {
            const playerList: PlayerVO[] = [new PlayerVO('', '', 0, 0)];
            const expectedAction: AnyAction = {
                type: SET_PLAYER_LIST,
                payload: playerList,
            };
            expect(setPlayerList(playerList)).toEqual(expectedAction);
        });
    });
    describe('#setMatchList', () => {
        it('Should create an action to change match list', () => {
            
            const expectedAction: AnyAction = {
                type: SET_MATCH_LIST,
                payload: [testMatch],
            };
            expect(setMatchList([testMatch])).toEqual(expectedAction);
        });
    });
    
});
