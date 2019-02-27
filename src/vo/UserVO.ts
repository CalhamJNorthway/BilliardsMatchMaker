
export class PlayerVO {
    private id: string;
    private name: string;
    private totalGames: number;
    private totalPoints: number;
    private pointsPerGame: number;

    constructor(id: string, name: string, totalGames: number, totalPoints: number) {
        this.id = id;
        this.name = name;
        this.totalGames = totalGames;
        this.totalPoints = totalPoints;
        this.pointsPerGame = totalPoints / totalGames;
    }

    public getId(): string {
        return this.id;
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

    public getPointsPerGame(): number {
        return this.pointsPerGame;
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
        const newUser: PlayerVO = new PlayerVO(this.getId(), this.getName(), this.getTotalGames(), this.getTotalPoints());
        return newUser;
    }
}