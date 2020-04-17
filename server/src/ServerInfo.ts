import path from "path";
import fs from "fs";
import { raw } from "express";

export type IServerInfo = {
    stmp: {
        host: string,
        port: number,
        auth: {
            user: string,
            pass: string
        }
    },
    imap: {
        host: string,
        port: number,
        auth: {
            user: string,
            pass: string
        }
    }
}

export let serverInfo: IServerInfo;

const rawInfo: string = fs.readFileSync(path.join(__dirname, "../serverInfo.json"),"utf8");
serverInfo = JSON.parse(rawInfo);