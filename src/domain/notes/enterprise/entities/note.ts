import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { NoteEntryList } from './note-entry-list'

export interface NoteProps {
  title: string
  description?: string
  createdAt: Date
  updatedAt?: Date
  creatorId: UniqueEntityId
  entries: NoteEntryList
}

export class Note extends Entity<NoteProps> {
  get title(): string {
    return this.props.title
  }

  set title(value: string) {
    this.props.title = value
    this.touch()
  }

  get description(): string | undefined {
    return this.props.description
  }

  set description(value: string) {
    this.props.description = value
    this.touch()
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt
  }

  get creatorId(): UniqueEntityId {
    return this.props.creatorId
  }

  get entries(): NoteEntryList {
    return this.props.entries
  }

  set entries(value: NoteEntryList) {
    this.props.entries = value
    this.touch()
  }

  private touch(): void {
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<NoteProps, 'createdAt' | 'description' | 'entries'>,
    id?: UniqueEntityId,
  ) {
    const note = new Note(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        entries: props.entries ?? new NoteEntryList(),
      },
      id,
    )

    return note
  }
}
