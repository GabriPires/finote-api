import { UniqueEntityId } from '@/core/entities/unique-entity-id'
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
      notesIds: [],
    })

    expect(response.isRight()).toBeTruthy()
    expect(inMemoryNotesRepository.items.length).toBe(1)
    expect(inMemoryNotesRepository.items[0]).toBe(response.value?.note)
  })

  test('should be able to create a note with entries', async () => {
    const response = await sut.execute({
      creatorId: '1',
      title: 'Note title',
      description: 'Note description',
      notesIds: ['1', '2'],
    })

    expect(response.isRight()).toBeTruthy()
    expect(inMemoryNotesRepository.items.length).toBe(1)
    expect(inMemoryNotesRepository.items[0]).toBe(response.value?.note)
    expect(inMemoryNotesRepository.items[0].entries.currentItems).toHaveLength(
      2,
    )
    expect(inMemoryNotesRepository.items[0].entries.currentItems).toEqual([
      expect.objectContaining({ entryId: new UniqueEntityId('1') }),
      expect.objectContaining({ entryId: new UniqueEntityId('2') }),
    ])
  })
})
