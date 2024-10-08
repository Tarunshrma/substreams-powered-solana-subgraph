// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto/assembly";
import { JournalEntry } from "./JournalEntry";

export class Journals {
  static encode(message: Journals, writer: Writer): void {
    const journals = message.journals;
    for (let i: i32 = 0; i < journals.length; ++i) {
      writer.uint32(10);
      writer.fork();
      JournalEntry.encode(journals[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Journals {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Journals();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.journals.push(JournalEntry.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  journals: Array<JournalEntry>;

  constructor(journals: Array<JournalEntry> = []) {
    this.journals = journals;
  }
}
