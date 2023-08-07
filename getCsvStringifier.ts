import { Options, stringify } from 'csv-stringify'

export type ToCsvArray<Obj> = (object: Obj) => unknown[]

export function getCsvStringifier<Obj>(options: Options, toCsvArray: ToCsvArray<Obj>, objects: Obj[]) {
  const array = objects.map(toCsvArray)
  return stringify(array, options)
}
