import { Either, right } from '@/core/either'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Entry } from '../../enterprise/entities/entry'
import { EntriesRepository } from '../repositories/entries-repository'

interface CreateEntryUseCaseRequest {
  creatorId: string
  title: string
  value: number
  type: 'income' | 'outcome'
}

type CreateEntryUseCaseResponse = Either<
  null,
  {
    entry: Entry
  }
>

export class CreateEntryUseCase {
  constructor(private entriesRepository: EntriesRepository) {}

  async execute({
    creatorId,
    title,
    type,
    value,
  }: CreateEntryUseCaseRequest): Promise<CreateEntryUseCaseResponse> {
    const entry = Entry.create({
      creatorId: new UniqueEntityId(creatorId),
      title,
      type,
      value,
    })

    await this.entriesRepository.create(entry)

    return right({ entry })
  }
}
