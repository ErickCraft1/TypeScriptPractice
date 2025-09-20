export interface IAvenger {
    name: string
    powerScale: number
    wonBattles?: number
    age?: number
    battle?: (enemy: IAvenger, win: boolean) => void
}