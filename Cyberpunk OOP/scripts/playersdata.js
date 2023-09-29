export class Player{
    actorNr
    playerNumber
    nickName
    characterInstanceName
    team = 0
    trophies = 0
    bots = []

    constructor(actorNr, playerNumber, nickName, characterInstanceName, team = 0, trophies = 0, bots = []){
        this.actorNr = actorNr
        this.playerNumber = playerNumber
        this.nickName = nickName
        this.characterInstanceName = characterInstanceName
        this.team = team
        this.trophies = trophies
        this.bots = bots
    }
}

export const players = []