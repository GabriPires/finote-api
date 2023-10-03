import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

export interface NoteEntryProps {
  entryId: UniqueEntityId
  noteId: UniqueEntityId
}

export class NoteEntry extends Entity<NoteEntryProps> {
  get entryId(): UniqueEntityId {
    return this.props.entryId
  }

  get noteId(): UniqueEntityId {
    return this.props.noteId
  }

  static create(props: NoteEntryProps, id?: UniqueEntityId) {
    const noteEntry = new NoteEntry(props, id)

    return noteEntry
  }
}
