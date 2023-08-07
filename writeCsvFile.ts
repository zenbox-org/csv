import { Stringifier } from 'csv-stringify'
import { createWriteStream } from 'fs'
import { pipeline } from '../utils/stream'

export async function writeCsvFile<Obj>(stringifier: Stringifier, path: string) {
  const writeStream = createWriteStream(path)
  return pipeline(stringifier, writeStream)
}
