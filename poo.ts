import { type IAvenger } from "./type";

class Avenger implements IAvenger {
    constructor(public name: string, public powerScale: number) { }

    get fullName() {
        return `${this.name}, de poder ${this.powerScale}`
    }

    set power(newPower: number) {
        if (newPower <= 100) {
            this.powerScale = newPower
        }
        throw new Error("Power score cannot be more than 100")
    }
}

const averngers = new Avenger("Thor", 95)

console.log(averngers);
