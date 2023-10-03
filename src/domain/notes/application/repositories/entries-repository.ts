import { Entry } from '../../enterprise/entities/entry'

export interface EntriesRepository {
  findById(id: string): Promise<Entry | null>
  create(entry: Entry): Promise<void>
  save(entry: Entry): Promise<void>
  remove(entry: Entry): Promise<void>
}
