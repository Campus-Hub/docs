import { defineConfig } from 'vite'
import { unocssPlugin, unpluginComponents } from './build'

export default defineConfig({

    plugins: [unpluginComponents, unocssPlugin],
    server: {
        fs: {
            allow: ['..'],
        },
    },
})
