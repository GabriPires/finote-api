import { Either, right } from '@/core/either'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Note } from '../../enterprise/entities/note'
import { NoteEntry } from '../../enterprise/entities/note-entry'
import { NoteEntryList } from '../../enterprise/entities/note-entry-list'
import { NotesRepository } from '../repositories/notes-repository'

interface CreateNoteUseCaseRequest {
  creatorId: string
  title: string
  description?: string
  notesIds: string[]
}

type CreateNoteUseCaseResponse = Either<
  null,
  {
    note: Note
  }
>

export class CreateNoteUseCase {
  constructor(private notesRepository: NotesRepository) {}

  async execute({
    creatorId,
    title,
    description,
    notesIds,
  }: CreateNoteUseCaseRequest): Promise<CreateNoteUseCaseResponse> {
    const note = Note.create({
      creatorId: new UniqueEntityId(creatorId),
      title,
      description,
    })

    const noteEntries = notesIds.map((noteId) => {
      return NoteEntry.create({
        entryId: new UniqueEntityId(noteId),
        noteId: note.id,
      })
    })

    note.entries = new NoteEntryList(noteEntries)

    await this.notesRepository.create(note)

    return right({ note })
  }
}
