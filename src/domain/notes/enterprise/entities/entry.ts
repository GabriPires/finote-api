import { Entity } from "@/core/entities/entity"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"

export interface EntryProps {
  title: string
  value: number
  createdAt: Date
  updatedAt?: Date
  creatorId: string
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

  get creatorId(): string {
    return this.props.creatorId
  }

  get type(): 'income' | 'outcome' {
    return this.props.type
  }

  private touch(): void {
    this.props.updatedAt = new Date()
  }

  static create(
    props: EntryProps,
    id?: UniqueEntityId
  ) {
    const entry = new Entry(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    )

    return entry
  }
}