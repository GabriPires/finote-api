import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { NoteEntry } from '@/domain/notes/enterprise/entities/note-entry'

export function makeNoteEntry(
  override: Partial<NoteEntry> = {},
  id?: UniqueEntityId,
) {
  const noteEntry = NoteEntry.create(
    {
      entryId: new UniqueEntityId(),
      creatorId: new UniqueEntityId(),
      ...override,
    },
    id,
  )

  return noteEntry
}
