import * as path from "path";
import Datastore from "nedb";

export interface IContact {
    _id?: number,
    name: string,
    email: string
}

export class Worker {
    private db: Nedb;
    constructor() {
        this.db = new Datastore({
            filename: path.join(__dirname, "contacts.db"),
            autoload: true
        });
    }

    public listContacts(): Promise<IContact[]> {
        return new Promise((inResolve, inReject) => {
            this.db.find({ }, (inError: Error, inDocs: IContact[]) => {
                if(inError) {
                    inReject(inError)
                }
                else {
                    inResolve(inDocs);
                }
            });
        });
    }

    public addContact(inContact: IContact): Promise<IContact> {
        return new Promise((inResolve, inReject) => {
            this.db.insert(inContact, (inError: Error, inNewDoc: IContact) => {
                if(inError) {
                    inReject(inError);
                }
                else {
                    inResolve(inNewDoc);
                }
            });
        });
    }

    public deleteContact(inID: string): Promise<any> {
        return new Promise((inResolve, inRject) => {
            this.db.remove( { _id: inID }, {}, (inError: Error, inNumRemoved: number) => {
                if(inError) {
                    inRject(inError);
                }
                else {
                    inResolve();
                }
            });
        });
    }
}