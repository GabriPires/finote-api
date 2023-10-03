import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Note, NoteProps } from '@/domain/notes/enterprise/entities/note'
import { faker } from '@faker-js/faker'

export function makeNote(
  override: Partial<NoteProps> = {},
  id?: UniqueEntityId,
) {
  const note = Note.create(
    {
      creatorId: new UniqueEntityId(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      ...override,
    },
    id,
  )

  return note
}
