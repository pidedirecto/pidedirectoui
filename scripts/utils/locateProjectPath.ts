/**
 * @prettier
 */
import fs from 'fs';
import path from 'path';
import process from 'process';

export async function locateProjectPath(): Promise<string> {
    const packageJsonFilePath = await findPackageJsonFilePath();
    if (!packageJsonFilePath) throw Error('Failed to located project path');
    return path.dirname(packageJsonFilePath);
}

async function findPackageJsonFilePath(): Promise<string | undefined> {
    const packageJsonDirPath = await findPackageJsonPathRecursively(process.cwd());
    if (!packageJsonDirPath) return;
    return path.join(packageJsonDirPath, 'package.json');
}

async function findPackageJsonPathRecursively(currentPath: string): Promise<string | undefined> {
    try {
        await fs.promises.access(path.join(currentPath, 'package.json'), fs.constants.F_OK);
        return currentPath;
    } catch (err) {
        const nextPath = path.join(currentPath, '..');
        if (nextPath === currentPath) return;
        return findPackageJsonPathRecursively(nextPath);
    }
}
