import { NotesRepository } from '@/domain/notes/application/repositories/notes-repository'
import { Note } from '@/domain/notes/enterprise/entities/note'

export class InMemoryNotesRepository implements NotesRepository {
  public items: Note[] = []

  constructor() {}

  async create(note: Note): Promise<void> {
    this.items.push(note)
  }

  async save(note: Note): Promise<void> {
    const index = this.items.findIndex((item) => item.id.equals(note.id))
    this.items[index] = note
  }
}
