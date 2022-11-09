import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	// server: {
	// 	proxy: {
	// 		"/api": {
	// 			target: "http://114.132.166.69:9005",
	// 			changeOrigin: true,
	// 		},
	// 	},
	// },
})
