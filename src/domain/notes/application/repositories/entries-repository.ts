import { Entry } from '../../enterprise/entities/entry'

export interface EntriesRepository {
  create(entry: Entry): Promise<void>
  save(entry: Entry): Promise<void>
}
