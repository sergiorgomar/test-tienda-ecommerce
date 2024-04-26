export type HTTPResponse<TPayload> = {
    success: boolean, 
    message: string,
    payload: TPayload | null
}