import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/edu/',
    server: {
        host: true, // listen on all network interfaces
        port: 5173, // optional, your dev port
        allowedHosts: [
            "f29b592b99cf.ngrok-free.app"

        ]
    }
});
