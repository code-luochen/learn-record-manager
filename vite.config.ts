import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
		modules: {
			// 可以自定义生成的类名格式
			generateScopedName: '[name]__[local]___[hash:base64:5]',
		},
	},
	resolve: {
		alias: {
			'@': '/src',
			'@components': '/src/components',
			'@utils': '/src/utils',
		},
	},
	server: {
		port: 3001,
		open: true,

		proxy: {
			'/api': {
				target: 'http://localhost:3309',
				changeOrigin: true,
				// rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
})
