/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
export declare function sendEtagResponse(req: IncomingMessage, res: ServerResponse, etag: string | undefined): boolean;
