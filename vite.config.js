import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import express from 'express'
// import cors from 'cors'
// const app = express();
// app.use(cors({
//   origin: 'https://localhost/l/'
// }));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
