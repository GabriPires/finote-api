import { WatchedList } from '@/core/entities/watched-list'
import { NoteEntry } from './note-entry'

export class NoteEntryList extends WatchedList<NoteEntry> {
  compareItems(a: NoteEntry, b: NoteEntry): boolean {
    return a.entryId.equals(b.entryId)
  }
}
