import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface EntryProps {
  title: string
  value: number
  createdAt: Date
  updatedAt?: Date
  creatorId: UniqueEntityId
  type: 'income' | 'outcome'
}

export class Entry extends Entity<EntryProps> {
  get title(): string {
    return this.props.title
  }

  set title(value: string) {
    this.touch()
    this.props.title = value
  }

  get value(): number {
    return this.props.value
  }

  set value(value: number) {
    this.touch()
    this.props.value = value
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt
  }

  get type(): 'income' | 'outcome' {
    return this.props.type
  }

  get creatorId(): UniqueEntityId {
    return this.props.creatorId
  }

  private touch(): void {
    this.props.updatedAt = new Date()
  }

  static create(props: Optional<EntryProps, 'createdAt'>, id?: UniqueEntityId) {
    const entry = new Entry(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return entry
  }
}
