/**
 * @prettier
 */
import { requireStringNotBlank } from 'src/utils/require/requireStringNotBlank';

export function envPIDEDIRECTO_UI_API_URL(): string {
    // @ts-ignore
    return requireStringNotBlank(import.meta.env.VITE_REACT_APP_PIDEDIRECTO_UI_API_URL);
}
