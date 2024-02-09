/**
 * @prettier
 */
import fs from 'fs';
import { join } from 'path';

async function release() {
    const packageJson = fs.readFileSync(join(__dirname, '../package.json'), 'utf8');
    console.log(JSON.parse(packageJson));
}

release();
