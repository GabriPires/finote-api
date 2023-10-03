import { Either, left, right } from '@/core/either'
import { NotAllowedError } from '@/core/errors/not-allowed-error'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { EntriesRepository } from '../repositories/entries-repository'

type RemoveEntryUseCaseRequest = {
  entryId: string
  creatorId: string
}

type RemoveEntryUseCaseResponse = Either<
  NotAllowedError | ResourceNotFoundError,
  null
>

export class RemoveEntryUseCase {
  constructor(private entriesRepository: EntriesRepository) {}

  async execute({
    entryId,
    creatorId,
  }: RemoveEntryUseCaseRequest): Promise<RemoveEntryUseCaseResponse> {
    const entry = await this.entriesRepository.findById(entryId)

    if (!entry) {
      return left(new ResourceNotFoundError())
    }

    if (creatorId !== entry.creatorId.toString()) {
      return left(new NotAllowedError())
    }

    await this.entriesRepository.remove(entry)

    return right(null)
  }
}
