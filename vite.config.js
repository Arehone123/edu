import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        host: true, // listen on all network interfaces
        port: 5173, // optional, your dev port
        allowedHosts: [
            "3fb1b84b957c.ngrok-free.app"

        ]
    }
});
