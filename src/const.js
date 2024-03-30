import { join } from 'path'
import { homedir } from 'os'

export const dataPath = join(homedir(), '.local/share/applications/lucky-oshi')
export const statePath = join(homedir(), '.local/state/lucky-oshi')
export const dbPath = join(dataPath, 'lucky.sqlite')