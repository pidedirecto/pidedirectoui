/**
 * @prettier
 */
import { pidedirectouiApi } from 'src/api/config/pidedirectouiApi';
import type { ApiSauceResponse } from 'src/api/types/ApiSauceResponse';

export async function pidedirectouiApiMethodPublic(url: string, request: any): ApiSauceResponse<any> {
    return pidedirectouiApi.post(`public/${url}`, request ?? {}, {
        headers: {
            'Content-Type': 'application/vnd.api.autoparsedates+json',
            accept: 'application/vnd.api.autoparsedates+json',
        },
        transformResponse: [(data: string | null) => (data ? JSON.parse(data) : null)],
    });
}
