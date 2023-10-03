import { NoteEntry } from '../../enterprise/entities/note-entry'

export interface NoteEntriesRepository {
  findManyByNoteId(noteId: string): Promise<NoteEntry[]>
  deleteManyByNoteId(noteId: string): Promise<void>
  create(noteEntry: NoteEntry): Promise<void>
}
