import { PlayerVO } from '../vo/UserVO';

// A Basic Selection Sort Based Off Of Points Per Game Of Players
export function sortPlayersByPPG(playerList: PlayerVO[]): PlayerVO[] {
    const sortedList: PlayerVO[] = playerList.slice();
    for (let j: number = 0; j < sortedList.length; j++) {
        let max: number = j;
        for (let i: number = j + 1; i < sortedList.length; i++) {
            if (sortedList[i].getPointsPerGame() > sortedList[max].getPointsPerGame()) {
                max = i;
            }
        }
        if (sortedList[max].getId() !== sortedList[j].getId()) {
            let tempPlayer: PlayerVO = sortedList[j].clone();
            sortedList[j] = sortedList[max].clone();
            sortedList[max] = tempPlayer;
        }
    }

    return sortedList;
}