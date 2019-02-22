import { PlayerVO } from '../../vo/UserVO';
import { SET_PLAYER_LIST } from '../actionTypes';
import { playerObject } from '../../constants/playerObject';

export function setPlayerList(playerList: PlayerVO[]) {
    return {
        type: SET_PLAYER_LIST,
        payload: playerList
    };
}

export function initPlayerList() {
    return(dispatch) => {
        const playersJSON: JSON = require('../../constants/players');
        const list: playerObject[] = [];
        // const playerList: PlayerVO [];
        for ( let i in playersJSON ) {
            if ( playersJSON[i] ) {
                list.push(playersJSON[i]);
            }
        }
        console.log(list[1]);
        list.map((player: object) => {
            console.log(player);
        });
        // console.log(playerList[1].getName());
        // dispatch(setPlayerList(playerList));
    };
}

// export function setUserInstagramAccount( IgAcc: InstagramAccountVO ): ThunkResult<any> {
//     return (dispatch, getState) => {
//         const user: UserVO = getState().currentUser.clone();
//         user.setInstagramAccount(IgAcc);
//         dispatch({ 
//             type: SET_CURRENT_USER,
//             payload: user
//         });
//     };
// }