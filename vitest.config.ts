import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		threads: false,
		globals: true,
		coverage: {
			enabled: true,
			reporter: ['text', 'lcov', 'clover']
		}
	},
	esbuild: {
		target: 'es2020'
	}
});
