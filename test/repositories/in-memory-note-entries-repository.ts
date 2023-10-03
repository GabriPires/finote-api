import { NoteEntriesRepository } from '@/domain/notes/application/repositories/note-entries-repository'
import { NoteEntry } from '@/domain/notes/enterprise/entities/note-entry'

export class InMemoryNoteEntriesRepository implements NoteEntriesRepository {
  public items: NoteEntry[] = []

  async findManyByNoteId(noteId: string): Promise<NoteEntry[]> {
    const entries = this.items.filter(
      (item) => item.noteId.toString() === noteId,
    )

    return Promise.resolve(entries)
  }

  async create(noteEntry: NoteEntry): Promise<void> {
    this.items.push(noteEntry)
  }

  async deleteManyByNoteId(noteId: string): Promise<void> {
    const index = this.items.findIndex(
      (item) => item.noteId.toString() === noteId,
    )

    this.items.splice(index, 1)
  }
}
