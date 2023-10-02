import { InMemoryNotesRepository } from 'test/repositories/in-memory-notes-repository'
import { CreateNoteUseCase } from './create-note'

let sut: CreateNoteUseCase
let inMemoryNotesRepository: InMemoryNotesRepository

describe('Create Note', () => {
  beforeEach(() => {
    inMemoryNotesRepository = new InMemoryNotesRepository()
    sut = new CreateNoteUseCase(inMemoryNotesRepository)
  })

  test('should be able to create a note', async () => {
    const response = await sut.execute({
      creatorId: '1',
      title: 'Note title',
      description: 'Note description',
    })

    expect(response.isRight()).toBeTruthy()
    expect(inMemoryNotesRepository.items.length).toBe(1)
    expect(inMemoryNotesRepository.items[0]).toBe(response.value?.note)
  })
})
