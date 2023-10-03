import { NotesRepository } from '@/domain/notes/application/repositories/notes-repository'
import { Note } from '@/domain/notes/enterprise/entities/note'

export class InMemoryNotesRepository implements NotesRepository {
  public items: Note[] = []

  async findById(id: string): Promise<Note | null> {
    const item = this.items.find((item) => item.id.toString() === id)

    if (!item) return null

    return item
  }

  async create(note: Note): Promise<void> {
    this.items.push(note)
  }

  async save(note: Note): Promise<void> {
    const index = this.items.findIndex((item) => item.id.equals(note.id))
    this.items[index] = note
  }
}
