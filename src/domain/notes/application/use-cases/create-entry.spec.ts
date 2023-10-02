import { InMemoryEntriesRepository } from 'test/repositories/in-memory-entries-repository'
import { CreateEntryUseCase } from './create-entry'

let sut: CreateEntryUseCase
let inMemoryEntriesRepository: InMemoryEntriesRepository

describe('Create Entry', () => {
  beforeEach(() => {
    inMemoryEntriesRepository = new InMemoryEntriesRepository()
    sut = new CreateEntryUseCase(inMemoryEntriesRepository)
  })

  test('should be able to create a entry', async () => {
    const response = await sut.execute({
      creatorId: '1',
      title: 'Entry title',
      type: 'income',
      value: 100,
    })

    expect(response.isRight()).toBeTruthy()
    expect(inMemoryEntriesRepository.items.length).toBe(1)
    expect(inMemoryEntriesRepository.items[0]).toBe(response.value?.entry)
  })
})
