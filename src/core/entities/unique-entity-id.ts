import { randomUUID } from 'node:crypto'

export class UniqueEntityId {
  private value: string

  toString(): string {
    return this.value
  }

  toValue(): string {
    return this.value
  }

  constructor(value?: string) {
    this.value = value ?? randomUUID()
  }

  equals(id: UniqueEntityId) {
    return id.toValue() === this.value
  }
}
