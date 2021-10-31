export interface IResponse {
    ok: boolean;
    errorMessage?: string;
    token?: string;
    refreshToken?: string;
}