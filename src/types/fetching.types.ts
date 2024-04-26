type Data<TPayloadOutput> = {
    success: boolean,
    detail: string,
    tokenStatus?: boolean,
    payload: TPayloadOutput,
}
type FetchSuccess<TPayloadOutput> = {
    data: Data<TPayloadOutput>,
    codeStatus: number,
}
type FetchError = { error: string }

export type FetchOutput<TPayloadOutput> = FetchSuccess<TPayloadOutput> | FetchError;