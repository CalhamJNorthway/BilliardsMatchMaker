import { PlayerVO } from '../vo/UserVO';
import { MatchVO } from '../vo/MatchVO';
import { sortPlayersByPPG } from './sortPlayersByPPG';
import { sortPlayersByTP } from './sortPlayersByTP';

// Set Matches Based Off Of Sorted List By Total Points
export function setMatchesByTP(playerList: PlayerVO[]): MatchVO[] {
    const matches: MatchVO[] = [];
    const sortedList: PlayerVO[] = sortPlayersByTP(playerList);
    if (sortedList.length % 2 === 0) {
        for (let i: number = 0; i < sortedList.length; i++) {
            if (i % 2 === 0) {
                matches.push(new MatchVO(sortedList[i], sortedList[i + 1]));
            }
        }
    }
    return matches;
}