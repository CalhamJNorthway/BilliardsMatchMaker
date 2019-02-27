import { PlayerVO } from '../vo/UserVO';
import { MatchVO } from '../vo/MatchVO';
import { sortPlayersByPPG } from './sortPlayersByPPG';

// Set Matches Based Off Sorted List By Points Per Game
export function setMatchesByPPG(playerList: PlayerVO[]): MatchVO[] {
    const matches: MatchVO[] = [];
    const sortedList: PlayerVO[] = sortPlayersByPPG(playerList);
    if (sortedList.length % 2 === 0) {
        for (let i: number = 0; i < sortedList.length; i++) {
            if (i % 2 === 0) {
                matches.push(new MatchVO(sortedList[i], sortedList[i + 1]));
            }
        }
    }
    return matches;
}