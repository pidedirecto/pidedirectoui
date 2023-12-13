/**
 * @prettier
 */
import { refactor } from 'scripts/utils/refactor';

refactor(['scripts/**/*.{ts,tsx}', 'src/**/*.{ts,tsx}', 'test/**/*.{ts,tsx}'], async ({ fileName, fileContent }) => {
    return {
        changedFileContent: `/**
 * @prettier
 */
${fileContent}`,
    };
});
