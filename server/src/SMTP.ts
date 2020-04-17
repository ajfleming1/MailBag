import Mail from "nodemailer/lib/mailer";
import {SendMailOptions, SentMessageInfo} from "nodemailer";
import nodemailer from "nodemailer";
import { IServerInfo, serverInfo } from "./ServerInfo";

export class Worker {
    private static serverInfo: IServerInfo;
    constructor(inServerInfo: IServerInfo) {
        Worker.serverInfo = inServerInfo;
    }
    
    public sendMessage(inOptions: SendMailOptions): Promise<string> {
        return new Promise((inResolve, inReject) => {
            const transport: Mail = nodemailer.createTransport(Worker.serverInfo.stmp);
            transport.sendMail(inOptions, (inError: Error | null, inInfo: SentMessageInfo) => {
                if(inError){
                    inReject(inError);
                }
                else{
                    inResolve();
                }
            });
        });
    }
}