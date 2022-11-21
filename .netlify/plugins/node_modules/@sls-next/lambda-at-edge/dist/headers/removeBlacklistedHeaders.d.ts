import { CloudFrontHeaders } from "aws-lambda";
export declare function isBlacklistedHeader(name: string): boolean;
export declare function removeBlacklistedHeaders(headers: CloudFrontHeaders): void;
