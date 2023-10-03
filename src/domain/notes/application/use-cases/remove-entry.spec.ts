import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { makeEntry } from 'test/factories/make-entry'
import { InMemoryEntriesRepository } from 'test/repositories/in-memory-entries-repository'
import { RemoveEntryUseCase } from './remove-entry'

let sut: RemoveEntryUseCase
let inMemoryEntriesRepository: InMemoryEntriesRepository

describe('Remove Entry', () => {
  beforeEach(() => {
    inMemoryEntriesRepository = new InMemoryEntriesRepository()
    sut = new RemoveEntryUseCase(inMemoryEntriesRepository)
  })

  test('should be able to remove an entry', async () => {
    const entry = makeEntry(
      {
        creatorId: new UniqueEntityId('1'),
      },
      new UniqueEntityId('1'),
    )

    inMemoryEntriesRepository.create(entry)

    await sut.execute({ entryId: '1', creatorId: '1' })

    expect(inMemoryEntriesRepository.items.length).toBe(0)
  })
})
