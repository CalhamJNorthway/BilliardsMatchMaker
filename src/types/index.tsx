import { PlayerVO } from '../vo/UserVO';
import { MatchVO } from '../vo/MatchVO';

export interface StoreState {
    playerList: PlayerVO[];
    matchList: MatchVO[];
}