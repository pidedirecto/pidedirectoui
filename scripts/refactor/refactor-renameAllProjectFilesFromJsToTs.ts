/**
 * @prettier
 */
import { refactor } from 'scripts/utils/refactor';

refactor(['scripts/**/*.js', 'src/**/*.js', 'test/**/*.js'], async ({ fileName, fileContent }) => {
    return {
        changedFileName: fileName.replace(/\.js$/, '.ts'),
    };
});
