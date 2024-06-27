/**
 * @prettier
 */
export type Options = {
    initialValue?: any;
    onError?: OnErrorFunction;
    dependencies?: Array<any>;
    requiredValues?: Array<any>;
    unZip?: boolean;
};

type OnErrorFunction = (response: ApiErrorResponse, setData: any) => void;

export type ApiSauceResponse<T> = Promise<ApiResponse<T>>;

export type ApiResponse<T> = ApiOkResponse<T> | ApiErrorResponse;

export type ApiOkResponse<T> = {
    ok: true;
    data: T;
    status: number;
    problem: 'NONE';
};

export type ApiErrorResponse = {
    ok: false;
    data?: {
        message?: string;
        name?: string;
    };
    status?: number;
    problem: 'CLIENT_ERROR' | 'SERVER_ERROR' | 'TIMEOUT_ERROR' | 'CONNECTION_ERROR' | 'NETWORK_ERROR' | 'CANCEL_ERROR';
};
