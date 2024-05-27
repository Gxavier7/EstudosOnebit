import { Spaceship } from "./exports";
import * as lodash from "lodash"

interface BattleSpaceship extends Spaceship {
    weapons: number
}

let xwing: BattleSpaceship = {
    name: "xwing",
    pilot: "Eu",
    speed: 120,
    weapons: 15
}
