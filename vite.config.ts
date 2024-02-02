/**
 * @prettire
 */
import { defineConfig } from 'vite'
import { resolve } from "path";
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'


export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: '@pidedirecto/ui',
            fileName: "index",
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    resolve: {
        alias: [
            { find: 'src', replacement: resolve(__dirname, 'src') },
        ],
    },
    plugins: [dts({ include: ['src/components', 'src/index.ts'] }), react(), libInjectCss()]
})
