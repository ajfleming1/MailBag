import { AxiosResponse } from "axios";
import axios from "axios";
import { config } from "./config";

export interface IMailbox {
    name: string,
    path: string
};

export interface IMessage {
    id: string,
    to: string,
    from: string,
    date: string, 
    subject: string,
    body?: string
}

export class Worker {
    public async listMailboxes(): Promise<IMailbox[]> {
        const response: AxiosResponse = await axios.get(`${config.serverAddress}/mailboxes`);
        return response.data;
    }

    public async listMessages(inMailboxId: string): Promise<IMessage[]> {
        const response: AxiosResponse = await axios.get(`${config.serverAddress}/mailboxes/${inMailboxId}`);
        return response.data;
    }

    public async getMessageBody(inMessageId: string, inMailboxId: string): Promise<string> {
        const response: AxiosResponse = 
        await axios.get(`${config.serverAddress}/messages/${inMailboxId}/${inMessageId}`);
        return response.data;
    }

    public async deleteMessage(inMessageId: string, inMailboxId: string): Promise<void> {
        await axios.delete(`${config.serverAddress}/messages/${inMailboxId}/${inMessageId}`);
    }
}