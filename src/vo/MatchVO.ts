import { PlayerVO } from './UserVO';

export class MatchVO {
    private id: string;
    private home: PlayerVO;
    private away: PlayerVO;

    public constructor(home: PlayerVO, away: PlayerVO) {
        this.home = home;
        this.away = away;
        this.id = this.generateId(home, away);
    }

    public getHomePlayer(): PlayerVO {
        return this.home;
    }

    public getAwayPlayer(): PlayerVO {
        return this.away;
    }

    public getId(): string {
        return this.id;
    }

    private generateId(home: PlayerVO, away: PlayerVO): string {
        let id: string = '';
        let smallestLength: number = 0;

        if (home.getName().length > away.getName().length) {
            smallestLength = away.getName().length;
        } else {
            smallestLength = home.getName().length;
        }

        for (let i: number = 0; i < smallestLength; i++) {
            id = id + home.getName().charAt(i) + `${Math.round(Math.random() * 10)}` + away.getName().charAt(i);
        }
        return id;
    }
}