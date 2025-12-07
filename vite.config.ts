import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (!id.includes('node_modules')) return undefined;

					if (id.includes('/react/') || id.includes('/react-dom/'))
						return 'vendor-react';

					if (id.includes('framer-motion')) return 'vendor-framer';
					if (id.includes('react-router-dom')) return 'vendor-router';
					if (id.includes('react-i18next') || id.includes('i18next'))
						return 'vendor-i18n';
					if (id.includes('gsap')) return 'vendor-gsap';
					if (id.includes('ogl')) return 'vendor-ogl';
					if (id.includes('lucide-react')) return 'vendor-icons';

					return 'vendor';
				},
			},
		},
	},
});
