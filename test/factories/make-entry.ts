import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Entry, EntryProps } from '@/domain/notes/enterprise/entities/entry'
import { faker } from '@faker-js/faker'

export function makeEntry(
  override: Partial<EntryProps> = {},
  id?: UniqueEntityId,
) {
  const entry = Entry.create(
    {
      creatorId: new UniqueEntityId(),
      title: faker.lorem.sentence(),
      type: 'income',
      value: Number(faker.finance.amount(0, 100, 2)),
      ...override,
    },
    id,
  )

  return entry
}
