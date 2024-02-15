/**
 * @prettier
 */
import { pidedirectouiApiMethodPublic } from 'src/api/config/pidedirectouiApiMethodPublic';
import { ApiSauceResponse } from 'src/api/types/ApiSauceResponse';

export async function enablePideDirectoUiApiCallsApi(request: EnablePideDirectoUiApiCallsApiRequest): ApiSauceResponse<boolean> {
    return pidedirectouiApiMethodPublic('enablePideDirectoUiApiCallsApi', request);
}

type EnablePideDirectoUiApiCallsApiRequest = {
    enableApiCallsKey: string;
};
