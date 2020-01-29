
import { dominated } from './algebra';


export const defined = new Map()

defined.set("{|}", "0")
defined.set("{|0}", "-1")
defined.set("{0|}", "1")
defined.set("{0|0}", "*")
defined.set("{*|*}", "0")
defined.set("{-1|1}", "0")
defined.set("{-1|*}", "0")
defined.set("{*|1}", "0")

defined.set("{1|-1}", "\u00B11")

defined.set("{|-1}", "-2")
defined.set("{1|}", "2")

defined.set("{|-2}", "-3")
defined.set("{2|}", "3")

defined.set("{|-3}", "-4")
defined.set("{3|}", "4")

defined.set("{0|1}", ".5")
defined.set("{-1|0}", "-.5")

defined.set("{0|2}", "1")
defined.set("{-2|0}", "-1")


export const Game  = function() {

    let game = {};

    game.left = [];
    game.right = [];


    game.str = () => {

        let left = game.left.map((g) => g.str())
        let right = game.right.map((g) => g.str())

        left = left.join(',')
        right = right.join(',')

        game.str_value = `{${left}|${right}}`

        if (defined.has(game.str_value)) {
            game.str_value = defined.get(game.str_value)
        }

        return game.str_value
    }

    return game;
}









