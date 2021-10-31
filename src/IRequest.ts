import { RequestType } from "./RequestType";

export interface IRequest {
    requestType: RequestType;
    token?: string;
    refreshToken?: string;
}