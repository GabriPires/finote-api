import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface NoteProps {
  title: string
  description?: string
  createdAt: Date
  updatedAt?: Date
  creatorId: UniqueEntityId
}

export class Note extends Entity<NoteProps> {
  get title(): string {
    return this.props.title
  }

  set title(value: string) {
    this.touch()
    this.props.title = value
  }

  get description(): string | undefined {
    return this.props.description
  }

  set description(value: string) {
    this.touch()
    this.props.description = value
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

  private touch(): void {
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<NoteProps, 'createdAt' | 'description'>,
    id?: UniqueEntityId
  ) {
    const note = new Note(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    )

    return note
  }
}