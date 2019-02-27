import { PlayerVO } from '../vo/UserVO';

export function sortPlayersByTP(playerList: PlayerVO[]): PlayerVO[] {
    const tempList: PlayerVO[] = playerList.slice();

    // A Basic Selection Sort Based Off Of Total Points Of Players
    for (let i: number = 0; i < tempList.length; i++) {
        let max: number = i;
        for (let j: number = i + 1; j < tempList.length; j++) {
            if (tempList[j].getTotalPoints() > tempList[max].getTotalPoints()) {
                max = j;
            }
        }
        if (max !== i) {
            let tempPlayer: PlayerVO = tempList[i].clone();
            tempList[i] = tempList[max].clone();
            tempList[max] = tempPlayer;
        }
    }
    return tempList;
}