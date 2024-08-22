import { log } from "@graphprotocol/graph-ts";
import { Protobuf } from 'as-proto/assembly';
import { JournalEntry } from "./pb/sol/transactions/journal/v1/JournalEntry";
import { JournalEntity } from "../generated/schema";
import { Journals } from "./pb/sol/transactions/journal/v1/Journals";

export function handleTransactions(bytes: Uint8Array): void {

    const journalsProto: Journals = Protobuf.decode<Journals>(bytes, Journals.decode);
    const journals = journalsProto.journals;

    if (journals.length == 0) {
        log.info("No journal found", []);
        return;
    }

    for (let i = 0; i < journals.length; i++) {
        let journal = journals[i];

        log.info("***journal found*** {0}", [journal.title]);

        let entity = new JournalEntity(journal.id);
        entity.title = journal.title;
        entity.message = journal.message;
        entity.save();
    }

}