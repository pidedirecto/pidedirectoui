/**
 * @prettier
 */
import apisauce from 'apisauce';
import { envPIDEDIRECTO_UI_API_URL } from 'src/env/envPIDEDIRECTO_UI_API_URL';

export const pidedirectouiApi: {
    post: any;
} = createPideDirectoLokiApiSauce(); // TODO: return api sauce type

// TODO: return api sauce type
function createPideDirectoLokiApiSauce(): {
    post: any;
} {
    const baseURL = envPIDEDIRECTO_UI_API_URL();
    const api = apisauce.create({
        baseURL,
        headers: {
            'Content-Type': 'application/vnd.api.autoparsedates+json',
            accept: 'application/vnd.api.autoparsedates+json',
        },
        timeout: 60000, // 60 second timeout
    });

    return api;
}
