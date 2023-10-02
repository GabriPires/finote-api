import { Either, right } from '@/core/either'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Note } from '../../enterprise/entities/note'
import { NotesRepository } from '../repositories/notes-repository'

interface CreateNoteUseCaseRequest {
  creatorId: string
  title: string
  description?: string
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
  }: CreateNoteUseCaseRequest): Promise<CreateNoteUseCaseResponse> {
    const note = Note.create({
      creatorId: new UniqueEntityId(creatorId),
      title,
      description,
    })

    await this.notesRepository.create(note)

    return right({ note })
  }
}
