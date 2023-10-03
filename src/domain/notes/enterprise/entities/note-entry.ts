import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

export interface NoteEntryProps {
  entryId: UniqueEntityId
  creatorId: UniqueEntityId
}

export class NoteEntry extends Entity<NoteEntryProps> {
  get entryId(): UniqueEntityId {
    return this.props.entryId
  }

  get creatorId(): UniqueEntityId {
    return this.props.creatorId
  }

  static create(props: NoteEntryProps, id?: UniqueEntityId) {
    const noteEntry = new NoteEntry(props, id)

    return noteEntry
  }
}
