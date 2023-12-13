/**
 * @prettier
 */
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { locateProjectPath } from 'scripts/utils/locateProjectPath';
import { isArray } from 'src/utils/array/isArray';

export async function refactor(globPatterns: string | Array<string>, refactorFunction: (params: RefactorFunctionParams) => Promise<RefactorChanges> | RefactorChanges | undefined): Promise<void> {
    const projectPath = await locateProjectPath();

    process.chdir(projectPath);

    const filesGlobs = isArray(globPatterns) ? (globPatterns as Array<string>) : [globPatterns as string];
    const filePaths = await glob(
        filesGlobs.map((_filesGlob) => path.join(projectPath, _filesGlob)),
        { ignore: path.join(projectPath, '/node_modules/**'), absolute: false },
    );

    for (const filePath of filePaths) {
        const directoryPath = path.dirname(filePath);
        const fileName = path.basename(filePath);
        const fileContent = fs.readFileSync(filePath).toString();
        const changes = await refactorFunction({ directoryPath, fileName, fileContent });

        if (!changes) continue;

        refactorFileContent(changes, fileContent, filePath);

        refactorFilePath(changes, directoryPath, fileName, filePath);
    }
}

function refactorFileContent(changes: RefactorChanges, fileContent: string, filePath: string): void {
    if (!changes.changedFileContent) return;
    const fileContentChanged = changes.changedFileContent !== fileContent;
    if (fileContentChanged) {
        try {
            fs.writeFileSync(filePath, changes.changedFileContent);
            console.log(`Changed ${filePath} file content`);
        } catch (e) {
            console.log(`Failed changing ${filePath} file content ${e}!`);
        }
    }
}

function refactorFilePath(changes: RefactorChanges, directoryPath: string, fileName: string, filePath: string): void {
    const refactoredDirectoryPath = changes.changedDirectoryPath ?? directoryPath;
    const refactoredFileName = changes.changedFileName ?? fileName;
    const refactoredFilePath = path.join(refactoredDirectoryPath, refactoredFileName);
    const fileExists = fs.existsSync(refactoredFilePath);
    if (!fileExists) {
        try {
            fs.renameSync(filePath, refactoredFilePath);
            console.log(`Moved ${filePath} to ${refactoredFilePath}`);
        } catch (e) {
            console.log(`Failed moving/renaming ${filePath} ${e}!`);
        }
    }
}

type RefactorFunctionParams = { directoryPath: string; fileName: string; fileContent: string };

type RefactorChanges = {
    changedDirectoryPath?: string;
    changedFileName?: string;
    changedFileContent?: string;
};
