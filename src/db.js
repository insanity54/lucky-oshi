import Database from 'better-sqlite3'
import { dataPath, dbPath } from "./const.js"
import { mkdir } from 'fs/promises'

export async function initDb() {

    await mkdir(dataPath, { recursive: true })
    
    const db = new Database(dbPath, { verbose: console.log });
    db.pragma('journal_mode = WAL');

    // Define the table schema
    db.exec(`
        CREATE TABLE IF NOT EXISTS games (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            round INTEGER,
            since TEXT,
            until TEXT
        );
    `);
    db.exec(`
            CREATE TABLE IF NOT EXISTS rounds (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                channel TEXT,
                date TEXT,
                viewers INTEGER
            );
    `);


    // // Generate dummy data
    // const dummyData = [
    //     { channel: 'ironmouse', date: , viewers: 'popular' },
    //     { channel: 'henyathegenius', count: 20, method: 'random', range: 30, status: 'finished' },
    //     // Add more dummy data as needed
    // ];

    // // Insert dummy data into the database
    // const insertStmt = db.prepare(`
    //     INSERT INTO compilations (channel, count, method, range, status)
    //     VALUES (@channel, @count, @method, @range, @status)
    // `);
    // db.transaction(() => {
    //     for (const data of dummyData) {
    //         insertStmt.run(data);
    //     }
    // })();

    return {
        "class": Database,
        "connection": db
    }
}

