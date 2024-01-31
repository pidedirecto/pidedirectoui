import { defineConfig } from 'vite'
import { resolve } from "path";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: '@pidedirecto/ui',
            fileName: "index",
        },
        rollupOptions: {
            external: ['react']
        }
    },
    resolve: {
        alias: [
            { find: 'src', replacement: resolve(__dirname, 'src') },
        ],
    },
})
