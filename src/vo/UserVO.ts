
export class PlayerVO {
    private name: string;
    private totalGames: number;
    private totalPoints: number;

    constructor(name: string, totalGames: number, totalPoints: number) {
        this.name = name;
        this.totalGames = totalGames;
        this.totalPoints = totalPoints;
    }

    public getName(): string {
        return this.name;
    }
    
    public getTotalGames(): number {
        return this.totalGames;
    }

    public getTotalPoints(): number {
        return this.totalPoints;
    }

    public setTotalPoints(points: number) {
        this.totalPoints = points;
    }

    public setTotalGames(games: number) {
        this.totalGames = games;
    }

    public incrementTotalGames() {
        this.totalGames = this.totalGames + 1;
    }

    public updateTotalPoints(pointsFromMatch: number) {
        this.totalPoints = this.totalPoints + pointsFromMatch;
    }

    public clone(): PlayerVO {
        const newUser: PlayerVO = new PlayerVO(this.getName(), this.getTotalGames(), this.getTotalPoints());
        return newUser;
    }
}