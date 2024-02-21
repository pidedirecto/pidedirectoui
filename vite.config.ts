/**
 * @prettier
 */
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: '@pidedirecto/ui',
            fileName: 'index',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            input: {
                index: 'src/main.ts',
                'icons/index': 'src/icons/main.ts',
                'hooks/index': 'src/hooks/main.ts',
                'constants/index': 'src/constants/main.ts',
                'form/index': 'src/form/main.ts',
            },
            output: [
                {
                    format: 'es',
                    dir: 'dist',
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                    },
                    entryFileNames: '[name].js',
                },
                {
                    format: 'cjs',
                    dir: 'dist',
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                    },
                    entryFileNames: '[name].cjs',
                },
            ],
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    resolve: {
        alias: [{ find: 'src', replacement: resolve(__dirname, 'src') }],
    },
    publicDir: './public',
    plugins: [
        react(),
        libInjectCss(),
        tsconfigPaths(),
        dts({
            copyDtsFiles: true,
            include: ['src/**/*.d.ts', 'src/constants/*.ts', 'src/index.d.ts'],
            exclude: ['src/icons/IconsList.tsx'],
            beforeWriteFile: (path, content) => {
                return { filePath: path.replace('src/', ''), content };
            },
        }),
    ],
});
