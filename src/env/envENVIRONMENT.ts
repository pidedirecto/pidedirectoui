/**
 * @prettier
 */
import { Environment, Environments } from 'src/constants/Environment';
import { requireEnvironment } from 'src/utils/require/requireEnvironment';
import { lowerCase } from 'src/utils/string/lowerCase';

export function envENVIRONMENT(): Environment {
    try {
        return requireEnvironment(process.env.REACT_APP_ENVIRONMENT);
    } catch (e: any) {
        throw Error(
            `REACT_APP_ENVIRONMENT is not configured correctly in .env.${Object.values(Environments)
                .map((environment) => lowerCase(environment as any))
                .join('|')}`,
        );
    }
}
