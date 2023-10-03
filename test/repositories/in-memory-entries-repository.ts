import { EntriesRepository } from '@/domain/notes/application/repositories/entries-repository'
import { Entry } from '@/domain/notes/enterprise/entities/entry'

export class InMemoryEntriesRepository implements EntriesRepository {
  public items: Entry[] = []

  async findById(id: string): Promise<Entry | null> {
    const entry = this.items.find((item) => item.id.toString() === id)

    if (!entry) return null

    return entry
  }

  async create(entry: Entry): Promise<void> {
    this.items.push(entry)
  }

  async save(entry: Entry): Promise<void> {
    const index = this.items.findIndex((item) => item.id.equals(entry.id))
    this.items[index] = entry
  }

  remove(entry: Entry): Promise<void> {
    const index = this.items.findIndex((item) => item.id.equals(entry.id))

    this.items.splice(index, 1)

    return Promise.resolve()
  }
}
