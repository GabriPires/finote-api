import { NoteEntry } from '../../enterprise/entities/note-entry'

export interface NoteEntriesRepository {
  findById(id: string): Promise<NoteEntry | null>
  findManyByNoteId(noteId: string): Promise<NoteEntry[]>
  deleteManyByNoteId(noteId: string): Promise<void>
  create(noteEntry: NoteEntry): Promise<void>
  remove(noteEntry: NoteEntry): Promise<void>
}
