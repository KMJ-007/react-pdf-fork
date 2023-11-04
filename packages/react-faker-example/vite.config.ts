import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {

    alias: {

        "@react-pdf": path.resolve(__dirname, "../../packages"),
        "@react-pdf/yoga": path.resolve(__dirname, "../../packages/yoga"),


    }

}

})
