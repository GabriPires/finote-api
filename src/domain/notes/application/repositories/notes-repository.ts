import { Note } from '../../enterprise/entities/note'

export interface NotesRepository {
  create(note: Note): Promise<void>
  save(note: Note): Promise<void>
  findById(id: string): Promise<Note | null>
}
