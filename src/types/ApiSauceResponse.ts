/**
 * @prettier
 */
export type ApiSauceResponse<T> = Promise<ApiResponse<T>>;
export const ApiSauceResponse = Promise;

export type ApiResponse<T> = {
    ok: boolean;
    data: T;
    problem: 'NONE' | 'CLIENT_ERROR' | 'SERVER_ERROR' | 'TIMEOUT_ERROR' | 'CONNECTION_ERROR' | 'NETWORK_ERROR' | 'CANCEL_ERROR';
};
