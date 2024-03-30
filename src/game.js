
import { Cron } from "croner";

// Cron('2024-01-23T00:00:00', { timezone: 'UTC' }, () => { 
//     console.log('Yay!')
// });

// const job = Cron('*/5 * * * * *', () => {
// 	console.log('This will run every fifth second');
// });


export function load(db) {
    const now = new Date().valueOf()
    const statement = db.connection.prepare('SELECT * FROM games WHERE until < ?');
    const game = statement.get(now);
    console.log('game is follows')
    console.log(game)
    return game
}


export function create(db, since, until) {
    const insertStmt = db.connection.prepare(`
        INSERT INTO games (since, until)
        VALUES (@since, @until)
    `);
    const game = insertStmt.run({ since, until });
    return game
}