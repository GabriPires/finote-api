import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { makeNote } from 'test/factories/make-note'
import { makeNoteEntry } from 'test/factories/make-note-entry'
import { InMemoryEntriesRepository } from 'test/repositories/in-memory-entries-repository'
import { InMemoryNoteEntriesRepository } from 'test/repositories/in-memory-note-entries-repository'
import { InMemoryNotesRepository } from 'test/repositories/in-memory-notes-repository'
import { RemoveEntryUseCase } from './remove-entry'

let sut: RemoveEntryUseCase
let inMemoryEntriesRepository: InMemoryEntriesRepository
let inMemoryNotesRepository: InMemoryNotesRepository
let inMemoryNoteEntriesRepository: InMemoryNoteEntriesRepository

describe('Remove Entry', () => {
  beforeEach(() => {
    inMemoryEntriesRepository = new InMemoryEntriesRepository()
    inMemoryNotesRepository = new InMemoryNotesRepository()
    sut = new RemoveEntryUseCase(inMemoryEntriesRepository)
  })

  test('should be able to remove an entry', async () => {
    const note = makeNote({ creatorId: new UniqueEntityId('1') })

    inMemoryNotesRepository.create(note)

    expect(inMemoryEntriesRepository.items.length).toBe(1)

    inMemoryNoteEntriesRepository.items.push(
      makeNoteEntry({
        noteId: note.id,
        entryId: new UniqueEntityId('1'),
      }),
      makeNoteEntry({
        noteId: note.id,
        entryId: new UniqueEntityId('2'),
      }),
    )

    await sut.execute({ entryId: '1', creatorId: '1' })

    expect(inMemoryEntriesRepository.items.length).toBe(1)
    expect(inMemoryEntriesRepository.items[0]).toEqual(
      expect.objectContaining({ id: new UniqueEntityId('2') }),
    )
  })
})
