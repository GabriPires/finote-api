import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { EntryProps } from './entry'

export interface NoteEntryProps extends EntryProps {
  entryId: UniqueEntityId
}

export class NoteEntry extends Entity<NoteEntryProps> {
  get entryId(): UniqueEntityId {
    return this.props.entryId
  }

  static create(
    props: Optional<NoteEntryProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const noteEntry = new NoteEntry(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return noteEntry
  }
}
