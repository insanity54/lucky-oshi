

// import { getViewCount } from "./twitch";
import { initDb } from "./db.js";
import { load, create } from './game.js';
import { add } from 'date-fns';

async function main() {

    console.log('init db')
    const db = await initDb()
    console.log(db)

    console.log('loading game in progress')
    let game
    game = load(db)

    if (!game) {
        console.log('no game is in progress. creating one now.')
        const now = new Date()
        create(db, now.toISOString(), add(now, { hours: 3 }).toISOString())
    }

    

}

main()
